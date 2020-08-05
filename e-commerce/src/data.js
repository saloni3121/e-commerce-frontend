const data = [
    {
        name: "L'Oreal Paris Professional Series",
        price: 635,
        reducedPrice: 624,
        category: 'Beauty',
        subcategory: 'Shampoos',
        reviews: [],
        rating: 0,
        numratings: 0,
        id: 0,
        description: "L'Oreal Paris Professional Series Expert Instant Clear Anti-Dandruff Shampoo (300ml)",
        inCart: false,
    },
    {
        name: "L'Oreal Conditioner",
        price: 635,
        reducedPrice: 624,
        category: 'Beauty',
        subcategory: 'Conditioners',
        reviews: [],
        rating: 0,
        numratings: 0,
        id: 1,
        description: "L'Oreal Paris Professional Series Expert Instant Clear Anti-Dandruff Shampoo (300ml)",
        inCart: false,
    },
    {
        name: "L'Oreal Paris Professional Series",
        price: 635,
        reducedPrice: 624,
        category: 'Beauty',
        subcategory: 'Shampoos',
        reviews: [],
        rating: 0,
        numratings: 0,
        id: 2,
        description: "L'Oreal Paris Professional Series Expert Instant Clear Anti-Dandruff Shampoo (300ml)",
        inCart: false,
    },
    {
        name: "L'Oreal Paris Professional Series",
        price: 635,
        reducedPrice: 624,
        category: 'Beauty',
        subcategory: 'Shampoos',
        reviews: [],
        rating: 0,
        numratings: 0,
        id: 3,
        description: "L'Oreal Paris Professional Series Expert Instant Clear Anti-Dandruff Shampoo (300ml)",
        inCart: false,
    },
    {
        name: "L'Oreal Paris Professional Series",
        price: 635,
        reducedPrice: 624,
        category: 'Beauty',
        subcategory: 'Shampoos',
        reviews: [],
        rating: 0,
        numratings: 0,
        id: 4,
        description: "L'Oreal Paris Professional Series Expert Instant Clear Anti-Dandruff Shampoo (300ml)",
        inCart: false,
    },
    {
        name: "L'Oreal Paris Professional Series",
        price: 635,
        reducedPrice: 624,
        category: 'Beauty',
        subcategory: 'Shampoos',
        reviews: [],
        rating: 0,
        numratings: 0,
        id: 5,
        description: "L'Oreal Paris Professional Series Expert Instant Clear Anti-Dandruff Shampoo (300ml)",
        inCart: false,
    },
    {
        name: "Face Cream",
        price: 635,
        reducedPrice: 624,
        category: 'Beauty',
        subcategory: 'Face Cream',
        reviews: [],
        rating: 0,
        numratings: 0,
        id: 6,
        description: "L'Oreal Paris Professional Series Expert Instant Clear Anti-Dandruff Shampoo (300ml)",
        inCart: false,
    },
    {
        name: "Knife",
        price: 50,
        reducedPrice: 30,
        category: 'Home & Kitchen',
        subcategory: ['shampoo', 'conditioners'],
        reviews: [],
        rating: 0,
        numratings: 0,
        id: 7,
        description: "L'Oreal Paris Professional Series Expert Instant Clear Anti-Dandruff Shampoo (300ml)",
        inCart: false,
    },
    {
        name: "Pacifier",
        price: 150,
        reducedPrice: 130,
        category: 'Baby Products',
        subcategory: ['shampoo', 'conditioners'],
        reviews: [],
        rating: 0,
        numratings: 0,
        id: 8,
        description: "L'Oreal Paris Professional Series Expert Instant Clear Anti-Dandruff Shampoo (300ml)",
        inCart: false,
    },
    {
        name: "Phone",
        price: 50000,
        reducedPrice: 40000,
        category: 'Mobile & Tablet Accessories',
        subcategory: ['shampoo', 'conditioners'],
        reviews: [],
        rating: 0,
        numratings: 0,
        id: 9,
        description: "L'Oreal Paris Professional Series Expert Instant Clear Anti-Dandruff Shampoo (300ml)",
        inCart: false,
    },
    {
        name: "Random Item",
        price: 20,
        reducedPrice: 15,
        category: 'Others',
        subcategory: ['shampoo', 'conditioners'],
        reviews: [],
        rating: 0,
        numratings: 0,
        id: 10,
        description: "L'Oreal Paris Professional Series Expert Instant Clear Anti-Dandruff Shampoo (300ml)",
        inCart: false,
    },
    {
        name: "Knife",
        price: 50,
        reducedPrice: 30,
        category: 'Home & Kitchen',
        subcategory: ['shampoo', 'conditioners'],
        reviews: [],
        rating: 0,
        numratings: 0,
        id: 7,
        description: "L'Oreal Paris Professional Series Expert Instant Clear Anti-Dandruff Shampoo (300ml)",
        inCart: false,
    },
    {
        name: "Pacifier",
        price: 150,
        reducedPrice: 130,
        category: 'Baby Products',
        subcategory: ['shampoo', 'conditioners'],
        reviews: [],
        rating: 0,
        numratings: 0,
        id: 8,
        description: "L'Oreal Paris Professional Series Expert Instant Clear Anti-Dandruff Shampoo (300ml)",
        inCart: false,
    },
    {
        name: "Phone",
        price: 50000,
        reducedPrice: 40000,
        category: 'Mobile & Tablet Accessories',
        subcategory: ['shampoo', 'conditioners'],
        reviews: [],
        rating: 0,
        numratings: 0,
        id: 9,
        description: "L'Oreal Paris Professional Series Expert Instant Clear Anti-Dandruff Shampoo (300ml)",
        inCart: false,
    },
    {
        name: "Random Item",
        price: 20,
        reducedPrice: 15,
        category: 'Others',
        subcategory: ['shampoo', 'conditioners'],
        reviews: [],
        rating: 0,
        numratings: 0,
        id: 10,
        description: "L'Oreal Paris Professional Series Expert Instant Clear Anti-Dandruff Shampoo (300ml)",
        inCart: false,
    },

]
const lists = ['All', 'Beauty', 'Home & Kitchen', 'Baby Products', 'Mobile & Tablet Accessories', 'Others']

const categories = [[], ['Shampoos', 'Conditioner', 'Mask', 'Serum', 'Face Cream', 'Hair Color', 'Facial Kit', 'Sun Screen', 'Nail Paint', 'Lipstick', 'Hair Accessories'], ['Disposable Spoon', 'Fork', 'Stirrer', 'Plates', 'Paper Cups', 'Glasses', 'Containers', 'Water Bottle', 'Lunch box', 'trays', 'dry fruit boxes', 'windchime', 'table matts', 'Coasters'], [], ['Cases and Covers', 'tempered glass', 'keyboard', 'USB chargers/data cables'], ['Electronics', 'Apparels']]

const brands = [[], ['Matrix', 'Cheryl’s', 'Wella', 'TIGI', 'Loreal Professional', 'Raaga', 'Schwarzkopf', 'VLCC', 'Vega', 'Colorbar', 'De fabulous', 'Azafran', 'Lotus Professional', 'Colorbar', 'Coloressence', 'Dreamron'], [], ['Dr Brown’s', 'Medela', 'Cetaphil', 'Sebamed', 'Mothercare', 'Philip Advent'], [], ['JBL', 'Skull Candy']]

export { data, lists, categories,brands };