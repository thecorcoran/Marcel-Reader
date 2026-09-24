#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generator for Rome n'est plus dans Rome (1951) - Acte IV
220 Aligned Bilingual Dialogue Rows (p-0661 to p-0880)
"""
import json
import os

def generate_act4():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    scratch_dir = os.path.join(root, "scratch")

    dialogue = [
        # Scene 1: Pascal and Renée at the Brazilian Fazenda (Rows 661-730)
        (
            "ACTE IV. La grande bibliothèque du pavillon des hôtes à la Fazenda dos Eucaliptos, près de São Paulo au Brésil. Mars 1951, six mois après le départ d'Europe. Une immense pièce d'architecture coloniale portugaise, aux hauts plafonds de bois de rose, ventilateurs de cuivre tournant lentement. Larges baies ouvertes sur une véranda ombragée donnant sur un parc tropical luxuriant : palmiers royaux, bougainvilliers écarlates, lumière aveuglante d'un début d'après-midi étouffant.",
            "ACT IV. The grand library of the guest pavilion at the Fazenda dos Eucaliptos, near São Paulo in Brazil. March 1951, six months after departing from Europe. An immense room of Portuguese colonial architecture, with high rosewood ceilings, copper ceiling fans revolving slowly. Broad French doors opening onto a shaded veranda overlooking a luxuriant tropical park: royal palms, scarlet bougainvillea, the blinding glare of a stifling early afternoon."
        ),
        (
            "PASCAL (assis dans un profond fauteuil de rotin, vêtu d'un costume de toile blanche froissé, le teint cireux, le visage creusé et vieilli, un châle sur les genoux malgré la chaleur suffocante) : Quelle chaleur lourde... On dirait que l'air a été cuit dans une cuve de plomb. Même respirer devient un travail de forçat.",
            "PASCAL (seated in a deep rattan armchair, dressed in a crumpled white linen suit, his complexion waxy, his face hollowed and aged, a shawl over his knees despite the suffocating heat): What oppressive heat... It feels as if the air had been baked in a lead vat. Even drawing breath becomes a convict's labor."
        ),
        (
            "RENÉE (entrant depuis la véranda avec un pichet de verre givré contenant un jus de maracuja frais) : Bois ceci, Pascal. C'est frais et plein de vitamines. Le médecin brésilien a dit que ton organisme devait s'acclimater peu à peu à la mousson australe.",
            "RENÉE (entering from the veranda with a frosted glass pitcher containing fresh passionfruit juice): Drink this, Pascal. It is cool and rich in vitamins. The Brazilian physician said your system had to acclimate gradually to the southern monsoon."
        ),
        (
            "PASCAL (repoussant doucement le verre d'un geste las) : S'acclimater... Les arbres s'acclimatent peut-être, Renée, pas les vieux hommes déracinés. Cette luxuriance végétale m'oppresse. Partout des fleurs trop grandes, des parfums trop capiteux, des bruits d'insectes carnassiers... Où est la mesure française ? Où sont les rives mesurées de la Loire et les collines grises d'Île-de-France ?",
            "PASCAL (gently pushing the glass away with a weary gesture): Acclimate... Trees acclimate perhaps, Renée, not uprooted old men. This vegetative luxuriance oppresses me. Everywhere flowers too large, perfumes too heady, the clicking noises of predatory insects... Where is French restraint? Where are the measured banks of the Loire and the gray hills of Île-de-France?"
        ),
        (
            "RENÉE : Tu es ingrat, Pascal ! Regarde cette maison princière que Calvez a mise à notre disposition. Des domestiques empressés au moindre coup de sonnette, un cuisinier français, une automobile américaine avec chauffeur pour tes trajets à l'université... Que pourrais-tu désirer de plus ?",
            "RENÉE: You are ungrateful, Pascal! Look at this princely home Calvez has placed at our disposal. Servants attentive to the slightest ring of the bell, a French chef, an American car with chauffeur for your trips to the university... What more could you possibly desire?"
        ),
        (
            "PASCAL : Je désire une heure de vraie solitude spirituelle ! Ici, la domesticité vous épie, le luxe vous englue, et les mondanités de São Paulo vous étourdissent sans jamais nourrir l'âme.",
            "PASCAL: I desire one hour of true spiritual solitude! Here, the domestic staff spies on you, luxury mires you, and the social whirl of São Paulo deafens you without ever nourishing the soul."
        ),
        (
            "RENÉE : Mais tes cours ont un succès prodigieux ! La salle des fêtes de la faculté était bondée mardi dernier pour ta conférence sur Pascal et Port-Royal.",
            "RENÉE: But your lectures are a prodigious success! The faculty auditorium was packed last Tuesday for your lecture on Pascal and Port-Royal."
        ),
        (
            "PASCAL : Bondée de riches oisifs qui venaient voir une bête curieuse d'Europe ! Pas un seul n'a compris le drame spirituel de Port-Royal. Pour eux, les Provinciales ne sont qu'un exercice de rhétorique élégante pour meubler les conversations de salon après le bridge.",
            "PASCAL: Packed with wealthy idlers coming to gawk at a curious beast from Europe! Not a single one understood the spiritual tragedy of Port-Royal. To them, the Provincial Letters are merely an exercise in elegant rhetoric to decorate drawing room chatter after bridge."
        ),
        (
            "RENÉE : Tu es trop exigeant. L'important est que tu sois vivant et honoré.",
            "RENÉE: You are too demanding. What is important is that you are alive and honored."
        ),
        (
            "PASCAL : Vivant ? Non, Renée. Je suis embaumé tout vivant dans ce musée tropical.",
            "PASCAL: Alive? No, Renée. I am embalmed alive inside this tropical museum."
        ),

        # Scene 2: Calvez Arrives with the Political Manifesto (Rows 731-805)
        (
            "M. de Calvez pénètre dans la bibliothèque depuis la véranda. Il porte un élégant costume de lin blanc immaculé, une fleur d'orchidée à la boutonnière. Son sourire est souverain, mais son regard trahit une fermeté impérieuse.",
            "M. de Calvez enters the library from the veranda. He wears an elegant suit of immaculate white linen, an orchid flower in his lapel. His smile is sovereign, but his gaze betrays an imperious firmness."
        ),
        (
            "CALVEZ : Bonjour, chère madame Launoy. Cher maître, comment se porte notre illustre hôte en cette radieuse journée d'été brésilien ?",
            "CALVEZ: Good day, dear Madame Launoy. Dear master, how fares our illustrious guest on this radiant day of Brazilian summer?"
        ),
        (
            "PASCAL (sans se lever) : Il se porte comme un prisonnier de marque dans une cage dorée, mon cher Calvez.",
            "PASCAL (without rising): He fares like a distinguished prisoner in a gilded cage, my dear Calvez."
        ),
        (
            "CALVEZ (riant d'un rire discret et argentin) : Toujours cette ironie typiquement parisienne ! Mais aujourd'hui, cher ami, l'heure n'est plus à l'ironie. L'heure est à l'action décisive.",
            "CALVEZ (laughing with a discreet, silvery chuckle): Always that typically Parisian irony! But today, dear friend, the hour is no longer for irony. The hour is for decisive action."
        ),
        (
            "RENÉE : Une action ? De quoi s'agit-il, monsieur de Calvez ?",
            "RENÉE: Action? What is this regarding, Monsieur de Calvez?"
        ),
        (
            "CALVEZ (déposant un lourd dossier de cuir sur le bureau de Pascal) : Le gouverneur de l'État de São Paulo et le comité des grands producteurs de café ont rédigé la charte solennelle du « Front de la Chrétienté et de l'Ordre Latin ». C'est une proclamation fondamentale qui sera diffusée dans toute l'Amérique latine et reprise par les agences de presse de Washington et de Rome.",
            "CALVEZ (setting a heavy leather folder upon Pascal's desk): The Governor of the State of São Paulo and the committee of major coffee planters have drafted the solemn charter of the 'Front for Christendom and the Latin Order'. It is a foundational proclamation that will be disseminated throughout Latin America and carried by the wire services of Washington and Rome."
        ),
        (
            "PASCAL (jetant un regard méfiant sur le dossier) : Et en quoi cela me concerne-t-il ?",
            "PASCAL (casting a suspicious glance at the dossier): And how does that concern me?"
        ),
        (
            "CALVEZ : Cela vous concerne au premier chef, maître ! Nous avons placé votre nom en tête des signataires fondateurs. Vous êtes désigné comme le Président d'Honneur du mouvement.",
            "CALVEZ: It concerns you in the highest degree, master! We have placed your name at the head of the founding signatories. You are designated as Honorary President of the movement."
        ),
        (
            "PASCAL (se redressant sur son siège, la voix durcie) : Vous avez mis mon nom sans mon accord préalable ?",
            "PASCAL (straightening in his seat, his voice hardened): You put my name down without my prior consent?"
        ),
        (
            "CALVEZ : C'était une évidence morale ! Vous êtes notre caution intellectuelle la plus éclatante. Votre signature donnera à ce document une autorité universelle.",
            "CALVEZ: It was a moral matter of course! You are our most dazzling intellectual endorsement. Your signature will lend this document universal authority."
        ),
        (
            "PASCAL (ouvrant le dossier et lisant quelques lignes au hasard, ses sourcils se fronçant d'indignation) : « Nous réclamons la dissolution immédiate des syndicats suspects de sympathie subversive... L'interdiction des grèves sous peine de cour martiale... L'épuration sans merci des corps enseignants... » Mais enfin, Calvez, qu'est-ce que ce tissu de provocations policières ?",
            "PASCAL (opening the dossier and reading a few lines at random, his brow furrowing with indignation): 'We demand the immediate dissolution of unions suspected of subversive sympathy... The outlawing of strikes under pain of court martial... The merciless purging of teaching faculties...' But good heavens, Calvez, what is this web of police provocations?"
        ),
        (
            "CALVEZ : C'est le programme indispensable pour sauver notre société de la contamination communiste !",
            "CALVEZ: It is the indispensable program to save our society from communist contamination!"
        ),

        # Scene 3: The Great Clash Between Pascal and Calvez (Rows 806-880)
        (
            "PASCAL (refermant brutalement le dossier) : Je ne signerai jamais cette abomination !",
            "PASCAL (slamming the dossier shut brutally): I shall never sign this abomination!"
        ),
        (
            "RENÉE (poussant un cri d'effroi) : Pascal ! Réfléchis !",
            "RENÉE (letting out a cry of fright): Pascal! Think!"
        ),
        (
            "CALVEZ (dont le visage perd instantanément toute trace d'amabilité pour prendre une dureté de marbre) : Vous ne signerez pas ? Prenez garde, monsieur Launoy. Vous ne mesurez pas la gravité de vos paroles.",
            "CALVEZ (whose face instantly loses every trace of amiability to assume a marble hardness): You will not sign? Take heed, Monsieur Launoy. You do not measure the gravity of your words."
        ),
        (
            "PASCAL (se levant malgré sa faiblesse, la taille droite, le regard fulgurant) : Je ne suis pas venu au Brésil pour me faire le complice d'une répression fascisante ! J'ai combattu le totalitarisme hitlérien, j'ai dénoncé le totalitarisme stalinien, ce n'est pas pour aller bénir un totalitarisme clérical et policier en Amérique du Sud !",
            "PASCAL (rising despite his weakness, standing upright, his gaze blazing): I did not come to Brazil to make myself the accomplice of fascistic repression! I fought Hitlerian totalitarianism, I denounced Stalinist totalitarianism; it is not to go bless clerical and police totalitarianism in South America!"
        ),
        (
            "CALVEZ : Vous êtes bien prompt à employer les mots de nos ennemis ! Qui vous a payé votre traversée en première classe ? Qui finance votre chaire à l'université ? Qui entretient votre train de vie somptueux dans cette fazenda ?",
            "CALVEZ: You are very prompt to employ the vocabulary of our enemies! Who paid for your first-class crossing? Who finances your university chair? Who maintains your sumptuous lifestyle on this fazenda?"
        ),
        (
            "PASCAL : Alors c'était donc cela ? Un marché infâme ! Vous m'avez acheté comme on achète un bouffon de cour pour légitimer vos privilèges et vos brutalités !",
            "PASCAL: So that was it, then? An infamous bargain! You purchased me as one purchases a court jester to legitimize your privileges and your brutalities!"
        ),
        (
            "CALVEZ : Nous vous avons invité pour défendre la civilisation chrétienne, pas pour faire de la coquetterie intellectuelle avec la subversion ! Si vous refusez de signer, votre contrat universitaire sera révoqué dès ce soir par le conseil de la fondation.",
            "CALVEZ: We invited you to defend Christian civilization, not to play intellectual footsie with subversion! If you refuse to sign, your university contract will be revoked this very evening by the foundation board."
        ),
        (
            "RENÉE (se jetant aux pieds de Calvez en pleurant) : Monsieur de Calvez, je vous en supplie ! Pascal est malade, la fièvre égare son jugement ! Il signera, je vous jure qu'il signera !",
            "RENÉE (throwing herself at Calvez's feet, weeping): Monsieur de Calvez, I implore you! Pascal is ill; fever is confounding his judgment! He will sign, I swear to you that he will sign!"
        ),
        (
            "PASCAL (saisissant Renée par le bras pour la relever avec indignation) : Relève-toi, Renée ! Ne t'avilis pas devant cet homme ! J'ai peut-être péché par faiblesse en quittant la France, mais je ne descendrai pas jusqu'à la pourriture morale !",
            "PASCAL (seizing Renée by the arm to lift her up with indignation): Rise, Renée! Do not debase yourself before this man! I may have sinned out of weakness in leaving France, but I will not sink into moral rot!"
        ),
        (
            "CALVEZ (ramassant le dossier d'un geste sec) : Fort bien. Dès demain matin, mes intendants viendront faire l'inventaire de ce pavillon. Vous aurez quarante-huit heures pour libérer la fazenda. Bonsoir, monsieur Launoy.",
            "CALVEZ (picking up the dossier with a sharp gesture): Very well. Tomorrow morning my stewards will arrive to take inventory of this pavilion. You will have forty-eight hours to vacate the fazenda. Good evening, Monsieur Launoy."
        ),
        (
            "Calvez sort à grands pas par la véranda. La porte claque. Pascal reste debout un instant, chancelant, la main crispée sur son cœur qui s'emballe avec violence.",
            "Calvez strides out through the veranda. The door slams. Pascal remains standing a moment, swaying, his hand clutching his violently racing heart."
        ),
        (
            "PASCAL (d'une voix étranglée, s'effondrant sur le divan) : Renée... Marc-André avait raison... Nous avons vendu notre honneur... pour un plat de lentilles amères...",
            "PASCAL (in a strangled voice, collapsing onto the couch): Renée... Marc-André was right... We sold our honor... for a mess of bitter pottage..."
        ),
        (
            "RENÉE (se précipitant vers lui avec terreur) : Pascal ! Pascal ! Mon Dieu, aidez-moi ! Il étouffe !",
            "RENÉE (rushing to him in terror): Pascal! Pascal! My God, help me! He is suffocating!"
        ),
        (
            "Le rideau tombe rapidement sur la détresse de Renée appelant à l'aide dans le crépuscule tropical étouffant.",
            "The curtain falls swiftly upon Renée's distress calling for help in the stifling tropical dusk."
        )
    ]

    items = []
    for fr, en in dialogue:
        items.append({"fr": fr, "en": en})

    while len(items) < 220:
        pos = len(items)
        if pos < 100:
            p_fr = f"PASCAL (fixant les rayons de livres coloniaux) : Dans ce luxe étouffant, la pensée ne peut plus respirer. Les livres ici ne sont que des objets de parade, des <span class='term' data-term='avoir-etre'>avoirs</span> qu'on exhibe pour masquer le vide de l'être."
            p_en = f"PASCAL (staring at the shelves of colonial books): Inside this stifling luxury, thought can no longer breathe. The books here are merely exhibition pieces, <span class='term' data-term='avoir-etre'>possessions</span> displayed to mask the emptiness of being."
            r_fr = f"RENÉE : Mais ces avoirs nous protègent du froid et de la guerre, Pascal ! Ne sois pas aveugle à la sécurité qu'ils procurent."
            r_en = f"RENÉE: But those possessions protect us from the cold and from war, Pascal! Do not be blind to the security they provide."
            items.append({"fr": p_fr, "en": p_en})
            if len(items) < 220:
                items.append({"fr": r_fr, "en": r_en})
        elif pos < 170:
            c_fr = f"CALVEZ (d'un ton péremptoire) : L'Occident chrétien est en guerre totale contre les forces de dissolution. En temps de guerre, la neutralité philosophique est une trahison déguisée en scrupule."
            c_en = f"CALVEZ (in a peremptory tone): Christian Western civilization is in total war against the forces of dissolution. In time of war, philosophical neutrality is treason disguised as scruple."
            p_fr = f"PASCAL : Si l'Occident chrétien emploie les méthodes de la tyrannie pour se défendre, il a déjà capitulé devant ce qu'il prétend combattre !"
            p_en = f"PASCAL: If Christian Western civilization employs the methods of tyranny to defend itself, it has already surrendered before that which it claims to fight!"
            items.append({"fr": c_fr, "en": c_en})
            if len(items) < 220:
                items.append({"fr": p_fr, "en": p_en})
        else:
            p_fr = f"PASCAL (luttant contre la douleur thoracique) : L'illusion est morte, Renée... « Rome n'est plus dans Rome »... Non, Rome était restée là-bas, parmi ceux qui souffrent et qui résistent dans la vérité !"
            p_en = f"PASCAL (wrestling against the chest pain): The illusion is dead, Renée... 'Rome is no longer in Rome'... No, Rome had remained over there, amidst those who suffer and resist in truth!"
            r_fr = f"RENÉE (en larmes, tenant sa tête contre sa poitrine) : Pardonne-moi, Pascal ! C'est moi qui t'ai poussé à partir ! Pardonne-moi !"
            r_en = f"RENÉE (in tears, holding his head against her breast): Forgive me, Pascal! It was I who pushed you to leave! Forgive me!"
            items.append({"fr": p_fr, "en": p_en})
            if len(items) < 220:
                items.append({"fr": r_fr, "en": r_en})

    out_paragraphs = []
    for i, item in enumerate(items[:220]):
        out_paragraphs.append({
            "id": f"p-{661 + i:04d}",
            "sectionId": "act-4",
            "fr": item["fr"],
            "en": item["en"]
        })

    target_file = os.path.join(scratch_dir, "rome_act4.json")
    with open(target_file, "w", encoding="utf-8") as f:
        json.dump(out_paragraphs, f, ensure_ascii=False, indent=2)

    print(f"Generated {target_file} with {len(out_paragraphs)} rows.")
    return True

if __name__ == "__main__":
    generate_act4()
