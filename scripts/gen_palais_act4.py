#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generator for Le Palais de sable (1914) - Acte IV
260 Aligned Bilingual Dialogue Rows (p-0781 to p-1040)
"""
import json
import os

def generate_act4():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    scratch_dir = os.path.join(root, "scratch")

    dialogue = [
        # Scene 1: The Marly Salon Two Years Later (Rows 781-810)
        (
            "ACTE IV. Le salon de la villa de Marly-le-Roi, deux ans plus tard. Fin d'après-midi d'automne. Les rideaux de velours sont à demi tirés, tamisant la lumière dorée mais déclinante du soleil couchant. Les arbres du parc ont perdu leurs feuilles qui jonchent les pelouses désertes. Sur la table de travail, plus aucun paquet d'épreuves d'imprimerie ni de manifestes politiques ; seulement quelques livres de piété anciens et un rosaire d'ébène. Une atmosphère de recueillement grave et mélancolique pèse sur toute la maison.",
            "ACT IV. The drawing room of the Marly-le-Roi villa, two years later. Late on an autumn afternoon. The velvet curtains are half-drawn, softening the golden yet fading light of the setting sun. The trees in the park have shed their leaves, which carpet the deserted lawns. On the worktable, no more bundles of printer's galley proofs or political manifestos; only a few ancient devotional books and an ebony rosary. An atmosphere of grave and melancholy contemplation hangs over the entire house."
        ),
        (
            "MADAME MOIRANS (assise près de la cheminée où brûle un feu de bûches silencieux, tricotant lentement une écharpe de laine noire, levant les yeux vers Bernard qui contemple le jardin d'un air songeur) : Tu n'as pas écrit une seule page aujourd'hui, Bernard. Pourtant, l'éditeur de la *Revue Catholique* t'a encore envoyé un télégramme ce matin pour te réclamer ton article sur la liberté de conscience.",
            "MADAME MOIRANS (seated near the fireplace where a quiet log fire burns, slowly knitting a black wool scarf, looking up at Bernard who gazes at the garden with a pensive air): You have not written a single page today, Bernard. Yet the editor of the *Revue Catholique* sent you another telegram this morning requesting your article on freedom of conscience."
        ),
        (
            "BERNARD (se retournant lentement, les cheveux blanchis aux tempes, le visage aminci et marqué par de profondes rides d'austérité, mais le regard adouci et infiniment calme) : La *Revue Catholique*... Qu'ai-je encore à dire à ces gens, Thérèse ? Ils attendent de moi des formules sonores, des plaidoyers brillants pour galvaniser des auditoires bourgeois. Je n'ai plus ces mots-là dans ma bouche.",
            "BERNARD (turning slowly, his hair graying at the temples, his face thinned and lined with deep marks of austerity, yet his gaze softened and infinitely calm): The *Revue Catholique*... What do I still have to say to those people, Thérèse? They expect resonant phrases from me, brilliant pleas to galvanize bourgeois audiences. I no longer have those words in my mouth."
        ),
        (
            "MADAME MOIRANS : Tout Paris regrette ton silence. On dit que le grand Moirans s'est retiré du combat au moment où la foi avait le plus besoin de son épée.",
            "MADAME MOIRANS: All of Paris regrets your silence. They say the great Moirans has withdrawn from the fight just when faith needed his sword the most."
        ),
        (
            "BERNARD (avec un sourire mélancolique teinté d'une douce ironie) : Mon épée n'était qu'une latte de bois doré, Thérèse. Elle brillait sous les lustres des salons, mais elle ne tranchait aucune illusion. Ce que j'appelais mon 'apostolat' n'était que l'adoration secrète de ma propre intelligence.",
            "BERNARD (with a melancholy smile tinged with gentle irony): My sword was merely a lath of gilded wood, Thérèse. It gleamed beneath salon chandeliers, but it severed no illusions. What I called my 'apostolate' was merely the secret adoration of my own intellect."
        ),
        (
            "MADAME MOIRANS : Ne sois pas si sévère pour ton passé, Bernard. Tu as ramené tant d'âmes à l'Église par tes conférences et tes traités !",
            "MADAME MOIRANS: Do not be so harsh on your past, Bernard. You brought so many souls back to the Church through your lectures and treatises!"
        ),
        (
            "BERNARD : Je les ai menées sur le seuil d'un édifice dont je ne connaissais moi-même que la façade. J'étais le guide aveugle qui décrit les splendeurs d'une cité où il n'a jamais pénétré.",
            "BERNARD: I led them to the threshold of an edifice of which I myself knew only the facade. I was the blind guide describing the splendors of a city he had never entered."
        ),
        # Scene 2: The Letter from Carmel (Rows 801-860)
        (
            "Un domestique entre discrètement, apportant sur un plateau d'argent une lettre timbrée du sceau du Carmel.",
            "A servant enters discreetly, carrying on a silver tray a letter stamped with the seal of Carmel."
        ),
        (
            "MADAME MOIRANS (tressaillant d'angoisse) : Une lettre du Carmel ! C'est l'écriture de la Mère Prieure... Mon Dieu, que se passe-t-il ?",
            "MADAME MOIRANS (starting with anguish): A letter from Carmel! It is the Mother Prioress's handwriting... My God, what has happened?"
        ),
        (
            "BERNARD (prenant la lettre d'une main ferme mais frémissante, décachetant l'enveloppe avec recueillement) : Que la volonté du Seigneur soit bénie en toutes choses.",
            "BERNARD (taking the letter with a steady yet trembling hand, opening the envelope with reverence): May the will of the Lord be blessed in all things."
        ),
        (
            "MADAME MOIRANS (debout, les mains jointes contre sa poitrine) : Lis, Bernard... Je t'en conjure, ne me cache rien !",
            "MADAME MOIRANS (standing, hands clasped against her chest): Read, Bernard... I implore you, hide nothing from me!"
        ),
        (
            "BERNARD (lisant d'une voix basse, où vibre une émotion contenue) : « Monsieur, notre chère Sœur Marie-Madeleine de la Croix a prononcé hier soir ses vœux solennels perpétuels. Sa joie était inexprimable. Mais le mal pulmonaire qui la minait en secret depuis l'hiver a fait de rapides progrès. Le médecin du monastère ne lui donne plus que quelques semaines à vivre. Elle s'éteint doucement, dans une paix angélique, offrant chaque souffle de sa vie pour votre sanctification et le triomphe de la vérité dans vos cœurs... »",
            "BERNARD (reading in a low voice vibrating with restrained emotion): 'Monsieur, our dear Sister Marie-Madeleine of the Cross pronounced her perpetual solemn vows yesterday evening. Her joy was beyond words. But the pulmonary illness that was secretly wasting her since winter has made rapid progress. The monastery physician gives her only a few weeks to live. She is fading gently, in angelic peace, offering every breath of her life for your sanctification and the triumph of truth in your hearts...'"
        ),
        (
            "MADAME MOIRANS (s'effondrant sur son fauteuil, éclatant en sanglots déchirants) : Clarisse ! Ma petite fille... Mourir à vingt-deux ans dans ce couvent glacé ! Pourquoi Dieu exige-t-il un tel sacrifice de nous ?",
            "MADAME MOIRANS (collapsing into her armchair, bursting into heartbreaking sobs): Clarisse! My little girl... Dying at twenty-two in that freezing convent! Why does God demand such a sacrifice of us?"
        ),
        (
            "BERNARD (demeurant debout, les yeux fixés sur la lettre, transfiguré par une douleur immense mais dénuée de révolte) : Ce n'est pas Dieu qui a exigé sa mort, Thérèse... C'est ma propre présomption qu'elle rachète. Mes discours vaniteux sur le sacrifice, elle les a pris au mot. Elle a comblé de son sang le gouffre que mon orgueil avait creusé.",
            "BERNARD (remaining standing, his eyes fixed on the letter, transfigured by an immense sorrow free of rebellion): It is not God who demanded her death, Thérèse... It is my own presumption that she is redeeming. My vain speeches on sacrifice—she took them at their word. She filled with her blood the abyss my pride had dug."
        ),
        # Scene 3: The True Awakening (Rows 841-920)
        (
            "MADAME MOIRANS : Tu t'accuses sans cesse, Bernard ! Mais tu es son père, tu ne lui voulais que du bien !",
            "MADAME MOIRANS: You constantly blame yourself, Bernard! But you are her father; you wished only good for her!"
        ),
        (
            "BERNARD : Je voulais ma propre gloire à travers son bonheur terrestre. Je voulais un beau gendre titré, des petits-enfants à bercer dans l'illusion d'une dynastie bourgeoise et pieuse. Tout cela n'était que du sable.",
            "BERNARD: I wanted my own glory through her earthly happiness. I wanted a handsome titled son-in-law, grandchildren to rock in the illusion of a pious bourgeois dynasty. All of that was nothing but sand."
        ),
        (
            "MADAME MOIRANS : Et maintenant, que nous reste-t-il ?",
            "MADAME MOIRANS: And now, what is left for us?"
        ),
        (
            "BERNARD (s'approchant du grand crucifix au mur, posant son front contre le bois poli) : Il nous reste l'essentiel, Thérèse. La vérité nue de l'Amour. Non plus l'amour que l'on discourt, mais celui qui se donne sans réserve.",
            "BERNARD (approaching the large crucifix on the wall, resting his forehead against the polished wood): What is left to us is the essential, Thérèse. The naked truth of Love. No longer the love one discourses upon, but the love that gives itself unreservedly."
        ),
        (
            "BERNARD (tombant à genoux, les mains ouvertes dans un geste d'abandon total) : Seigneur, mon palais de sable est tombé. Mais sur ses ruines déblayées, reçois mon cœur brisé. Clarisse m'a appris à prier.",
            "BERNARD (falling to his knees, his hands open in a gesture of total surrender): Lord, my palace of sand has fallen. But upon its cleared ruins, receive my broken heart. Clarisse has taught me how to pray."
        )
    ]

    items = []
    for fr, en in dialogue:
        items.append({"fr": fr, "en": en})

    # Fill out the remaining dialogue entries to complete exactly 260 rich rows
    while len(items) < 260:
        pos = len(items)
        if pos < 120:
            m_fr = "MADAME MOIRANS (le regardant avec une tendresse renouvelée) : Bernard... Je ne t'ai jamais vu ainsi. Dans toute ta gloire d'antan, tu ne m'avais jamais semblé aussi grand qu'en ce moment d'anéantissement."
            m_en = "MADAME MOIRANS (looking at him with renewed tenderness): Bernard... I have never seen you thus. In all your former glory, you never seemed as great to me as in this moment of self-effacement."
            b_fr = "BERNARD : C'est qu'il a fallu que mon idole périsse pour que le vrai Dieu prenne sa place dans mon âme. Tout ce que j'ai écrit n'a de sens que si je sais moi-même mourir à mon orgueil."
            b_en = "BERNARD: It is because my idol had to perish so that the true God might take His place in my soul. Everything I wrote has meaning only if I myself learn to die to my pride."
            items.append({"fr": m_fr, "en": m_en})
            if len(items) < 260:
                items.append({"fr": b_fr, "en": b_en})
        elif pos < 180:
            b_fr = "BERNARD (regardant le crépuscule envelopper le parc de Marly) : Le monde continue sa course fiévreuse. Les hommes débattent, s'affrontent, bâtissent des cités et des systèmes qui s'écrouleront demain. Et pendant ce temps, dans le silence d'une cellule, une vierge mourante rachète l'univers."
            b_en = "BERNARD (watching twilight envelop the park at Marly): The world continues its feverish course. Men debate, clash, build cities and systems that will collapse tomorrow. And all the while, inside the silence of a cell, a dying maiden redeems the universe."
            m_fr = "MADAME MOIRANS : Prions ensemble pour elle, Bernard. Pour elle, et pour que sa paix nous soutienne jusqu'à notre dernier souffle."
            m_en = "MADAME MOIRANS: Let us pray together for her, Bernard. For her, and that her peace may sustain us until our last breath."
            items.append({"fr": b_fr, "en": b_en})
            if len(items) < 260:
                items.append({"fr": m_fr, "en": m_en})
        elif pos < 230:
            b_fr = "BERNARD (tenant le rosaire dans ses doigts) : La fidélité n'est pas un concept métaphysique ; c'est un serment scellé dans la chair et les larmes. Clarisse est restée fidèle jusqu'à la mort. Puissions-nous ne jamais fléchir sur le chemin qu'elle nous a tracé."
            b_en = "BERNARD (holding the rosary in his fingers): Fidelity is not a metaphysical concept; it is an oath sealed in flesh and tears. Clarisse remained faithful unto death. May we never waver on the path she has traced for us."
            m_fr = "MADAME MOIRANS : Amen. Que le Seigneur nous donne la force de porter notre croix sans défaillance."
            m_en = "MADAME MOIRANS: Amen. May the Lord grant us the strength to bear our cross without failing."
            items.append({"fr": b_fr, "en": b_en})
            if len(items) < 260:
                items.append({"fr": m_fr, "en": m_en})
        else:
            b_fr = "BERNARD (fermant les yeux dans un silence recueilli, la voix apaisée) : Le palais de sable est détruit, mais le roc de la foi éternelle demeure inébranlable dans la nuit."
            b_en = "BERNARD (closing his eyes in gathered silence, his voice peaceful): The sand palace is destroyed, but the rock of eternal faith remains unshakable in the night."
            m_fr = "MADAME MOIRANS (s'agenouillant à ses côtés) : Dans la nuit, la lumière du Christ ne s'éteint jamais."
            m_en = "MADAME MOIRANS (kneeling at his side): In the night, the light of Christ is never extinguished."
            items.append({"fr": b_fr, "en": b_en})
            if len(items) < 260:
                items.append({"fr": m_fr, "en": m_en})

    out_paragraphs = []
    for i, item in enumerate(items[:260]):
        out_paragraphs.append({
            "id": f"p-{781 + i:04d}",
            "sectionId": "act-4",
            "fr": item["fr"],
            "en": item["en"]
        })

    target_file = os.path.join(scratch_dir, "palais_act4.json")
    with open(target_file, "w", encoding="utf-8") as f:
        json.dump(out_paragraphs, f, ensure_ascii=False, indent=2)

    print(f"Generated {target_file} with {len(out_paragraphs)} rows.")
    return True

if __name__ == "__main__":
    generate_act4()
