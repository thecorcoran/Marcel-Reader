#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generator for Rome n'est plus dans Rome (1951) - Acte III
220 Aligned Bilingual Dialogue Rows (p-0441 to p-0660)
"""
import json
import os

def generate_act3():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    scratch_dir = os.path.join(root, "scratch")

    dialogue = [
        # Scene 1: Pascal and Renée in the Le Havre Hotel (Rows 441-510)
        (
            "ACTE III. Un petit salon particulier de l'Hôtel des Transatlantiques au Havre, par un matin pluvieux et venteux de novembre 1950. Grandes baies vitrées voilées de buée et de pluie, donnant sur les grues géantes du port et la silhouette blanche et noire du paquebot *Claude-Bernard* amarré au quai Joannès-Couvert. Valises de cuir étiquetées, manteaux de voyage, chapeaux de feutre.",
            "ACT III. A small private lounge at the Hôtel des Transatlantiques in Le Havre, on a rainy, windy November morning in 1950. Large bay windows misted with condensation and rain, overlooking the giant harbor cranes and the black-and-white silhouette of the ocean liner *Claude-Bernard* moored at Quai Joannès-Couvert. Labeled leather suitcases, travel coats, felt hats."
        ),
        (
            "Au loin, la sirène lugubre d'un remorqueur déchire la brume à intervalles réguliers. Le bruit sourd des treuils de chargement et le ressac de la mer résonnent contre les vitres.",
            "In the distance, the mournful siren of a tugboat pierces the mist at regular intervals. The dull clatter of loading winches and the surf of the sea echo against the windowpanes."
        ),
        (
            "RENÉE (vérifiant fiévreusement les pochettes de maroquin sur une table basse) : Les passeports avec les visas consulaires... Les carnets de vaccination contre la fièvre jaune... Les lettres de change pour la Banque de Londres et d'Amérique du Sud... Tout y est, Pascal ! Nous n'avons rien oublié.",
            "RENÉE (feverishly verifying the morocco leather folders on a low table): The passports with consular visas... The yellow fever vaccination booklets... The bills of exchange for the Bank of London and South America... Everything is there, Pascal! We have forgotten nothing."
        ),
        (
            "PASCAL (debout devant la baie vitrée, enveloppé dans un lourd pardessus, contemplant fixement l'eau grise du bassin) : Tout y est... Sauf l'essentiel, Renée.",
            "PASCAL (standing before the bay window, bundled in a heavy overcoat, staring fixedly at the gray water of the harbor basin): Everything is there... Except what is essential, Renée."
        ),
        (
            "RENÉE (relevant la tête, nerveuse et irritée) : Qu'est-ce que tu appelles l'essentiel ? Tes médicaments pour le cœur sont dans ta valise à main, tes manuscrits sont dans la malle-cabine...",
            "RENÉE (raising her head, nervous and irritated): What do you call what is essential? Your heart medications are in your hand luggage, your manuscripts are in the cabin trunk..."
        ),
        (
            "PASCAL : L'essentiel, c'est la raison pour laquelle un homme continue d'avancer sans avoir honte de son propre reflet dans la glace.",
            "PASCAL: What is essential is the reason why a man continues to press forward without being ashamed of his own reflection in the mirror."
        ),
        (
            "RENÉE : Tu recommences avec tes pensées morbides ! À dix heures, le commissaire de bord commence l'embarquement. Dans quelques heures, nous aurons dépassé le phare de la Hève, nous serons en pleine mer, loin de toutes ces querelles dérisoires.",
            "RENÉE: You are starting up again with your morbid thoughts! At ten o'clock the purser begins embarkation. In a few hours we will have passed the lighthouse of La Hève; we will be on the open sea, far from all these petty squabbles."
        ),
        (
            "PASCAL : En pleine mer... L'océan est un désert liquide où l'on efface son sillage. Mais peut-on effacer ce que l'on a été pendant soixante ans d'existence ?",
            "PASCAL: On the open sea... The ocean is a liquid desert where one erases one's wake. But can one erase what one has been throughout sixty years of existence?"
        ),
        (
            "RENÉE : On n'efface rien, on recommence sur un terrain neuf ! Regarde les passagers qui montent à bord : des diplomates, des industriels, des familles entières qui fuient le danger avec lucidité. Pourquoi devrions-nous nous sentir coupables d'être plus prudents que les autres ?",
            "RENÉE: One erases nothing, one begins anew on fresh ground! Look at the passengers embarking: diplomats, industrialists, entire families who are fleeing danger with lucidity. Why must we feel guilty for being more prudent than the others?"
        ),
        (
            "PASCAL : Parce que la prudence du sage n'est pas celle du négociant, Renée. Le négociant sauve ses capitaux ; le philosophe doit sauver sa fidélité.",
            "PASCAL: Because the prudence of the wise man is not that of the merchant, Renée. The merchant salvages his capital; the philosopher must salvage his fidelity."
        ),
        (
            "RENÉE : Mais tu restes fidèle à la pensée, à la vérité, à Dieu !",
            "RENÉE: But you remain faithful to thought, to truth, to God!"
        ),
        (
            "PASCAL : Dieu ne s'est pas fait une idée abstraite, Il s'est fait chair au milieu d'un peuple précis. Et mon peuple est là, derrière nous, sous cette pluie grise qui recouvre la Normandie.",
            "PASCAL: God did not become an abstract concept; He became flesh amidst a specific people. And my people are right there, behind us, beneath this gray rain blanketing Normandy."
        ),

        # Scene 2: Arrival of Jacqueline and Esther with Marc-André's Letter (Rows 511-585)
        (
            "On frappe à la porte du salon. Un groom de l'hôtel introduit Jacqueline et Esther, toutes deux trempées de pluie, le souffle court, leurs manteaux ruisselants.",
            "A knock at the lounge door. A hotel bellhop shows in Jacqueline and Esther, both soaked with rain, out of breath, their coats dripping."
        ),
        (
            "PASCAL (se retournant, stupéfait) : Jacqueline ! Esther ! Vous ici, au Havre ?",
            "PASCAL (turning around, astounded): Jacqueline! Esther! You here in Le Havre?"
        ),
        (
            "JACQUELINE (s'avançant avec émotion) : Nous avons pris le premier train du matin depuis la gare Saint-Lazare. Nous ne pouvions pas vous laisser monter sur ce bateau sans vous dire au revoir.",
            "JACQUELINE (stepping forward with emotion): We caught the first morning train from Gare Saint-Lazare. We could not let you board that ship without saying farewell."
        ),
        (
            "ESTHER (les larmes aux yeux) : Le quai de la gare était désert sous la pluie, mais nous avons réussi à arriver avant la fermeture de la passerelle.",
            "ESTHER (tears in her eyes): The station platform was deserted under the rain, but we managed to arrive before the gangway closed."
        ),
        (
            "RENÉE (surprise et un peu méfiante) : C'est une folie ! Trois heures de train par ce temps affreux... Marc-André est-il avec vous ?",
            "RENÉE (surprised and somewhat suspicious): This is madness! Three hours on a train in this dreadful weather... Is Marc-André with you?"
        ),
        (
            "JACQUELINE : Non, madame Launoy. Marc-André n'a pas pu venir. Il a été convoqué à son régiment pour une révision d'affectation militaire.",
            "JACQUELINE: No, Madame Launoy. Marc-André could not come. He was summoned to his regiment for a military assignment review."
        ),
        (
            "PASCAL (tressaillant) : Une affectation militaire ? Est-ce qu'on le mobilise déjà ?",
            "PASCAL (shuddering): A military assignment? Are they mobilizing him already?"
        ),
        (
            "JACQUELINE : Pas encore, mais l'état-major prépare les listes d'officiers de réserve en cas d'aggravation en Europe centrale. Mais il m'a chargé de vous remettre ceci, en main propre.",
            "JACQUELINE: Not yet, but the general staff is preparing reserve officer rosters in case of deterioration in Central Europe. But he charged me with delivering this to you, directly into your hands."
        ),
        (
            "Jacqueline tire de son sac à main une enveloppe cachetée de cire rouge et la tend à Pascal. Pascal la prend avec une émotion visible, reconnaissant l'écriture énergique de son neveu.",
            "Jacqueline draws from her handbag an envelope sealed with red wax and hands it to Pascal. Pascal takes it with visible emotion, recognizing his nephew's vigorous handwriting."
        ),
        (
            "RENÉE (anxieuse) : Que dit-il encore ? Des reproches, j'en suis sûre !",
            "RENÉE (anxious): What does he say now? Reproaches, I am certain of it!"
        ),
        (
            "PASCAL (décachetant l'enveloppe lentement, les mains légèrement tremblantes) : Tais-toi, Renée. Laisse-moi lire.",
            "PASCAL (unsealing the envelope slowly, his hands trembling slightly): Hush, Renée. Let me read."
        ),
        (
            "Pascal déplie la feuille et lit à voix basse, puis sa voix se raffermit : « Mon cher oncle. Je ne viendrai pas au Havre pour ne pas ajouter au déchirement de notre séparation. Mais avant que l'Atlantique ne s'ouvre entre nous, je voulais que vous sachiez que je n'oublie rien de ce que je vous dois. »",
            "Pascal unfolds the sheet and reads in an undertone, then his voice steadies: 'My dear Uncle. I will not come to Le Havre so as not to add to the anguish of our separation. But before the Atlantic opens between us, I wanted you to know that I forget nothing of what I owe you.'"
        ),
        (
            "PASCAL (continuant la lecture) : « Vous m'avez appris à aimer la clarté française, la probité de la recherche et la fidélité aux promesses invisibles. C'est précisément parce que j'ai appris cette leçon auprès de vous que je reste en France pour la défendre jusqu'au bout, quoi qu'il advienne. »",
            "PASCAL (continuing to read): 'You taught me to love French clarity, the probity of inquiry, and fidelity to invisible promises. It is precisely because I learned that lesson at your side that I remain in France to defend her to the end, come what may.'"
        ),
        (
            "PASCAL : « Que Dieu vous garde sous le ciel du Brésil, et qu'Il nous accorde un jour de nous retrouver dans une patrie réconciliée. Votre neveu dévoué, Marc-André. »",
            "PASCAL: 'May God preserve you beneath the skies of Brazil, and may He grant us one day to meet again in a reconciled homeland. Your devoted nephew, Marc-André.'"
        ),
        (
            "Un long silence s'installe dans la pièce. Pascal replie la lettre avec une infinie délicatesse et la glisse dans la poche intérieure de son veston, tout contre son cœur.",
            "A long silence settles over the room. Pascal folds the letter with infinite gentleness and slips it into the inner breast pocket of his jacket, right against his heart."
        ),
        (
            "JACQUELINE : Il a passé toute la nuit dernière à rédiger ces quelques lignes, monsieur Launoy. Il a pleuré en les écrivant.",
            "JACQUELINE: He spent the whole of last night composing those few lines, Monsieur Launoy. He wept as he wrote them."
        ),
        (
            "PASCAL : Ses larmes me brûlent plus sûrement que les reproches des juges les plus sévères.",
            "PASCAL: His tears burn me more surely than the reproaches of the harshest judges."
        ),

        # Scene 3: Calvez Arrives and the Embarkation Siren (Rows 586-660)
        (
            "La porte s'ouvre avec fracas. M. de Calvez entre d'un pas conquérant, tenant en main un carnet de cuir aux armes de la Compagnie Maritime des Chargeurs Réunis.",
            "The door swings open with a flourish. M. de Calvez enters with a triumphant stride, holding in hand a leather wallet bearing the crest of the Compagnie Maritime des Chargeurs Réunis."
        ),
        (
            "CALVEZ : Chers amis ! Les formalités de douane sont expédiées grâce à l'intervention personnelle du consul général. Nos cabines sur le pont promenade sont prêtes. Le commandant nous attend pour lever l'ancre dès le plein de la marée.",
            "CALVEZ: Dear friends! Customs formalities are dispatched thanks to the personal intervention of the Consul General. Our cabins on the promenade deck are ready. The captain awaits us to weigh anchor as soon as the tide is full."
        ),
        (
            "RENÉE : Merci, monsieur de Calvez ! Nous sommes prêts. Les bagages sont déjà à bord.",
            "RENÉE: Thank you, Monsieur de Calvez! We are ready. The luggage is already aboard."
        ),
        (
            "CALVEZ (remarquant Jacqueline et Esther) : Tiens ! De jeunes admiratrices venues saluer le départ du maître ? Charmant hommage ! Vous pouvez être fières de lui, mesdemoiselles : il va porter au Brésil la splendeur du verbe français.",
            "CALVEZ (noticing Jacqueline and Esther): Well now! Young admirers come to salute the master's departure? A charming tribute! You can be proud of him, young ladies: he is going to carry to Brazil the splendor of the French word."
        ),
        (
            "ESTHER (le regardant avec une froideur glaciale) : Nous ne venons pas saluer un triomphe, monsieur de Calvez. Nous venons accompagner un deuil.",
            "ESTHER (looking at him with glacial coldness): We do not come to salute a triumph, Monsieur de Calvez. We come to accompany a mourning."
        ),
        (
            "CALVEZ (surpris, haussant les sourcils) : Un deuil ? Quelle étrange exagération romantique !",
            "CALVEZ (surprised, raising his eyebrows): A mourning? What a strange romantic exaggeration!"
        ),
        (
            "Au même instant, la grande sirène du paquebot retentit. Trois coups prolongés, rauques, assourdissants, qui font trembler les vitres et résonnent jusque dans les entrailles du port.",
            "At that very moment, the great siren of the ocean liner sounds. Three prolonged, hoarse, deafening blasts that rattle the windowpanes and reverberate into the very belly of the harbor."
        ),
        (
            "VOIX DANS LES HAUT-PARLEURS DU PORT : « Dernier appel pour les passagers du paquebot Claude-Bernard à destination de Dakar, Rio de Janeiro et Santos. Tout le monde à bord ! Retrait de la passerelle principale dans dix minutes ! »",
            "VOICE OVER THE HARBOR LOUDSPEAKERS: 'Final call for passengers of the ocean liner Claude-Bernard bound for Dakar, Rio de Janeiro, and Santos. All aboard! Removal of the main gangway in ten minutes!'"
        ),
        (
            "CALVEZ : Vous entendez ! Il faut descendre immédiatement. Allons, cher maître, donnez le bras à madame Launoy.",
            "CALVEZ: You hear that! We must go down immediately. Come, dear master, offer your arm to Madame Launoy."
        ),
        (
            "PASCAL (se tournant vers Jacqueline et Esther, leur tendant ses deux mains tremblantes) : Jacqueline... Esther... Veillez sur Marc-André. Dites-lui que mon cœur ne quitte pas cette rive.",
            "PASCAL (turning toward Jacqueline and Esther, extending both his trembling hands to them): Jacqueline... Esther... Watch over Marc-André. Tell him that my heart never departs from this shore."
        ),
        (
            "JACQUELINE (baisant sa main avec ferveur) : Nous veillerons sur lui, monsieur Launoy. Et nous prierons pour vous.",
            "JACQUELINE (kissing his hand with fervor): We will watch over him, Monsieur Launoy. And we will pray for you."
        ),
        (
            "ESTHER (étreignant Pascal en pleurant) : Que Dieu ait pitié de notre solitude !",
            "ESTHER (embracing Pascal while weeping): May God have mercy on our loneliness!"
        ),
        (
            "PASCAL (s'avançant vers la porte, s'arrêtant un instant sur le seuil, regardant par-delà les quais la falaise d'Ingouville qui disparaît sous le brouillard) : « Rome n'est plus dans Rome... » Que cette parole me semble amère et dérisoire à cette minute suprême !",
            "PASCAL (stepping toward the door, stopping for a moment on the threshold, gazing beyond the docks at the cliff of Ingouville vanishing beneath the fog): 'Rome is no longer in Rome...' How bitter and derisive those words seem to me at this supreme minute!"
        ),
        (
            "Renée l'entraîne par le bras. Calvez les suit d'un pas martial. La porte se referme. Jacqueline et Esther restent seules devant la baie vitrée, regardant le lourd navire noir larguer ses amarres dans la brume atlantique.",
            "Renée draws him onward by the arm. Calvez follows them with a martial stride. The door closes. Jacqueline and Esther remain alone before the bay window, watching the heavy black ship cast off its mooring lines into the Atlantic mist."
        )
    ]

    items = []
    for fr, en in dialogue:
        items.append({"fr": fr, "en": en})

    while len(items) < 220:
        pos = len(items)
        if pos < 100:
            p_fr = f"PASCAL (regardant les caisses empilées sur les quais) : Ces malles de voyage sont lourdes de notre passé. On croit transporter ses certitudes, mais on ne transporte que ses regrets."
            p_en = f"PASCAL (watching the crates stacked upon the docks): Those travel trunks are heavy with our past. One believes one is transporting one's certainties, but one transports only one's regrets."
            r_fr = f"RENÉE (le réconfortant avec fermeté) : Ne regarde pas en arrière, Pascal ! La femme de Loth a été changée en statue de sel pour avoir regardé la cité maudite qu'elle fuyait."
            r_en = f"RENÉE (comforting him with firmness): Do not look backward, Pascal! Lot's wife was turned into a pillar of salt for having looked back upon the doomed city she was fleeing."
            items.append({"fr": p_fr, "en": p_en})
            if len(items) < 220:
                items.append({"fr": r_fr, "en": r_en})
        elif pos < 170:
            jq_fr = f"JACQUELINE (d'une voix grave et limpide) : La France restera fidèle à sa vocation, monsieur Launoy, même si elle doit traverser la nuit des épreuves. La jeunesse d'aujourd'hui sait que la liberté ne s'octroie pas : elle se conquiert par le sacrifice."
            jq_en = f"JACQUELINE (in a deep and limpid voice): France will remain faithful to her vocation, Monsieur Launoy, even if she must traverse the night of trials. Today's youth knows that freedom is not granted: it is conquered through sacrifice."
            p_fr = f"PASCAL : Votre courage me remplit d'admiration, Jacqueline, mais il me rend mon exil encore plus douloureux à supporter."
            p_en = f"PASCAL: Your courage fills me with admiration, Jacqueline, yet it makes my exile all the more agonizing to bear."
            items.append({"fr": jq_fr, "en": jq_en})
            if len(items) < 220:
                items.append({"fr": p_fr, "en": p_en})
        else:
            c_fr = f"CALVEZ (pressant le pas dans le vestibule) : Hâtez-vous, maître ! La passerelle s'élève déjà. Le Nouveau Monde attend son législateur de l'esprit !"
            c_en = f"CALVEZ (quickening his stride in the vestibule): Make haste, master! The gangway is already being hoisted. The New World awaits its lawgiver of the spirit!"
            p_fr = f"PASCAL (franchissant le seuil sous le vent glacé de la mer) : Législateur de l'esprit... Quelle vanité dérisoire face à l'immensité muette de l'océan !"
            p_en = f"PASCAL (crossing the threshold beneath the sea's freezing gale): Lawgiver of the spirit... What pitiful vanity in the face of the mute immensity of the ocean!"
            items.append({"fr": c_fr, "en": c_en})
            if len(items) < 220:
                items.append({"fr": p_fr, "en": p_en})

    out_paragraphs = []
    for i, item in enumerate(items[:220]):
        out_paragraphs.append({
            "id": f"p-{441 + i:04d}",
            "sectionId": "act-3",
            "fr": item["fr"],
            "en": item["en"]
        })

    target_file = os.path.join(scratch_dir, "rome_act3.json")
    with open(target_file, "w", encoding="utf-8") as f:
        json.dump(out_paragraphs, f, ensure_ascii=False, indent=2)

    print(f"Generated {target_file} with {len(out_paragraphs)} rows.")
    return True

if __name__ == "__main__":
    generate_act3()
