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
    title: 'GDP Pocket 3 i7...',
    price: "₱54,995.00",
    imageName: "/img/consoles/console10.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},
{
    id: 2,
    title: 'NIER REPLICANT Action ...',
    price: "₱3,295.00",
    imageName: "/img/collectibles/collectible6.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},

{
    id: 3,
    title: 'Lenovo Legion Tower ...',
    price: "₱79,995.00",
    imageName: "/img/prebuilt/prebuilt3.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},

{
    id: 4,
    title: 'Acer Predator Helios 300 ...',
    price: "₱74,999.00",
    imageName: "/img/laptop/laptop7.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},
{
    id: 5,
    title: 'Acer Nitro 5 ...',
    price: "₱53,899.00",
    imageName: "/img/laptop/laptop8.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},
{
    id: 6,
    title: 'Lenovo IdeaCentre 3...',
    price: "₱46,995.00",
    imageName: "/img/prebuilt/prebuilt6.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},
{
    id: 7,
    title: 'Gigabyte A7 ...',
    price: "₱99,995.00",
    imageName: "/img/laptop/laptop9.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
},
{
    id: 8,
    title: 'Trials of Mana...',
    price: "₱9,495.00",
    imageName: "/img/collectibles/collectible4.jpg",
    description: "to follow na lang since single page pa lang naman",
    ratings: randomStar(),
    reviewNum: randomReview()
}
]

export default Bestsellerdata;