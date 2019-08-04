const vocabs = {
    day01:
        '<h2 class="leftText">day01 Vocab</h2>\
        <div class="clearB"></div>\
        <div id="list1" class="floatL"></div>\
        <div id="list2" class="floatL"></div>\
        <div class="clearB"></div>',
    day02:
        '<h2 class="leftText">day02 Vocab</h2>\
        <div class="clearB"></div>\
        <div id="list1" class="floatL"></div>\
        <div id="list2" class="floatL"></div>\
        <div class="clearB"></div>',
    day03:
        '<h2 class="leftText">day03 Vocab</h2>\
        <div class="clearB"></div>\
        <div id="list1" class="floatL"></div>\
        <div id="list2" class="floatL"></div>\
        <div class="clearB"></div>',
    day04:
        '<h2 class="leftText">day04 Vocab</h2>\
        <div class="clearB"></div>\
        <div id="list1" class="floatL"></div>\
        <div id="list2" class="floatL"></div>\
        <div class="clearB"></div>',
    day05:
        '<h2 class="leftText">day05 Vocab</h2>\
        <div class="clearB"></div>\
        <div id="list1" class="floatL"></div>\
        <div id="list2" class="floatL"></div>\
        <div class="clearB"></div>',
    day06:
        '<h2 class="leftText">day06 Vocab</h2>\
        <div class="clearB"></div>\
        <div id="list1" class="floatL"></div>\
        <div id="list2" class="floatL"></div>\
        <div class="clearB"></div>'
    
}

const vocab_db = [
    {
        id:1,
        vocabs:[
            {
                key:1,
                first:"der.Affe",
                second:"Noun.the monkey.[affe:]"
            },
            {
                key:2,
                first:"die.Ameise",
                second:"Noun.the ant.[amaize:]"
            },
            {
                key:3,
                first:"das.alphabet",
                second:"Noun.the alphabet.[alphabet:]"
            },
            {
                key:4,
                first:"die.CD",
                second:"Noun.the CD.[chede:]"
            },
            {
                key:5,
                first:"Caesar",
                second:"Noun.caesar.[chesar:]"
            },
            {
                key:6,
                first:"das.Camp",
                second:"Noun.the camp.[camp:]"
            },
            {
                key:7,
                first:"der.Elephant",
                second:"Noun.the elephant.[elephan:]"
            },
            {
                key:8,
                first:"der.Esel",
                second:"Noun.the donkey.[esel:]"
            },
            {
                key:9,
                first:"die.Erdbeere",
                second:"Noun.the strawberry.[e-athbe-akh:]"
            },
            {
                key:10,
                first:"die.Geige",
                second:"Noun.the violin.[gaige:]"
            },
            {
                key:11,
                first:"die.Gitarre",
                second:"Noun.the guitar.[gitajh:]"
            },
            {
                key:12,
                first:"der.Geist",
                second:"Noun.the spirit.[gaist:]"
            },
            {
                key:13,
                first:"das.Herz",
                second:"Noun.the heart.[he-a-z:]"
            },
            {
                key:14,
                first:"das.Haus",
                second:"Noun.the house.[hous:]"
            },
            {
                key:15,
                first:"das.Hund",
                second:"Noun.the dog.[hundt:]"
            },
            {
                key:16,
                first:"der.Junge",
                second:"Noun.the boy.[Yung-a:]"
            },
            {
                key:17,
                first:"die.Jacke",
                second:"Noun.the jacket.[Ya-ke:]"
            },
            {
                key:18,
                first:"die.Jacht",
                second:"Noun.the yacht.[Ya-kht:]"
            },
            {
                key:19,
                first:"der.Mond",
                second:"Noun.the moon.[Meaun:]"
            },
            {
                key:20,
                first:"der.Mantel",
                second:"Noun.the mantel.[Mahn-tle:]"
            },
            {
                key:21,
                first:"die.Maus",
                second:"Noun.the mouse.[mous:]"
            },
            {
                key:22,
                first:"das.Obst",
                second:"Noun.the fruit.[o-hst:]"
            },
            {
                key:23,
                first:"der.Opa",
                second:"Noun.the grandfather.[opa:]"
            },
            {
                key:24,
                first:"die.Orange",
                second:"Noun.the orange.[o-han-ge:]"
            },
            {
                key:25,
                first:"der.Quark",
                second:"Noun.the quark.[qua-hh-k:]"
            },
            {
                key:26,
                first:"das.Quadrat",
                second:"Noun.the quadrant.[quad-h-ah-t]"
            },
            {
                key:27,
                first:"die.Qualle",
                second:"Noun.the jellyfish.[ku-vale:]"
            },
            {
                key:28,
                first:"die.Sonne",
                second:"Noun.the Sun.[Sonneh:]"
            },
            {
                key:29,
                first:"der.Sack",
                second:"Noun.the sack.[zah-ck:]"
            },
            {
                key:30,
                first:"der.Saft",
                second:"Noun. the juice.[zah-ft:]"
            },
            {
                key:31,
                first:"Ungarn",
                second:"Noun.Uganda.[Ung-gahn:]"
            },
            {
                key:32,
                first:"die.Uhr",
                second:"Noun.the watch.[oo-uh:]"
            },
            {
                key:33,
                first:"die.U-Bahn",
                second:"Noun.the subway.[oo-bahn:]"
            },
            {
                key:34,
                first:"der.wein",
                second:"Noun.the wine.[vine:]"
            },
            {
                key:35,
                first:"der.Wasser",
                second:"Noun.the water.[vah-ssah:]"
            },
            {
                key:36,
                first:"der.Wald",
                second:"Noun.the nature.[Vah-ld:]"
            },
            {
                key:37,
                first:"das.Zebra",
                second:"Noun.the zebra.[cheh-bra:]"
            },
            {
                key:38,
                first:"der.Zahn",
                second:"Noun.the tooth.[chahn:]"
            },
            {
                key:39,
                first:"der.Zoo",
                second:"Noun.the zoo.[cheu-oo:]"
            },
            {
                key:40,
                first:"das.Öl",
                second:"Noun.the oil.[Oe-l:]"
            },
            {
                key:41,
                first:"das.Ödem",
                second:"Noun.the edema.[oe-dem:]"
            },
            {
                key:42,
                first:"der.Ötzi",
                second:"Noun.the oetzi.[oetzi:]"
            },
            {
                key:43,
                first:"fuß",
                second:"Noun.foot.[foo-z:]"
            },
            {
                key:44,
                first:"groß",
                second:"Adjective.big.[g-hoos:]"
            },
            {
                key:45,
                first:"die.Banane",
                second:"Noun.the banana.[banana:]"
            },
            {
                key:46,
                first:"das.Boot",
                second:"Noun.the submarine.[boh-t:]"
            },
            {
                key:47,
                first:"der.Bus",
                second:"Noun.the bus.[boos:]"
            },
            {
                key:48,
                first:"das.Dach",
                second:"Noun.the roof.[Da-kh:]"
            },
            {
                key:49,
                first:"die.Dame",
                second:"Noun.the lady.[Dah-muh:]"
            },
            {
                key:50,
                first:"das.Fenster",
                second:"Noun.the curtain.[Fen-steh:]"
            },
            {
                key:51,
                first:"die.Fabrik",
                second:"Noun.the factory.[fab-hrik:]"
            },
            {
                key:52,
                first:"der.Ferrari",
                second:"Noun.the ferrari.[feh-hakh:]"
            },
            {
                key:53,
                first:"der.Igle",
                second:"Noun.the hedgehog.[igle:]"
            },
            {
                key:54,
                first:"die.Insel",
                second:"Noun.the island.[insle:]"
            },
            {
                key:55,
                first:"das.Iglu",
                second:"Noun.the igloo.[iglu:]"
            },
            {
                key:56,
                first:"der.Koch",
                second:"Noun.the cook.[koh-ck:]"
            },
            {
                key:57,
                first:"der.Käse",
                second:"Noun.the cheese.[kaeze:]"
            },
            {
                key:58,
                first:"der.König",
                second:"Noun.the king.[koenig:]"
            },
            {
                key:59,
                first:"der.Lehrer",
                second:"Noun.the teacher.[leh-heh:]"
            },
            {
                key:60,
                first:"der.Löwe",
                second:"Noun.the lion.[loeve:]"
            },
            {
                key:61,
                first:"die.Lampe",
                second:"Noun.the lamp.[lahm-pah:]"
            },
            {
                key:62,
                first:"das.Lamm",
                second:"Noun.the lamb.[lahm:]"
            },
            {
                key:63,
                first:"die.Nacht",
                second:"Noun.the night.[Nah-kht:]"
            },
            {
                key:64,
                first:"der.Nebel",
                second:"Noun.the side.[Neible:]"
            },
            {
                key:65,
                first:"die.Nase",
                second:"Noun.the nose.[Nah-ze:]"
            },
            {
                key:66,
                first:"das.Pferd",
                second:"Noun.the horse.[feh-ah-t:]"
            },
            {
                key:67,
                first:"der.Paprika",
                second:"Noun.the paprika.[paprika:]"
            },
            {
                key:68,
                first:"der.Papst",
                second:"Noun.the Pope.[Pahps:]"
            },
            {
                key:69,
                first:"die.Rutsche",
                second:"Noun.the slide.[huh-sheh:]"
            },
            {
                key:70,
                first:"das.Radio",
                second:"Noun.the radio.[hadio:]"
            },
            {
                key:71,
                first:"der.Regen",
                second:"Noun.the rain.[hegen:]"
            },
            {
                key:72,
                first:"das.Rotkäppchen",
                second:"Noun.the red riding hood.[hot-capchen:]"
            },
            {
                key:73,
                first:"die.Tomate",
                second:"Noun.the tomato.[toh-mah-toh:]"
            },
            {
                key:74,
                first:"der.Tische",
                second:"Noun.the table.[Tis-she:]"
            },
            {
                key:75,
                first:"die.Tür",
                second:"Noun.the door.[too-uh:]"
            },
            {
                key:76,
                first:"der.Vogel",
                second:"Noun.the bird.[fo-gehl:]"
            },
            {
                key:77,
                first:"die.Vase",
                second:"Noun.the vase.[vah-ze:]"
            },
            {
                key:78,
                first:"der.Vater",
                second:"Noun.the father.[fa-tah:]"
            },
            {
                key:79,
                first:"der.Volkswagen",
                second:"Noun.the Volkswagen.[Folksvagen:]"
            },
            {
                key:80,
                first:"das.Xylophon",
                second:"Noun.the xylophon.[cylofon:]"
            },
            {
                key:81,
                first:"die.Yacht",
                second:"Noun.the boat.[ya-kt:]"
            },
            {
                key:82,
                first:"das.Yard",
                second:"Noun.the yard.[yah-d:]"
            },
            {
                key:83,
                first:"der.Ärger",
                second:"Noun.the Trouble.[Aeh-geh:]"
            },
            {
                key:84,
                first:"der.Ärmelkanal",
                second:"Noun.the English channel.[ae-h-mel-kah-nal:]"
            },
            {
                key:85,
                first:"die.Ästhetik",
                second:"Noun.the aesthetic.[aesthetic:]"
            },
            {
                key:86,
                first:"der.Überfall",
                second:"Noun.the raid.[ue-beh-fell:]"
            },
            {
                key:87,
                first:"die.Übung",
                second:"Noun.the exercise.[ue-beng:]"
            }
        ]
    },
    {
        id:2,
        vocabs:[
            {
                key:1,
                first:"das.Ei",
                second:"Noun.the egg.[ai]"
            },
            {
                key:2,
                first:"die.Leiter",
                second:"Noun.the ladder.[laiteh]"
            },
            {
                key:3,
                first:"der.Eimer",
                second:"Noun.the bucket.[Aimeh]"
            },
            {
                key:4,
                first:"der.Sport",
                second:"Noun.the sport.[shupoh-t]"
            },
            {
                key:5,
                first:"Spanien",
                second:"Noun.spain.[shupanien]"
            },
            {
                key:6,
                first:"das Spiel",
                second:"Noun.the game.[shupeel]"
            },
            {
                key:7,
                first:"die eule",
                second:"Noun.the owl.[oileh]"
            },
            {
                key:8,
                first:"Europa",
                second:"Noun.Eruope.[oihopa]"
            },
            {
                key:9,
                first:"das.Euter",
                second:"Noun.the udder.[oiteh]"
            },
            {
                key:10,
                first:"Ich",
                second:"Noun.I(subject form of self).[eahch]"
            },
            {
                key:11,
                first:"die.Bücher",
                second:"Noun.the book.[buehcheh]"
            },
            {
                key:12,
                first:"die.Kirche",
                second:"Noun.the church.[kih-skh]"
            },
            {
                key:13,
                first:"die.Häute",
                second:"Noun.the skins.[hoiteh]"
            },
            {
                key:14,
                first:"die.Haut",
                second:"Noun.the skin.[heauht]"
            },
            {
                key:15,
                first:"die.Maus",
                second:"Noun.the mouse.[mouse]"
            },
            {
                key:16,
                first:"die.Mäus",
                second:"Noun.the mice.[mois]"
            },
            {
                key:17,
                first:"das.Häuschen",
                second:"Noun.the houses.[hoishen]"
            },
            {
                key:18,
                first:"das.Haus",
                second:"Noun.the house.[house]"
            },
            {
                key:19,
                first:"die.Decke",
                second:"Noun.the blanket.[deck]"
            },
            {
                key:20,
                first:"die.Zecke",
                second:"Noun.the tick.[check]"
            },
            {
                key:21,
                first:"das.Stück",
                second:"Noun.the piece.[schuetick]"
            },
            {
                key:22,
                first:"das.Schwein",
                second:"Noun.the pig.[shuvain]"
            },
            {
                key:23,
                first:"die.Schweiz",
                second:"Noun.Switzerland.[shuvaitze]"
            },
            {
                key:24,
                first:"Schwanger",
                second:"Adjective.pregnant.[shuwangeh]"
            },
            {
                key:25,
                first:"Stuttgart",
                second:"Noun.stuttgart.[shutugaht]"
            },
            {
                key:26,
                first:"die.Straße",
                second:"Noun.the street.[shutuga-zeh]"
            },
            {
                key:27,
                first:"das.Stinktier",
                second:"Noun.the skunk.[shutin-tieh]"
            },
            {
                key:28,
                first:"jetzt",
                second:"Noun.now.[ye-cheu-t]"
            },
            {
                key:29,
                first:"das.Knie",
                second:"Noun.the knee.[ku-nee]"
            },
            {
                key:30,
                first:"stehlen",
                second:"Verb-ing Form.stealing[shu-tae-len]"
            },
            {
                key:31,
                first:"sehen",
                second:"Verb-ing form.seeing.[seh-en]"
            },
            {
                key:32,
                first:"gehen",
                second:"Verb-ing form.walking.[geh-en]"
            },
            {
                key:33,
                first:"commen",
                second:"Verb regu form.come.[co-men]"
            },
            {
                key:34,
                first:"essen",
                second:"Verb reg form.eat.[es-en]"
            }
        ]
    },
    {
        id:3,
        vocabs:[
            {
                key:1,
                first:"Vokabular",
                second:"Noun.vocabulary.[vokabulah]"
            },
            {
                key:2,
                first:"Name",
                second:"Noun.name.[Nah-meh]"
            },
            {
                key:3,
                first:"alt",
                second:"Noun.~old.[ah-lt]"
            },
            {
                key:4,
                first:"wenig",
                second:"Adjective.little.[ve-nig]"
            },
            {
                key:5,
                first:"jahre",
                second:"Noun.year.[Yah-heu]"
            },
            {
                key:6,
                first:"Deutsch",
                second:"Noun.German.[Doi-chi]"
            },
            {
                key:5,
                first:"Japanisch",
                second:"Noun.Japanese.[Yah-pah-nischi]"
            },
            {
                key:5,
                first:"Englisch",
                second:"Noun.English.[Aeh-nglish]"
            },
            {
                key:5,
                first:"Russisch",
                second:"Noun.Russian.[Huh-schi]"
            },
        ]
    },
    {
        id:4,
        vocabs:[
            {
                key:0,
                first:"Jemandem",
                second:"Noun.Greeting.[Ye-Mann-dem]"
            },
            {
                key:1,
                first:"verabschieden",
                second:"Noun.Someone.[Fe-ah-p-schee-den]"
            },
            {
                key:2,
                first:"Morgen",
                second:"Noun.morning.[Moh-gen]"
            },
            {
                key:3,
                first:"Der Genus",
                second:"Noun.gender.[Geh-Noos]"
            },
            {
                key:4,
                first:"Die Artikel",
                second:"Noun.Articlr.[Ah-tickle]"
            },
            {
                key:5,
                first:"Bestimmte",
                second:"Adj.defined.[Beshutimt]"
            },
            {
                key:6,
                first:"Umbestimmte",
                second:"Adj.undefined.[Oombeshutimt]"
            },
            {
                key:7,
                first:"Femeninum",
                second:"Adj.femnine.[Femeninum]"
            },
            {
                key:8,
                first:"Maskulinum",
                second:"Adj.masculine.[masukulinoom]"
            },
            {
                key:9,
                first:"Neutrum",
                second:"Adj.neutra.l[noi-tu-hum]"
            },
            {
                key:10,
                first:"Plural",
                second:"Adj.plural.[plu-hal]"
            },
            {
                key:11,
                first:"imma",
                second:"Adv.Always.[ima]"
            },
            {
                key:12,
                first:"Wo",
                second:"Adv.Where.[Vo]"
            },
            {
                key:13,
                first:"imma",
                second:"Adv.Always.[ima]"
            },
            {
                key:14,
                first:"im",
                second:"Adv.in.[imm]"
            },
            {
                key:15,
                first:"identisch",
                second:"Adj.identical.[identish]"
            },
            {
                key:16,
                first:"keine/keinen",
                second:"Adj.No from No idea.[kaine/kainen]"
            },
            {
                key:17,
                first:"Kartoffel",
                second:"Noun.Potato.[Kah-toh-fel]"
            },
            {
                key:18,
                first:"Der Vater",
                second:"Noun.father.[Fah-tah]"
            },
            {
                key:19,
                first:"die Mutter",
                second:"Noun.mother.[Muh-ter]"
            },
            {
                key:20,
                first:"die Schule",
                second:"Noun.school.[Shool]"
            }
        ]
    },
    {
        id:5,
        vocabs:[
            {
                key:0,
                first:"",
                second:"Noun..[]"
            },
            {
                key:1,
                first:"Frisch",
                second:"Adj.fresh.[Frish]"
            },
            {
                key:2,
                first:"süß",
                second:"Adj.sweet.[zoos]"
            },
            {
                key:3,
                first:"lecker",
                second:"Adj.tasty.[lackeh]"
            },
            {
                key:4,
                first:"Das Tier",
                second:"Noun.animal.[ti-ah]"
            },
            {
                key:5,
                first:"Das Haustier",
                second:"Noun.pet.[hous-ti-ah]"
            },
            {
                key:6,
                first:"der Bär",
                second:"Noun.bear.[bea-ah]"
            },
            {
                key:7,
                first:"Die Katze",
                second:"Noun.the cat.[Kaat-zeh]"
            },
            {
                key:8,
                first:"Die Maus",
                second:"Noun.the mouse.[mouse]"
            },
            {
                key:9,
                first:"Der Hund",
                second:"Noun.the dog.[Hoont]"
            },
            {
                key:10,
                first:"Das Schwein",
                second:"Noun.the pig.[Shu-vah-in]"
            },
            {
                key:11,
                first:"Das Pferd",
                second:"Noun.the house.[fe-ah-ht]"
            },
            {
                key:12,
                first:"Der Vogel",
                second:"Noun.the bird.[fo-gle]"
            },
            {
                key:13,
                first:"Die Ente",
                second:"Noun.the duck.[en-teh]"
            },
            {
                key:14,
                first:"Die Kuh",
                second:"Noun.the cow.[coo]"
            },
            {
                key:15,
                first:"Das Essen",
                second:"Noun.the food.[Esen]"
            },
            {
                key:16,
                first:"Der Fisch",
                second:"Noun.the fish.[fish]"
            },
            {
                key:17,
                first:"Die Suppe",
                second:"Noun.the soup.[zoo-peh]"
            },
            {
                key:18,
                first:"Der Apfel",
                second:"Noun.the apple.[aap-fel]"
            },
            {
                key:19,
                first:"Verstehen",
                second:"Verb.to understand.[Fah-shu-teen]"
            },
            {
                key:20,
                first:"Essen",
                second:"Verb.to eat.[Esen]"
            },
            {
                key:21,
                first:"sprechen",
                second:"Verb.To speak.[shu-peh-hen]"
            },
            {
                key:22,
                first:"Das Durst",
                second:"Noun.thirst.[doo-ah-st]"
            },
            {
                key:23,
                first:"Das Bier",
                second:"Noun.beer.[bee-ah]"
            },
            {
                key:24,
                first:"Der Tee",
                second:"Noun.the tea.[tea]"
            },
            {
                key:25,
                first:"Der kaffee",
                second:"Noun.the coffee.[kah-fee]"
            },
            {
                key:26,
                first:"Der Wein",
                second:"Noun.the wine.[vah-in]"
            }
        ]
    }
]