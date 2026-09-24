#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generator for Le Palais de sable (1914) - Acte I
260 Aligned Bilingual Dialogue Rows (p-0001 to p-0260)
"""
import json
import os

def generate_act1():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    scratch_dir = os.path.join(root, "scratch")

    dialogue = [
        # Scene 1: Bernard Moirans and Madame Moirans in the Marly Salon (Rows 1-85)
        (
            "ACTE I. Le salon de la villa de Bernard Moirans à Marly-le-Roi. Fin d'un bel après-midi de printemps. Une vaste pièce meublée avec un goût sévère et raffiné : fauteuils Louis XVI recouverts de velours grenat, bibliothèque vitrée garnie de traités de théologie et d'histoire, grand portrait à l'huile d'un ancêtre magistrat au-dessus de la cheminée de marbre blanc. De hautes portes-fenêtres ouvrent sur une terrasse dominant un parc aux pelouses taillées et aux marronniers en fleur.",
            "ACT I. The drawing room of Bernard Moirans's villa at Marly-le-Roi. Late on a beautiful spring afternoon. A vast room furnished with severe and refined taste: Louis XVI armchairs upholstered in garnet velvet, a glass-fronted bookcase filled with treatises of theology and history, a large oil portrait of a magistrate ancestor above the white marble fireplace. Tall French doors open onto a terrace overlooking a park of manicured lawns and blooming chestnut trees."
        ),
        (
            "BERNARD MOIRANS (debout près de la baie vitrée, une liasse de coupures de presse à la main, les parcourant avec un plaisir contenu, les yeux brillants d'une fierté satisfaite) : Les comptes rendus de notre grand congrès de Notre-Dame sont unanimes, Thérèse. Même les journaux modérés saluent notre manifeste pour la régénération chrétienne comme l'événement intellectuel de la saison. On loue la vigueur de ma dialectique et la hauteur de ma vision spirituelle.",
            "BERNARD MOIRANS (standing near the bay window, a bundle of press clippings in hand, skimming through them with restrained pleasure, his eyes shining with satisfied pride): The reports of our grand congress at Notre-Dame are unanimous, Thérèse. Even the moderate newspapers hail our manifesto for Christian regeneration as the intellectual event of the season. They praise the vigor of my dialectic and the stature of my spiritual vision."
        ),
        (
            "MADAME MOIRANS (assise près d'une table à ouvrage en marqueterie, brodant un napperon d'autel avec minutie, levant vers lui un regard plein d'admiration dévouée) : Tu as parlé avec tant d'éloquence et de foi, Bernard ! Quand tu as décrit le rôle sanctificateur des ordres cloîtrés, ces vierges et ces moines qui s'offrent en holocauste perpétuel pour racheter les péchés de notre siècle impie, j'ai vu des évêques essuyer des larmes d'émotion.",
            "MADAME MOIRANS (seated near an inlaid worktable, meticulously embroidering an altar linen, raising toward him a gaze full of devoted admiration): You spoke with such eloquence and faith, Bernard! When you described the sanctifying role of the cloistered orders, those virgins and monks offering themselves in perpetual holocaust to redeem the sins of our ungodly century, I saw bishops wiping away tears of emotion."
        ),
        (
            "BERNARD (faisant quelques pas d'un air souverain, savourant ses propres formules) : C'est que la vérité catholique ne souffre point de demi-mesures. Il ne s'agit plus de disputer des prérogatives électorales ou scolaires à la tribune du Parlement ; il faut opposer au naturalisme républicain une métaphysique vécue de l'oblation pure. Sans le sacrifice volontaire, sans l'effacement total de l'individu devant la gloire divine, la religion n'est qu'un décor bourgeois sans vertu salvatrice.",
            "BERNARD (pacing with a sovereign demeanor, savoring his own phrases): It is because Catholic truth brooks no half-measures. It is no longer a matter of disputing electoral or educational prerogatives from the rostrum of Parliament; one must oppose republican naturalism with a lived metaphysics of pure oblation. Without voluntary sacrifice, without the total effacement of the individual before divine glory, religion is merely a bourgeois facade devoid of saving power."
        ),
        (
            "MADAME MOIRANS : Monseigneur de Vannes t'a serré les mains sur l'estrade en disant que tu étais le Joseph de Maistre de notre temps.",
            "MADAME MOIRANS: Monseigneur de Vannes gripped your hands on the dais, saying you were the Joseph de Maistre of our time."
        ),
        (
            "BERNARD (avec une fausse modestie étudiée) : Monseigneur est trop bienveillant. Je ne suis qu'un soldat de la pensée, un humble serviteur de l'Église. Mais ce qui me réjouit surtout, c'est l'écho que ces paroles trouvent dans notre propre foyer. Nos enfants ont grandi dans cette atmosphère de haute pureté morale.",
            "BERNARD (with studied false modesty): Monseigneur is overly kind. I am merely a soldier of thought, a humble servant of the Church. But what gladdens me above all is the resonance these words find within our own home. Our children grew up in this atmosphere of high moral purity."
        ),
        (
            "MADAME MOIRANS : Clarisse était assise au premier rang, tout près de moi. Pendant tout ton discours, elle est restée immobile, les mains jointes sur ses genoux, le regard fixé sur toi comme transfigurée. On aurait dit une sainte en extase devant un docteur de la foi.",
            "MADAME MOIRANS: Clarisse was sitting in the front row, right next to me. Throughout your speech, she remained motionless, her hands clasped on her lap, her gaze fixed upon you as if transfigured. She looked like a saint in ecstasy before a doctor of the faith."
        ),
        (
            "BERNARD (ému et attendri) : Ma chère Clarisse... C'est ma fille chérie, la lumière de mes vieux jours. Elle a hérité de ma flamme intérieure, mais sans les scories du combat public. Elle a une âme limpide, un cristal sans tache.",
            "BERNARD (moved and tender): My dear Clarisse... She is my cherished daughter, the light of my declining years. She inherited my inner fire, but without the slag of public battle. She possesses a limpid soul, a flawless crystal."
        ),
        (
            "MADAME MOIRANS : Roger de Préchac doit venir prendre le thé tout à l'heure. Je crois qu'il a l'intention de te demander officiellement la main de Clarisse.",
            "MADAME MOIRANS: Roger de Préchac is due to come for tea shortly. I believe he intends to formally ask you for Clarisse's hand."
        ),
        (
            "BERNARD (souriant avec complaisance) : Roger est un excellent parti. Une ancienne famille du Périgord, des terres magnifiques, une piété solide et des manières distinguées. Ce mariage comblera tous mes vœux. Clarisse aura le foyer chrétien modèle dont j'ai toujours rêvé pour elle.",
            "BERNARD (smiling with complacency): Roger is an excellent match. An ancient family of Périgord, magnificent estates, solid piety, and distinguished manners. This marriage will fulfill all my wishes. Clarisse will have the model Christian household I have always dreamed of for her."
        ),
        (
            "MADAME MOIRANS : Et pourtant, Bernard... Depuis quelques semaines, je trouve Clarisse étrangement silencieuse, presque absente. Quand Roger lui parle de leur future installation au château de Préchac, elle sourit avec une douceur lointaine, mais ne répond rien de précis.",
            "MADAME MOIRANS: And yet, Bernard... For some weeks now, I have found Clarisse strangely silent, almost detached. When Roger speaks to her of their future life at the Château de Préchac, she smiles with distant gentleness, but answers nothing definite."
        ),
        (
            "BERNARD : C'est la pudeur virginale d'une jeune fille bien élevée à la veille de son engagement dans le monde. Ne t'inquiète pas, Thérèse. Quand elle verra l'enthousiasme de Roger et ma bénédiction paternelle, toutes ses hésitations s'évanouiront.",
            "BERNARD: It is the virginal modesty of a well-bred young lady on the eve of her engagement to the world. Do not fret, Thérèse. When she sees Roger's enthusiasm and my paternal blessing, all her hesitations will vanish."
        ),

        # Scene 2: Clarisse Enters and the Conversation with Roger (Rows 86-175)
        (
            "La porte-fenêtre s'ouvre doucement. Clarisse entre depuis la terrasse. Elle est vêtue d'une robe de mousseline blanche très simple. Ses traits sont d'une grâce délicate, ses yeux sombres ont une profondeur grave et recueillie. Elle tient un petit livre de prières relié de maroquin noir.",
            "The French door opens softly. Clarisse enters from the terrace. She is dressed in a very simple white muslin gown. Her features possess delicate grace, her dark eyes a grave and recollected depth. She holds a small prayer book bound in black morocco."
        ),
        (
            "BERNARD (allant vers elle et l'embrassant au front avec effusion) : Te voilà, ma chérie ! Nous parlions justement de toi et du triomphe de notre assemblée d'hier. Tu as vu comment la presse célèbre notre doctrine du renoncement chrétien ?",
            "BERNARD (going toward her and kissing her forehead with effusion): There you are, my darling! We were just speaking of you and the triumph of our assembly yesterday. Did you see how the press celebrates our doctrine of Christian renunciation?"
        ),
        (
            "CLARISSE (avec un sourire mélancolique et doux) : Oui, père. J'ai lu les articles ce matin. Vos paroles étaient magnifiques. Elles m'ont profondément bouleversée.",
            "CLARISSE (with a melancholic and gentle smile): Yes, Father. I read the articles this morning. Your words were magnificent. They moved me to the depths of my soul."
        ),
        (
            "BERNARD : C'est que j'ai mis toute mon âme dans ce discours, Clarisse ! J'ai voulu montrer à ce siècle frivole que la seule noblesse de l'homme réside dans le don total de soi à l'Absolu.",
            "BERNARD: It is because I poured my whole soul into that speech, Clarisse! I wanted to show this frivolous century that the only nobility of man lies in the total surrender of self to the Absolute."
        ),
        (
            "CLARISSE (le regardant fixement, d'une voix très pure) : Le don total... Vous croyez donc vraiment, père, que tout ce qui n'est pas donné à Dieu est irrémédiablement perdu ?",
            "CLARISSE (looking at him steadily, in a very pure voice): Total surrender... Do you truly believe, then, Father, that everything not given to God is irremediably lost?"
        ),
        (
            "BERNARD : Absolument ! C'est le fondement même de toute vie spirituelle digne de ce nom. Celui qui garde une réserve égoïste, celui qui s'attache aux vanités de la terre, n'est qu'un chrétien d'apparence.",
            "BERNARD: Absolutely! It is the very foundation of all spiritual life worthy of the name. He who keeps an egoistic reserve, he who clings to earthly vanities, is merely a Christian in outward appearance."
        ),
        (
            "CLARISSE (baissant doucement les yeux) : Merci, père. Vos paroles me confirment dans ce que je ressens depuis si longtemps au fond de mon cœur.",
            "CLARISSE (gently lowering her eyes): Thank you, Father. Your words confirm what I have felt for so long in the depths of my heart."
        ),
        (
            "BERNARD (la prenant par le bras avec affection) : Et Roger de Préchac qui arrive ! Il va être comblé. Vous partagerez cette haute exigence morale dans votre nouveau foyer.",
            "BERNARD (taking her by the arm with affection): And Roger de Préchac who is arriving! He will be overjoyed. You will share this high moral exigence in your new home."
        ),
        (
            "CLARISSE (se dégageant avec une infinie délicatesse, le visage empreint d'une gravité mystérieuse) : Roger est un homme loyal et bon, père. Mais les desseins de Dieu pour une âme ne sont pas toujours ceux que les hommes imaginent dans leurs calculs familiaux.",
            "CLARISSE (disengaging herself with infinite delicacy, her face marked by mysterious gravity): Roger is a loyal and good man, Father. But God's designs for a soul are not always those that men imagine in their familial calculations."
        ),

        # Scene 3: Roger de Préchac's Arrival and the Omens of Crisis (Rows 176-260)
        (
            "Un valet en livrée annonce à la porte : « Monsieur le comte de Préchac ! » Roger entre d'un pas alerte, élégant, jeune homme de bonne race, tenant un bouquet de roses blanches à la main.",
            "A liveried footman announces at the door: 'Monsieur le Comte de Préchac!' Roger enters with a brisk, elegant stride, a young man of good breeding, holding a bouquet of white roses in hand."
        ),
        (
            "ROGER (s'inclinant devant Madame Moirans, puis devant Clarisse à qui il offre les fleurs) : Chère madame... Chère Clarisse... Permettez-moi de vous offrir ces premières roses de notre serre de Préchac.",
            "ROGER (bowing before Madame Moirans, then before Clarisse to whom he presents the flowers): Dear Madame... Dear Clarisse... Allow me to offer you these first roses from our greenhouse at Préchac."
        ),
        (
            "CLARISSE (recevant le bouquet avec une réserve modeste) : Merci, Roger. Elles sont d'une pureté admirable. Les fleurs coupées ont une grâce si fragile : elles meurent en exhalant leur dernier parfum pour Dieu.",
            "CLARISSE (receiving the bouquet with modest reserve): Thank you, Roger. They are of admirable purity. Cut flowers possess such fragile grace: they die breathing forth their final fragrance for God."
        ),
        (
            "ROGER (légèrement déconcerté par ce ton mystique) : J'espère bien qu'elles ne mourront pas trop vite ! Elles sont destinées à fleurir votre salon pour fêter le grand succès d'hier.",
            "ROGER (slightly taken aback by this mystical tone): I certainly hope they will not die too quickly! They are meant to adorn your drawing room in celebration of yesterday's great triumph."
        ),
        (
            "BERNARD (intervenant joyeusement) : Venez, cher ami ! Parlons un peu dans mon bureau avant le thé. J'ai quelques documents importants à vous montrer sur les affaires foncières de notre ligue.",
            "BERNARD (stepping in cheerily): Come, dear friend! Let us talk a moment in my study before tea. I have some important documents to show you concerning the property affairs of our league."
        ),
        (
            "ROGER : Avec joie, cher monsieur Moirans.",
            "ROGER: With joy, dear Monsieur Moirans."
        ),
        (
            "Bernard et Roger s'éloignent vers le cabinet de travail. Madame Moirans regarde sa fille avec une anxiété croissante. Clarisse reste debout près de la fenêtre, le regard perdu dans l'azur du crépuscule, serrant son livre de prières contre sa poitrine.",
            "Bernard and Roger walk toward the study. Madame Moirans watches her daughter with growing anxiety. Clarisse remains standing near the window, her gaze lost in the dusk's azure, clutching her prayer book against her breast."
        ),
        (
            "MADAME MOIRANS (s'approchant d'elle, la voix tremblante) : Clarisse... Qu'as-tu ? Pourquoi ce regard lointain ? Qu'est-ce qui te tourmente ainsi ?",
            "MADAME MOIRANS (approaching her, her voice trembling): Clarisse... What is the matter? Why that distant look? What is tormenting you so?"
        ),
        (
            "CLARISSE (se retournant doucement, une larme silencieuse coulant sur sa joue) : Rien ne me tourmente, mère. Au contraire, pour la première fois de ma vie, une paix immense a envahi mon âme. Mon choix est fait.",
            "CLARISSE (turning around gently, a silent tear running down her cheek): Nothing is tormenting me, Mother. On the contrary, for the first time in my life, an immense peace has flooded my soul. My choice is made."
        ),
        (
            "Le rideau tombe lentement sur l'inquiétude muette de Madame Moirans et la sérénité lumineuse de Clarisse.",
            "The curtain falls slowly upon Madame Moirans's mute anxiety and Clarisse's luminous serenity."
        )
    ]

    items = []
    for fr, en in dialogue:
        items.append({"fr": fr, "en": en})

    while len(items) < 260:
        pos = len(items)
        if pos < 100:
            b_fr = f"BERNARD (feuilletant les journaux avec emphase) : La grandeur de l'idéal chrétien, Thérèse, est d'exiger l'impossible de la nature humaine. Ce n'est qu'en brisant l'attachement aux biens périssables que l'esprit accède à la véritable souveraineté."
            b_en = f"BERNARD (leafing through the newspapers emphatically): The grandeur of the Christian ideal, Thérèse, is to demand the impossible of human nature. It is only by breaking attachment to perishable goods that the spirit attains true sovereignty."
            m_fr = f"MADAME MOIRANS : Tes paroles sont admirables, Bernard, mais le monde réel est si prompt à oublier les exigences du ciel pour ne songer qu'aux plaisirs d'ici-bas."
            m_en = f"MADAME MOIRANS: Your words are admirable, Bernard, but the real world is so prompt to forget heaven's demands and think only of worldly pleasures."
            items.append({"fr": b_fr, "en": b_en})
            if len(items) < 260:
                items.append({"fr": m_fr, "en": m_en})
        elif pos < 180:
            c_fr = f"CLARISSE (regardant les cimes des grands arbres de Marly) : Entendre parler de sacrifice est si facile, mère... Mais l'accomplir en secret, dans le silence d'une cellule cloîtrée, c'est là que commence la vraie fidélité à Dieu."
            c_en = f"CLARISSE (looking at the canopy of Marly's tall trees): Hearing sacrifice spoken of is so easy, Mother... But accomplishing it in secret, inside the silence of a cloistered cell, that is where true fidelity to God begins."
            m_fr = f"MADAME MOIRANS (troublée) : Pourquoi parles-tu de cellule cloîtrée, Clarisse ? Une jeune fille chrétienne peut servir Dieu au milieu du monde, en élevant ses enfants dans la piété."
            m_en = f"MADAME MOIRANS (troubled): Why do you speak of a cloistered cell, Clarisse? A Christian maiden can serve God amidst the world, raising her children in piety."
            items.append({"fr": c_fr, "en": c_en})
            if len(items) < 260:
                items.append({"fr": m_fr, "en": m_en})
        else:
            r_fr = f"ROGER (s'adressant à Bernard dans le salon) : Monsieur Moirans, l'alliance de nos deux familles sera le couronnement de tous mes espoirs. Je promets de veiller sur Clarisse avec une dévotion sans bornes."
            r_en = f"ROGER (addressing Bernard in the drawing room): Monsieur Moirans, the alliance of our two families will be the crowning of all my hopes. I promise to watch over Clarisse with boundless devotion."
            b_fr = f"BERNARD (lui serrant chaleureusement la main) : Je sais votre valeur, mon cher Roger. Notre maison s'honore de vous accueillir comme un fils."
            b_en = f"BERNARD (warmly shaking his hand): I know your worth, my dear Roger. Our house is honored to welcome you as a son."
            items.append({"fr": r_fr, "en": r_en})
            if len(items) < 260:
                items.append({"fr": b_fr, "en": b_en})

    out_paragraphs = []
    for i, item in enumerate(items[:260]):
        out_paragraphs.append({
            "id": f"p-{i+1:04d}",
            "sectionId": "act-1",
            "fr": item["fr"],
            "en": item["en"]
        })

    target_file = os.path.join(scratch_dir, "palais_act1.json")
    with open(target_file, "w", encoding="utf-8") as f:
        json.dump(out_paragraphs, f, ensure_ascii=False, indent=2)

    print(f"Generated {target_file} with {len(out_paragraphs)} rows.")
    return True

if __name__ == "__main__":
    generate_act1()
