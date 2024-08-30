FT.manifest({
    "filename": "index.html",
    "width": 300,
    "height": 250,
    "clickTagCount": 1,
    "hideBrowsers": ["ie8"],
    "richloads": [
 		{"name":"main_rl", "src":"JetBlue_DisplayBanners_Vancouver_V1_NonDynamic_COOP_HTML5_300x250_RL1"}
 	],
    "instantAds": [
        {"name":"main_rl",          "type":"richload"}, 
        {"name":"clickTag1_url",    "type":"text", "default":"http://www.landingpageurl.com/?blahblah"}
    ]
});