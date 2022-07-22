const randomStar = () => {
    const number= Math.floor(Math.random() * (5)) + 2;
    return number
}
const randomReview = () => {
    const number= Math.floor(Math.random() * (18) +1);
    return number
}

const featuredata = [{
        id: 1,
        title: 'PlayStation 5 Horizon Forbidden West Bundle - Disc Bundle 19th Wave 337241040704',
        price: 41860,
        imageName: "/img/consoles/console1.jpg",
        ratings: randomStar(),
        reviewNum: randomReview()
    },
    {
        id: 2,
        title: 'Monster Hunter Capcom Figure Builder Plus Vol.20 Blind Box* (Set Of 6 Figures)',
        price: 4495,
        imageName: "/img/collectibles/collectible1.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),


    },
    {
        id: 3,
        title: 'Lenovo Legion T5 26IAB7 90SV003BPP Intel Core i7-12700F | NVIDIA GeForce RTX 3070 | 16GB DDR5-4800 | 512GB SSD [Black]',
        price: 109995,
        imageName: "/img/prebuilt/prebuilt1.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 4,
        title: 'Asus ROG Zephyrus G15 15.6" AMD Ryzen 7 6800HS | NVIDIA GeForce RTX 3070 Ti | 16GB DDR5 | 1TB SSD [Eclipse Gray]',
        price: 139995,
        imageName: "/img/laptop/laptop4.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 5,
        title: 'Nintendo Switch Mario Red & Blue Edition [MDE]',
        price: 17895,
        imageName: "/img/consoles/console6.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 6,
        title: 'Xbox Series S 512GB [White]',
        price: 18495,
        imageName: "/img/consoles/console4.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 7,
        title: 'Monster Hunter Capcom Figure Builder Plus Vol.20 Blind Box* (Set Of 6 Figures)',
        price: 2950,
        imageName: "/img/collectibles/collectible2.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 8,
        title: 'Asus ROG Strix G15DH PH005T Desktop AMD Ryzen™ 5-3600X | NVIDIA GeForce GTX 1650 | 8GB RAM | 1TB HDD + 256GB SSD [Star Black]',
        price: 54995,
        imageName: "/img/prebuilt/prebuilt5.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 9,
        title: 'AYANEO NEXT AMD Ryzen 7 5825U 16GB RAM 1TB SSD Handheld Gaming Console (Bright White)+Super Power Storage Bag+Tempered Glass Screen Protector',
        price: 65995,
        imageName: "/img/consoles/console9.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),

    },
    {
        id: 10,
        title: 'NINTENDO AMIIBO THE LEGEND OF ZELDA BREATH OF THE WILD SERIES LINK (ARCHER)',
        price: 595,
        imageName: "/img/collectibles/collectible8.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 11,
        title: 'Lenovo Legion 5 15ARH7H 82RD001APH 15.6" AMD Ryzen 7 6800H | NVIDIA GeForce RTX 3060 | 16GB DDR5-4800 | 512GB SSD [Storm Grey]',
        price: 104995,
        imageName: "/img/laptop/laptop1.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
     {
        id: 18,
        title: 'Acer Nitro 5 AN515-57-53SB 15.6" Intel Core i5-11400H | NVIDIA GeForce RTXTM 3050 Ti | 8GB | 512GB SSD [Obsidian Black]',
        price: 53899,
        imageName: "/img/laptop/laptop8.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 12,
        title: 'GDP Pocket 3 i7 1195G7 16GB SSD 1TB Handheld Gaming Laptop + Stylus Pen For Pocket 3 Mini Laptop (ME-MPP503) + GPD Protection Case Bag',
        price: 54995,
        imageName: "/img/consoles/console10.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 13,
        title: 'Lenovo Legion Tower 5i 26IOB6 90RT0099PP Intel Core i5-11400 | GeForce RTX 3060 | 16GB (8x2) RAM | 512GB SSD [Black]',
        price: 79995,
        imageName: "/img/prebuilt/prebuilt3.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 14,
        title: 'NIER REPLICANT VER. 1.22474487139 BRING ARTS ACTION FIGURE (YOUNG PROTAGONIST)',
        price: 3295,
        imageName: "/img/collectibles/collectible6.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 15,
        title: 'Gigabyte A7 X1 CS11130SH 17.3" AMD Ryzen™ 9 5900HX | GeForce RTX™ 3070 | 16GB RAM (8x2) | 512GB SSD',
        price: 99995,
        imageName: "/img/laptop/laptop9.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 16,
        title: 'HP Victus 16 E0215AX 16.1" AMD Ryzen™ 5 5600H | NVIDIA® GeForce RTX™ 3050 | 8GB RAM | 512GB SSD',
        price: 59995,
        imageName: "/img/laptop/laptop6.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 17,
        title: 'Acer Predator Helios 300 PH315-54-70BF 15.6" Intel Core i7-11800H | GeForce RTX 3050Ti | 16GB RAM | 512GB SSD [Black]',
        price: 74999,
        imageName: "/img/laptop/laptop7.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 19,
        title: 'Lenovo IdeaCentre 3 07IAB7 90SM001BPH Intel Core i5-12400 | Integrated UHD Graphics | 8GB DDR4 |512GB SSD [Mineral Grey]',
        price: 46995,
        imageName: "/img/prebuilt/prebuilt6.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 20,
        title: 'TRIALS OF MANA BRING ARTS (KEVIN & CHARLOTTE)',
        price: 9495,
        imageName: "/img/collectibles/collectible4.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
]

export default featuredata;