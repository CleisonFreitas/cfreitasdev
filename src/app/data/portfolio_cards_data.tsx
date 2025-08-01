export type portfolioCardType = {
    'image.src': string;
    'image.alt': string;
    'name': string;
    'category': "all" | "mobile" | "gallery" | "web";
    'github': string;
    "link"?: string;

}
export const portfolioCardsData: portfolioCardType[] = [
    {
        "image.src": "/assets/images/smartbag-app.png",
        "image.alt": "Smartbag",
        "name": "Smartbag App",
        "category": "mobile",
        "github": "https://github.com/CleisonFreitas/smartbag-repository",
        "link": ""
    },
    {
        "image.src": "/assets/images/local-services.png",
        "image.alt": "Local Services",
        "name": "Local Services",
        "category": "mobile",
        "github": "https://github.com/CleisonFreitas/local-service-flutter",
        "link": ""
    },
    {
        "image.src": "/assets/images/delivery.png",
        "image.alt": "Delivery page",
        "name": "Delivery landing page",
        "category": "gallery",
        "github": "https://github.com/CleisonFreitas/delivery-premium",
        "link": "https://delivery-premium.vercel.app/"
    },
    {
        "image.src": "/assets/images/car-models.png",
        "image.alt": "Car models",
        "name": "Car models",
        "category": "gallery",
        "github": "https://github.com/CleisonFreitas/car_models",
        "link": "https://car-models-one.vercel.app/"
    },
    {
        "image.src": "/assets/images/sales-expert.png",
        "image.alt": "Sales Expert",
        "name": "Sales Expert",
        "category": "web",
        "github": "https://github.com/CleisonFreitas/Sales-Expert",
        "link": ""
    },
    {
        "image.src": "/assets/images/npi.png",
        "image.alt": "Npi",
        "name": "Npi Academy",
        "category": "web",
        "github": "https://github.com/CleisonFreitas/Npiweb_Academy",
        "link": ""
    }
]