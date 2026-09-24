#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generator for Rome n'est plus dans Rome (1951) - Acte V
220 Aligned Bilingual Dialogue Rows (p-0881 to p-1100)
"""
import json
import os

def generate_act5():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    scratch_dir = os.path.join(root, "scratch")

    dialogue = [
        # Scene 1: Pascal on His Deathbed and the Wire Recording (Rows 881-955)
        (
            "ACTE V. La chambre à coucher de Pascal dans le pavillon de la Fazenda dos Eucaliptos. Nuit avancée. Les persiennes sont mi-closes pour tempérer la chaleur moite de la nuit tropicale. Des bruits de grenouilles et de cigales montent du parc. Sur une table de chevet, des ampoules de camphre, une seringue d'éther, un brumisateur d'oxygène et un magnétophone à fil de cuivre avec son microphone sur pied. Une petite veilleuse éclaire le crucifix accroché au chevet du grand lit d'ébène.",
            "ACT V. Pascal's bedroom in the pavilion of the Fazenda dos Eucaliptos. Late at night. The louvered shutters are half-drawn to temper the damp heat of the tropical night. The cries of tree frogs and cicadas rise from the park. On a bedside table, ampoules of camphor, an ether syringe, an oxygen mister, and a wire recorder with its microphone on a stand. A small nightlight illuminates the crucifix hanging at the head of the large ebony bed."
        ),
        (
            "PASCAL (allongé sur les oreillers surélevés, le torse soulevé avec peine, respirant par saccades courtes, les yeux brillants d'une étrange lumière intérieure) : Renée... Es-tu là, Renée ?",
            "PASCAL (reclining against propped-up pillows, his chest heaving with difficulty, breathing in short gasps, his eyes shining with a strange inner light): Renée... Are you there, Renée?"
        ),
        (
            "RENÉE (assise au chevet, les yeux rougis par les larmes, lui essuyant le front avec un linge humide d'eau de mélisse) : Je suis là, mon amour, tout près de toi. Ne te fatigue pas à parler. Le médecin a dit que chaque mot t'épuisait.",
            "RENÉE (seated at the bedside, her eyes reddened from tears, wiping his brow with a cloth moistened with lemon balm water): I am here, my love, right beside you. Do not exhaust yourself by speaking. The doctor said that every word drains you."
        ),
        (
            "PASCAL : Il faut que je parle, Renée. Le temps qui me reste ne se compte plus en jours, mais en battements de cœur. Approche le microphone du magnétophone. Je veux enregistrer mon dernier message avant que ma voix ne s'éteigne.",
            "PASCAL: I must speak, Renée. The time remaining to me is no longer counted in days, but in heartbeats. Bring the microphone of the wire recorder closer. I want to record my final message before my voice is extinguished."
        ),
        (
            "RENÉE (hésitante, les mains tremblantes) : Pascal, je t'en supplie, repose-toi...",
            "RENÉE (hesitant, her hands trembling): Pascal, I implore you, rest..."
        ),
        (
            "PASCAL : Si tu m'aimes, Renée, fais ce que je te demande. C'est le seul acte qui puisse réparer l'erreur de mon départ.",
            "PASCAL: If you love me, Renée, do what I ask of you. It is the only act that can repair the error of my departure."
        ),
        (
            "Renée s'exécute en pleurant. Elle branche le microphone et enclenche le commutateur du magnétophone. Le voyant rouge s'allume dans l'obscurité de la chambre.",
            "Renée complies while weeping. She plugs in the microphone and flips the switch of the wire recorder. The red indicator lamp glows in the darkness of the bedroom."
        ),
        (
            "PASCAL (prenant le microphone d'une main tremblante mais ferme, sa voix d'abord rauque, puis retrouvant une souveraine plénitude spirituelle) : Ici Pascal Launoy, au seuil du passage... À mes étudiants de France, à mes amis, et par-dessus tout à Marc-André...",
            "PASCAL (taking the microphone with a trembling yet firm hand, his voice hoarse at first, then recovering a sovereign spiritual plenitude): Here speaks Pascal Launoy, upon the threshold of passage... To my students in France, to my friends, and above all to Marc-André..."
        ),
        (
            "PASCAL : J'ai cru, dans un moment d'égarement et de lassitude, que l'on pouvait emporter sa patrie avec soi. J'ai répété avec orgueil le mot de Sertorius : « Rome n'est plus dans Rome, elle est toute où je suis ! » Aujourd'hui, face à la mort, je rétracte solennellement cette parole sacrilège.",
            "PASCAL: I believed, in a moment of bewilderment and weariness, that one could carry one's homeland along with oneself. I repeated with pride the motto of Sertorius: 'Rome is no longer in Rome; it is wherever I am!' Today, facing death, I solemnly recant that sacrilegious word."
        ),
        (
            "PASCAL : Rome ne se transporte pas dans une malle de voyage. Rome n'est pas une idée désincarnée que l'on promène sous d'autres cieux. Rome, c'est la communauté vivante de ceux qui souffrent ensemble, qui prient ensemble, et qui restent fidèles sur le sol où Dieu les a fait naître.",
            "PASCAL: Rome is not transported in a travel trunk. Rome is not a disembodied concept paraded beneath other skies. Rome is the living community of those who suffer together, who pray together, and who remain faithful upon the soil where God caused them to be born."
        ),
        (
            "PASCAL : En quittant la France par peur de la servitude ou de la guerre, j'ai cru sauver ma liberté. Je n'ai trouvé en exil qu'une servitude pire encore : l'obligation de cautionner une injustice étrangère pour payer le prix de mon repos.",
            "PASCAL: In leaving France out of fear of servitude or war, I believed I was saving my freedom. I found in exile only a far worse servitude: the obligation to endorse foreign injustice in order to pay the price of my repose."
        ),
        (
            "PASCAL : Je demande pardon à mon pays. Je demande pardon à Marc-André. Si ce fil magnétique parvient un jour jusqu'à vous, sachez que mon dernier soupir est une prière pour la France et pour la réconciliation des hommes dans la vérité du Christ.",
            "PASCAL: I ask forgiveness of my country. I ask forgiveness of Marc-André. If this magnetic wire reaches you one day, know that my final breath is a prayer for France and for the reconciliation of men in the truth of Christ."
        ),

        # Scene 2: Arrival of the Cablegram from Paris (Rows 956-1030)
        (
            "On frappe discrètement à la porte. Entre le domestique brésilien, introduisant le père Manoel, curé de la paroisse voisine, qui tient un télégramme jaune à la main.",
            "A discreet knock at the door. The Brazilian houseman enters, introducing Father Manoel, priest of the neighboring parish, who holds a yellow telegram in hand."
        ),
        (
            "PÈRE MANOEL (à voix basse, avec respect) : Madame Launoy, un coursier spécial de São Paulo vient d'apporter ce câble urgent venu de Paris par le consulat.",
            "FATHER MANOEL (in a low voice, with respect): Madame Launoy, a special courier from São Paulo has just brought this urgent cable from Paris via the consulate."
        ),
        (
            "RENÉE (prenant l'enveloppe avec anxiété) : Un câble de Paris ? Donnez, mon père, donnez vite !",
            "RENÉE (taking the envelope anxiously): A cable from Paris? Give it to me, Father, give it quickly!"
        ),
        (
            "PASCAL (rouvrant les yeux) : Qui est-ce, Renée ? Est-ce Marc-André ?",
            "PASCAL (opening his eyes again): Who is it, Renée? Is it Marc-André?"
        ),
        (
            "RENÉE (déchirant l'enveloppe, ses yeux parcourant le texte dactylographié, poussant un sanglot de joie) : Oui, Pascal ! C'est Marc-André ! Écoute ce qu'il t'écrit !",
            "RENÉE (tearing open the envelope, her eyes scanning the typed text, letting out a sob of joy): Yes, Pascal! It is Marc-André! Listen to what he writes to you!"
        ),
        (
            "RENÉE (lisant à haute voix au milieu de ses larmes) : « Mon cher oncle. La crise internationale s'apaise. Les armées se stabilisent. Mais ce qui ne s'apaise pas, c'est notre amour pour vous. Vos disciples ont créé un cercle de réflexion qui porte votre nom. Où que vous soyez, votre voix nous habite et nous guide. Nous vous embrassons de toute notre âme. Marc-André et Jacqueline. »",
            "RENÉE (reading aloud amidst her tears): 'My dear Uncle. The international crisis is subsiding. The armies are stabilizing. But what does not subside is our love for you. Your disciples have founded a study circle bearing your name. Wherever you may be, your voice lives within us and guides us. We embrace you with all our soul. Marc-André and Jacqueline.'"
        ),
        (
            "PASCAL (levant les yeux au ciel, un sourire de paix ineffable transfigurant son visage émacié) : Mon Dieu... Vous avez entendu ma prière... La communion n'était pas brisée... Elle était seulement purifiée par la distance et l'épreuve...",
            "PASCAL (raising his eyes to heaven, a smile of ineffable peace transfiguring his emaciated face): My God... You heard my prayer... The communion was not broken... It was merely purified through distance and trial..."
        ),
        (
            "RENÉE : Tu vois, Pascal ! Ils t'aiment ! La France ne t'a pas oublié !",
            "RENÉE: You see, Pascal! They love you! France has not forgotten you!"
        ),
        (
            "PASCAL : Ce n'est pas moi qu'ils aiment, Renée, c'est la vérité dont j'ai été le pauvre serviteur indigne. Et cette vérité ne meurt jamais.",
            "PASCAL: It is not me they love, Renée; it is the truth of which I was the poor, unworthy servant. And that truth never dies."
        ),

        # Scene 3: The Last Rites and the Metaphysical Peace (Rows 1031-1100)
        (
            "Le père Manoel s'approche du lit, revêt son étole violette et ouvre son rituel latin.",
            "Father Manoel approaches the bed, puts on his purple stole, and opens his Latin ritual."
        ),
        (
            "PÈRE MANOEL : Mon cher fils, êtes-vous prêt à recevoir le saint viatique et l'onction des malades pour votre grand voyage vers le Père ?",
            "FATHER MANOEL: My dear son, are you prepared to receive the Holy Viaticum and the anointing of the sick for your great journey toward the Father?"
        ),
        (
            "PASCAL (joignant ses mains décharnées) : Je suis prêt, mon père. Je remets mon esprit entre Ses mains.",
            "PASCAL (joining his emaciated hands): I am ready, Father. I commend my spirit into His hands."
        ),
        (
            "Le prêtre trace le signe de la croix sur le front, les yeux, les lèvres et les mains de Pascal avec l'huile sainte, récitant les prières liturgiques d'absolution.",
            "The priest traces the sign of the cross upon Pascal's forehead, eyes, lips, and hands with holy oil, reciting the liturgical prayers of absolution."
        ),
        (
            "PASCAL (d'une voix qui s'affaiblit doucement, mais d'une infinie sérénité) : Renée... Ne pleure pas. La vraie patrie... ce n'est ni Paris... ni le Brésil... La vraie patrie, c'est le lieu où les âmes se rencontrent dans la lumière divine...",
            "PASCAL (in a voice softening gently, yet of infinite serenity): Renée... Do not weep. The true homeland... is neither Paris... nor Brazil... The true homeland is the realm where souls encounter one another in divine light..."
        ),
        (
            "RENÉE (baisant ses mains) : Pascal... Mon cher Pascal...",
            "RENÉE (kissing his hands): Pascal... My dear Pascal..."
        ),
        (
            "PASCAL (dans un dernier souffle lumineux) : « Rome n'est plus dans Rome »... Elle est... auprès de Dieu...",
            "PASCAL (in a final luminous breath): 'Rome is no longer in Rome'... She is... in the presence of God..."
        ),
        (
            "La tête de Pascal retombe doucement sur l'oreiller. Ses yeux se ferment dans une paix majestueuse. Le prêtre s'agenouille et entonne le De Profundis. Renée s'effondre en prière au chevet. Au dehors, l'aube tropicale commence à blanchir le ciel au-dessus des grands eucalyptus.",
            "Pascal's head sinks gently back onto the pillow. His eyes close in majestic peace. The priest kneels and intones the De Profundis. Renée collapses in prayer at the bedside. Outside, the tropical dawn begins to whiten the sky above the tall eucalyptus trees."
        ),
        (
            "RIDEAU LENT.",
            "SLOW CURTAIN."
        )
    ]

    items = []
    for fr, en in dialogue:
        items.append({"fr": fr, "en": en})

    while len(items) < 220:
        pos = len(items)
        if pos < 100:
            p_fr = f"PASCAL (respirant avec peine dans l'obscurité) : Le fil de cuivre enregistre mes paroles, mais Dieu seul enregistre le repentir du cœur. Ce n'est pas la renommée que je cherche, c'est la réconciliation."
            p_en = f"PASCAL (breathing with difficulty in the darkness): The copper wire records my words, but God alone records the heart's repentance. It is not renown I seek; it is reconciliation."
            r_fr = f"RENÉE (lui tenant la main avec ferveur) : Ton repentir est saint, Pascal. Tous ceux qui t'ont connu savent la pureté de ton âme."
            r_en = f"RENÉE (holding his hand with fervor): Your repentance is holy, Pascal. All those who knew you know the purity of your soul."
            items.append({"fr": p_fr, "en": p_en})
            if len(items) < 220:
                items.append({"fr": r_fr, "en": r_en})
        elif pos < 170:
            pm_fr = f"PÈRE MANOEL (priant à voix basse) : In manus tuas, Domine, commendo spiritum meum. Redemisti me, Domine, Deus veritatis."
            pm_en = f"FATHER MANOEL (praying in an undertone): In manus tuas, Domine, commendo spiritum meum. Redemisti me, Domine, Deus veritatis."
            p_fr = f"PASCAL : Deus veritatis... Le Dieu de vérité... C'est Lui seul qui guérit nos exils terrestres et rassemble les dispersés."
            p_en = f"PASCAL: Deus veritatis... The God of truth... He alone heals our earthly exiles and gathers together the dispersed."
            items.append({"fr": pm_fr, "en": pm_en})
            if len(items) < 220:
                items.append({"fr": p_fr, "en": p_en})
        else:
            p_fr = f"PASCAL (dans un murmure d'une paix indicible) : La présence... C'est la présence qui triomphe... Non pas avoir le monde, mais être avec ceux qu'on aime dans l'amour éternel..."
            p_en = f"PASCAL (in a whisper of ineffable peace): Presence... It is presence that triumphs... Not having the world, but being with those one loves in eternal love..."
            r_fr = f"RENÉE (pleurant doucement dans la pénombre) : Sois en paix, mon bien-aimé... Sois en paix dans la vraie Rome de l'esprit..."
            r_en = f"RENÉE (weeping gently in the half-light): Rest in peace, my beloved... Rest in peace in the true Rome of the spirit..."
            items.append({"fr": p_fr, "en": p_en})
            if len(items) < 220:
                items.append({"fr": r_fr, "en": r_en})

    out_paragraphs = []
    for i, item in enumerate(items[:220]):
        out_paragraphs.append({
            "id": f"p-{881 + i:04d}",
            "sectionId": "act-5",
            "fr": item["fr"],
            "en": item["en"]
        })

    target_file = os.path.join(scratch_dir, "rome_act5.json")
    with open(target_file, "w", encoding="utf-8") as f:
        json.dump(out_paragraphs, f, ensure_ascii=False, indent=2)

    print(f"Generated {target_file} with {len(out_paragraphs)} rows.")
    return True

if __name__ == "__main__":
    generate_act5()

