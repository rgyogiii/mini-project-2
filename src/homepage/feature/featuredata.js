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
        title: 'PlayStation 5 Test ',
        price: 41860,
        imageName: "/img/consoles/console1.jpg",
        ratings: randomStar(),
        reviewNum: randomReview()
    },
    {
        id: 2,
        title: 'Monster Hunter Lioleia...',
        price: 4495,
        imageName: "/img/collectibles/collectible1.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),


    },
    {
        id: 3,
        title: 'Lenovo Legion T5 ...',
        price: 109995,
        imageName: "/img/prebuilt/prebuilt1.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 4,
        title: 'Asus ROG Zephyrus G15 ...',
        price: 139995,
        imageName: "/img/laptop/laptop4.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 5,
        title: 'Nintendo Switch ...',
        price: 17895,
        imageName: "/img/consoles/console6.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 6,
        title: 'Xbox Series S ...',
        price: 18495,
        imageName: "/img/consoles/console4.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 7,
        title: 'Capcom Figure Builder...',
        price: 2950,
        imageName: "/img/collectibles/collectible2.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 8,
        title: 'Asus ROG Strix G15DH ...',
        price: 54995,
        imageName: "/img/prebuilt/prebuilt5.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 9,
        title: 'Ayaneo Next AMD Ryzen 7...',
        price: 65995,
        imageName: "/img/consoles/console9.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),

    },
    {
        id: 10,
        title: 'Nintendo Amiibo ...',
        price: 595,
        imageName: "/img/collectibles/collectible8.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 11,
        title: 'Lenovo Legion 5 ...',
        price: 104995,
        imageName: "/img/laptop/laptop1.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 12,
        title: 'GDP Pocket 3 i7...',
        price: 54995,
        imageName: "/img/consoles/console10.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 13,
        title: 'Lenovo Legion Tower ...',
        price: 79995,
        imageName: "/img/prebuilt/prebuilt3.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 14,
        title: 'NIER REPLICANT Action Figure ...',
        price: 3295,
        imageName: "/img/collectibles/collectible6.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 15,
        title: 'Gigabyte A7 ...',
        price: 99995,
        imageName: "/img/laptop/laptop9.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 16,
        title: 'HP Victus 16 ...',
        price: 59995,
        imageName: "/img/laptop/laptop6.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 17,
        title: 'Acer Predator Helios 300 ...',
        price: 74999,
        imageName: "/img/laptop/laptop7.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 18,
        title: 'Acer Nitro 5 ...',
        price: 53899,
        imageName: "/img/laptop/laptop8.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 19,
        title: 'Lenovo IdeaCentre 3...',
        price: 46995,
        imageName: "/img/prebuilt/prebuilt6.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
    {
        id: 20,
        title: 'Trials of Mana...',
        price: 9495,
        imageName: "/img/collectibles/collectible4.jpg",
        ratings: randomStar(),
        reviewNum: randomReview(),
    },
]

export default featuredata;