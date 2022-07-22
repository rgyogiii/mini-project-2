const randomStar = () => {
    const number= Math.floor(Math.random() * (5)) + 2;
    return number
}
const randomReview = () => {
    const number= Math.floor(Math.random() * (18) + 1);
    return number
}

const Bestsellerdata = [
{
    id: 1,
    title: 'GDP Pocket 3 i7 1195G7 16GB SSD 1TB Handheld Gaming Laptop + Stylus Pen For Pocket 3 Mini Laptop (ME-MPP503) + GPD Protection Case Bag',
    price: 54995,
    imageName: "/img/consoles/console10.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},
{
    id: 2,
    title: 'NIER REPLICANT VER. 1.22474487139 BRING ARTS ACTION FIGURE (YOUNG PROTAGONIST)',
    price: 3295,
    imageName: "/img/collectibles/collectible6.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},

{
    id: 3,
    title: 'Lenovo Legion Tower 5i 26IOB6 90RT0099PP Intel Core i5-11400 | GeForce RTX 3060 | 16GB (8x2) RAM | 512GB SSD [Black]',
    price: 79995,
    imageName: "/img/prebuilt/prebuilt3.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},

{
    id: 4,
    title: 'Acer Predator Helios 300 PH315-54-70BF 15.6" Intel Core i7-11800H | GeForce RTX 3050Ti | 16GB RAM | 512GB SSD [Black]',
    price: 74999,
    imageName: "/img/laptop/laptop7.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},
{
    id: 5,
    title: 'Acer Nitro 5 AN515-57-53SB 15.6" Intel Core i5-11400H | NVIDIA GeForce RTXTM 3050 Ti | 8GB | 512GB SSD [Obsidian Black]',
    price: 53899,
    imageName: "/img/laptop/laptop8.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},
{
    id: 6,
    title: 'Lenovo IdeaCentre 3 07IAB7 90SM001BPH Intel Core i5-12400 | Integrated UHD Graphics | 8GB DDR4 |512GB SSD [Mineral Grey]',
    price: 46995,
    imageName: "/img/prebuilt/prebuilt6.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},
{
    id: 7,
    title: 'Gigabyte A7 X1 CS11130SH 17.3" AMD Ryzen™ 9 5900HX | GeForce RTX™ 3070 | 16GB RAM (8x2) | 512GB SSD',
    price: 99995,
    imageName: "/img/laptop/laptop9.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},
{
    id: 8,
    title: 'TRIALS OF MANA BRING ARTS (KEVIN & CHARLOTTE)',
    price: 9495,
    imageName: "/img/collectibles/collectible4.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
}
]

export default Bestsellerdata;