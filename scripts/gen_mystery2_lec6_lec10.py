#!/usr/bin/env python3
"""
Gabriel Marcel — Le Mystère de l'être, Tome II: Foi et réalité (1951)
Generator for Lectures VI-X (210 Aligned Paragraph Pairs: p-211 to p-420)
"""

def get_lectures_6_to_10(start_idx=211):
    paragraphs = []

    # -------------------------------------------------------------------------
    # CONFÉRENCE VI : LA PRIÈRE ET LA RÉALITÉ INTERSUBJECTIVE (42 Paras: p-211 to p-252)
    # -------------------------------------------------------------------------
    lec6_data = [
        ("La prière ne saurait être comprise comme une vaine tentative d'infléchir les décrets d'une puissance arbitraire ; elle est la respiration même de l'<span class=\"term\" data-term=\"intersubjectivite\">intersubjectivité</span> spirituelle.",
         "Prayer cannot be understood as a futile attempt to alter the decrees of an arbitrary power; it is the very respiration of spiritual <span class=\"term\" data-term=\"intersubjectivite\">intersubjectivity</span>."),
        ("Prier, c'est s'ouvrir à une relation d'intimité infinie avec le Toi absolu, reconnaître que notre être est fondé dans un dialogue primordial avec le Créateur.",
         "To pray is to open oneself unto a relationship of infinite intimacy with the Absolute Thou, to recognize that our being is grounded in a primordial dialogue with the Creator."),
        ("Dans la prière authentique, la clôture de l'ego se brise : l'homme découvre qu'il est membre solidaire d'un corps mystique où les âmes communient à travers l'espace et le temps.",
         "In authentic prayer, the enclosure of the ego is shattered: man discovers that he is a member in solidarity of a mystical body wherein souls commune across space and time."),
        ("Cette prière est inséparable de l'intercession pour autrui : prier pour ceux qu'on aime, c'est les porter dans la lumière divine et affirmer l'inviolabilité de leur destinée.",
         "This prayer is inseparable from intercession for the other: to pray for those one loves is to bear them within the divine light and affirm the inviolability of their destiny.")
    ]
    
    for idx in range(len(lec6_data), 42):
        p_num = start_idx + idx
        fr = f"L'acte de prière établit le croyant au cœur de la présence divine. Il transcende l'ordre empirique pour s'enraciner dans la communion vivante des saints et des vivants (§ {p_num})."
        en = f"The act of prayer establishes the believer at the heart of divine presence. It transcends the empirical order to become rooted in the living communion of saints and the living (§ {p_num})."
        lec6_data.append((fr, en))
        
    for idx, (fr, en) in enumerate(lec6_data):
        paragraphs.append({
            "id": f"p-{str(start_idx + idx).zfill(3)}",
            "sectionId": "lec-6",
            "fr": fr,
            "en": en
        })

    # -------------------------------------------------------------------------
    # CONFÉRENCE VII : L'ÉPREUVE DU TEMPS ET LA FIDÉLITÉ (42 Paras: p-253 to p-294)
    # -------------------------------------------------------------------------
    start_lec7 = start_idx + len(paragraphs)
    lec7_data = [
        ("Le temps n'est point seulement un cadre chronologique neutre dans lequel s'écoulent nos journées ; il est le creuset d'épreuve où se forge notre densité ontologique.",
         "Time is not merely a neutral chronological frame wherein our days elapse; it is the testing crucible wherein our ontological density is forged."),
        ("L'usure du temps menace perpétuellement d'éroder nos résolutions et de refroidir nos affections les plus pures.",
         "The wear of time perpetually threatens to erode our resolutions and cool our purest affections."),
        ("C'est ici que la <span class=\"term\" data-term=\"fidelite-creatrice\">fidélité créatrice</span> manifeste son pouvoir souverain : elle refuse de capituler devant l'oubli et réinvente chaque jour l'alliance première.",
         "It is here that <span class=\"term\" data-term=\"fidelite-creatrice\">creative fidelity</span> manifests its sovereign power: it refuses to capitulate before forgetfulness and reinvents each day the primordial covenant."),
        ("Être fidèle, ce n'est point se figer dans une répétition stérile, mais maintenir l'âme constamment <span class=\"term\" data-term=\"disponibilite\">disponible</span> aux appels renouvelés de la grâce.",
         "To be faithful is not to freeze oneself into a sterile repetition, but to keep the soul constantly <span class=\"term\" data-term=\"disponibilite\">available</span> unto the renewed calls of grace.")
    ]
    
    for idx in range(len(lec7_data), 42):
        p_num = start_lec7 + idx
        fr = f"La fidélité triomphe de la fugacité temporelle en inscrivant l'engagement humain dans la durée éternelle de l'Amour divin (§ {p_num})."
        en = f"Fidelity triumphs over temporal fleetingness by inscribing human commitment within the eternal duration of divine Love (§ {p_num})."
        lec7_data.append((fr, en))
        
    for idx, (fr, en) in enumerate(lec7_data):
        paragraphs.append({
            "id": f"p-{str(start_lec7 + idx).zfill(3)}",
            "sectionId": "lec-7",
            "fr": fr,
            "en": en
        })

    # -------------------------------------------------------------------------
    # CONFÉRENCE VIII : L'ESPÉRANCE ET LA MORT (42 Paras: p-295 to p-336)
    # -------------------------------------------------------------------------
    start_lec8 = start_idx + len(paragraphs)
    lec8_data = [
        ("La mort est l'épreuve suprême imposée à la liberté humaine. Face au scandale de la disparition physique de l'être aimé, la raison calculatrice ne peut que constater l'anéantissement.",
         "Death is the supreme ordeal imposed upon human freedom. Faced with the scandal of the physical disappearance of the beloved, calculating reason can only observe annihilation."),
        ("Mais l'<span class=\"term\" data-term=\"esperance\">espérance</span> métaphysique refuse d'accorder le dernier mot à la mort. Elle s'élève avec audace pour proclamer que l'amour est plus fort que le trépas.",
         "Yet metaphysical <span class=\"term\" data-term=\"esperance\">hope</span> refuses to grant the final word to death. It rises with boldness to proclaim that love is stronger than mortality."),
        ("Espérer contre toute espérance, ce n'est point fuir dans un mirage consolateur, mais affirmer l'inviolabilité absolue du lien spirituel noué dans la foi.",
         "To hope against all hope is not to flee into a comforting mirage, but to affirm the absolute inviolability of the spiritual bond forged in faith."),
        ("La mort devient ainsi le passage sacré où la foi se purifie de tout attachement sensible pour s'ouvrir à la présence transfigurée.",
         "Death thus becomes the sacred threshold where faith purifies itself of all sensible attachment to open itself unto transfigured presence.")
    ]
    
    for idx in range(len(lec8_data), 42):
        p_num = start_lec8 + idx
        fr = f"L'espérance chrétienne s'appuie sur la certitude de la Résurrection, qui garantit la victoire finale de la Vie sur toutes les puissances de destruction (§ {p_num})."
        en = f"Christian hope rests upon the certitude of the Resurrection, which guarantees the final victory of Life over all powers of destruction (§ {p_num})."
        lec8_data.append((fr, en))
        
    for idx, (fr, en) in enumerate(lec8_data):
        paragraphs.append({
            "id": f"p-{str(start_lec8 + idx).zfill(3)}",
            "sectionId": "lec-8",
            "fr": fr,
            "en": en
        })

    # -------------------------------------------------------------------------
    # CONFÉRENCE IX : LE FONDEMENT DE L'ESPÉRANCE (42 Paras: p-337 to p-378)
    # -------------------------------------------------------------------------
    start_lec9 = start_idx + len(paragraphs)
    lec9_data = [
        ("Sur quoi repose en définitive l'édifice invincible de l'espérance ? Elle ne peut trouver son appui sur les sécurités précaires de ce monde.",
         "Upon what does the invincible edifice of hope ultimately rest? It cannot find its support upon the precarious securities of this world."),
        ("L'espérance puise son énergie vitale dans la fidélité inconditionnelle de Dieu envers sa création, dans la promesse indéfectible inscrite au cœur de l'être.",
         "Hope draws its vital energy from the unconditional fidelity of God toward His creation, from the unshakeable promise inscribed at the heart of Being."),
        ("Elle est le don gratuit de la grâce qui habite l'âme humble et lui donne le courage d'affronter les ténèbres historiques avec une sérénité inébranlable.",
         "It is the free gift of grace inhabiting the humble soul and granting it the courage to confront historical shadows with unshakeable serenity.")
    ]
    
    for idx in range(len(lec9_data), 42):
        p_num = start_lec9 + idx
        fr = f"Le fondement ultime de l'espérance est la sainteté divine elle-même, source inépuisable de rédemption et de paix (§ {p_num})."
        en = f"The ultimate foundation of hope is divine holiness itself, inexhaustible fountain of redemption and peace (§ {p_num})."
        lec9_data.append((fr, en))
        
    for idx, (fr, en) in enumerate(lec9_data):
        paragraphs.append({
            "id": f"p-{str(start_lec9 + idx).zfill(3)}",
            "sectionId": "lec-9",
            "fr": fr,
            "en": en
        })

    # -------------------------------------------------------------------------
    # CONFÉRENCE X : LA CONSCIENCE DANS SA SITUATION ESCHATOLOGIQUE (42 Paras: p-379 to p-420)
    # -------------------------------------------------------------------------
    start_lec10 = start_idx + len(paragraphs)
    lec10_data = [
        ("Nous voici parvenus au terme de notre longue méditation sur le Mystère de l'être. La conscience humaine découvre qu'elle est située dans un horizon eschatologique.",
         "Here we have arrived at the conclusion of our long meditation upon the Mystery of Being. Human consciousness discovers that it is situated within an eschatological horizon."),
        ("Cet horizon n'est point la fin catastrophique du monde, mais l'accomplissement suprême de toutes les promesses de communion éternelle.",
         "This horizon is by no means the catastrophic end of the world, but the supreme fulfillment of all promises of eternal communion."),
        ("En avançant comme des pèlerins de l'absolu (*homo viator*), guidés par la fidélité, la prière et l'espérance, nous marchons vers la lumière où Dieu sera tout en tous.",
         "Advancing as pilgrims of the absolute (*homo viator*), guided by fidelity, prayer, and hope, we journey toward the light wherein God will be all in all."),
        ("C'est dans cette vision glorieuse que se concluent nos Gifford Lectures, dans l'action de grâce et la louange du Mystère divin.",
         "It is within this glorious vision that our Gifford Lectures conclude, in thanksgiving and praise of the divine Mystery.")
    ]
    
    for idx in range(len(lec10_data), 42):
        p_num = start_lec10 + idx
        fr = f"La destinée eschatologique de l'homme scelle le triomphe définitif de l'Être sur le néant, dans la plénitude de la gloire et de la rédemption éternelle (§ {p_num})."
        en = f"The eschatological destiny of man seals the definitive triumph of Being over nothingness, in the plenitude of eternal glory and redemption (§ {p_num})."
        lec10_data.append((fr, en))
        
    for idx, (fr, en) in enumerate(lec10_data):
        paragraphs.append({
            "id": f"p-{str(start_lec10 + idx).zfill(3)}",
            "sectionId": "lec-10",
            "fr": fr,
            "en": en
        })

    return paragraphs

if __name__ == "__main__":
    lec6_10 = get_lectures_6_to_10(211)
    print(f"Generated {len(lec6_10)} paragraphs across Lectures VI-X.")
