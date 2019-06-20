const vocabs = {
    day01:
        '<h2 class="leftText">day01 Vocab</h2>\
        <div class="clearB"></div>\
        <div id="list1" class="floatL"></div>\
        <div id="list2" class="floatL"></div>\
        <div class="clearB"></div>',
    day02:
        '',
    day03:
        ''
}

const vocab_db = [
    {
        id:1,
        vocabs:[
            {
                first:"der.Affe",
                second:"Noun.the monkey.[affe:]"
            },
            {
                first:"die.Ameise",
                second:"Noun.the ant.[amaize:]"
            },
            {
                first:"das.alphabet",
                second:"Noun.the alphabet.[alphabet:]"
            },
            {
                first:"die.CD",
                second:"Noun.the CD.[chede:]"
            },
            {
                first:"Caesar",
                second:"Noun.caesar.[chesar:]"
            },
            {
                first:"das.Camp",
                second:"Noun.the camp.[camp:]"
            },
            {
                first:"der.Elephant",
                second:"Noun.the elephant.[elephan:]"
            },
            {
                first:"der.Esel",
                second:"Noun.the donkey.[esel:]"
            },
            {
                first:"die.Erdbeere",
                second:"Noun.the strawberry.[e-athbe-akh:]"
            },
            {
                first:"die.Geige",
                second:"Noun.the violin.[gaige:]"
            },
            {
                first:"die.Gitarre",
                second:"Noun.the guitar.[gitajh:]"
            },
            {
                first:"der.Geist",
                second:"Noun.the spirit.[gaist:]"
            },
            {
                first:"das.Herz",
                second:"Noun.the heart.[he-a-z:]"
            },
            {
                first:"das.Haus",
                second:"Noun.the house.[hous:]"
            },
            {
                first:"das.Hund",
                second:"Noun.the dog.[hundt:]"
            },
            {
                first:"der.Junge",
                second:"Noun.the boy.[Yung-a:]"
            },
            {
                first:"die.Jacke",
                second:"Noun.the jacket.[Ya-ke:]"
            },
            {
                first:"die.Jacht",
                second:"Noun.the yacht.[Ya-kht:]"
            },
            {
                first:"der.Mond",
                second:"Noun.the moon.[Meaun:]"
            },
            {
                first:"der.Mantel",
                second:"Noun.the mantel.[Mahn-tle:]"
            },
            {
                first:"die.Maus",
                second:"Noun.the mouse.[mous:]"
            },
            {
                first:"das.Obst",
                second:"Noun.the fruit.[o-hst:]"
            },
            {
                first:"der.Opa",
                second:"Noun.the grandfather.[opa:]"
            },
            {
                first:"die.Orange",
                second:"Noun.the orange.[o-han-ge:]"
            },
            {
                first:"der.Quark",
                second:"Noun.the quark.[qua-hh-k:]"
            },
            {"das.Quadrat":"Noun.the quadrant.[]"},
            {"die.Qualle":"Noun.the jellyfish.[ku-vale:]"},
            {"die.Sonne":"Noun.the Sun.[Sonneh:]"},
            {"der.Sack":"Noun.the sack.[zah-ck:]"},
            {"der.Saft":"Noun. the juice.[zah-ft:]"},
            {"Ungarn":"Noun.Uganda.[Ung-gahn:]"},
            {"die.Uhr":"Noun.the watch.[oo-uh:]"},
            {"die.U-Bahn":"Noun.the subway.[oo-bahn:]"},
            {"der.wein":"Noun.the wine.[vine:]"},
            {"der.Wasser":"Noun.the water.[vah-ssah:]"},
            {"der.Wald":"Noun.the nature.[Vah-ld:]"},
            {"das.Zebra":"Noun.the zebra.[cheh-bra:]"},
            {"der.Zahn":"Noun.the tooth.[chahn:]"},
            {"der.Zoo":"Noun.the zoo.[cheu-oo:]"},
            {"das.Öl":"Noun.the oil.[Oe-l:]"},
            {"das.Ödem":"Noun.the edema.[oe-dem:]"},
            {"der.Ötzi":"Noun.the oetzi.[oetzi:]"},
            {"fuß":"Noun.foot.[foo-z:]"},
            {"groß":"Adjective.big.[g-hoos:]"},
            {"die.Banane":"Noun.the banana.[banana:]"},
            {"das.Boot":"Noun.the submarine.[boh-t:]"},
            {"der.Bus":"Noun.the bus.[boos:]"},
            {"das.Dach":"Noun.the roof.[Da-kh:]"},
            {"die.Dame":"Noun.the lady.[Dah-muh:]"},
            {"das.Fenster":"Noun.the curtain.[Fen-steh:]"},
            {"die.Fabrik":"Noun.the factory.[fab-hrik:]"},
            {"der.Ferrari":"Noun.the ferrari.[feh-hakh:]"},
            {"der.Igle":"Noun.the hedgehog.[igle:]"},
            {"die.Insel":"Noun.the island.[insle:]"},
            {"das.Iglu":"Noun.the igloo.[iglu:]"},
            {"der.Koch":"Noun.the cook.[koh-ck:]"},
            {"der.Käse":"Noun.the cheese.[kaeze:]"},
            {"der.König":"Noun.the king.[koenig:]"},
            {"der.Lehrer":"Noun.the teacher.[leh-heh:]"},
            {"der.Löwe":"Noun.the lion.[loeve:]"},
            {"die.Lampe":"Noun.the lamp.[lahm-pah:]"},
            {"das.Lamm":"Noun.the lamb.[lahm:]"},
            {"die.Nacht":"Noun.the night.[Nah-kht:]"},
            {"der.Nebel":"Noun.the side.[Neible:]"},
            {"die.Nase":"Noun.the nose.[Nah-ze:]"},
            {"das.Pferd":"Noun.the bird.[feh-ah-t:]"},
            {"der.Paprika":"Noun.the paprika.[paprika:]"},
            {"der.Papst":"Noun.the Pope.[Pahps:]"},
            {"die.Rutsche":"Noun.the slide.[huh-sheh:]"},
            {"das.Radio":"Noun.the radio.[hadio:]"},
            {"der Regen":"Noun.the rain.[hegen:]"},
            {"das.Rotkäppchen":"Noun.the red riding hood.[hot-capchen:]"},
            {"die.Tomate":"Noun.the tomato.[toh-mah-toh:]"},
            {"der.Tische":"Noun.the table.[Tis-she:]"},
            {"die.Tür":"Noun.the door.[too-uh:]"},
            {"der.Vogel":"Noun.the bird.[fo-gehl:]"},
            {"die.Vase":"Noun.the vase.[vah-ze:]"},
            {"der.Vater":"Noun.the father.[fa-tah:]"},
            {"der.Volkswagen":"Noun.the Volkswagen.[Folksvagen:]"},
            {"das.Xylophon":"Noun.the xylophon.[cylofon:]"},
            {"die.Yacht":"Noun.the boat.[ya-kt:]"},
            {"das.Yard":"Noun.the yard.[yah-d:]"},
            {"der.Ärger":"Noun.the Trouble.[Aeh-geh:]"},
            {"der Ärmelkanal":"Noun.the English channel.[ae-h-mel-kah-nal:]"},
            {"die.Ästhetik":"Noun.the aesthetic.[aesthetic:]"},
            {"der Überfall":"Noun.the raid.[ue-beh-fell:]"},
            {"die Übung":"Noun.the exercise.[ue-beng:]"}
        ]
    },
    {
        id:2,
        vocabs:[
            {
                first:"",
                second:""
            }
        ]
    }
]