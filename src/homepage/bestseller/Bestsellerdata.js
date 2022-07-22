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
    title: 'GDP Pocket 3 i7 Eto yung mahabang title paki ayos na lang',
    price: 54995,
    imageName: "/img/consoles/console10.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},
{
    id: 2,
    title: 'NIER REPLICANT Action ...',
    price: 3295,
    imageName: "/img/collectibles/collectible6.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},

{
    id: 3,
    title: 'Lenovo Legion Tower ...',
    price: 79995,
    imageName: "/img/prebuilt/prebuilt3.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},

{
    id: 4,
    title: 'Acer Predator Helios 300 ...',
    price: 74999,
    imageName: "/img/laptop/laptop7.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},
{
    id: 5,
    title: 'Acer Nitro 5 ...',
    price: 53899,
    imageName: "/img/laptop/laptop8.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},
{
    id: 6,
    title: 'Lenovo IdeaCentre 3...',
    price: 46995,
    imageName: "/img/prebuilt/prebuilt6.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},
{
    id: 7,
    title: 'Gigabyte A7 ...',
    price: 99995,
    imageName: "/img/laptop/laptop9.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},
{
    id: 8,
    title: 'Trials of Mana...',
    price: 9495,
    imageName: "/img/collectibles/collectible4.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
}
]

export default Bestsellerdata;