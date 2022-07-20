const starGen = () => {
    const number = Math.floor(Math.random() * (5)) + 3;
    return number
}

const capFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const generateName = () => {
    const name1 = ["abandoned", "able", "absolute", "adorable", "adventurous", "academic", "acceptable", "acclaimed", "accomplished", "accurate", "aching", "acidic", "acrobatic", "active", "actual", "adept", "admirable", "bossy", "both", "bouncy", "bountiful", "bowed", "brave", "breakable", "brief", "bright", "brilliant", "brisk", "broken", "bronze", "brown", "bruised", "bubbly", "bulky", "bumpy", "buoyant", "burdensome", "burly", "bustling", "busy", "buttery", "buzzing", "calculating", "calm", "candid", "canine", "capital", "carefree", "careful", "careless", "caring", "cautious", "cavernous", "celebrated", "charming", "cheap", "cheerful", "cheery", "chief", "chilly", "chubby", "circular", "classic", "clean", "clear", "clear-cut", "clever", "close", "closed", "cloudy", "clueless", "clumsy", "cluttered", "coarse", "cold", "colorfu", "sniveling", "snoopy", "sociable", "soft", "soggy", "solid", "somber", "some", "spherical", "sophisticated", "sore", "sorrowful", "soulful", "soupy", "sour", "Spanish", "sparkling", "sparse", "specific", "spectacular", "speedy", "spicy", "spiffy", "spirited", "spiteful", "splendid", "spotless", "spotted", "spry", "square", "squeaky", "squiggly", "stable", "staid", "stained", "stale", "standard", "starchy", "stark", "starry", "steep", "sticky", "stiff", "stimulating", "stingy", "stormy", "straight", "strange", "steel", "strict", "strident", "striking", "striped", "strong", "studious", "stunning", "stupendous", "stupid", "sturdy", "stylish", "subdued", "submissive", "substantial", "subtle", "suburban", "sudden", "sugary", "sunny", "super", "superb", "superficial", "superior", "supportive", "sure-footed", "surprised", "suspicious", "svelte", "sweaty", "sweet", "sweltering", "swift", "sympathetic", "tall", "talkative", "tame", "tan", "tangible", "tart", "tasty", "tattered", "taut", "tedious", "teeming", "tempting", "tender", "tense", "tepid", "terrible", "terrific", "testy", "thankful", "that", "these", "thick", "thin", "third", "thirsty", "this", "thorough", "thorny", "those", "thoughtful", "threadbare", "thrifty", "thunderous", "tidy", "tight", "timely", "tinted", "tiny", "tired", "torn", "total", "tough", "traumatic", "treasured", "tremendous", "tragic", "trained", "witty", "wobbly", "woeful", "wonderful", "wooden", "woozy", "wordy", "worldly", "worn", "worried", "worrisome", "worse", "worst", "worthless", "worthwhile", "worthy", "wrathful", "wretched", "writhing", "wrong", "wry", "yawning", "yearly", "yellow", "yellowish", "young", "youthful", "yummy", "zany", "zealous", "zesty", "zigzag", "rocky"];

    const name2 = ["people", "history", "way", "art", "world", "information", "map", "family", "government", "health", "system", "computer", "meat", "year", "thanks", "music", "person", "reading", "method", "data", "food", "understanding", "theory", "law", "bird", "literature", "problem", "software", "control", "knowledge", "power", "ability", "economics", "love", "internet", "television", "science", "library", "nature", "fact", "product", "idea", "temperature", "investment", "area", "society", "activity", "story", "industry", "media", "thing", "oven", "community", "definition", "safety", "quality", "development", "language", "management", "player", "variety", "video", "week", "security", "country", "exam", "movie", "organization", "equipment", "physics", "analysis", "policy", "series", "thought", "basis", "boyfriend", "direction", "strategy"];

    var name = capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
    return name;
}



const reviewData = [{
        id: 1,
        title: 'AYANEO NEXT AMD Ryzen7 5825U...',
        image: "/img/consoles/console9.jpg",
        quality: starGen(),
        price: starGen(),
        value: starGen(),
        name: 'John Yambao',
        comment: "It was hard to get this, I'm glad to get it here. The store was very cooperative every step in the...",
       
    },
    {
        id: 2,
        title: 'TRIALS OF MANA BRING ARTS ...',
        image: "/img/collectibles/collectible4.jpg",
        quality: starGen(),
        price: starGen(),
        value: starGen(),
        name: 'Romar George',
        comment: "Fast delivery. Was delivered the next day. Smooth Transaction...",
        
    },
    {
        id: 3,
        title: 'Asus ROG Zephyrus G15 15.6" ...',
        image: "/img/laptop/laptop4.jpg",
        quality: starGen(),
        price: starGen(),
        value: starGen(),
        name: 'Louie L.',
        comment: "Smooth transaction as always, will get back for more...",
        date: 'August 24, 2021'
    },
    {
        id: 4,
        title: 'NIER REPLICANT VER. 1.2...',
        image: "/img/collectibles/collectible6.jpg",
        quality: starGen(),
        price: starGen(),
        value: starGen(),
        name: generateName(),
        comment: "Excellent shipping - next day nasa Batangas na agad, the figure is very hot...",
        date: 'August 24, 2021'
    },
    {
        id: 5,
        title: 'Lenovo IdeaCentre 3 07IAB7 ...',
        image: "/img/prebuilt/prebuilt6.jpg",
        quality: starGen(),
        price: starGen(),
        value: starGen(),
        name: generateName(),
        comment: "Fast delivery. Was delivered the next day. Smooth Transaction...",
        date: 'August 24, 2021'
    },
    {
        id: 6,
        title: 'Nintendo Switch V2 ...',
        image: "/img/consoles/console7.jpg",
        quality: starGen(),
        price: starGen(),
        value: starGen(),
        name: generateName(),
        comment: "Fast delivery. Was delivered the next day. Smooth Transaction...",
        date: 'August 24, 2021'
    },
    {
        id: 7,
        title: 'GDP Pocket 3 i7 1195G7 16GB ...',
        image: "/img/consoles/console10.jpg",
        quality: starGen(),
        price: starGen(),
        value: starGen(),
        name: generateName(),
        comment: "Fast delivery. Was delivered the next day. Smooth Transaction...",
        date: 'August 24, 2021'
    },
    {
        id: 8,
        title: 'NINTENDO AMIIBO SUPER MARIO  ...',
        image: "/img/collectibles/collectible9.jpg",
        quality: starGen(),
        price: starGen(),
        value: starGen(),
        name: generateName(),
        comment: "Fast delivery. Was delivered the next day. Smooth Transaction...",
        date: 'August 24, 2021'
    },
    {
        id: 9,
        title: 'Xbox Series X 1TB SSD ...',
        image: "/img/consoles/console3.jpg",
        quality: starGen(),
        price: starGen(),
        value: starGen(),
        name: generateName(),
        comment: "Fast delivery. Was delivered the next day. Smooth Transaction...",
        date: 'August 24, 2021'
    },
    {
        id: 10,
        title: 'Asus ROG Strix G15DH ...',
        image: "/img/prebuilt/prebuilt5.jpg",
        quality: starGen(),
        price: starGen(),
        value: starGen(),
        name: generateName(),
        comment: "Fast delivery. Was delivered the next day. Smooth Transaction...",
        date: 'August 24, 2021'
    },

]


export default reviewData;