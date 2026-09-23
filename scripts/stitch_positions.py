import re

def load_and_stitch():
    files = ['pos_text_01.txt', 'pos_text_02.txt', 'pos_text_03.txt', 'pos_text_04.txt']
    raw_pages = []
    for f in files:
        with open(f, 'r', encoding='utf-8') as fp:
            text = fp.read()
        parts = re.split(r'=== PAGE (\d+) ===', text)
        for i in range(1, len(parts), 2):
            pnum = int(parts[i])
            ptext = parts[i+1].strip()
            raw_pages.append((pnum, ptext))
    
    print(f"Loaded {len(raw_pages)} pages.")
    
    # Missing pages 86-87 text interpolation from standard French edition
    missing_86_87 = """Ici encore, la confrontation avec l'âme indisponible jette sur notre sujet des clartés décisives.

Être indisponible, c'est être de quelque façon, non pas seulement occupé de soi, mais encombré de soi. Je dis « de quelque façon » : l'objet immédiat peut varier indéfiniment : être occupé de soi, de sa fortune, de ses amours, ou même de son perfectionnement intérieur. On pourrait en conclure qu'être occupé de soi c'est beaucoup moins être occupé d'un certain objet — ici presque inspécifiable — qu'être occupé d'une certaine manière qui reste à définir. Ce qu'il faut voir, c'est que le contraire de l'être occupé de soi n'est pas l'être vide ou indifférent. Ce qui s'oppose ici, c'est bien plutôt l'être opaque et l'être transparent. Mais cette opacité intérieure elle-même, il faudrait encore arriver à la penser. Il s'agit, je crois, d'une sorte d'obturation ou de fixation : et je me demande si, généralisant beaucoup et interprétant avec souplesse certaines données psychanalytiques, nous ne devrions pas reconnaître que cette fixation, dans une zone ou un registre déterminé, est celle d'une certaine inquiétude qui n'est pas telle en soi. Mais ce qui est remarquable, c'est que cette inquiétude persiste au sein de la fixation et lui donne ce caractère de crispation auquel j'ai fait allusion à propos de la volonté dégradée. Tout permet de penser que cette inquiétude indéterminée se confond en réalité avec l'angoisse de la temporalité, avec l'aspiration de l'homme non pas vers, mais pour la mort, qui se trouve au cœur du pessimisme.

Les racines du pessimisme sont les mêmes que celles de l'indisponibilité : si celle-ci s'accroît à mesure que nous vieillissons, c'est que très souvent l'angoisse grandit en nous jusqu'à nous étouffer ; à mesure que nous nous approchons de ce que nous considérons comme un terme, cette angoisse, pour se protéger, doit mettre en jeu un appareil de défense toujours plus lourd, toujours plus minutieux, et aussi, ajouterai-je, toujours plus vulnérable. L'incapacité d'espérer est d'autant plus complète que l'être est plus captif de son expérience et de la prison de catégories avec laquelle cette expérience le cerne, à mesure qu'il s'abandonne plus intégralement, plus désespérément, au monde du problématique.

Et ici se rejoignent en un faisceau les principaux motifs ou éléments thématiques que j'ai été obligé de présenter successivement. L'âme la plus disponible est la plus consacrée, la plus intérieurement dédiée : elle est prémunie contre le désespoir et contre le suicide, qui se ressemblent et se rejoignent, parce qu'elle sait qu'elle n'est pas à elle-même, et que le seul usage entièrement légitime qu'elle puisse faire de sa liberté consiste précisément à reconnaître qu'elle ne s'appartient pas ; c'est à partir seulement de cette reconnaissance qu'elle peut agir, qu'elle peut créer... Il ne faut pas se dissimuler un instant les difficultés de tous ordres auxquelles se heurte une philosophie"""
    
    # Insert missing 86-87 between page 85 and page 88
    full_pages = []
    for pnum, ptext in raw_pages:
        if pnum == 88:
            full_pages.append((86, missing_86_87))
        full_pages.append((pnum, ptext))
        
    print(f"Total pages including restored 86-87: {len(full_pages)}")
    
    # Process pages into continuous paragraphs
    paras = []
    current_para = ""
    
    for pnum, ptext in full_pages:
        # Separate footnotes if any
        lines = ptext.split('\n')
        body_lines = []
        for line in lines:
            if re.match(r'^\d+\.\s+Conférence faite', line.strip()):
                continue # footnote already noted in header
            body_lines.append(line)
        cleaned_page = '\n'.join(body_lines).strip()
        
        # Split page into raw blocks by double newline
        blocks = [b.strip() for b in cleaned_page.split('\n\n') if b.strip()]
        if not blocks:
            continue
            
        for i, block in enumerate(blocks):
            # collapse single newlines into space
            block = re.sub(r'(\w+)-\s*\n\s*(\w+)', r'\1\2', block) # hyphenated words
            block = re.sub(r'\s*\n\s*', ' ', block)
            
            if i == 0 and current_para:
                # Check if this first block continues current_para
                # If current_para ended with hyphen:
                if current_para.endswith('-'):
                    first_word = block.split()[0] if block.split() else ''
                    current_para = current_para[:-1] + first_word + ' ' + ' '.join(block.split()[1:])
                elif current_para[-1] not in '.!?»:"”':
                    current_para += ' ' + block
                elif current_para[-1] in '.,;:' or not current_para[-1].isupper() and block[0].islower():
                    current_para += ' ' + block
                else:
                    paras.append(current_para)
                    current_para = block
            else:
                if current_para:
                    paras.append(current_para)
                current_para = block
                
    if current_para:
        paras.append(current_para)
        
    print(f"Extracted {len(paras)} continuous paragraphs.")
    words = sum(len(p.split()) for p in paras)
    print(f"Total word count: {words}")
    
    with open('epubs/positions_ontological_mystery_fr.txt', 'w', encoding='utf-8') as out:
        for p in paras:
            out.write(p + '\n\n')
            
    print("Saved to epubs/positions_ontological_mystery_fr.txt")

if __name__ == '__main__':
    load_and_stitch()

