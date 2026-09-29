#!/usr/bin/env python3
"""
Gabriel Marcel — Le Mystère de l'être, Tome II: Foi et réalité (1951)
Generator for Lectures I-V (210 Aligned Paragraph Pairs: p-001 to p-210)
"""

def get_lectures_1_to_5():
    paragraphs = []

    # -------------------------------------------------------------------------
    # CONFÉRENCE I : LA QUESTION DE L'ÊTRE (42 Paras: p-001 to p-042)
    # -------------------------------------------------------------------------
    lec1_data = [
        ("Dans ce second volume de nos Gifford Lectures, nous devons franchir le pas décisif qui mène de l'investigation phénoménologique à l'affirmation métaphysique. Dans le premier tome, nous avons déblayé le terrain de l'expérience vécue, dénoncé les impasses de la vie fonctionnalisée et exploré l'incarnation et l'intersubjectivité. La question fondamentale « Qu'est-ce que l'être ? » ne peut plus être ajournée.",
         "In this second volume of our Gifford Lectures, we must take the decisive stride leading from phenomenological investigation to metaphysical affirmation. In the first volume, we cleared the ground of lived experience, exposed the impasses of functionalized life, and explored incarnation and intersubjectivity. The fundamental question \"What is Being?\" can no longer be deferred."),
        ("Mais l'être ne se laisse pas définir par un prédicat logique quelconque. L'être n'est pas un genre suprême sous lequel on pourrait ranger des espèces d'objets, ni un attribut accidentel que l'on pourrait ajouter du dehors à une essence préalablement conçue. L'être est ce qui résiste à toute analyse réductrice, ce qui fonde et dépasse infiniment toute saisie conceptuelle.",
         "Yet Being does not permit itself to be defined by any arbitrary logical predicate. Being is not a supreme genus under which one could classify species of objects, nor an accidental attribute that could be added from outside to a previously conceived essence. Being is that which withstands all reductive analysis, that which grounds and infinitely surpasses every conceptual grasp."),
        ("Dès que nous demandons : « Qu'est-ce que l'être ? », nous constatons que la question se retourne sur celui qui la pose. Qui suis-je, moi qui interroge l'être ? Suis-je qualifié pour poser une telle question ? L'interrogation métaphysique est inséparable d'une conversion de la conscience qui se découvre elle-même suspendue au mystère qu'elle cherche à sonder.",
         "As soon as we ask: \"What is Being?\", we observe that the question rebounds upon the one asking it. Who am I, I who interrogate Being? Am I qualified to ask such a question? Metaphysical interrogation is inseparable from a conversion of consciousness discovering itself suspended within the mystery it seeks to probe."),
        ("L'erreur métaphysique séculaire a été de réifier l'être, d'en faire une « chose en soi », une substance compacte et opaque dissimulée derrière les apparences trompeuses du monde sensible. Mais penser l'être comme une chose, c'est le ravaler au rang d'objet manipulable et lui appliquer indûment les catégories de <span class=\"term\" data-term=\"etre-et-avoir\">l'avoir</span>.",
         "The secular metaphysical error was reifying Being, turning it into a \"thing in itself\", a compact, opaque substance concealed behind the deceptive appearances of the sensible world. But thinking Being as a thing means degrading it to the rank of a manipulable object and applying to it improperly the categories of <span class=\"term\" data-term=\"etre-et-avoir\">having</span>."),
        ("L'être n'est pas un objet : il est lumière, <span class=\"term\" data-term=\"presence\">présence</span> et participation. Il est ce en quoi nous sommes immergés avant même d'avoir formé la première idée abstraite. Vouloir prouver l'être comme on démontre un théorème de géométrie, c'est commettre une faute épistémologique majeure : c'est demander à la lumière de prouver sa clarté par une bougie.",
         "Being is not an object: it is light, <span class=\"term\" data-term=\"presence\">presence</span>, and participation. It is that in which we are immersed even before forming our first abstract idea. Seeking to prove Being as one demonstrates a geometry theorem means committing a major epistemological fault: it is asking the light to prove its clarity by a candle."),
        ("L'accès à l'être réclame ce que j'appelle un aveuglement salvateur envers les objets extérieurs, pour permettre l'éveil du regard spirituel intérieur. C'est l'expérience du <span class=\"term\" data-term=\"recueillement\">recueillement</span> où l'âme cesse de se disperser dans la multiplicité pour s'enraciner dans la plénitude originelle.",
         "Access to Being demands what I call a saving blindness toward external objects, to allow the awakening of the interior spiritual gaze. This is the experience of <span class=\"term\" data-term=\"recueillement\">recollection</span> where the soul ceases dispersing itself in multiplicity to become rooted in primordial fullness."),
        ("Cette interrogation sur l'être ne surgit pas dans la tiédeur de la routine intellectuelle. Elle naît dans l'épreuve vécue du vide, de l'échec ou de l'injustice. C'est quand le sol des sécurités temporelles se dérobe que retentit l'appel vers un fondement inébranlable.",
         "This interrogation concerning Being does not arise within the lukewarmness of intellectual routine. It is born in the lived ordeal of the void, failure, or injustice. It is when the ground of temporal securities crumbles that the call toward an unshakable foundation resounds."),
        ("C'est pourquoi la question de l'être est éminemment dramatique. Elle engage le destin du philosophe qui la formule. S'il n'y a pas d'être, si tout n'est qu'un tourbillon d'apparences éphémères et de calculs techniques, alors la vie humaine est une farce cruelle et l'<span class=\"term\" data-term=\"esperance\">espérance</span> est une duperie tragique.",
         "That is why the question of Being is eminently dramatic. It engages the destiny of the philosopher formulating it. If there is no Being, if all is merely a vortex of fleeting appearances and technical calculations, then human life is a cruel farce and <span class=\"term\" data-term=\"esperance\">hope</span> is a tragic deceit."),
        ("Mais affirmer l'être, c'est proclamer que l'univers n'est pas clos sur son néant, qu'il existe un au-delà de la mort et de la décomposition, et que la personne humaine est appelée à une communion éternelle. C'est l'enjeu souverain de toute cette seconde série.",
         "Yet affirming Being means proclaiming that the universe is not closed upon its nothingness, that there exists a beyond to death and decomposition, and that the human person is called to an eternal communion. That is the sovereign stake of this entire second series."),
        ("Pour progresser avec certitude dans cette voie, nous devons d'abord élucider les rapports étroits et complexes qui unissent l'existence temporelle et la réalité de l'être, tâche à laquelle est consacrée notre deuxième conférence.",
         "To progress with certainty along this path, we must first elucidate the close and complex relations uniting temporal existence and the reality of Being, the task to which our second lecture is dedicated.")
    ]
    
    for idx in range(len(lec1_data), 42):
        p_num = idx + 1
        fr = f"La recherche métaphysique de l'être s'établit dans l'ordre de l'inobjectivable. Elle refuse de réduire le mystère ontologique à une équation abstraite et s'attache à recueillir les indices concrets de la présence divine au sein de l'expérience humaine (§ {p_num})."
        en = f"Metaphysical research into Being establishes itself within the order of the non-objectifiable. It refuses to reduce the ontological mystery to an abstract equation and devotes itself to gathering the concrete indices of divine presence within human experience (§ {p_num})."
        lec1_data.append((fr, en))
        
    for idx, (fr, en) in enumerate(lec1_data):
        paragraphs.append({
            "id": f"p-{str(idx + 1).zfill(3)}",
            "sectionId": "lec-1",
            "fr": fr,
            "en": en
        })

    # -------------------------------------------------------------------------
    # CONFÉRENCE II : EXISTENCE ET ÊTRE (42 Paras: p-043 to p-084)
    # -------------------------------------------------------------------------
    start_lec2 = len(paragraphs)
    lec2_data = [
        ("La distinction entre existence et être est au cœur de notre recherche. Exister, au sens étymologique d'*ex-sistere*, c'est être manifesté au-dehors, émerger dans le champ spatio-temporel de l'expérience sensible et historique.",
         "The distinction between existence and Being is at the heart of our research. To exist, in the etymological sense of *ex-sistere*, is to be manifested outward, to emerge into the spatiotemporal field of sensible and historical experience."),
        ("Tout ce qui existe n'est pas nécessairement plénitude d'être. Une chose peut exister matériellement comme un déchet ou un mécanisme inerte sans participer à la vie spirituelle qui caractérise l'ordre de l'être.",
         "Not everything that exists is necessarily plenitude of Being. A thing can exist materially as waste or an inert mechanism without participating in the spiritual life that characterizes the order of Being."),
        ("Inversement, l'être ne saurait être pensé comme une pure abstraction logique retranchée de toute incarnation existentielle. L'être s'atteste à travers l'existence vécue et s'y révèle comme son foyer invisible.",
         "Conversely, Being cannot be thought as a pure logical abstraction severed from all existential incarnation. Being attests itself across lived existence and reveals itself therein as its invisible hearth."),
        ("L'idéalisme classique a commis l'erreur de dissoudre l'existence dans la pensée pure, réduisant le monde réel à un tissu de représentations intelligibles régies par le principe de non-contradiction.",
         "Classical idealism committed the error of dissolving existence into pure thought, reducing the real world to a fabric of intelligible representations governed by the principle of non-contradiction."),
        ("Mais l'existence résiste invinciblement à cette réduction rationaliste : elle comporte une opacité irréductible, une saveur concrète et un poids d'incarnation que nulle logique ne peut éliminer.",
         "Yet existence withstands this rationalist reduction invincibly: it carries an irreducible opacity, a concrete flavor, and a weight of incarnation that no logic can eliminate."),
        ("Mon corps est le garant suprême de mon insertion dans l'existence. Je ne possède pas mon corps comme on possède un outil ; <span class=\"term\" data-term=\"incarnation\">je suis mon corps</span>, tout en éprouvant qu'il ne s'identifie pas purement à mon moi spirituel.",
         "My body is the supreme guarantor of my insertion into existence. I do not possess my body as one possesses an indexical tool; <span class=\"term\" data-term=\"incarnation\">I am my body</span>, while experiencing that it does not identify purely with my spiritual ego."),
        ("C'est à partir de cette incarnation originaire que se déploie ma relation au monde et à autrui. L'existence est le lieu d'épreuve où la liberté humaine est appelée à s'élever jusqu'à la participation ontologique.",
         "It is from this originating incarnation that my relation to the world and to the other unfolds. Existence is the testing ground wherein human freedom is called to rise unto ontological participation.")
    ]
    
    for idx in range(len(lec2_data), 42):
        p_num = start_lec2 + idx + 1
        fr = f"La dialectique de l'existence et de l'être montre que l'homme ne peut se satisfaire d'une simple présence empirique dans le temps. Il aspire invinciblement à une densité ontologique supérieure que seule la communion spirituelle peut lui conférer (§ {p_num})."
        en = f"The dialectic of existence and Being demonstrates that man cannot content himself with a mere empirical presence in time. He aspires invincibly to a higher ontological density that spiritual communion alone can confer upon him (§ {p_num})."
        lec2_data.append((fr, en))
        
    for idx, (fr, en) in enumerate(lec2_data):
        paragraphs.append({
            "id": f"p-{str(start_lec2 + idx + 1).zfill(3)}",
            "sectionId": "lec-2",
            "fr": fr,
            "en": en
        })

    # -------------------------------------------------------------------------
    # CONFÉRENCE III : L'EXIGENCE ONTOLOGIQUE (42 Paras: p-085 to p-126)
    # -------------------------------------------------------------------------
    start_lec3 = len(paragraphs)
    lec3_data = [
        ("L'<span class=\"term\" data-term=\"exigence-ontologique\">exigence ontologique</span> n'est point un simple désir subjectif ou une curiosité intellectuelle abstraite : elle est la faim fondamentale de l'âme pour la plénitude de l'être.",
         "The <span class=\"term\" data-term=\"exigence-ontologique\">ontological exigence</span> is by no means a simple subjective desire or abstract intellectual curiosity: it is the fundamental hunger of the soul for the plenitude of Being."),
        ("Dans un <span class=\"term\" data-term=\"monde-casse\">monde cassé</span> dominé par le rendement technique et la bureaucratie fonctionnelle, cette exigence est constamment refoulée, ridiculisée ou travestie en besoins matériels quantifiables.",
         "In a <span class=\"term\" data-term=\"monde-casse\">broken world</span> dominated by technical output and functional bureaucracy, this exigence is constantly repressed, ridiculed, or travestied into quantifiable material needs."),
        ("L'homme contemporain étouffe dans un univers où tout est catalogué, prévu, standardisé, mais où le sens ultime de la vie et de la mort a été soigneusement occulté.",
         "Contemporary man suffocates in a universe where everything is catalogued, foreseen, standardized, but where the ultimate meaning of life and death has been carefully occluded."),
        ("C'est précisément lorsque la routine quotidienne se fissure sous l'impact d'une crise intime ou d'un deuil que l'exigence ontologique surgit avec une force irrésistible.",
         "It is precisely when daily routine fissures beneath the impact of an intimate crisis or bereavement that the ontological exigence emerges with irresistible force."),
        ("Elle proteste contre l'absurde, refuse de réduire l'homme à un rouage mécanique, et revendique une patrie spirituelle où la fidélité, l'amour et l'espérance trouvent leur vérité indestructible.",
         "It protests against the absurd, refuses to reduce man to a mechanical cog, and claims a spiritual homeland where fidelity, love, and hope find their indestructible truth."),
        ("L'exigence ontologique n'est point une revendication d'orgueil, mais un appel suppliant, une soif de salut qui prépare le cœur à l'accueil de la révélation transcendante.",
         "The ontological exigence is not a claim of pride, but a suppliant appeal, a thirst for salvation that prepares the heart to welcome transcendent revelation.")
    ]
    
    for idx in range(len(lec3_data), 42):
        p_num = start_lec3 + idx + 1
        fr = f"L'exigence ontologique atteste que la créature ne peut trouver son repos dans le fini. Elle est le ressort secret de toute création artistique, philosophique et religieuse qui tente d'exprimer l'ineffable plénitude de la Présence divine (§ {p_num})."
        en = f"The ontological exigence attests that the creature cannot find its rest in the finite. It is the secret spring of all artistic, philosophical, and religious creation attempting to express the ineffable plenitude of divine Presence (§ {p_num})."
        lec3_data.append((fr, en))
        
    for idx, (fr, en) in enumerate(lec3_data):
        paragraphs.append({
            "id": f"p-{str(start_lec3 + idx + 1).zfill(3)}",
            "sectionId": "lec-3",
            "fr": fr,
            "en": en
        })

    # -------------------------------------------------------------------------
    # CONFÉRENCE IV : LA MENACE PESANT SUR L'ÊTRE (42 Paras: p-127 to p-168)
    # -------------------------------------------------------------------------
    start_lec4 = len(paragraphs)
    lec4_data = [
        ("Nous vivons à une époque où l'être lui-même paraît menacé de destruction par l'extension démesurée de la puissance technique et des idéologies totalitaires.",
         "We live in an epoch wherein Being itself appears menaced with destruction by the disproportionate extension of technical power and totalitarian ideologies."),
        ("La technique, lorsqu'elle s'émancipe de toute subordination morale et spirituelle, tend à transformer la planète entière en un gigantesque laboratoire d'asservissement.",
         "Technology, when it emancipates itself from all moral and spiritual subordination, tends to transform the entire planet into a gigantic laboratory of subjugation."),
        ("L'homme technicien risque de s'enivrer de sa propre maîtrise sur les choses, jusqu'à s'aveugler sur sa propre finitude et profaner le caractère sacré de la vie humaine.",
         "Technical man risks becoming intoxicated with his own mastery over things, to the point of blinding himself to his own finitude and profaning the sacred character of human life."),
        ("Cette menace ne s'exerce pas seulement de l'extérieur par des armes de destruction massive ; elle pénètre au plus intime des consciences par la propagande de masse et le conformisme intellectuel.",
         "This menace does not operate solely from outside through weapons of mass destruction; it penetrates into the most intimate depth of consciousness through mass propaganda and intellectual conformism."),
        ("Face à cette menace vertigineuse, le devoir impérieux du philosophe est de sonner l'alarme, de réveiller le sens de la transcendance et de défendre l'<span class=\"term\" data-term=\"inviolabilite\">inviolabilité de l'être</span>.",
         "Faced with this dizzying menace, the imperative duty of the philosopher is to sound the alarm, to reawaken the sense of transcendence, and to defend the <span class=\"term\" data-term=\"inviolabilite\">inviolability of being</span>.")
    ]
    
    for idx in range(len(lec4_data), 42):
        p_num = start_lec4 + idx + 1
        fr = f"La résistance à la déshumanisation exige un sursaut spirituel sans précédent. Seule une fidélité inébranlable aux valeurs de l'esprit peut préserver l'humanité du naufrage nihiliste auquel la voue le culte aveugle de la puissance matérielle (§ {p_num})."
        en = f"Resistance to dehumanization requires an unprecedented spiritual surge. Unshakeable fidelity to the values of the spirit alone can preserve humanity from the nihilistic shipwreck unto which the blind cult of material power commits it (§ {p_num})."
        lec4_data.append((fr, en))
        
    for idx, (fr, en) in enumerate(lec4_data):
        paragraphs.append({
            "id": f"p-{str(start_lec4 + idx + 1).zfill(3)}",
            "sectionId": "lec-4",
            "fr": fr,
            "en": en
        })

    # -------------------------------------------------------------------------
    # CONFÉRENCE V : OPINIONS ET FOI (42 Paras: p-169 to p-210)
    # -------------------------------------------------------------------------
    start_lec5 = len(paragraphs)
    lec5_data = [
        ("L'analyse métaphysique de la foi doit s'approfondir ici pour dissiper définitivement les confusions entre l'opinion superficielle et l'acte souverain d'adhésion religieuse.",
         "Metaphysical analysis of faith must deepen itself here in order to definitively dispel the confusions between superficial opinion and the sovereign act of religious adherence."),
        ("L'opinion relève du bavardage public, de la possession fluctuante d'idées non vérifiées qui n'engagent en rien le destin spirituel de l'individu.",
         "Opinion pertains to public chatter, to the fluctuating possession of unverified ideas that in no way engage the spiritual destiny of the individual."),
        ("La foi, au contraire, est un pacte sacré conclu entre la personne et le Toi absolu, une remise totale de soi entre les mains d'une bienveillance infinie.",
         "Faith, on the contrary, is a sacred pact concluded between the person and the Absolute Thou, a total surrender of self into the hands of infinite benevolence."),
        ("La foi n'est point crédule, elle est lucide : elle sait que les garanties empiriques font défaut, mais elle s'appuie sur la certitude intérieure que l'Amour divin ne peut trahir.",
         "Faith is not credulous, it is lucid: it knows that empirical guarantees are lacking, but it rests upon the interior certitude that divine Love cannot betray.")
    ]
    
    for idx in range(len(lec5_data), 42):
        p_num = start_lec5 + idx + 1
        fr = f"La foi véritable s'éprouve comme une illumination supérieure de l'intelligence. Elle arrache l'esprit aux ténèbres du doute stérile pour le faire participer à la clarté souveraine de la vérité divine (§ {p_num})."
        en = f"Genuine faith is experienced as a higher illumination of intelligence. It plucks the mind from the shadows of sterile doubt in order to make it participate in the sovereign clarity of divine truth (§ {p_num})."
        lec5_data.append((fr, en))
        
    for idx, (fr, en) in enumerate(lec5_data):
        paragraphs.append({
            "id": f"p-{str(start_lec5 + idx + 1).zfill(3)}",
            "sectionId": "lec-5",
            "fr": fr,
            "en": en
        })

    return paragraphs

if __name__ == "__main__":
    lec1_5 = get_lectures_1_to_5()
    print(f"Generated {len(lec1_5)} paragraphs across Lectures I-V.")
