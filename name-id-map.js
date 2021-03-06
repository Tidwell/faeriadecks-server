var nameIdMap = {
    "Thyrian Ceremonial": 255,
    "Knight's Praise": 8,
    "Burial Chamber": 476,
    "Forest Wisp": 209,
    "Sturdy Shell": 111,
    "Azrael Obelisk": 35,
    "Wind Wisp": 410,
    "Call Of The Lake": 154,
    "Samaris Sand Merchant": 502,
    "Pestilence": 556,
    "Goblin Apprentice": 318,
    "Roar Of The Forest": 257,
    "Rude Scapegrace": 510,
    "Baby Drosera": 371,
    "Priestess Of Tavaryn": 208,
    "Wish Of The Oradrims": 453,
    "Morog": 46,
    "Fortune Hunter": 506,
    "Nature's Growth": 252,
    "Submerge": 158,
    "Flying Manta": 42,
    "Youthful Duellist": 3,
    "Triton Raider": 124,
    "Rebel Fanatic": 516,
    "Warlust": 454,
    "Hard Day's Work": 355,
    "Kobold Barracks": 372,
    "Keldran Soldier": 41,
    "Meroval Stables": 571,
    "Land Renewal": 258,
    "Elinee's Favorite": 217,
    "Timebomb": 313,
    "Runic Flash": 37,
    "Haunted House": 274,
    "Ale Degustation": 360,
    "Thyrian Explorer": 517,
    "Tide Bringer": 119,
    "Keldran Warchief": 418,
    "Amai Settlement": 455,
    "Share Of The Weak": 152,
    "Tale Of The Old Turtle": 153,
    "Order Of Valor": 103,
    "Hazeling": 213,
    "Wither Apostle": 507,
    "Powdersilk Faerie": 412,
    "Gabrian Cistern": 172,
    "Desert Wyrm": 401,
    "Maeris Champion": 117,
    "Kilban Lumberman": 503,
    "Demonic Touch": 452,
    "Morning Bliss": 460,
    "Grim Devils": 306,
    "Stone Elemental": 321,
    "Mecha Miner": 315,
    "Mad Avenger": 312,
    "Tower Of Fate": 570,
    "Sandstorm": 49,
    "Leviathan": 126,
    "Call To Arms": 558,
    "Soulchanger": 212,
    "Jelly Wisp": 112,
    "Kobold Guard": 300,
    "Flying Drakkar": 417,
    "Orb Of Malevolence": 579,
    "Memorial Of Orobouros": 472,
    "Deserted Tower": 380,
    "Bloomstorm Dragon": 210,
    "Slavery": 350,
    "Sky Trailblazer": 408,
    "Solar Flying Fortress": 406,
    "Ghost Of Erianor": 214,
    "Grumpy Porcupine": 23,
    "Mirnast Engineer": 504,
    "Syland Windmill": 573,
    "Cursed Library": 473,
    "Gabrian Order": 102,
    "Thyria's Solace": 552,
    "Djidan Sagittarius": 415,
    "Stormbreeze Dragon": 113,
    "Gemsilk Faerie": 114,
    "Rhinodon": 421,
    "Falcon Dive": 555,
    "Gust Of Hope": 553,
    "Sunken Tower": 176,
    "Disillusion": 353,
    "Grapeshot": 358,
    "Keldran Berserker": 413,
    "Rebel Scout": 2,
    "Fenodrae": 101,
    "Prophetic Tablet": 175,
    "Sagami Revenant": 216,
    "Soaken Luduan": 116,
    "Terraform": 557,
    "Oracle's Tipi": 26,
    "Thyrian Expedition": 10,
    "Keldran Envoy": 420,
    "Lady Of Lament": 22,
    "Living Willow": 25,
    "Water Elemental": 127,
    "Swamp Wurm": 15,
    "Ogre Boulder Thrower": 319,
    "Kappa Dowser": 125,
    "Alberian Fortification": 373,
    "Pineling": 222,
    "Spirit Of Agony": 204,
    "Tiki Pathfinder": 202,
    "Earthraiser": 515,
    "Flood's Caprice": 18,
    "Oradrim Monk": 44,
    "Goblin Mentor": 304,
    "Gabrian Explorer": 123,
    "Sunlight Hope": 48,
    "Vault Of Torment": 27,
    "Goblin Flamethrower": 39,
    "Tiki Weathercock": 273,
    "Figure Of Prosperity": 377,
    "Nautilus Probe": 170,
    "Mochi Fellow": 12,
    "Amai Business": 456,
    "Spring Mochi": 13,
    "Typhoon": 156,
    "Lunar Mochi": 118,
    "Heart of the Wood": 270,
    "Piranha": 11,
    "Storehouse": 576,
    "Garden Of The Beggars": 578,
    "Amai Trader": 414,
    "Mountain Lupus": 316,
    "Vexing Sprite": 121,
    "Earth Golem": 34,
    "Stormspawn": 122,
    "Steam Forge": 6,
    "Tiki Oracle": 224,
    "Redflame Basilisk": 314,
    "Greed And Anger": 322,
    "Defiant Incarnation": 423,
    "Tiki Bonga": 207,
    "Mirabilite Dolmen": 575,
    "Altar Of Destruction": 572,
    "Aurora": 550,
    "Spiked Barricade": 375,
    "Mindstorm Dragon": 411,
    "Farm Boy": 1,
    "Djidan Pylon": 470,
    "Azrael Shedim": 33,
    "Servant Of Alua": 104,
    "Syland Horseman": 9,
    "Djidan Templar": 403,
    "Hell Gate": 374,
    "Noodle Bar": 171,
    "Battle Toad": 107,
    "Sagami Hunter": 24,
    "Troll Enchanter": 320,
    "Wind Gate": 475,
    "Poltergoyf": 219,
    "Thought Hunters": 311,
    "Aernost Fisherman": 501,
    "Firestorm Dragon": 309,
    "Atlas Weapon": 509,
    "Gabrian Warden": 14,
    "Djidan Apprentice": 402,
    "Oradrim Phalanx": 404,
    "Savage Sagami": 215,
    "Mind Travel": 457,
    "Faerializer": 109,
    "Iron Axe Found!": 359,
    "Giant Arboria": 205,
    "Temple Of Justice": 471,
    "Moonwell": 173,
    "Fearless Infiltrator": 514,
    "Overgrown Tower": 276,
    "Crusader Of The Shield": 508,
    "Sunwell": 474,
    "Void Sphere": 376,
    "Fire Wisp": 308,
    "Unbearable Words": 357,
    "Stalking Nightmare": 405,
    "Ogre Battler": 301,
    "Dryad Instinct": 28,
    "Campfire": 7,
    "Triton Wrath": 159,
    "Soup Time!": 19,
    "Fang Brothers": 422,
    "Water Divination": 151,
    "Thyrian Avenger": 225,
    "Imperial Assassin": 505,
    "Sand Elemental": 416,
    "Shedim Pest": 307,
    "Eclipse": 551,
    "Winter's Feast": 157,
    "Kirkis Archer": 513,
    "Stone Troll": 317,
    "Solar Engineer": 409,
    "Thyrian Protector": 226,
    "Oracle's Totem": 272,
    "Wish Of The Dryads": 253,
    "Ancient Kappa": 110,
    "Desert Twister": 451,
    "Shaytan Assassin": 45,
    "Shaytan Demon": 424,
    "Sinkhole": 356,
    "Forest Elemental": 221,
    "Tavaryn Yak": 201,
    "Flowersilk Faerie": 211,
    "Triton Warrior": 106,
    "Gabrian Overlord": 105,
    "Gravity Shift": 352,
    "Demonic Bell": 378,
    "Treefolk": 21,
    "Moss Bringer": 220,
    "Elinee's Library": 271,
    "Syland Barbarian": 4,
    "Celestial Tower": 477,
    "Shedim Brute": 32,
    "Flower Folk": 203,
    "Tiki Song": 251,
    "Alberian Wizard": 305,
    "Triton Chef": 108,
    "Oakling": 223,
    "Shaytan Fanatic": 400,
    "Kobold Watchtower": 36,
    "Goblin Explosion": 38,
    "Kappa Emperor": 120,
    "Aquaria": 150,
    "Gold Mine": 370,
    "Meroval King's Guard": 512,
    "Cauldron Of The Ancient World": 275,
    "Fire Flap": 351,
    "Greyblood Pact": 155,
    "Triton Banquet": 160,
    "Treasure Trove": 16,
    "Solar Warrior": 407,
    "Oradrim Judicator": 419,
    "Might And Guts": 254,
    "Fraudulent Operation": 354,
    "Targan Mountaineer": 500,
    "Thyrian Statue": 206,
    "Goldsilk Faerie": 310,
    "Twilight Pool": 174,
    "Stained Boar": 200,
    "Morning Hazard": 459,
    "Sabotage": 554,
    "Lichorus": 115,
    "Keldran Emissary": 43,
    "Warmongering": 47,
    "Meroval Queen's Guard": 511,
    "Imperial Disruptor": 577,
    "Firewell": 379,
    "Oradrim Prayer": 450,
    "Kobold Mercenary": 303,
    "Meroval Highborn": 5,
    "Alichor": 17,
    "Weapon Rack": 574,
    "Tyranax": 100,
    "Earth Flap": 250,
    "Edolin Sentinel": 29,
    "Thyrian Colossus": 218,
    "Prodigious Ballad": 256,
    "Trow Miner": 31,
    "Kobold Architect": 302,
    "Disarm": 458
};
module.exports = nameIdMap;