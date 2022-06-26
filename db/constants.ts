/**
 * Vowels of the English language.
 */
export const vowels = ["A", "E", "I", "O", "U"];
/**
 * All alphabets of the English language.
 */
export const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

/**
 * Consonants of the English alphabet.
 */
export const consonants = alphabet.filter((x) => !vowels.includes(x));

/**
 * Character titles.
 */
export const thirdperson = [
  "hero",
  "mage",
  "wizard",
  "sage",
  "monk",
  "NEET",
  "dragon",
  "hunter",
  "salesman",
  "salaryman",
  "digital artist",
  "weeb",
  "artist",
  "gacha gamer",
  "game developer",
  "Florida man",
  "pokemon master",
  "narcissist",
  "programmer",
  "web developer",
  "yankee",
  "yakuza",
  "ying-yang master",
  "taoist",
  "archangel",
  "baiter",
  "investigator",
  "king",
  "magician",
  "eggman",
  "lancer",
  "archer",
  "berserker",
  "rider",
  "athlete",
  "master",
  "martial artist",
  "demon",
  "god",
  "zombie",
  "skeleton",
  "vampire",
  "undead",
  "lich",
  "golem",
  "swordsman",
  "sword saint",
  "shielder",
  "spearmaster",
  "gunslinger",
  "cowboy",
  "karen",
  "tomboy",
  "femboy",
  "gal",
  "nerd",
];

/**
 * Question words.
 */
export const questions = ["if", "do", "did", "what if", "but then", "and"];

/**
 * Character adjectives.
 */
export const adjectives = [
  "Chinese",
  "Indian",
  "Japanese",
  "Russian",
  "German",
  "accurate",
  "adventurous",
  "aggressive",
  "agoraphobic",
  "alien",
  "alpha",
  "amazing",
  "ancient",
  "angelic",
  "average",
  "avian",
  "awesome",
  "bad",
  "beefy",
  "belligerent",
  "betrayed",
  "bipedal",
  "bitter",
  "black",
  "blind",
  "boisterous",
  "brilliant",
  "bronze",
  "canine",
  "certified",
  "charitable",
  "charming",
  "cheeky",
  "cheerful",
  "childish",
  "chivalrous",
  "clever",
  "clueless",
  "clumsy",
  "comical",
  "complex",
  "confident",
  "cool",
  "crybaby",
  "cuddly",
  "cunning",
  "curious",
  "cute",
  "dangerous",
  "dark",
  "decent",
  "delicious",
  "delusional",
  "dense",
  "desperate",
  "diabetic",
  "divine",
  "dominant",
  "dragon",
  "dramatic",
  "drunk",
  "dwarven",
  "eerie",
  "egghead",
  "electric",
  "elegant",
  "elemental",
  "elven",
  "enchanting",
  "faithful",
  "famous",
  "fantastic",
  "feline",
  "female",
  "feminine",
  "friendly",
  "funny",
  "gallant",
  "gay",
  "generous",
  "gentle",
  "geographic",
  "giant",
  "godlike",
  "gold",
  "good",
  "grand",
  "great",
  "gruesome",
  "gullible",
  "harsh",
  "high",
  "holy",
  "hostile",
  "humble",
  "hypersonic",
  "idiotic",
  "immortal",
  "inferior",
  "innocent",
  "invincible",
  "iron",
  "jazzy",
  "jinxed",
  "jittery",
  "kidney-shaped",
  "kindhearted",
  "lackadaisical",
  "lackluster",
  "large",
  "lawful",
  "legendary",
  "lemon-like",
  "listless",
  "lively",
  "lowly",
  "malnourished",
  "masculine",
  "massive",
  "matchless",
  "meek",
  "merciless",
  "mindless",
  "monstrous",
  "mythical",
  "naive",
  "naked",
  "nerdy",
  "noble",
  "nocturnal",
  "notorious",
  "novel",
  "obsessive",
  "omnipotent",
  "omniscient",
  "optimistic",
  "outstanding",
  "overpowered",
  "overweight",
  "peaceful",
  "pessimistic",
  "popular",
  "powerful",
  "powerless",
  "pretty",
  "proud",
  "pure",
  "rabid",
  "reincarnated",
  "repugnant",
  "repulsive",
  "rich",
  "rotten",
  "round",
  "rowdy",
  "royal",
  "rude",
  "rugged",
  "ruthless",
  "sacred",
  "sassy",
  "selfish",
  "selfless",
  "shiny",
  "short",
  "silver",
  "skinny",
  "spirit",
  "steel",
  "stereotypical",
  "strong",
  "successful",
  "summoned",
  "super",
  "sweet",
  "talkative",
  "tall",
  "timid",
  "tiny",
  "trashy",
  "tyrannical",
  "ultimate",
  "underweight",
  "unmatched",
  "upbeat",
  "valiant",
  "verbose",
  "villainous",
  "viscous",
  "voracious",
  "warlord",
  "weak",
  "weary",
  "wheezy",
  "whiny",
  "wholesome",
  "wicked",
  "wise",
  "witty",
  "world-class",
  "xenophobic",
  "young",
  "zazzy",
  "zen",
];

/**
 * Level text.
 */
export const level = ["level", "lv", "lvl", "tier", "stage", "rank", "class"];

/**
 * List of permitted levels.
 * I thought I'd go with Math.random()
 * But randomized levels look kinda weird.
 * Like, what's a Level 43 cowboy supposed to mean?
 */
export const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 69, 70, 80, 90, 99, 100, 101, 200, 420, 500, 666, 999, 1000, 9999, 10000, 99999, 100000, 1000000]

/**
 * Rules for name generator.
 */
export 
const after = [
  {
    letter: "A",
    possible: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
  },
  {
    letter: "B",
    possible: [
      "A",
      "E",
      "I",
      "O",
      "U",
      "H",
      "Y",
      "R",
      "W",
    ],
  },
  {
    letter: "C",
    possible: [
      "A",
      "E",
      "I",
      "O",
      "U",
      "H",
      "Y",
      "R",
      "W",
    ],
  },
  {
    letter: "D",
    possible: [
      "A",
      "E",
      "I",
      "O",
      "U",
      "H",
      "Y",
      "R",
      "W",
    ],
  },
  {
    letter: "E",
    possible: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
  },
  {
    letter: "F",
    possible: [
      "A",
      "E",
      "I",
      "O",
      "U",
      "H",
      "Y",
      "R",
      "W",
    ],
  },
  {
    letter: "G",
    possible: [
      "A",
      "E",
      "I",
      "O",
      "U",
      "H",
      "Y",
      "R",
      "W",
    ],
  },
  {
    letter: "H",
    possible: [
      "A",
      "E",
      "I",
      "O",
      "U",
      "Y",
      "W",
    ],
  },
  {
    letter: "I",
    possible: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
  },
  {
    letter: "J",
    possible: [
      "A",
      "E",
      "I",
      "O",
      "U",
      "H",
      "Y",
    ],
  },
  {
    letter: "K",
    possible: [
      "A",
      "E",
      "I",
      "O",
      "U",
      "H",
      "Y",
      "R",
      "W",
    ],
  },
  { letter: "L", possible: ["A", "E", "I", "O", "U", "Y"] },
  {
    letter: "M",
    possible: [
      "A",
      "E",
      "I",
      "O",
      "U",
      "H",
      "Y",
    ],
  },
  {
    letter: "N",
    possible: [
      "A",
      "E",
      "I",
      "O",
      "U",
      "H",
      "Y",
      "W",
    ],
  },
  {
    letter: "O",
    possible: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
  },
  {
    letter: "P",
    possible: [
      "A",
      "E",
      "I",
      "O",
      "U",
      "H",
      "Y",
      "R",
      "S",
      "W",
    ],
  },
  { letter: "Q", possible: ["A", "E", "I", "O", "U"] },
  {
    letter: "R",
    possible: [
      "A",
      "E",
      "I",
      "O",
      "U",
      "H",
      "Y",
      "W",
    ],
  },
  {
    letter: "S",
    possible: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
  },
  {
    letter: "T",
    possible: [
      "A",
      "E",
      "I",
      "O",
      "U",
      "H",
      "Y",
      "R",
      "S",
      "W",
    ],
  },
  {
    letter: "U",
    possible: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
  },
  {
    letter: "V",
    possible: [
      "A",
      "E",
      "I",
      "O",
      "U",
      "H",
      "Y",
      "R",
    ],
  },
  {
    letter: "W",
    possible: [
      "A",
      "E",
      "I",
      "O",
      "U",
      "H",
      "Y",
      "R",
    ],
  },
  { letter: "X", possible: ["A", "E", "I", "O", "U", "H"] },
  {
    letter: "Y",
    possible: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Z",
    ],
  },
  { letter: "Z", possible: ["A", "E", "I", "O", "U", "H"] },
];

/**
 * Rulen'ts for name generator.
 */
export const dontEnd = ["W", "V"];

/**
 * Suffixes for fantasy name generator.
 */
export const suffix = [
  "er",
  "ug",
  "ugg",
  "or",
  "in",
  "ius",
  "ion",
  "xion",
  "ixie",
  "ora",
  "ra",
];

/**
 * This section is filled with data for chain mail generator.
 */
export const forward = ["forward", "send", "show", "copy/paste"];
export const message = ["message", "story", "text"];
export const taken = [
  "kidnapped",
  "hacked",
  "stabbed",
  "pushed from a cliff",
  "mutilated",
  "eaten alive",
  "possessed by an evil spirit",
  "spirited away",
  "hit by a car",
  "hit by a truck",
  "hit by a train",
  "thrown away from a flying airplane",
  "abducted by aliens",
  "burned alive",
  "caught in an explosion",
  "mauled by a bear",
  "mugged",
  "bitten by a snake",
  "poisoned",
  "crushed by an elevator",
  "caught in a stampede",
  "starved to death",
  "hit by lightning",
  "stabbed by a killer",
  "eaten by a shark",
  "caught in a tsunami",
  "stuck in an elevator",
  "shot by a stray bullet",
  "buried alive",
  "caught off-guard by the sleep paralysis demon",
  "eaten by monsters",
  "tossed from a cliff",
  "tied up and tossed into the Atlantic ocean",
  "tied up and tossed into the Pacific ocean",
  "tied up and tossed into the Indian ocean",
  "taken to Brazil",
  "thrown into gulag",
  "bonked by cheems",
  "killed by the imposter",
  "impaled by an umbrella",
  "turned into fumo",
  "returned to monke",
  "killed by herobrine",
  "eaten by ants",
  "electrocuted by a pikachu",
  "forced to eat pizza with choco chips and wasabi sauce",
  "discovered by a discord mod",
  "turned into a discord mod",
  "eaten by a llama",
  "thrown into a snake pit",
  "decapitated by a piece of paper",
  "ejected into the space",
  "forced to watch Dragon Ball Evolution",
  "burned at the stakes",
  "discovered by a plague doctor",
  "down with a fatal disease after eating moldy bread",
  "down with pneumonia",
  "crushed by an elephant",
  "assaulted by a yandere",
  "assaulted by a stalker",
  "mutilated alive"
];
export const intro = [
  "I am",
  "My name is",
  "I'm",
  "I am called",
  "I was known as",
  "I used to be called",
  "I was once called",
  "When I was alive, they called me",
  "Once upon a time, I was called",
  "I think my name was",
  "I am not sure if my name was",
];
export const relation = [
  "friends",
  "family",
  "best friend",
  "parents",
  "mother",
  "father",
  "grandparents",
  "classmates",
  "grandpa",
  "grandma",
  "lonely ass",
  "tamagotchi",
  "pokemon",
  "favorite streamer",
  "college professor",
  "imaginary friend",
  "air friend",
  "sleep paralysis demon",
  "in-game character",
  "most important person",
  "school principal",
  "teacher from kindergarten",
  "pet spider",
  "loved ones",
  "favorite character",
  "disgusting self",
  "senior",
  "junior",
  "great-grandchild",
  "great-grandchildren",
  "phone",
  "internet friends"
];
export const death = [
  "died",
  "got killed",
  "ended up dying",
  "passed away",
  "lost my life",
];

/**
 * Email data.
 */
export const commonMails = [
  "gmail.com",
  "yahoo.com",
  "mail.com",
  "email.com",
  "hotmail.com",
  "aol.com",
];

export const endsWith = [
  "com",
  "net",
  "co",
  "to",
  "tk",
  "ml",
  "ga",
  "gg",
  "cc",
  "de",
  "in",
  "jp",
  "cr",
  "me",
  "life",
  "moe",
  "us",
  "uk",
];

export const secondLevel = ["co", "org", "edu"];

/**
 * Story data.
 */
export const joins = [
  "band together",
  "join hands",
  "compete with each other",
  "form an alliance",
  "form a truce",
  "become allies",
  "forget their differences",
];
export const powers = [
  "friendship",
  "training",
  "cheats",
  "darkness",
  "light",
  "flames",
  "wind",
  "laziness",
  "dancing",
  "math",
  "eighth grade syndrome",
  "edginess",
  "cringe",
  "technology",
  "science",
  "religion",
  "outsmarting",
  "workout",
];
export const fight = ["fight", "challenge", "battle", "duel", "attack"];
export const actions = [
  "defends against",
  "negotiates with",
  "holds out against",
  "runs from",
  "strives to survive",
];
export const action = [
  "defend against",
  "negotiate with",
  "hold out against",
  "run from",
  "survive",
];
export const directions = ["north", "east", "west", "south"];
