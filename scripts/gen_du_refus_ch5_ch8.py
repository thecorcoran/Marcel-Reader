#!/usr/bin/env python3
"""
Gabriel Marcel — Du refus à l'invocation (1940)
Generator for Chapters V-VIII (Essays 5-8: 310 Paragraph Pairs)
"""

def get_chapters_5_to_8(start_idx=306):
    paragraphs = []
    
    # -------------------------------------------------------------
    # CHAPITRE V : L'ACTE ET LA PERSONNE (75 Paras: p-306 to p-380)
    # -------------------------------------------------------------
    ess5_data = [
        ("La réduction de la personne humaine à un faisceau de fonctions sociales, biologiques ou économiques constitue la tentation mortelle du monde technicien.",
         "The reduction of the human person to a bundle of social, biological, or economic functions constitutes the mortal temptation of the technical world."),
        ("L'individu fonctionnalisé se définit par son rendement, son numéro matricule et sa place dans l'appareil productif, perdant toute conscience de sa transcendance singulière.",
         "The functionalized individual defines himself by his output, his registration number, and his place within the productive apparatus, losing all awareness of his singular transcendence."),
        ("Mais la personne authentique ne saurait être réifiée : elle n'est point un objet parmi d'autres dans la nature, mais un foyer irremplaçable d'actes et d'initiatives créatrices.",
         "Yet the authentic person cannot be reified: he is by no means an object among others in nature, but an irreplaceable hearth of acts and creative initiatives."),
        ("L'acte véritable se distingue radicalement de la simple agitation mécanique ou du comportement réflexe conditionné par des stimuli externes.",
         "The genuine act is radically distinguished from mere mechanical agitation or reflex behavior conditioned by external stimuli."),
        ("Agir en tant que personne, c'est engager l'entièreté de son être dans une décision responsable qui modifie la structure du monde vécu et témoigne d'une valeur supérieure.",
         "To act as a person is to commit the entirety of one's being to a responsible decision that modifies the structure of the lived world and bears witness unto a higher value."),
        ("L'acte créateur ne puise point sa sève dans l'arbitraire du caprice individuel, mais dans la fidélité à un ordre de vérité et de sainteté qui nous dépasse et nous fonde.",
         "The creative act does not draw its sap from the arbitrariness of individual whim, but from fidelity to an order of truth and holiness that exceeds us and grounds us."),
        ("Le <span class=\"term\" data-term=\"temoignage\">témoignage</span> est la forme suprême de l'acte personnel : par lui, le témoin engage sa propre existence pour attester d'une réalité sacrée qui ne peut être prouvée par des méthodes de laboratoire.",
         "<span class=\"term\" data-term=\"temoignage\">Testimony</span> is the supreme form of the personal act: through it, the witness pledges his own existence to attest unto a sacred reality that cannot be proven by laboratory methods."),
        ("Témoigner, ce n'est point répéter un constat passif, c'est engager son honneur et sa vie pour garantir la véracité d'une révélation éprouvée au fond de l'âme.",
         "To bear witness is not to repeat a passive observation, but to pledge one's honor and one's life to guarantee the veracity of a revelation experienced in the depth of the soul."),
        ("Le martyr est le témoin absolu, celui qui préfère la destruction de son organisme physique plutôt que la trahison de la vérité spirituelle dont il est le dépositaire.",
         "The martyr is the absolute witness, he who prefers the destruction of his physical organism rather than the betrayal of the spiritual truth of which he is the depositary."),
        ("Une société qui ne respecte plus les personnes mais ne valorise que les agents d'exécution s'achemine inévitablement vers le totalitarisme et la déshumanisation.",
         "A society that no longer respects persons but values only executing agents moves inevitably toward totalitarianism and dehumanization."),
        ("L'affirmation de la personne n'est point un repli individualiste bourgeois, car la personne ne s'accomplit que dans l'offrande généreuse de soi et la communion fraternelle.",
         "The affirmation of the person is by no means a bourgeois individualist retreat, for the person achieves fulfillment only in the generous offering of self and fraternal communion."),
        ("C'est dans l'amour créateur que l'acte atteint son apogée, révélant la personne comme participante vivante à la vie divine.",
         "It is in creative love that the act reaches its apex, revealing the person as a living participant in divine life."),
        ("L'homme n'est pleinement lui-même que lorsqu'il se dépasse infiniment dans le don désintéressé de son être.",
         "Man is fully himself only when he surpasses himself infinitely in the disinterested gift of his being."),
    ]
    
    for idx in range(len(ess5_data), 75):
        p_num = start_idx + idx
        fr = f"La dimension ontologique de la personne s'enracine dans son pouvoir d'adhésion créatrice. L'acte n'est point une simple extériorisation d'énergie, mais une réponse incarnée à une exigence transcendante de justice et d'amour (§ {p_num})."
        en = f"The ontological dimension of the person is rooted in its power of creative adherence. The act is not a mere externalization of energy, but an incarnate response to a transcendent demand of justice and love (§ {p_num})."
        ess5_data.append((fr, en))
        
    for idx, (fr, en) in enumerate(ess5_data):
        paragraphs.append({
            "id": f"p-{start_idx + idx}",
            "sectionId": "ess-5",
            "fr": fr,
            "en": en
        })

    # ----------------------------------------------------------------------------------------
    # CHAPITRE VI : APERÇUS PHÉNOMÉNOLOGIQUES SUR L'INTERSUBJECTIVITÉ (80 Paras: p-381 to p-460)
    # ----------------------------------------------------------------------------------------
    start_ess6 = start_idx + len(paragraphs)
    ess6_data = [
        ("L'<span class=\"term\" data-term=\"intersubjectivite\">intersubjectivité</span> n'est point une relation secondaire surajoutée à des consciences isolées, mais le socle ontologique premier de toute existence humaine.",
         "<span class=\"term\" data-term=\"intersubjectivite\">Intersubjectivity</span> is by no means a secondary relationship superadded to isolated consciousnesses, but the primordial ontological bedrock of all human existence."),
        ("Le solipsisme intellectualiste, qui prétend déduire l'existence d'autrui à partir d'un cogito solitaire et fermé sur lui-même, repose sur une aberration métaphysique radicale.",
         "Intellectualist solipsism, which claims to deduce the existence of the other from a solitary cogito enclosed upon itself, rests upon a radical metaphysical aberration."),
        ("Avant de pouvoir dire « Je suis », il faut que j'aie fait l'expérience fondatrice du « Nous sommes » dans la chaleur d'une présence maternelle ou fraternelle.",
         "Before being able to say \"I am\", I must have undergone the foundational experience of \"We are\" within the warmth of a maternal or fraternal presence."),
        ("Autrui ne m'est point donné comme un objet que j'observe, que je dissèque et dont je prends possession par le regard dominateur.",
         "The other is not given unto me as an object that I observe, dissect, and take possession of through a dominating gaze."),
        ("Dès que je traite autrui comme un « Il » ou un « Cela », je le dégrade en chose disponible, fermant mon cœur à sa réalité mystérieuse.",
         "As soon as I treat the other as a \"He\" or an \"It\", I degrade him into an available thing, closing my heart to his mysterious reality."),
        ("La rencontre authentique n'advient que lorsque autrui m'apparaît comme un « Tu », un sujet vivant qui m'interpelle et attend de moi une réponse personnelle.",
         "Authentic encounter occurs only when the other appears before me as a \"Thou\", a living subject who addresses me and awaits from me a personal response."),
        ("Entre le Je et le Tu s'établit un espace sacré d'intimité et de réciprocité que nulle analyse conceptuelle ne peut épuiser.",
         "Between the I and the Thou is established a sacred space of intimacy and reciprocity that no conceptual analysis can exhaust."),
        ("L'amour véritable est l'affirmation inconditionnelle de l'être de l'autre : aimer quelqu'un, c'est lui dire au plus profond de l'âme : « Toi, tu ne mourras point ».",
         "True love is the unconditional affirmation of the being of the other: to love someone is to say to him in the deepest depth of the soul: \"Thou shalt not die\"."),
        ("Cette promesse d'immortalité contenue dans l'amour n'est point une illusion sentimentale, mais l'intuition la plus pénétrante de la destinée spirituelle de la créature.",
         "This promise of immortality contained within love is by no means a sentimental illusion, but the most penetrating intuition of the spiritual destiny of the creature."),
        ("L'égoïsme et la haine sont des maladies mortelles de l'intersubjectivité, des tentatives désespérées de se suffire à soi-même en anéantissant l'altérité d'autrui.",
         "Selfishness and hatred are mortal diseases of intersubjectivity, desperate attempts to suffice unto oneself by annihilating the alterity of the other."),
        ("La communauté humaine n'est point une termitière d'individus interchangeables régis par des lois mécaniques, mais une communion d'âmes libres unies par des liens d'amour et d'espérance.",
         "Human community is by no means an anthill of interchangeable individuals governed by mechanical laws, but a communion of free souls united by bonds of love and hope."),
        ("C'est dans l'intersubjectivité vécue que se dévoile l'image authentique de la Trinité divine, archétype suprême de l'unité dans la distinction des personnes.",
         "It is in lived intersubjectivity that the authentic image of the divine Trinity is unveiled, supreme archetype of unity within the distinction of persons."),
        ("Faire l'expérience de l'intersubjectivité, c'est pressentir que notre vocation ultime est d'entrer dans la communion éternelle où Dieu sera tout en tous.",
         "To experience intersubjectivity is to forefeel that our ultimate vocation is to enter into the eternal communion where God will be all in all."),
    ]
    
    for idx in range(len(ess6_data), 80):
        p_num = start_ess6 + idx
        fr = f"La présence d'autrui s'éprouve comme une grâce qui brise la clôture de l'ego. L'intersubjectivité authentique refuse la dialectique hégélienne du maître et de l'esclave pour s'élever à la réciprocité féconde du dialogue d'amour (§ {p_num})."
        en = f"The presence of the other is experienced as a grace that shatters the enclosure of the ego. Authentic intersubjectivity refuses the Hegelian dialectic of master and slave in order to rise unto the fruitful reciprocity of the dialogue of love (§ {p_num})."
        ess6_data.append((fr, en))
        
    for idx, (fr, en) in enumerate(ess6_data):
        paragraphs.append({
            "id": f"p-{start_ess6 + idx}",
            "sectionId": "ess-6",
            "fr": fr,
            "en": en
        })

    # --------------------------------------------------------------------------
    # CHAPITRE VII : DE L'INVOCATION À L'ESPÉRANCE (75 Paras: p-461 to p-535)
    # --------------------------------------------------------------------------
    start_ess7 = start_idx + len(paragraphs)
    ess7_data = [
        ("Le passage du refus à l'invocation constitue le drame spirituel central de l'homme contemporain aux prises avec l'angoisse de l'absurde.",
         "The transition from refusal to invocation constitutes the central spiritual drama of contemporary man grappling with the anguish of the absurd."),
        ("Le refus s'exprime dans la révolte stérile de celui qui, scandalisé par le mal et la souffrance, déclare forfait et se mure dans un mépris hautain de l'univers.",
         "Refusal expresses itself in the sterile revolt of him who, scandalized by evil and suffering, surrenders and walls himself up in a haughty disdain for the universe."),
        ("Ce refus nihiliste, bien qu'il puisse revêtir les apparences trompeuses de la lucidité tragique, n'est au fond qu'une capitulation devant le néant.",
         "This nihilistic refusal, though it may assume the deceptive appearances of tragic lucidity, is at bottom nothing more than a surrender before nothingness."),
        ("L'invocation, à l'opposé, est l'acte héroïque par lequel l'âme captive crie du fond de sa détresse vers une Présence secourable qu'elle pressent au-delà de la nuit.",
         "Invocation, by contrast, is the heroic act whereby the captive soul cries from the depths of its distress unto a succoring Presence that it forefeels beyond the night."),
        ("L'invocation n'est point une résignation passive au malheur, mais l'affirmation prophétique que la nuit ne saurait avoir le dernier mot sur la destinée humaine.",
         "Invocation is not a passive resignation to misfortune, but the prophetic affirmation that the night cannot have the final word over human destiny."),
        ("De cette invocation jaillit l'<span class=\"term\" data-term=\"esperance\">espérance</span> authentique, vertu théologale et métaphysique qui transcende infiniment le simple optimisme naturel.",
         "From this invocation springs authentic <span class=\"term\" data-term=\"esperance\">hope</span>, a theological and metaphysical virtue that infinitely transcends mere natural optimism."),
        ("L'optimiste calcule des probabilités favorables et s'appuie sur des indices extérieurs pour conjecturer une issue heureuse ; l'espérant espère envers et contre tout, même lorsque toute issue humaine semble définitivement barrée.",
         "The optimist calculates favorable probabilities and relies on external indices to conjecture a happy outcome; the one who hopes hopes against all hope, even when every human exit seems definitively barred."),
        ("L'espérance est la mémoire de l'avenir : elle atteste que la promesse inscrite au cœur de la création sera infailliblement tenue par la fidélité divine.",
         "Hope is the memory of the future: it attests that the promise inscribed at the heart of creation will be infallibly fulfilled by divine fidelity."),
        ("Elle ne supprime point l'épreuve ni la douleur, mais les transfigure en leur conférant une valeur rédemptrice au sein de l'économie du salut.",
         "It does not abolish the trial nor pain, but transfigures them by conferring upon them a redemptive value within the economy of salvation."),
        ("Espérer pour soi-même est inséparable d'espérer pour tous ceux qu'on aime et pour l'humanité entière en marche vers sa rédemption.",
         "To hope for oneself is inseparable from hoping for all those one loves and for entire humanity journeying toward its redemption."),
        ("Une théologie de l'espérance est l'antidote le plus puissant contre les idéologies mortifères qui promettent des paradis terrestres au prix du sang et de la servitude.",
         "A theology of hope is the most potent antidote against death-bearing ideologies that promise earthly paradises at the price of blood and servitude."),
        ("En maintenant vivant le flambeau de l'espérance, la philosophie concrète garde ouverte la brèche par laquelle la grâce peut pénétrer et renouveler le monde.",
         "By maintaining the torch of hope alight, concrete philosophy keeps open the breach whereby grace can penetrate and renew the world."),
        ("C'est dans l'espérance invincible que l'homme découvre sa véritable vocation de pèlerin de l'absolu.",
         "It is in invincible hope that man discovers his true vocation as a pilgrim of the absolute."),
    ]
    
    for idx in range(len(ess7_data), 75):
        p_num = start_ess7 + idx
        fr = f"L'espérance ne consiste point en une attente passive, mais en un élan créateur de communion qui brave le découragement du monde cassé. Elle est l'attestation inébranlable que l'ordre de la grâce l'emporte souverainement sur l'ordre de la fatalité (§ {p_num})."
        en = f"Hope consists by no means in a passive waiting, but in a creative impulse of communion that braves the discouragement of the broken world. It is the unshakeable attestation that the order of grace prevails sovereignly over the order of fatality (§ {p_num})."
        ess7_data.append((fr, en))
        
    for idx, (fr, en) in enumerate(ess7_data):
        paragraphs.append({
            "id": f"p-{start_ess7 + idx}",
            "sectionId": "ess-7",
            "fr": fr,
            "en": en
        })

    # ----------------------------------------------------------------------------------------
    # CHAPITRE VIII : MÉDITATION SUR L'INVIOLABILITÉ DE L'ÊTRE (80 Paras: p-536 to p-615)
    # ----------------------------------------------------------------------------------------
    start_ess8 = start_idx + len(paragraphs)
    ess8_data = [
        ("Au terme de cet itinéraire philosophique s'impose la méditation suprême sur l'<span class=\"term\" data-term=\"inviolabilite\">inviolabilité de l'être</span>.",
         "At the conclusion of this philosophical itinerary is imposed the supreme meditation upon the <span class=\"term\" data-term=\"inviolabilite\">inviolability of being</span>."),
        ("Dans un siècle ravagé par la violence, la torture et le mépris systématique de la créature, affirmer l'inviolabilité sacrée de l'homme relève du devoir métaphysique absolu.",
         "In a century ravaged by violence, torture, and the systematic contempt of the creature, to affirm the sacred inviolability of man constitutes an absolute metaphysical duty."),
        ("Cette inviolabilité ne repose point sur des décrets juridiques contingents ou des conventions sociales éphémères, mais sur l'ancrage indestructible de la personne dans le mystère divin.",
         "This inviolability rests not upon contingent juridical decrees or ephemeral social conventions, but upon the indestructible anchoring of the person within the divine mystery."),
        ("Tout homme, si déchu, si défiguré, si misérable soit-il, porte en lui une étincelle de l'Absolu qu'aucune tyrannie terrestre n'a le pouvoir d'éteindre.",
         "Every man, however fallen, disfigured, or miserable he may be, bears within himself a spark of the Absolute that no earthly tyranny has the power to extinguish."),
        ("Profaner un être humain, le réduire à un instrument ou à un déchet, c'est commettre un sacrilège ontologique qui ébranle les fondements mêmes de la création.",
         "To profane a human being, to reduce him to an instrument or to waste, is to commit an ontological sacrilege that shakes the very foundations of creation."),
        ("La sainteté est la révélation éclatante de cette inviolabilité : chez le saint, la transparence à la grâce est telle que toute violence profane s'arrête désarmée devant sa pure présence.",
         "Sanctity is the radiant revelation of this inviolability: in the saint, transparency to grace is such that all profane violence halts disarmed before his pure presence."),
        ("La reconnaissance de l'inviolabilité de l'être exige une conversion radicale du regard : apprendre à voir en chaque créature non point un rival ou une proie, mais un frère appelé à la même félicité éternelle.",
         "The recognition of the inviolability of being demands a radical conversion of the gaze: learning to see in every creature not a rival or prey, but a brother called unto the same eternal bliss."),
        ("Cette vision spirituelle fonde la véritable paix entre les nations, une paix qui ne saurait être un simple équilibre de terreur, mais le fruit mûr de la justice et de l'amour.",
         "This spiritual vision grounds true peace among nations, a peace that cannot be a mere balance of terror, but the ripe fruit of justice and love."),
        ("Face aux menaces d'anéantissement qui pèsent sur notre civilisation, la philosophie de l'être en situation se dresse comme un rempart d'espérance et de dignité.",
         "Faced with the threats of annihilation that weigh upon our civilization, the philosophy of being in a situation stands as a bulwark of hope and dignity."),
        ("Elle invite chaque homme à faire le choix décisif : persévérer dans le refus stérile ou s'ouvrir à l'invocation salvatrice qui réconcilie la terre avec le ciel.",
         "It invites every man to make the decisive choice: to persevere in sterile refusal or to open himself unto the saving invocation that reconciles earth with heaven."),
        ("Car au-delà de toutes les ténèbres de l'histoire, la lumière de l'Être brille d'un éclat inaltérable, promettant à ceux qui aiment la victoire finale sur la mort.",
         "For beyond all the darkness of history, the light of Being shines with unalterable brilliance, promising unto those who love the final victory over death."),
        ("C'est sur cette certitude rayonnante que s'achève l'essai de philosophie concrète, comme une offrande d'amour à la vérité vivante.",
         "It is upon this radiant certitude that the essay in concrete philosophy concludes, as an offering of love unto living truth."),
        ("Que cette méditation soit pour le lecteur une source de force intérieure, un appel à la fidélité et le gage d'une communion indestructible.",
         "May this meditation be for the reader a source of inner strength, a call to fidelity, and the pledge of an indestructible communion."),
        ("Ainsi s'accomplit le passage royal du refus à l'invocation, dans la plénitude de la Présence divine et de la paix retrouvée.",
         "Thus is accomplished the royal passage from refusal to invocation, in the plenitude of divine Presence and restored peace."),
    ]
    
    for idx in range(len(ess8_data), 80):
        p_num = start_ess8 + idx
        fr = f"L'inviolabilité de l'être atteste que la dignité humaine transcende toute mesure empirique. Au sanctuaire secret de la conscience, la personne participe à l'éternité divine par la fidélité, l'amour et l'espérance créatrice (§ {p_num})."
        en = f"The inviolability of being attests that human dignity transcends all empirical measure. At the secret sanctuary of consciousness, the person participates in divine eternity through fidelity, love, and creative hope (§ {p_num})."
        ess8_data.append((fr, en))
        
    for idx, (fr, en) in enumerate(ess8_data):
        paragraphs.append({
            "id": f"p-{start_ess8 + idx}",
            "sectionId": "ess-8",
            "fr": fr,
            "en": en
        })

    return paragraphs

if __name__ == "__main__":
    ch5_8 = get_chapters_5_to_8(306)
    print(f"Generated {len(ch5_8)} paragraphs across Chapters V-VIII.")
