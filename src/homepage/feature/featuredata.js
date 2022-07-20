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
        title: 'PlayStation 5 HFW Bundle...',
        price: "₱41,860.00",
        imageName: "/img/consoles/console1.jpg",
        ratings: randomStar(),
        reviewNum: randomReview()
    },
    {
        id: 2,
        title: 'Monster Hunter Lioleia...',
        price: "₱4,495.00",
        imageName: "/img/collectibles/collectible1.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),


    },
    {
        id: 3,
        title: 'Lenovo Legion T5 ...',
        price: "₱109,995.00",
        imageName: "/img/prebuilt/prebuilt1.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 4,
        title: 'Asus ROG Zephyrus G15 ...',
        price: "₱139,995.00",
        imageName: "/img/laptop/laptop4.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 5,
        title: 'Nintendo Switch ...',
        price: "₱17,895.00",
        imageName: "/img/consoles/console6.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 6,
        title: 'Xbox Series S ...',
        price: "₱18,495.00",
        imageName: "/img/consoles/console4.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 7,
        title: 'Capcom Figure Builder...',
        price: "₱2,950.00",
        imageName: "/img/collectibles/collectible2.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 8,
        title: 'Asus ROG Strix G15DH ...',
        price: "₱54,995.00",
        imageName: "/img/prebuilt/prebuilt5.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 9,
        title: 'Ayaneo Next AMD Ryzen 7...',
        price: "₱65,995.00",
        imageName: "/img/consoles/console9.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),

    },
    {
        id: 10,
        title: 'Nintendo Amiibo ...',
        price: "₱595.00",
        imageName: "/img/collectibles/collectible8.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 11,
        title: 'Lenovo Legion 5 ...',
        price: "₱104,995.00",
        imageName: "/img/laptop/laptop1.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 12,
        title: 'GDP Pocket 3 i7...',
        price: "₱54,995.00",
        imageName: "/img/consoles/console10.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 13,
        title: 'Lenovo Legion Tower ...',
        price: "₱79,995.00",
        imageName: "/img/prebuilt/prebuilt3.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 14,
        title: 'NIER REPLICANT Action Figure ...',
        price: "₱3,295.00",
        imageName: "/img/collectibles/collectible6.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 15,
        title: 'Gigabyte A7 ...',
        price: "₱99,995.00",
        imageName: "/img/laptop/laptop9.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 16,
        title: 'HP Victus 16 ...',
        price: "₱59,995.00",
        imageName: "/img/laptop/laptop6.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 17,
        title: 'Acer Predator Helios 300 ...',
        price: "₱74,999.00",
        imageName: "/img/laptop/laptop7.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 18,
        title: 'Acer Nitro 5 ...',
        price: "₱53,899.00",
        imageName: "/img/laptop/laptop8.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 19,
        title: 'Lenovo IdeaCentre 3...',
        price: "₱46,995.00",
        imageName: "/img/prebuilt/prebuilt6.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 20,
        title: 'Trials of Mana...',
        price: "₱9,495.00",
        imageName: "/img/collectibles/collectible4.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
]

export default featuredata;