var lang = {
    "fr":{
        "GIRL":"FILLE",
        "BOY":"GARÇON",
        "PLAY_BUTTON":"JOUER",
        "GAME_RULES":"Règles du jeu",
        "PLAY_RULES_SLIDE_01":"CHOISIS TON HÉROS<br/>PARMI LES SEIZE<br>PERSONNAGES PROPOSÉS.",
        "PLAY_RULES_SLIDE_02":"LE BUT DU JEU EST DE TROUVER<br/>QUI EST TON ADVERSAIRE.",
        "PLAY_RULES_SLIDE_03":"CLIQUE SUR CE BOUTON POUR<br/>POSER DES QUESTIONS<br/>ET ÉLIMINER DES CANDIDATS.",
        "PLAY_RULES_SLIDE_04":"LORSQUE TU PENSES AVOIR TROUVÉ,<br/>CLIQUE SUR CE BOUTON POUR<br/>PROPOSER UNE RÉPONSE.",
        "PLAY_RULES_SLIDE_05":"POUR GAGNER,<br>IL FAUT TROUVER QUI EST<br>TON ADVERSAIRE EN PREMIER !",
        "WS_TIMEOUT_TITLE":"Connexion",
        "WS_TIMEOUT_MESSAGE":"Oups, l'application n'a pas répondu assez vite",
        "WS_TIMEOUT_BUTTON":"Réessayer plus tard",
        "WS_STANDARD_ERROR_BUTTON":"Réessayer plus tard",
        "WS_STANDARD_ERROR_TITLE":"OUPS !",
        "WS_STANDARD_ERROR_MESSAGE":"Le serveur est temporairement indisponible",
        "OK_BUTTON":"OK",
        "GAME_LANG":"Langue du jeu",
        "GAME_CHARACTER":"Votre personnage",
        "CREATE_BUTTON":"Créer",
        "GALLERY_BUTTON":"Galerie",
        "SETTINGS":"Paramètres",
        "INFOS":"Informations",
        "INFORMATIONS_TITLE":"Informations",
        "GALLERY_TITLE":"Galerie",
        "MY_GALLERY_TITLE":"Mes Personnages",
        "HOME":"Accueil",
        "GAME_SELECT_QUESTION":"Choisis une question",
        "GAME_YOUR_TURN":"À toi de jouer",
        "GAME_ELIMINATE_CANDIDAT":"Élimine les candidats",
        "GAME_PURPOSE":"Propose un personnage",
        "GALLERY":"Mes personnages",
        "WORLD_GALLERY":"Tout le monde",
        "YOUR_TURN":"À toi de jouer",
        "OPENENT_TURN":"Au tour de ton adversaire",
        "OPENENT_TITLE":"Adversaire",
        "CHOOSE_QUESTION":"Choisis une question",
        "PROPOSE_USER":"Le personnage est-il <%= name %> ?",
        "PROPOSE_TRUE":"Bravo ! Ton adversaire était bien <%= name %>.",
        "PROPOSE_OPENENT_TRUE":"OUPS, ton adversaire a deviné en premier ton personnage <%= name %>!",
        "PROPOSE_FALSE":"Non ce n'est pas <%= name %>.",
        "WIN_TEXT":"GAGNÉ <%= label %>",
        "LOSE_TEXT":"PERDU <%= label %>",
        "HOME_SETTING_TITLE":"PARAMÈTRES",
        "SETTING_SOUND":"SONS",
        "SETTING_MUSIC":"MUSIQUE",
        "SETTING_VOICE":"AIDE VOCALE",
        "SETTING_LANG":"LANGUE",
        "TAP_TO_CONTINUE":"Touche l'écran pour continuer",
        "NO_NETWORK_TITLE":"Connexion Internet",
        "INTERNET_IS_LOST":"Vous n'êtes plus connecté à internet",
        "INTERNET_IS_CONNECTED":"Vous êtes connecté à internet avec votre <%= state %>.",
        "NO_NETWORK_MESSAGE":"Vous n'êtes pas connecté, merci de réessayer ultérieurement.",
        "SHOW_RESPONSE":"Voir la réponse",
        "TRUE_RESPONSE":"Oui",
        "GIVE_NAME":"Donne lui un prénom",
        "GIVE_AGE":"Quel âge as-tu ?",
        "NEED_NAME_AND_AGE_TITLE":"Pour enregistrer tu dois donner un prénom et un âge à ton personnage.",
        "NEED_NAME_AND_AGE_MESSAGE":"Pour enregistrer tu dois donner un prénom et un âge à ton personnage.",
        "FALSE_RESPONSE":"Non",
        "CONTINUE_RESPONSE":"Continuer",
        "MISTAKE":"Je pense que tu as mal observé ! Choisis une autre réponse pour continuer.",
        "SKINS":"Choisis une couleur de peau !",
        "EYES":"Choisis des yeux !",
        "MOUTHS":"Choisis une bouche !",
        "EYEBROWS":"Choisis Des surciles !",
        "NOSES":"Choisis un nez !",
        "HAIRS":"Choisis une coupe de cheveux !",
        "TOPS":"Choisis un t-shirt !",
        "BOTTOMS":"Choisis un pantalon !",
        "GLASSES":"Choisis des lunettes !",
        "SHOES":"Choisis des chaussures !",
        "MUSTACH":"Choisis une moustache !",
        "BARBES":"Choisis une barbe !",
        "EARS":"Choisis des oreilles !",
        "BKCOLOR":"Choisis une couleur de fond !",
        "HATS":"Choisis un chapeau !",
        "PROPOSE_CANDIDATE":"Clique sur une carte pour proposer une réponse",
        "languages":[
            {"label":"Français", locale:"fr-FR", "flag":"images/assets/nav/nav_buttons_french_flag.svg"},
            {"label":"English", locale:"en-US", "flag":"images/assets/nav/nav_buttons_english_flag.svg"},
            {"label":"Deutsch", locale:"de-DE", "flag":"images/assets/nav/nav_buttons_deutsch_flag.svg"},
            {"label":"Española", locale:"es-ES", "flag":"images/assets/nav/nav_buttons_spanish_flag.svg"}
        ],
        "skin_color":[
            "#ffdeb8", "#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#8d5524", "#000000"
        ],
        "eyes_color":[
            "#00BFFF", "#00C957", "#2F4F4F", "#3E766D", "#5E2605", "#668B8B", "#e0886d", "#000000"
        ],
        "hairs_color":[
            "#000000", "#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#8d5524",
            "#ffd7af", "#ffd775", "#ffd987", "#e07033", "#dd986c", "#eaa788", "#eab01e", "#fcb35f", "#fce2a1", "#f7d083", "#E3E3E3",
            "#c69b17", "#b25320", "#d1801d", "#fce3c2", "#e28451"
        ],
        "questions":[
            {
                "icon":"images/character/questions_icons/questions_icons_01.svg",
                "label":"Le personnage a-t-il la peau claire ?",
                "ok":"Oui, le personnage a la peau claire.",
                "nok":"Non, le candidat n'a pas la peau claire.",
                "check":"skin_color",
                "value":["#ffdeb8", "#ffdbac", "#f1c27d", "#e0ac69"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_02.svg",
                "label":"Le personnage porte-t-il des lunettes ?",
                "ok":"Oui, le personnage porte des lunettes.",
                "nok":"Non, le candidat ne porte pas de lunettes.",
                "check":"glasses",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_03.svg",
                "label":"Le personnage porte-t-il une moustache ?",
                "ok":"Oui, le personnage porte la moustache.",
                "nok":"Non, le personnage ne porte pas la moustache.",
                "check":"mustach",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_04.svg",
                "label":"Le personnage porte-t-il un chapeau ?",
                "ok":"Oui, le personnage porte quelque chose sur la tête.",
                "nok":"Non, le personnage n'a pas de chapeau.",
                "check":"hats",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_06.svg",
                "label":"Le personnage est-il une fille ?",
                "ok":"Oui, le personnage est une fille.",
                "nok":"Non, le personnage est un garçon...",
                "check":"type",
                "value":"1",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_05.svg",
                "label":"Le personnage est-il un garçon ?",
                "ok":"Oui, le personnage est bien un garçon.",
                "nok":"Non, c'est une fille.",
                "check":"type",
                "value":"2",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_07.svg",
                "label":"Le personnage a-t-il les cheveux de couleur claire ?",
                "ok":"Oui, a les cheuveux de couleur plutôt claire.",
                "nok":"Non, Il me semble que ces cheveux sont plutôt foncés.",
                "check":"hairs_color",
                "value":["#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#ffd7af", "#ffd775", "#ffd987", "#dd986c", "#eaa788", "#eab01e", "#fcb35f", "#fce2a1", "#f7d083", "#c69b17", "#d1801d", "#fce3c2", "#e28451"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_08.svg",
                "label":"Le personnage a-t-il les yeux ouverts ?",
                "ok":"Oui, ses yeux sont ouverts.",
                "nok":"Non, il a les yeux fermés.",
                "check":"eyes",
                "value":["1","2","3","5","6","7","8","12","13","15","16"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_09.svg",
                "label":"Le personnage a-t-il les cheveux de couleur foncée ?",
                "ok":"Oui, ces cheveux sont plutôt foncés.",
                "nok":"Non, je dirais qu'ils sont plutôt claires.",
                "check":"hairs_color",
                "value":["#000000", "#8d5524", "#b25320"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_10.svg",
                "label":"Le personnage a-t-il les cheveux courts ?",
                "ok":"Oui, ses cheveux sont plutôt courts.",
                "nok":"Non, il a les cheveux longs!",
                "check":"hairs",
                "value":["1","2","3","4","6","7","8","11","12","14","17","26"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_11.svg",
                "label":"Le personnage porte-t-il quelque chose sur son t-shirt ?",
                "ok":"Oui, une icône est imprimée sur son t-shirt.",
                "nok":"Non, son t-shirt est vierge!",
                "check":"tshirt",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_12.svg",
                "label":"Le personnage sourit-il ?",
                "ok":"Oui, il est plutôt souriant.",
                "nok":"Non, il ne sourit pas vraiment.",
                "check":"mouth",
                "value":["3","4","5","6","12","14","15","17","19","21"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_13.svg",
                "label":"Pouvons-nous voir les dents du personnage ?",
                "ok":"Oui, on voit bien ses dents!",
                "nok":"Non, je ne vois pas les dents de mon personnage.",
                "check":"mouth",
                "value":["4","5","6","9","10","11","12"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_14.svg",
                "label":"Le personnage porte-t-il la barbe ?",
                "ok":"Oui, il a une belle barbe!",
                "nok":"Non, il ne porte pas la barbe.",
                "check":"barbe",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_15.svg",
                "label":"Le personnage est-il chauve ?",
                "ok":"Oui, il n'a pas beaucoup de cheveux!",
                "nok":"Non, il a une belle cheveulure!",
                "check":"hairs",
                "value":["1","2","7","8","11","14","30"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_16.svg",
                "label":"Le personnage a-t-il la peau foncée ?",
                "ok":"Oui, il a le teint plutôt foncé!",
                "nok":"Non, il a la peau claire!",
                "check":"skin_color",
                "value":["#c68642", "#8d5524", "#000000"],
                "played":false
            }
        ],
        "questions_openent":[
            {
                "icon":"images/character/questions_icons/questions_icons_01.svg",
                "label":"Ton personnage a-t-il la peau claire ?",
                "ok":"Oui, mon personnage a la peau claire.",
                "nok":"Non, mon personnage n'a pas la peau claire.",
                "check":"skin_color",
                "value":["#ffdeb8", "#ffdbac", "#f1c27d", "#e0ac69"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_02.svg",
                "label":"Ton personnage porte-t-il des lunettes ?",
                "ok":"Oui, mon personnage porte des lunettes.",
                "nok":"Non, mon personnage ne porte pas de lunettes.",
                "check":"glasses",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_03.svg",
                "label":"Ton personnage porte-t-il une moustache ?",
                "ok":"Oui, mon personnage porte la moustache.",
                "nok":"Non, mon personnage ne porte pas la moustache.",
                "check":"mustach",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_04.svg",
                "label":"Ton personnage porte-t-il un chapeau ?",
                "ok":"Oui, mon personnage porte quelque chose sur la tête.",
                "nok":"Non, mon personnage n'a pas de chapeau.",
                "check":"hats",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_06.svg",
                "label":"Ton personnage est-il une fille ?",
                "ok":"Oui, mon personnage est une fille.",
                "nok":"Non, mon personnage est un garçon...",
                "check":"type",
                "value":"1",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_05.svg",
                "label":"Ton personnage est-il un garçon ?",
                "ok":"Oui, mon personnage est un garçon.",
                "nok":"Non, c'est une fille.",
                "check":"type",
                "value":"2",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_07.svg",
                "label":"Ton personnage a-t-il les cheveux de couleur claire ?",
                "ok":"Oui, il a les cheuveux de couleur plutôt claire.",
                "nok":"Non, ses cheveux sont de souleur foncés.",
                "check":"hairs_color",
                "value":["#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#ffd7af", "#ffd775", "#ffd987", "#dd986c", "#eaa788", "#eab01e", "#fcb35f", "#fce2a1", "#f7d083", "#c69b17", "#d1801d", "#fce3c2", "#e28451"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_08.svg",
                "label":"Ton personnage a-t-il les yeux ouverts ?",
                "ok":"Oui, ses yeux sont ouverts.",
                "nok":"Non, il a les yeux fermés.",
                "check":"eyes",
                "value":["1","2","3","5","6","7","8","12","13","15","16"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_09.svg",
                "label":"Ton personnage a-t-il les cheveux de couleur foncée ?",
                "ok":"Oui, ces cheveux sont foncés.",
                "nok":"Non, je dirais qu'ils sont plutôt claires.",
                "check":"hairs_color",
                "value":["#000000", "#8d5524", "#b25320"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_10.svg",
                "label":"Ton personnage a-t-il les cheveux courts ?",
                "ok":"Oui, ses cheveux sont plutôt courts.",
                "nok":"Non, il a les cheveux longs!",
                "check":"hairs",
                "value":["1","2","3","4","6","7","8","11","12","14","17","26"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_11.svg",
                "label":"Ton personnage porte-t-il quelque chose sur son t-shirt ?",
                "ok":"Oui, une icône est imprimée sur son t-shirt.",
                "nok":"Non, son t-shirt est vierge!",
                "check":"tshirt",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_12.svg",
                "label":"Ton personnage sourit-il ?",
                "ok":"Oui, il est plutôt souriant.",
                "nok":"Non, il ne sourit pas vraiment.",
                "check":"mouth",
                "value":["3","4","5","6","12","14","15","17","19","21"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_13.svg",
                "label":"Pouvons-nous voir les dents de ton personnage ?",
                "ok":"Oui, on voit bien ses dents!",
                "nok":"Non, je ne vois pas les dents de mon personnage.",
                "check":"mouth",
                "value":["4","5","6","9","10","11","12"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_14.svg",
                "label":"Ton personnage porte-t-il la barbe ?",
                "ok":"Oui, il a une belle barbe!",
                "nok":"Non, il ne porte pas la barbe.",
                "check":"barbe",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_15.svg",
                "label":"Ton personnage est-il chauve ?",
                "ok":"Oui, il n'a pas beaucoup de cheveux!",
                "nok":"Non, il a une longue cheveulure!",
                "check":"hairs",
                "value":["1","2","7","8","11","14","30"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_16.svg",
                "label":"Ton personnage a-t-il la peau foncée ?",
                "ok":"Oui, il a le teint plutôt foncé!",
                "nok":"Non, il a la peau claire!",
                "check":"skin_color",
                "value":["#c68642", "#8d5524", "#000000"],
                "played":false
            }
        ]
    },
    "en":{
        "GIRL":"GIRL",
        "BOY":"BOY",
        "PLAY_BUTTON":"PLAY",
        "GAME_RULES":"Game RULES",
        "PLAY_RULES_SLIDE_01":"CHOOSE YOUR HEROES<br/>AMONG THE SIXTEEN<br/>PROPOSED CHARACTERS.",
        "PLAY_RULES_SLIDE_02":"THE GOAL OF THE GAME IS TO FIND<br/>WHO IS YOUR ADVERSARY",
        "PLAY_RULES_SLIDE_03":"CLICK ON THIS BUTTON<br/>TO ASK QUESTIONS<br/>AND ELIMINATE CANDIDATES",
        "PLAY_RULES_SLIDE_04":"WHEN YOU HAVE FOUND,<br/>CLICK ON THIS BUTTON<br/>TO PROPOSE ANSWER.",
        "PLAY_RULES_SLIDE_05":"TO WIN, YOU MUST FIND<br/>WHO IS YOUR ADVERSARY<br/>AT FIRST!",
        "WS_TIMEOUT_TITLE":"Connection",
        "WS_TIMEOUT_MESSAGE":"Oops, the application did not respond fast enough",
        "WS_TIMEOUT_BUTTON":"Try again later",
        "WS_STANDARD_ERROR_BUTTON":"Try again later",
        "WS_STANDARD_ERROR_TITLE":"OOPS !",
        "WS_STANDARD_ERROR_MESSAGE":"The server is temporarily unavailable",
        "OK_BUTTON":"OK",
        "GAME_LANG":"Game Language",
        "GAME_CHARACTER":"Your character",
        "CREATE_BUTTON":"Create",
        "GALLERY_BUTTON":"gallery",
        "SETTINGS":"Settings",
        "INFOS":"Informations",
        "INFORMATIONS_TITLE":"Informations",
        "GALLERY_TITLE":"Gallery",
        "MY_GALLERY_TITLE":"My Characters",
        "HOME":"Home",
        "GAME_SELECT_QUESTION":"Select a question",
        "GAME_YOUR_TURN":"Your turn",
        "GAME_ELIMINATE_CANDIDAT":"Eliminates candidates",
        "GAME_PURPOSE":"Submit a Character",
        "GALLERY":"My Characters",
        "WORLD_GALLERY":"Everybody",
        "YOUR_TURN":"Your turn",
        "OPENENT_TURN":"Your opponent's turn",
        "OPENENT_TITLE":"Oppenent",
        "CHOOSE_QUESTION":"Select a question",
        "PROPOSE_USER":"Is the character <%= name %>?",
        "PROPOSE_TRUE":"Congratulations! Your opponent was very <%= name %>!",
        "PROPOSE_OPENENT_TRUE":"Oops, your opponent first guessed your character <%= name %>!",
        "PROPOSE_FALSE":"No it is not <%= name %>.",
        "WIN_TEXT":"WINNING <%= label %>!",
        "LOSE_TEXT":"LOSING <%= label %>!",
        "HOME_SETTING_TITLE":"SETTINGS",
        "SETTING_SOUND":"Sounds",
        "SETTING_MUSIC":"Music",
        "SETTING_VOICE":"VOCAL AID",
        "SETTING_LANG":"LANGUAGE",
        "TAP_TO_CONTINUE":"Touch the screen to continue",
        "NO_NETWORK_TITLE":"Internet connection",
        "INTERNET_IS_LOST":"You are no longer connected to the internet",
        "INTERNET_IS_CONNECTED":"You are connected to the internet with your <%= state %>.",
        "NO_NETWORK_MESSAGE":"You are not logged in, please try again later.",
        "SHOW_RESPONSE":"View Answer",
        "TRUE_RESPONSE":"Yes",
        "GIVE_NAME":"Give him a first name",
        "GIVE_AGE":"How old are you?",
        "NEED_NAME_AND_AGE_TITLE":"To register you must give a name and age to your character.",
        "NEED_NAME_AND_AGE_MESSAGE":"To register you must give a name and age to your character.",
        "FALSE_RESPONSE":"No",
        "CONTINUE_RESPONSE":"Continue",
        "MISTAKE":"I think you've been watching poorly! Choose another answer to continue.",
        "SKINS":"Choose a skin color!",
        "EYES":"Choose your eyes!",
        "MOUTHS":"Choose a mouth!",
        "EYEBROWS":"Choose your eyebrow !",
        "NOSES":"choose a nose !",
        "HAIRS":"choose his haircut !",
        "TOPS":"choose a t-shirt !",
        "BOTTOMS":"Choose a pant !",
        "GLASSES":"Choose glasses !",
        "SHOES":"choose shoes !",
        "MUSTACH":"choose a mustach !",
        "BARBES":"choose a barbe !",
        "EARS":"Choose ears !",
        "BKCOLOR":"Select a background color !",
        "HATS":"Select a hat !",
        "PROPOSE_CANDIDATE":"Click on a card to suggest an answer.",
        "languages":[
            {"label":"Français", locale:"fr-FR", "flag":"images/assets/nav/nav_buttons_french_flag.svg"},
            {"label":"English", locale:"en-US", "flag":"images/assets/nav/nav_buttons_english_flag.svg"},
            {"label":"Deutsch", locale:"de-DE", "flag":"images/assets/nav/nav_buttons_deutsch_flag.svg"},
            {"label":"Española", locale:"es-ES", "flag":"images/assets/nav/nav_buttons_spanish_flag.svg"}
        ],
        "skin_color":[
            "#ffdeb8", "#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#8d5524", "#000000"
        ],
        "eyes_color":[
            "#00BFFF", "#00C957", "#2F4F4F", "#3E766D", "#5E2605", "#668B8B", "#e0886d", "#000000"
        ],
        "hairs_color":[
            "#000000", "#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#8d5524",
            "#ffd7af", "#ffd775", "#ffd987", "#e07033", "#dd986c", "#eaa788", "#eab01e", "#fcb35f", "#fce2a1", "#f7d083", "#E3E3E3",
            "#c69b17", "#b25320", "#d1801d", "#fce3c2", "#e28451"
        ],
        "questions":[
            {
                "icon":"images/character/questions_icons/questions_icons_01.svg",
                "label":"Does the character have light skin?",
                "ok":"Yes, the character has light skin.",
                "nok":"No, candidate does not have clear skin.",
                "check":"skin_color",
                "value":["#ffdeb8", "#ffdbac", "#f1c27d", "#e0ac69"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_02.svg",
                "label":"Does the character wear glasses?",
                "ok":"Yes, the character wears glasses.",
                "nok":"No, the candidate does not wear glasses.",
                "check":"glasses",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_03.svg",
                "label":"Does the character wear a mustache?",
                "ok":"Yes, the character carries the mustache.",
                "nok":"No, the character does not wear the mustache.",
                "check":"mustach",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_04.svg",
                "label":"Does the character wear a hat?",
                "ok":"Yes, the character carries something on his head.",
                "nok":"No, the character has no hat.",
                "check":"hats",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_06.svg",
                "label":"Is the character a girl?",
                "ok":"Yes, the character is a girl.",
                "nok":"No, the character is a boy.",
                "check":"type",
                "value":"1",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_05.svg",
                "label":"Is the character a boy?",
                "ok":"Yes, the character is a boy.",
                "nok":"No, she's a girl.",
                "check":"type",
                "value":"2",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_07.svg",
                "label":"Does the character have light-colored hair?",
                "ok":"Yes, has the hair color rather clear.",
                "nok":"No, It seems to me that these hair is rather dark.",
                "check":"hairs_color",
                "value":["#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#ffd7af", "#ffd775", "#ffd987", "#dd986c", "#eaa788", "#eab01e", "#fcb35f", "#fce2a1", "#f7d083", "#c69b17", "#d1801d", "#fce3c2", "#e28451"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_08.svg",
                "label":"Does the character have his eyes open?",
                "ok":"Yes, his eyes are open.",
                "nok":"No, he has his eyes closed.",
                "check":"eyes",
                "value":["1","2","3","5","6","7","8","12","13","15","16"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_09.svg",
                "label":"Does the character have dark hair?",
                "ok":"Yes, this hair is rather dark.",
                "nok":"No, I would say they are rather clear.",
                "check":"hairs_color",
                "value":["#000000", "#8d5524", "#b25320"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_10.svg",
                "label":"Does the character have short hair?",
                "ok":"Yes, her hair is rather short.",
                "nok":"No, he has long hair!",
                "check":"hairs",
                "value":["1","2","3","4","6","7","8","11","12","14","17","26"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_11.svg",
                "label":"Does the character wear something on his t-shirt?",
                "ok":"Yes, an icon is printed on his t-shirt.",
                "nok":"No, her t-shirt is blank!",
                "check":"tshirt",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_12.svg",
                "label":"Does the character smile?",
                "ok":"Yes, it is rather smiling.",
                "nok":"No, he does not really smile.",
                "check":"mouth",
                "value":["3","4","5","6","12","14","15","17","19","21"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_13.svg",
                "label":"Can we see the character's teeth?",
                "ok":"Yes, we see his teeth well!",
                "nok":"No, I do not see the teeth of my character.",
                "check":"mouth",
                "value":["4","5","6","9","10","11","12"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_14.svg",
                "label":"Does the character wear a beard?",
                "ok":"Yes, he has a beautiful beard!",
                "nok":"No, he does not wear a beard.",
                "check":"barbe",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_15.svg",
                "label":"Is the character bald?",
                "ok":"Yes, he does not have much hair!",
                "nok":"No, he has a beautiful hair!",
                "check":"hairs",
                "value":["1","2","7","8","11","14","30"],
                "played":false
            }
        ],
        "questions_openent":[
            {
                "icon":"images/character/questions_icons/questions_icons_01.svg",
                "label":"Does the character have light skin?",
                "ok":"Yes, the character has light skin.",
                "nok":"No, candidate does not have clear skin.",
                "check":"skin_color",
                "value":["#ffdeb8", "#ffdbac", "#f1c27d", "#e0ac69"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_02.svg",
                "label":"Does the character wear glasses?",
                "ok":"Yes, the character wears glasses.",
                "nok":"No, the candidate does not wear glasses.",
                "check":"glasses",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_03.svg",
                "label":"Does the character wear a mustache?",
                "ok":"Yes, the character carries the mustache.",
                "nok":"No, the character does not wear the mustache.",
                "check":"mustach",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_04.svg",
                "label":"Does the character wear a hat?",
                "ok":"Yes, the character carries something on his head.",
                "nok":"No, the character has no hat.",
                "check":"hats",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_06.svg",
                "label":"Is the character a girl?",
                "ok":"Yes, the character is a girl.",
                "nok":"No, the character is a boy.",
                "check":"type",
                "value":"1",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_05.svg",
                "label":"Is the character a boy?",
                "ok":"Yes, the character is a boy.",
                "nok":"No, she's a girl.",
                "check":"type",
                "value":"2",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_07.svg",
                "label":"Does the character have light-colored hair?",
                "ok":"Yes, has the hair color rather clear.",
                "nok":"No, It seems to me that these hair is rather dark.",
                "check":"hairs_color",
                "value":["#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#ffd7af", "#ffd775", "#ffd987", "#dd986c", "#eaa788", "#eab01e", "#fcb35f", "#fce2a1", "#f7d083", "#c69b17", "#d1801d", "#fce3c2", "#e28451"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_08.svg",
                "label":"Does the character have his eyes open?",
                "ok":"Yes, his eyes are open.",
                "nok":"No, he has his eyes closed.",
                "check":"eyes",
                "value":["1","2","3","5","6","7","8","12","13","15","16"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_09.svg",
                "label":"Does the character have dark hair?",
                "ok":"Yes, this hair is rather dark.",
                "nok":"No, I would say they are rather clear.",
                "check":"hairs_color",
                "value":["#000000", "#8d5524", "#b25320"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_10.svg",
                "label":"Does the character have short hair?",
                "ok":"Yes, her hair is rather short.",
                "nok":"No, he has long hair!",
                "check":"hairs",
                "value":["1","2","3","4","6","7","8","11","12","14","17","26"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_11.svg",
                "label":"Does the character wear something on his t-shirt?",
                "ok":"Yes, an icon is printed on his t-shirt.",
                "nok":"No, her t-shirt is blank!",
                "check":"tshirt",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_12.svg",
                "label":"Does the character smile?",
                "ok":"Yes, it is rather smiling.",
                "nok":"No, he does not really smile.",
                "check":"mouth",
                "value":["3","4","5","6","12","14","15","17","19","21"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_13.svg",
                "label":"Can we see the character's teeth?",
                "ok":"Yes, we see his teeth well!",
                "nok":"No, I do not see the teeth of my character.",
                "check":"mouth",
                "value":["4","5","6","9","10","11","12"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_14.svg",
                "label":"Does the character wear a beard?",
                "ok":"Yes, he has a beautiful beard!",
                "nok":"No, he does not wear a beard.",
                "check":"barbe",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_15.svg",
                "label":"Is the character bald?",
                "ok":"Yes, he does not have much hair!",
                "nok":"No, he has a beautiful hair!",
                "check":"hairs",
                "value":["1","2","7","8","11","14","30"],
                "played":false
            }
        ]
    },
    "de":{
        "GIRL":"FILLE",
        "BOY":"GARÇON",
        "PLAY_BUTTON":"JOUER",
        "GAME_RULES":"Règles du jeu",
        "PLAY_RULES_SLIDE_01":"CHOISIS TON HÉROS<br/>PARMI LES SEIZE<br>PERSONNAGES PROPOSÉS.",
        "PLAY_RULES_SLIDE_02":"LE BUT DU JEU EST DE TROUVER<br/>QUI EST TON ADVERSAIRE.",
        "PLAY_RULES_SLIDE_03":"CLIQUE SUR CE BOUTON POUR<br/>POSER DES QUESTIONS<br/>ET ÉLIMINER DES CANDIDATS.",
        "PLAY_RULES_SLIDE_04":"LORSQUE TU PENSES AVOIR TROUVÉ,<br/>CLIQUE SUR CE BOUTON POUR<br/>PROPOSER UNE RÉPONSE.",
        "PLAY_RULES_SLIDE_05":"POUR GAGNER,<br>IL FAUT TROUVER QUI EST<br>TON ADVERSAIRE EN PREMIER !",
        "WS_TIMEOUT_TITLE":"Connexion",
        "WS_TIMEOUT_MESSAGE":"Oups, l'application n'a pas répondu assez vite",
        "WS_TIMEOUT_BUTTON":"Réessayer plus tard",
        "WS_STANDARD_ERROR_BUTTON":"Réessayer plus tard",
        "WS_STANDARD_ERROR_TITLE":"OUPS !",
        "WS_STANDARD_ERROR_MESSAGE":"Le serveur est temporairement indisponible",
        "OK_BUTTON":"OK",
        "GAME_LANG":"Langue du jeu",
        "GAME_CHARACTER":"Votre personnage",
        "CREATE_BUTTON":"Créer",
        "GALLERY_BUTTON":"Galerie",
        "SETTINGS":"Paramètres",
        "INFOS":"Informations",
        "INFORMATIONS_TITLE":"Informations",
        "GALLERY_TITLE":"Galerie",
        "MY_GALLERY_TITLE":"Mes Personnages",
        "HOME":"Accueil",
        "GAME_SELECT_QUESTION":"Choisis une question",
        "GAME_YOUR_TURN":"À toi de jouer",
        "GAME_ELIMINATE_CANDIDAT":"Élimine les candidats",
        "GAME_PURPOSE":"Propose un personnage",
        "GALLERY":"Mes personnages",
        "WORLD_GALLERY":"Tout le monde",
        "YOUR_TURN":"À toi de jouer",
        "OPENENT_TURN":"Au tour de ton adversaire",
        "CHOOSE_QUESTION":"Choisis une question",
        "PROPOSE_USER":"Le personnage est-il <%= name %> ?",
        "PROPOSE_TRUE":"Bravo ! Ton adversaire était bien <%= name %>.",
        "PROPOSE_OPENENT_TRUE":"OUPS, ton adversaire a deviné en premier ton personnage <%= name %>!",
        "PROPOSE_FALSE":"Non ce n'est pas <%= name %>.",
        "WIN_TEXT":"GAGNÉ",
        "LOSE_TEXT":"PERDU",
        "HOME_SETTING_TITLE":"PARAMÈTRES",
        "SETTING_SOUND":"SONS",
        "SETTING_MUSIC":"MUSIQUE",
        "SETTING_VOICE":"AIDE VOCALE",
        "SETTING_LANG":"LANGUE",
        "TAP_TO_CONTINUE":"Touche l'écran pour continuer",
        "NO_NETWORK_TITLE":"Connexion Internet",
        "NO_NETWORK_MESSAGE":"Vous n'êtes pas connecté, merci de réessayer ultérieurement.",
        "languages":[
            {"label":"Français", locale:"fr-FR", "flag":"images/assets/nav/nav_buttons_french_flag.svg"},
            {"label":"English", locale:"en-US", "flag":"images/assets/nav/nav_buttons_english_flag.svg"},
            {"label":"Deutsch", locale:"de-DE", "flag":"images/assets/nav/nav_buttons_deutsch_flag.svg"},
            {"label":"Española", locale:"es-ES", "flag":"images/assets/nav/nav_buttons_spanish_flag.svg"}
        ],
        "skin_color":[
            "#ffdeb8", "#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#8d5524", "#000000"
        ],
        "eyes_color":[
            "#00BFFF", "#00C957", "#2F4F4F", "#3E766D", "#5E2605", "#668B8B", "#e0886d", "#000000"
        ],
        "hairs_color":[
            "#000000", "#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#8d5524",
            "#ffd7af", "#ffd775", "#ffd987", "#e07033", "#dd986c", "#eaa788", "#eab01e", "#fcb35f", "#fce2a1", "#f7d083", "#E3E3E3",
            "#c69b17", "#b25320", "#d1801d", "#fce3c2", "#e28451"
        ],
        "questions":[
            {
                "icon":"images/character/questions_icons/questions_icons_01.svg",
                "label":"Le personnage a-t-il la peau claire ?",
                "ok":"Oui, le personnage a la peau claire.",
                "nok":"Non, le candidat n'a pas la peau claire.",
                "check":"skin_color",
                "value":["#ffdeb8", "#ffdbac", "#f1c27d", "#e0ac69"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_02.svg",
                "label":"Le personnage porte-t-il des lunettes ?",
                "ok":"Oui, le personnage porte des lunettes.",
                "nok":"Non, le candidat ne porte pas de lunettes.",
                "check":"glasses",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_03.svg",
                "label":"Le personnage porte-t-il une moustache ?",
                "ok":"Oui, le personnage porte la moustache.",
                "nok":"Non, le personnage ne porte pas la moustache.",
                "check":"mustach",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_04.svg",
                "label":"Le personnage porte-t-il un chapeau ?",
                "ok":"Oui, le personnage porte quelque chose sur la tête.",
                "nok":"Non, le personnage n'a pas de chapeau.",
                "check":"hats",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_06.svg",
                "label":"Le personnage est-il une fille ?",
                "ok":"Oui, le personnage est une fille.",
                "nok":"Non, le personnage est un garçon...",
                "check":"type",
                "value":"1",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_05.svg",
                "label":"Le personnage est-il un garçon ?",
                "ok":"Oui, le personnage est bien un garçon.",
                "nok":"Non, c'est une fille.",
                "check":"type",
                "value":"2",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_07.svg",
                "label":"Le personnage a-t-il les cheveux de couleur claire ?",
                "ok":"Oui, a les cheuveux de couleur plutôt claire.",
                "nok":"Non, Il me semble que ces cheveux sont plutôt foncés.",
                "check":"hairs_color",
                "value":["#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#ffd7af", "#ffd775", "#ffd987", "#dd986c", "#eaa788", "#eab01e", "#fcb35f", "#fce2a1", "#f7d083", "#c69b17", "#d1801d", "#fce3c2", "#e28451"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_08.svg",
                "label":"Le personnage a-t-il les yeux ouverts ?",
                "ok":"Oui, ses yeux sont ouverts.",
                "nok":"Non, il a les yeux fermés.",
                "check":"eyes",
                "value":["1","2","3","5","6","7","8","12","13","15","16"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_09.svg",
                "label":"Le personnage a-t-il les cheveux de couleur foncée ?",
                "ok":"Oui, ces cheveux sont plutôt foncés.",
                "nok":"Non, je dirais qu'ils sont plutôt claires.",
                "check":"hairs_color",
                "value":["#000000", "#8d5524", "#b25320"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_10.svg",
                "label":"Le personnage a-t-il les cheveux courts ?",
                "ok":"Oui, ses cheveux sont plutôt courts.",
                "nok":"Non, il a les cheveux longs!",
                "check":"hairs",
                "value":["2","3","4","6","11","12","14","17","26"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_11.svg",
                "label":"Le personnage porte-t-il quelque chose sur son t-shirt ?",
                "ok":"Oui, une icône est imprimée sur son t-shirt.",
                "nok":"Non, son t-shirt est vierge!",
                "check":"tshirt",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_12.svg",
                "label":"Le personnage sourit-il ?",
                "ok":"Oui, il est plutôt souriant.",
                "nok":"Non, il ne sourit pas vraiment.",
                "check":"mouth",
                "value":["4","5","6","12","14","15","17"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_13.svg",
                "label":"Pouvons-nous voir les dents du personnage ?",
                "ok":"Oui, on voit bien ses dents!",
                "nok":"Non, je ne vois pas les dents de mon personnage.",
                "check":"mouth",
                "value":["4","5","6","9","10","11","12"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_14.svg",
                "label":"Le personnage porte-t-il la barbe ?",
                "ok":"Oui, il a une belle barbe!",
                "nok":"Non, il ne porte pas la barbe.",
                "check":"barbe",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_15.svg",
                "label":"Le personnage est-il chauve ?",
                "ok":"Oui, il n'a pas beaucoup de cheveux!",
                "nok":"Non, il a une belle cheveulure!",
                "check":"hairs",
                "value":["1","7","8","11","14","30"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_16.svg",
                "label":"Le personnage a-t-il la peau foncée ?",
                "ok":"Oui, il a le teint plutôt foncé!",
                "nok":"Non, il a la peau claire!",
                "check":"skin_color",
                "value":["#c68642", "#8d5524", "#000000"],
                "played":false
            }
        ]
    },
    "es":{
        "GIRL":"FILLE",
        "BOY":"GARÇON",
        "PLAY_BUTTON":"JOUER",
        "GAME_RULES":"Règles du jeu",
        "PLAY_RULES_SLIDE_01":"CHOISIS TON HÉROS<br/>PARMI LES SEIZE<br>PERSONNAGES PROPOSÉS.",
        "PLAY_RULES_SLIDE_02":"LE BUT DU JEU EST DE TROUVER<br/>QUI EST TON ADVERSAIRE.",
        "PLAY_RULES_SLIDE_03":"CLIQUE SUR CE BOUTON POUR<br/>POSER DES QUESTIONS<br/>ET ÉLIMINER DES CANDIDATS.",
        "PLAY_RULES_SLIDE_04":"LORSQUE TU PENSES AVOIR TROUVÉ,<br/>CLIQUE SUR CE BOUTON POUR<br/>PROPOSER UNE RÉPONSE.",
        "PLAY_RULES_SLIDE_05":"POUR GAGNER,<br>IL FAUT TROUVER QUI EST<br>TON ADVERSAIRE EN PREMIER !",
        "WS_TIMEOUT_TITLE":"Connexion",
        "WS_TIMEOUT_MESSAGE":"Oups, l'application n'a pas répondu assez vite",
        "WS_TIMEOUT_BUTTON":"Réessayer plus tard",
        "WS_STANDARD_ERROR_BUTTON":"Réessayer plus tard",
        "WS_STANDARD_ERROR_TITLE":"OUPS !",
        "WS_STANDARD_ERROR_MESSAGE":"Le serveur est temporairement indisponible",
        "OK_BUTTON":"OK",
        "GAME_LANG":"Langue du jeu",
        "GAME_CHARACTER":"Votre personnage",
        "CREATE_BUTTON":"Créer",
        "GALLERY_BUTTON":"Galerie",
        "SETTINGS":"Paramètres",
        "INFOS":"Informations",
        "INFORMATIONS_TITLE":"Informations",
        "GALLERY_TITLE":"Galerie",
        "MY_GALLERY_TITLE":"Mes Personnages",
        "HOME":"Accueil",
        "GAME_SELECT_QUESTION":"Choisis une question",
        "GAME_YOUR_TURN":"À toi de jouer",
        "GAME_ELIMINATE_CANDIDAT":"Élimine les candidats",
        "GAME_PURPOSE":"Propose un personnage",
        "GALLERY":"Mes personnages",
        "WORLD_GALLERY":"Tout le monde",
        "YOUR_TURN":"À toi de jouer",
        "OPENENT_TURN":"Au tour de ton adversaire",
        "CHOOSE_QUESTION":"Choisis une question",
        "PROPOSE_USER":"Le personnage est-il <%= name %> ?",
        "PROPOSE_TRUE":"Bravo ! Ton adversaire était bien <%= name %>.",
        "PROPOSE_OPENENT_TRUE":"OUPS, ton adversaire a deviné en premier ton personnage <%= name %>!",
        "PROPOSE_FALSE":"Non ce n'est pas <%= name %>.",
        "WIN_TEXT":"GAGNÉ",
        "LOSE_TEXT":"PERDU",
        "HOME_SETTING_TITLE":"PARAMÈTRES",
        "SETTING_SOUND":"SONS",
        "SETTING_MUSIC":"MUSIQUE",
        "SETTING_VOICE":"AIDE VOCALE",
        "SETTING_LANG":"LANGUE",
        "TAP_TO_CONTINUE":"Touche l'écran pour continuer",
        "NO_NETWORK_TITLE":"Connexion Internet",
        "NO_NETWORK_MESSAGE":"Vous n'êtes pas connecté, merci de réessayer ultérieurement.",
        "languages":[
            {"label":"Français", locale:"fr-FR", "flag":"images/assets/nav/nav_buttons_french_flag.svg"},
            {"label":"English", locale:"en-US", "flag":"images/assets/nav/nav_buttons_english_flag.svg"},
            {"label":"Deutsch", locale:"de-DE", "flag":"images/assets/nav/nav_buttons_deutsch_flag.svg"},
            {"label":"Española", locale:"es-ES", "flag":"images/assets/nav/nav_buttons_spanish_flag.svg"}
        ],
        "skin_color":[
            "#ffdeb8", "#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#8d5524", "#000000"
        ],
        "eyes_color":[
            "#00BFFF", "#00C957", "#2F4F4F", "#3E766D", "#5E2605", "#668B8B", "#e0886d", "#000000"
        ],
        "hairs_color":[
            "#000000", "#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#8d5524",
            "#ffd7af", "#ffd775", "#ffd987", "#e07033", "#dd986c", "#eaa788", "#eab01e", "#fcb35f", "#fce2a1", "#f7d083", "#E3E3E3",
            "#c69b17", "#b25320", "#d1801d", "#fce3c2", "#e28451"
        ],
        "questions":[
            {
                "icon":"images/character/questions_icons/questions_icons_01.svg",
                "label":"Le personnage a-t-il la peau claire ?",
                "ok":"Oui, le personnage a la peau claire.",
                "nok":"Non, le candidat n'a pas la peau claire.",
                "check":"skin_color",
                "value":["#ffdeb8", "#ffdbac", "#f1c27d", "#e0ac69"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_02.svg",
                "label":"Le personnage porte-t-il des lunettes ?",
                "ok":"Oui, le personnage porte des lunettes.",
                "nok":"Non, le candidat ne porte pas de lunettes.",
                "check":"glasses",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_03.svg",
                "label":"Le personnage porte-t-il une moustache ?",
                "ok":"Oui, le personnage porte la moustache.",
                "nok":"Non, le personnage ne porte pas la moustache.",
                "check":"mustach",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_04.svg",
                "label":"Le personnage porte-t-il un chapeau ?",
                "ok":"Oui, le personnage porte quelque chose sur la tête.",
                "nok":"Non, le personnage n'a pas de chapeau.",
                "check":"hats",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_06.svg",
                "label":"Le personnage est-il une fille ?",
                "ok":"Oui, le personnage est une fille.",
                "nok":"Non, le personnage est un garçon...",
                "check":"type",
                "value":"1",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_05.svg",
                "label":"Le personnage est-il un garçon ?",
                "ok":"Oui, le personnage est bien un garçon.",
                "nok":"Non, c'est une fille.",
                "check":"type",
                "value":"2",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_07.svg",
                "label":"Le personnage a-t-il les cheveux de couleur claire ?",
                "ok":"Oui, a les cheuveux de couleur plutôt claire.",
                "nok":"Non, Il me semble que ces cheveux sont plutôt foncés.",
                "check":"hairs_color",
                "value":["#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#ffd7af", "#ffd775", "#ffd987", "#dd986c", "#eaa788", "#eab01e", "#fcb35f", "#fce2a1", "#f7d083", "#c69b17", "#d1801d", "#fce3c2", "#e28451"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_08.svg",
                "label":"Le personnage a-t-il les yeux ouverts ?",
                "ok":"Oui, ses yeux sont ouverts.",
                "nok":"Non, il a les yeux fermés.",
                "check":"eyes",
                "value":["1","2","3","5","6","7","8","12","13","15","16"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_09.svg",
                "label":"Le personnage a-t-il les cheveux de couleur foncée ?",
                "ok":"Oui, ces cheveux sont plutôt foncés.",
                "nok":"Non, je dirais qu'ils sont plutôt claires.",
                "check":"hairs_color",
                "value":["#000000", "#8d5524", "#b25320"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_10.svg",
                "label":"Le personnage a-t-il les cheveux courts ?",
                "ok":"Oui, ses cheveux sont plutôt courts.",
                "nok":"Non, il a les cheveux longs!",
                "check":"hairs",
                "value":["2","3","4","6","11","12","14","17","26"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_11.svg",
                "label":"Le personnage porte-t-il quelque chose sur son t-shirt ?",
                "ok":"Oui, une icône est imprimée sur son t-shirt.",
                "nok":"Non, son t-shirt est vierge!",
                "check":"tshirt",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_12.svg",
                "label":"Le personnage sourit-il ?",
                "ok":"Oui, il est plutôt souriant.",
                "nok":"Non, il ne sourit pas vraiment.",
                "check":"mouth",
                "value":["4","5","6","12","14","15","17"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_13.svg",
                "label":"Pouvons-nous voir les dents du personnage ?",
                "ok":"Oui, on voit bien ses dents!",
                "nok":"Non, je ne vois pas les dents de mon personnage.",
                "check":"mouth",
                "value":["4","5","6","9","10","11","12"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_14.svg",
                "label":"Le personnage porte-t-il la barbe ?",
                "ok":"Oui, il a une belle barbe!",
                "nok":"Non, il ne porte pas la barbe.",
                "check":"barbe",
                "value":">0",
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_15.svg",
                "label":"Le personnage est-il chauve ?",
                "ok":"Oui, il n'a pas beaucoup de cheveux!",
                "nok":"Non, il a une belle cheveulure!",
                "check":"hairs",
                "value":["1","7","8","11","14","30"],
                "played":false
            },
            {
                "icon":"images/character/questions_icons/questions_icons_16.svg",
                "label":"Le personnage a-t-il la peau foncée ?",
                "ok":"Oui, il a le teint plutôt foncé!",
                "nok":"Non, il a la peau claire!",
                "check":"skin_color",
                "value":["#c68642", "#8d5524", "#000000"],
                "played":false
            }
        ]
    }
}