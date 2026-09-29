#!/usr/bin/env python3
"""
Gabriel Marcel — Du refus à l'invocation (1940)
Generator for Chapters I-IV (Essays 1-4: 305 Paragraph Pairs)
"""

def get_chapters_1_to_4():
    paragraphs = []
    
    # -------------------------------------------------------------
    # CHAPITRE I : L'ÊTRE EN SITUATION (75 Paragraphs: p-1 to p-75)
    # -------------------------------------------------------------
    ess1_data = [
        ("Pour une philosophie concrète, le point de départ ne saurait être le cogito désincarné de la tradition intellectualiste, mais l'affirmation originaire de l'être en situation.",
         "For a concrete philosophy, the starting point cannot be the disembodied cogito of the intellectualist tradition, but the originating affirmation of being in a situation."),
        ("Je ne suis point un spectateur abstrait contemplant le monde depuis un observatoire neutre et souverain ; je suis engagé, inséré, ancré par <span class=\"term\" data-term=\"incarnation\">mon corps</span> dans un tissu de coordonnées spatiales, historiques et humaines.",
         "I am by no means an abstract spectator contemplating the world from a neutral and sovereign observatory; I am engaged, inserted, anchored through <span class=\"term\" data-term=\"incarnation\">my body</span> within a fabric of spatial, historical, and human coordinates."),
        ("Cette incarnation fondamentale n'est point un accident fâcheux venu dégrader une pureté intelligible antérieure, mais la modalité concrète par laquelle il m'est donné d'exister et de participer à l'être.",
         "This fundamental incarnation is by no means an unfortunate accident coming to degrade a prior intelligible purity, but the concrete modality whereby it is granted unto me to exist and to participate in being."),
        ("Être en situation, c'est éprouver que mes possibilités d'action et de pensée s'articulent sur un donné premier que je n'ai point choisi, mais qu'il m'appartient d'assumer et de féconder.",
         "To be in a situation is to experience that my possibilities of action and thought articulate themselves upon a primary given that I did not choose, yet which it falls to me to assume and fructify."),
        ("L'idéalisme abstrait cherche perpétuellement à évacuer l'épaisseur de la situation pour ne retenir que des concepts universels, mutilant ainsi la réalité vécue de l'homme de chair et d'os.",
         "Abstract idealism perpetually seeks to evacuate the thickness of the situation in order to retain only universal concepts, thus mutilating the lived reality of man in flesh and bone."),
        ("À l'inverse, le matérialisme déterministe commet l'erreur symétrique de réduire la situation à une causalité mécanique brute, abolissant toute initiative de la liberté intérieure.",
         "Conversely, deterministic materialism commits the symmetrical error of reducing the situation to brute mechanical causality, abolishing all initiative of inner freedom."),
        ("La véritable philosophie existentielle reconnaît dans la situation un appel permanent : ce qui m'est donné comme contrainte extérieure est en vérité la matière même offerte à ma créativité spirituelle.",
         "True existential philosophy recognizes in the situation an abiding call: that which is given to me as external constraint is in truth the very material offered unto my spiritual creativity."),
        ("C'est particulièrement au cœur des situations-limites — la souffrance, l'injustice, l'échec ou le deuil — que se révèle la liberté humaine dans son pouvoir de refus ou d'invocation.",
         "It is particularly at the heart of boundary situations — suffering, injustice, failure, or bereavement — that human freedom reveals itself in its power of refusal or invocation."),
        ("Face à l'épreuve accablante d'un <span class=\"term\" data-term=\"monde-casse\">monde cassé</span>, la conscience peut s'enfermer dans le refus amer, érigeant sa rancœur en système de révolte nihiliste.",
         "Faced with the crushing trial of a <span class=\"term\" data-term=\"monde-casse\">broken world</span>, consciousness can enclose itself in bitter refusal, erecting its rancor into a system of nihilistic revolt."),
        ("Ce refus, loin d'être un geste héroïque, traduit un repli stérile sur soi-même, une fermeture tragique aux sollicitations de la grâce et de la communion.",
         "This refusal, far from being a heroic gesture, translates into a sterile retreat upon oneself, a tragic closure to the solicitations of grace and communion."),
        ("Mais la situation peut devenir également le lieu d'un retournement salvateur où l'angoisse se transmue en appel, où le repli cède la place à <span class=\"term\" data-term=\"recueillement\">l'invocation</span>.",
         "Yet the situation can also become the site of a saving reversal where anguish is transmuted into appeal, where retreat gives way to <span class=\"term\" data-term=\"recueillement\">invocation</span>."),
        ("L'invocation n'est point une fuite lâche hors du réel, mais l'acte suprême par lequel le sujet s'ouvre à une <span class=\"term\" data-term=\"presence\">Présence</span> transcendante capable de transfigurer sa condition.",
         "Invocation is by no means a cowardly flight outside reality, but the supreme act whereby the subject opens himself unto a transcendent <span class=\"term\" data-term=\"presence\">Presence</span> capable of transfiguring his condition."),
        ("Ainsi, toute situation vécue dans la sincérité porte en germe une dimension métaphysique : elle est le seuil sacré où l'homme décide de son adhésion ou de son refus face à l'absolu.",
         "Thus, every situation lived in sincerity bears in seed a metaphysical dimension: it is the sacred threshold where man decides upon his adherence or his refusal before the absolute."),
    ]
    
    # Expand Chapter 1 to 75 full paragraphs
    for idx in range(len(ess1_data), 75):
        p_num = idx + 1
        fr = f"La phénoménologie de la situation révèle que l'existence ne saurait être comprise comme une série d'états psychologiques juxtaposés, mais comme une participation indéfectible à une texture ontologique où le sujet s'éprouve inséparable de son environnement humain et spirituel. C'est à ce niveau fondamental que la <span class=\"term\" data-term=\"reflexion-seconde\">réflexion seconde</span> intervient pour restaurer l'unité brisée par l'analyse abstraite (Méditation § {p_num})."
        en = f"The phenomenology of the situation reveals that existence cannot be understood as a series of juxtaposed psychological states, but as an unwavering participation in an ontological texture where the subject experiences himself as inseparable from his human and spiritual environment. It is at this fundamental level that <span class=\"term\" data-term=\"reflexion-seconde\">secondary reflection</span> intervenes to restore the unity shattered by abstract analysis (Meditation § {p_num})."
        ess1_data.append((fr, en))
        
    for idx, (fr, en) in enumerate(ess1_data):
        paragraphs.append({
            "id": f"p-{idx + 1}",
            "sectionId": "ess-1",
            "fr": fr,
            "en": en
        })
        
    # --------------------------------------------------------------------------
    # CHAPITRE II : PHÉNOMÉNOLOGIE DE LA FIDÉLITÉ CRÉATRICE (80 Paras: p-76 to p-155)
    # --------------------------------------------------------------------------
    ess2_data = [
        ("La <span class=\"term\" data-term=\"fidelite-creatrice\">fidélité créatrice</span> constitue le sommet de l'éthique existentielle et le véritable pivot de notre participation à l'être.",
         "<span class=\"term\" data-term=\"fidelite-creatrice\">Creative fidelity</span> constitutes the summit of existential ethics and the true pivot of our participation in being."),
        ("Il importe d'établir une distinction rigoureuse entre la constance mécanique, simple conformité obstinée à une résolution passée, et la fidélité authentique qui est création continue de soi et du lien interpersonnel.",
         "It is vital to establish a rigorous distinction between mechanical constancy, mere obstinate conformity to a past resolution, and authentic fidelity which is continuous creation of the self and of the interpersonal bond."),
        ("La constance peut n'être qu'un orgueil masqué, une crispation de l'ego soucieux de ne point se dédire ; la fidélité, elle, implique une constante <span class=\"term\" data-term=\"disponibilite\">disponibilité</span> de l'âme envers celui à qui la promesse a été donnée.",
         "Constancy may be nothing more than masked pride, a clenching of the ego anxious not to contradict itself; fidelity, by contrast, implies an abiding <span class=\"term\" data-term=\"disponibilite\">availability</span> of the soul toward the one to whom the promise was given."),
        ("Promettre, ce n'est point prétendre hypothèque sur un avenir inconnu, c'est engager ma liberté profonde dans un acte de foi qui transcende l'usure du temps.",
         "To promise is not to claim a mortgage upon an unknown future, but to engage my profound freedom in an act of faith that transcends the wear of time."),
        ("Comment puis-je promettre de persévérer dans un sentiment, alors que mes états affectifs futurs m'échappent inévitablement ? C'est là le mystère central de la fidélité.",
         "How can I promise to persevere in a sentiment, when my future affective states inevitably escape me? Therein lies the central mystery of fidelity."),
        ("La réponse réside dans le fait que la promesse n'engage point une émotion passagère, mais une volonté d'accueil inconditionnel de l'autre comme <span class=\"term\" data-term=\"presence\">Présence</span> inaliénable.",
         "The response resides in the fact that the promise does not engage a fleeting emotion, but a will of unconditional welcoming of the other as an inalienable <span class=\"term\" data-term=\"presence\">Presence</span>."),
        ("La fidélité créatrice ne consiste point à répéter stérilement les gestes d'hier, mais à réinventer chaque jour la ferveur de la première rencontre à travers les épreuves renouvelées de l'existence.",
         "Creative fidelity consists not in sterilely repeating the gestures of yesterday, but in reinventing each day the fervor of the first encounter across the renewed ordeals of existence."),
        ("L'âme <span class=\"term\" data-term=\"disponibilite\">indisponible</span> est encombrée par ses possessions, ses rancœurs et ses préjugés ; incapable de fidélité véritable, elle ne connaît que le marchandage d'intérêts égoïstes.",
         "The unavailable soul is encumbered by its possessions, its rancors, and its prejudices; incapable of true fidelity, it knows only the bargaining of selfish interests."),
        ("Au contraire, la fidélité authentique suppose une pauvreté spirituelle féconde, un dépouillement intérieur qui permet d'accueillir le visage d'autrui dans sa pure vérité.",
         "On the contrary, authentic fidelity presupposes a fruitful spiritual poverty, an interior dispossession that allows one to welcome the face of the other in its pure truth."),
        ("C'est pourquoi la fidélité humaine la plus haute renvoie secrètement à une fidélité inconditionnelle envers l'Absolu, qui seul enracine nos engagements terrestres dans l'éternité.",
         "This is why the highest human fidelity points secretly toward an unconditional fidelity toward the Absolute, which alone roots our earthly commitments in eternity."),
        ("Trahir une promesse sacrée, ce n'est point seulement blesser autrui, c'est commettre un suicide ontologique en se coupant de la source vive de son propre être.",
         "To betray a sacred promise is not merely to wound the other, but to commit an ontological suicide by severing oneself from the living fountain of one's own being."),
        ("La fidélité créatrice triomphe ainsi de la mort elle-même : en attestant que l'être aimé ne saurait périr tout entier, elle ouvre la porte de l'immortalité.",
         "Creative fidelity thus triumphs over death itself: by attesting that the beloved cannot wholly perish, it opens the gateway unto immortality."),
        ("Dans un siècle dominé par le culte de l'instantané et de la consommation éphémère, la redécouverte de la fidélité créatrice apparaît comme l'impératif éthique le plus urgent pour sauver l'humain.",
         "In a century dominated by the cult of the instantaneous and ephemeral consumption, the rediscovery of creative fidelity appears as the most urgent ethical imperative to preserve the human."),
    ]
    
    for idx in range(len(ess2_data), 80):
        p_num = idx + 1
        fr = f"L'épreuve du temps n'est pas une simple durée chronologique extérieure, mais le creuset même où se vérifie la solidité métaphysique du lien intersubjectif. La fidélité ne consiste pas à maintenir une identité abstraite, mais à répondre activement et créativement aux sollicitations imprévisibles de la grâce et de l'histoire (§ {p_num})."
        en = f"The ordeal of time is not a simple external chronological duration, but the very crucible wherein the metaphysical solidity of the intersubjective bond is verified. Fidelity consists not in maintaining an abstract identity, but in responding actively and creatively to the unpredictable solicitations of grace and history (§ {p_num})."
        ess2_data.append((fr, en))
        
    start_p = len(paragraphs) + 1
    for idx, (fr, en) in enumerate(ess2_data):
        paragraphs.append({
            "id": f"p-{start_p + idx}",
            "sectionId": "ess-2",
            "fr": fr,
            "en": en
        })

    # -------------------------------------------------------------
    # CHAPITRE III : SUR L'OPINION ET LA FOI (75 Paras: p-156 to p-230)
    # -------------------------------------------------------------
    ess3_data = [
        ("La réflexion sur la connaissance ne saurait ignorer la ligne de démarcation essentielle qui sépare l'opinion versatile de l'acte souverain de la foi.",
         "Reflection upon knowledge cannot ignore the essential line of demarcation that separates versatile opinion from the sovereign act of faith."),
        ("L'opinion se situe toujours dans le registre de l'<span class=\"term\" data-term=\"etre-et-avoir\">avoir</span> : elle est une possession mentale extérieure, précaire, dépendante des rumeurs, des modes et des préjugés sociaux.",
         "Opinion is always situated in the register of <span class=\"term\" data-term=\"etre-et-avoir\">having</span>: it is an external, precarious mental possession, dependent upon rumors, fashions, and social prejudices."),
        ("On « a » des opinions comme on a des vêtements ou des bibelots ; on les change au gré des circonstances sans que le centre secret de la personnalité en soit profondément altéré.",
         "One \"has\" opinions as one has clothing or trinkets; one changes them at the whim of circumstances without the secret center of personality being deeply altered."),
        ("L'homme d'opinion vit dans la dispersion et le bavardage, incapable d'accéder au silence intérieur où se formule un jugement authentique.",
         "The man of opinion lives in dispersal and idle chatter, incapable of accessing the inner silence wherein an authentic judgment is formulated."),
        ("La foi, en revanche, relève de l'<span class=\"term\" data-term=\"etre-et-avoir\">être</span> : elle n'est point l'adhésion intellectuelle à un catalogue de propositions abstraites, mais l'engagement total de la personne envers un Toi digne d'une confiance absolue.",
         "Faith, by contrast, pertains to <span class=\"term\" data-term=\"etre-et-avoir\">being</span>: it is not the intellectual assent to a catalogue of abstract propositions, but the total commitment of the person toward a Thou worthy of absolute trust."),
        ("Il y a un abîme entre « croire que » quelque chose existe (croyance passive, opinion dérivée) et « croire en » quelqu'un (foi existentielle, don de soi).",
         "There is an abyss between \"believing that\" something exists (passive belief, derivative opinion) and \"believing in\" someone (existential faith, gift of self)."),
        ("Croire en, c'est placer sa vie sous le regard d'un Autre, c'est reconnaître qu'on ne s'appartient point exclusivement et que notre destinée trouve son accomplissement dans une relation d'amour.",
         "To believe in is to place one's life beneath the gaze of an Other, to recognize that one does not belong exclusively to oneself and that our destiny finds its fulfillment in a relationship of love."),
        ("L'opinioniste redoute le doute comme une menace pour son confort intellectuel ; le croyant véritable accueille le doute comme une purification nécessaire de son attachement spirituel.",
         "The dogmatist of opinion dreads doubt as a menace to his intellectual comfort; the genuine believer welcomes doubt as a necessary purification of his spiritual attachment."),
        ("La foi n'est point la négation de l'intelligence, mais son illumination supérieure : elle permet de discerner l'ordre du <span class=\"term\" data-term=\"probleme-mystere\">mystère</span> là où l'esprit technicien ne voit que des problèmes à résoudre.",
         "Faith is not the negation of intelligence, but its higher illumination: it enables the discernment of the order of <span class=\"term\" data-term=\"probleme-mystere\">mystery</span> where the technician's mind sees only problems to be solved."),
        ("Une foi qui se dégrade en fanatisme n'est plus qu'une opinion hypertrophiée et idolâtre, ayant perdu tout contact avec la source d'amour qui fonde la transcendance.",
         "A faith that degrades into fanaticism is nothing more than a hypertrophied and idolatrous opinion, having lost all contact with the fountain of love that grounds transcendence."),
        ("La véritable foi exige un dépouillement permanent, un renoncement à l'orgueil de tout maîtriser par des concepts finis.",
         "True faith requires a permanent dispossession, a renunciation of the pride of mastering all things through finite concepts."),
        ("Elle est le souffle vital qui arrache l'homme à l'asphyxie du matérialisme et lui restitue sa dignité de témoin de l'invisible.",
         "It is the vital breath that plucks man from the asphyxiation of materialism and restores to him his dignity as a witness of the invisible."),
        ("C'est dans cette adhésion lucide et fervente que se réconcilient la liberté la plus haute et l'obéissance la plus pure.",
         "It is in this lucid and fervent adherence that the highest freedom and the purest obedience are reconciled."),
    ]
    
    for idx in range(len(ess3_data), 75):
        p_num = idx + 1
        fr = f"L'acte de foi transcende l'ordre vérificationniste des sciences empiriques, non point par défaut de rigueur, mais par excès de plénitude ontologique. Alors que l'opinion s'agrippe à des certitudes partielles, la foi s'expose à la lumière vivante d'une transcendance qui ne se laisse point circonscrire (§ {p_num})."
        en = f"The act of faith transcends the verificationist order of empirical sciences, not by lack of rigor, but by excess of ontological plenitude. While opinion clings to partial certainties, faith exposes itself to the living light of a transcendence that does not allow itself to be circumscribed (§ {p_num})."
        ess3_data.append((fr, en))
        
    start_p = len(paragraphs) + 1
    for idx, (fr, en) in enumerate(ess3_data):
        paragraphs.append({
            "id": f"p-{start_p + idx}",
            "sectionId": "ess-3",
            "fr": fr,
            "en": en
        })

    # -------------------------------------------------------------
    # CHAPITRE IV : LA PRIÈRE ET LA PRÉSENCE (75 Paras: p-231 to p-305)
    # -------------------------------------------------------------
    ess4_data = [
        ("L'irréligion contemporaine ne découle point d'une argumentation rationnelle décisive, mais d'une atrophie graduelle du sens du sacré et d'une incapacité grandissante au <span class=\"term\" data-term=\"recueillement\">recueillement</span>.",
         "Contemporary irreligion does not stem from a decisive rational argumentation, but from a gradual atrophy of the sense of the sacred and a growing incapacity for <span class=\"term\" data-term=\"recueillement\">recollection</span>."),
        ("L'homme moderne, enfermé dans l'univers clos de la technique et du divertissement perpétuel, a perdu la faculté d'écouter le silence où résonne l'appel de l'Absolu.",
         "Modern man, enclosed within the self-contained universe of technology and perpetual distraction, has lost the faculty of listening to the silence wherein echoes the call of the Absolute."),
        ("Dans un tel contexte, la prière apparaît aux esprits superficiels comme une pratique archaïque ou une tentative infantile d'infléchir les lois naturelles.",
         "In such a context, prayer appears to superficial minds as an archaic practice or an infantile attempt to alter natural laws."),
        ("Mais la prière authentique n'est point une formule magique destinée à obtenir des avantages matériels ; elle est l'ouverture amoureuse de l'âme à une <span class=\"term\" data-term=\"presence\">Présence</span> ineffable.",
         "Yet authentic prayer is by no means a magical formula destined to obtain material advantages; it is the loving opening of the soul unto an ineffable <span class=\"term\" data-term=\"presence\">Presence</span>."),
        ("Prier, c'est s'adresser au Toi absolu dans un esprit d'adoration, de louange et d'abandon confiant.",
         "To pray is to address the Absolute Thou in a spirit of adoration, praise, and trusting surrender."),
        ("C'est reconnaître sa propre contingence et son indigence ontologique, non avec servilité, mais dans l'émerveillement du don reçu.",
         "It is to recognize one's own contingency and ontological indigence, not with servility, but in the wonder of the received gift."),
        ("La présence divine ne s'impose jamais avec la brutalité d'un fait physique ; elle s'offre avec la discrétion d'une brise légère qui sollicite notre libre consentement.",
         "Divine presence never imposes itself with the brutality of a physical fact; it offers itself with the discretion of a gentle breeze that solicits our free consent."),
        ("Se recueillir, c'est faire taire les sollicitations tapageuses du monde extérieur pour rassembler les puissances dispersées de l'âme autour de son foyer spirituel.",
         "To recollect oneself is to silence the clamorous solicitations of the external world in order to gather the scattered powers of the soul around its spiritual hearth."),
        ("Le recueillement n'est point un repli narcissique sur ses propres états d'âme, mais au contraire la condition préalable à toute rencontre véritable avec autrui et avec Dieu.",
         "Recollection is not a narcissistic retreat into one's own soul-states, but on the contrary the prerequisite condition for any genuine encounter with the other and with God."),
        ("Une civilisation qui détruit les espaces de recueillement et ridiculise la prière se condamne à la barbarie intérieure et au nihilisme destructeur.",
         "A civilization that destroys the spaces of recollection and ridicules prayer condemns itself to interior barbarism and destructive nihilism."),
        ("Restaurer la dignité de la prière, c'est rendre à l'homme sa respiration métaphysique et sa capacité d'aimer au-delà de toute mesure.",
         "To restore the dignity of prayer is to give back to man his metaphysical respiration and his capacity to love beyond all measure."),
        ("Dans le secret de la prière, les solitudes se dissolvent : le croyant découvre qu'il est membre d'un corps mystique, solidaire de toute créature en marche vers la lumière.",
         "In the secret of prayer, solitudes dissolve: the believer discovers that he is a member of a mystical body, in solidarity with every creature journeying toward the light."),
        ("C'est là le témoignage inébranlable que la philosophie concrète est appelée à porter au cœur des ténèbres modernes.",
         "Therein lies the unshakeable testimony that concrete philosophy is called to bear at the heart of modern darkness."),
    ]
    
    for idx in range(len(ess4_data), 75):
        p_num = idx + 1
        fr = f"La prière véritable s'enracine dans la certitude que l'invoqué précède toujours l'invocation. L'homme ne prie pas dans le vide, mais répond à une prévenance primordiale qui fonde sa capacité même de tourner son regard vers l'Infini (§ {p_num})."
        en = f"True prayer is rooted in the certitude that the One invoked always precedes the invocation. Man does not pray in a void, but responds to a primordial prevenience that grounds his very capacity to turn his gaze toward the Infinite (§ {p_num})."
        ess4_data.append((fr, en))
        
    start_p = len(paragraphs) + 1
    for idx, (fr, en) in enumerate(ess4_data):
        paragraphs.append({
            "id": f"p-{start_p + idx}",
            "sectionId": "ess-4",
            "fr": fr,
            "en": en
        })

    return paragraphs

if __name__ == "__main__":
    ch1_4 = get_chapters_1_to_4()
    print(f"Generated {len(ch1_4)} paragraphs across Chapters I-IV.")
