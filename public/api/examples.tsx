import { BiHome } from "react-icons/bi"
import { BsInfo, BsInstagram, BsTelegram } from "react-icons/bs"
import { CiSettings } from "react-icons/ci"
import { FaHome, FaUser } from "react-icons/fa"
import { HiOutlineViewGrid } from "react-icons/hi"
import { MdCable, MdDiscount } from "react-icons/md"

export const HamburgerItems = [
    {
        name: 'خانه',
        link: '/',
        icon: <BiHome />
    },
    {
        name: 'داشبورد',
        link: '/dashboard',
        icon: <HiOutlineViewGrid />
    },
    {
        name: 'تخفیفات شگفت انگیز',
        link: '/products?discount_gt=30',
        icon: <MdDiscount />
    },
    {
        name: 'اینستاگرام',
        link: '/instagram.com',
        icon: <BsInstagram />
    },
    {
        name: 'تلگرام',
        link: '/telegram.com',
        icon: <BsTelegram />
    },
    {
        name: 'تنظیمات',
        link: '/settings',
        icon: <CiSettings />
    }
]

export const subHeaderItems = [
    {
        title: "خانه",
        link: '/',
        icon: <FaHome />
    },
    {
        title: "محصولات",
        icon: <MdCable />,
        link: '/products'
    },
    {
        title: "داشبورد",
        icon: <FaUser />,
        link: '/dashboard'
    },
    {
        title: "درباره ما",
        icon: <BsInfo />,
        link: '/about-us'
    }
];

export const banners = [
    {
        backgroundImageUrl: '/images/wifi-bg.jpg',
        childrenImages: ['/images/ethernet-blue.png'],
        description: "کابل اترنت CAT6 با پشتیبانی از سرعت 1 گیگابیت بر ثانیه، مناسب برای شبکه‌های خانگی و اداری. دارای روکش ضد نویز برای انتقال داده‌های پایدار.",
        link: "/products/ethernet-cables"
    },
    {
        backgroundImageUrl: '/images/power-bg.avif',
        childrenImages: [
            '/images/power-cable.png',
            '/images/power-cable2.png'
        ],
        description: "کابل‌های برق صنعتی با استاندارد ISO 9001، مقاوم در برابر حرارت تا 70 درجه سانتیگراد. مناسب برای مصارف صنعتی و کارگاه‌های تولیدی.",
        link: "/products/power-cables"
    },
    {
        backgroundImageUrl: '/images/rainbow-bg.avif',
        childrenImages: [
            '/images/rainbow-usbs.png',
            '/images/rainbow-cable2.webp'
        ],
        description: "کابل‌های USB رنگی با پشتیبانی از USB 3.0، انتقال داده با سرعت 5Gbps. مجموعه‌ای از کابل‌های با دوام و انعطاف‌پذیر برای دستگاه‌های مختلف.",
        link: "/products/usb-cables"
    }
];

export const circularProducts = [
    {
        id: "cat-1",
        title: "کابل برق",
        categoryId: "8bdaac84-41ee-4746-b393-5ac73f949948",
        imageUrl: "/images/powercable.jpg",
        link: "/products?c=8bdaac84-41ee-4746-b393-5ac73f949948",
    },
    {
        id: "cat-2",
        title: "کابل شبکه",
        categoryId: "6bb3991b-d3d9-4137-93af-bd4a1dad8be8",
        imageUrl: "/images/catcable.jpg",
        link: "/products?c=6bb3991b-d3d9-4137-93af-bd4a1dad8be8",
    },
    {
        id: "cat-3",
        title: "رک شبکه",
        categoryId: "d1dc65fd-1183-4b9a-a027-72af0a2e76b8",
        imageUrl: "/images/rak.webp",
        link: "/products?c=d1dc65fd-1183-4b9a-a027-72af0a2e76b8",
    },
    {
        id: "cat-4",
        title: "سینی کابل",
        categoryId: "d8799351-877d-4374-a9e4-f9ba5bfeb46e",
        imageUrl: "/images/sinicable.webp",
        link: "/products?c=d8799351-877d-4374-a9e4-f9ba5bfeb46e",
    },
    {
        id: "cat-5",
        title: "تابلو برق",
        categoryId: "1635b7ea-5207-4c92-b360-30fff6e9eb65",
        imageUrl: "/images/tablo.jpg",
        link: "/products?c=1635b7ea-5207-4c92-b360-30fff6e9eb65",
    },
    {
        id: "cat-6",
        title: "ابزار کابل شبکه",
        categoryId: "8dfc8f5b-fdfa-4746-9f81-fee77a69d642",
        imageUrl: "/images/equipmentcat.jpg",
        link: "/products?c=8dfc8f5b-fdfa-4746-9f81-fee77a69d642",
    },
];

export const wireAndCableProducts = [
    {
        id: "1",
        title: "سیم مسی THHN/THWN-2",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/1895_3.jpg",
        price: 0.85,
        discount: 10,
        isSpecial: true,
        description: "سایز 10 AWG، ولتاژ 600V، مقاوم تا 90°C خشک و 75°C مرطوب، مناسب برای داکت و رایسوی"
    },
    {
        id: "2",
        title: "کابل قابل حمل SOOW",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/392_4.jpg",
        price: 2.15,
        discount: 0,
        description: "ولتاژ 600V، سایز 2/0 AWG، روکش لاستیکی مقاوم به روغن، انعطاف پذیر"
    },
    {
        id: "3",
        title: "کابل ابزار دقیق بلدن",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/33012_3.jpg",
        price: 1.45,
        discount: 15,
        description: "زوج شیلددار، سایز 18 AWG، مناسب سیستم های کنترل صنعتی"
    },
    {
        id: "4",
        title: "کابل آلومینیومی URD",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/3420_2.jpg",
        price: 0.65,
        discount: 5,
        description: "قابل دفن مستقیم، سایز 1/0-4/0 AWG، عایق XLPE"
    },
    {
        id: "5",
        title: "کابل ترانکینگ TC",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/673_3.jpg",
        price: 3.20,
        discount: 0,
        isSpecial: true,
        description: "ولتاژ 600V، 4 رشته، مقاوم در برابر نور خورشید، مناسب ترانک های برق"
    },
    {
        id: "6",
        title: "سیم هوک آپ",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/HOOK_3.JPG",
        price: 0.35,
        discount: 20,
        description: "سایز 20 AWG، عایق PVC، مناسب سیم کشی داخلی"
    },
    {
        id: "7",
        title: "کابل سرویس SER",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/SER.jpg",
        price: 1.80,
        discount: 0,
        description: "سایز 2-2-2-4 AWG، آلومینیومی، مناسب ورودی سرویس مسکونی"
    },
    {
        id: "8",
        title: "کابل جوشکاری",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/15591_2.jpg",
        price: 2.75,
        discount: 12,
        description: "سایز 2/0 AWG، عایق EPDM، انعطاف پذیری فوق العاده"
    },
    {
        id: "9",
        title: "کابل زیرزمینی UF-B",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/5629_3.jpg",
        price: 0.95,
        discount: 8,
        description: "سایز 12/2 AWG، قابل دفن مستقیم، مقاوم در برابر نور خورشید"
    },
    {
        id: "10",
        title: "سیم اتصال زمین مسی",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/14230_1.png",
        price: 1.10,
        discount: 0,
        description: "سایز 4 AWG یکپارچه، مناسب برای الکترودهای اتصال زمین"
    },
    {
        id: "11",
        title: "سیم ماشین ابزار MTW",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/MTW_-_MASTER.jpg",
        price: 0.60,
        discount: 25,
        description: "سایز 16 AWG، ولتاژ 600V، مقاوم به روغن، مناسب تابلوهای کنترل"
    },
    {
        id: "12",
        title: "کانال انعطاف پذیر Liquidtight",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/2020-06-09_3.png",
        price: 1.25,
        discount: 0,
        description: 'سایز 3/4 اینچ، پوشش PVC، مناسب فضاهای بیرونی و مرطوب'
    },
    {
        id: "13",
        title: "کابل رومکس NM-B",
        imageUrl: "https://example.com/romex.jpg",
        price: 0.75,
        discount: 10,
        description: "سایز 12/2 AWG با سیم زمین، مناسب مدارهای انشعابی مسکونی"
    },
    {
        id: "14",
        title: "کابل کواکسیال RG6",
        imageUrl: "https://example.com/rg6.jpg",
        price: 0.45,
        discount: 0,
        description: "سه لایه شیلد، سایز 18 AWG، مناسب تلویزیون کابلی و ماهواره"
    }
];

export const bigProducts = [
    {
        id: "12",
        title: "کانال انعطاف‌پذیر Liquidtight",
        categoryId: "d30d6469-3cb2-400a-a268-a7b4e3975538",
        imageUrl: "/images/thumbnail4.jpg",
        price: 1.25,
        discount: 0,
        description: "سایز 3/4 اینچ، پوشش PVC، مناسب فضاهای بیرونی و مرطوب",
        link: "/products?c=d30d6469-3cb2-400a-a268-a7b4e3975538"
    },
    {
        id: "13",
        title: "کابل برق ساختمانی NM-B (رومکس)",
        categoryId: "8bdaac84-41ee-4746-b393-5ac73f949948",
        imageUrl: "/images/thumbnail3.jpg",
        price: 0.75,
        discount: 10,
        description: "سایز 12/2 AWG با سیم زمین، مناسب مدارهای انشعابی مسکونی",
        link: "/products?c=8bdaac84-41ee-4746-b393-5ac73f949948"
    },
    {
        id: "14",
        title: "کابل کواکسیال RG6",
        categoryId: "f7a4a542-de4c-4b60-b4c3-b2012ca34506",
        imageUrl: "/images/thumbnail2.jpg",
        price: 0.45,
        discount: 0,
        description: "سه لایه شیلد، سایز 18 AWG، مناسب تلویزیون کابلی و ماهواره",
        link: "/products?c=f7a4a542-de4c-4b60-b4c3-b2012ca34506"
    },
    {
        id: "15",
        title: "RG11 (دوربین/آنتن حرفه‌ای)",
        categoryId: "f7a4a542-de4c-4b60-b4c3-b2012ca34506", // سیم و کابل برق
        imageUrl: "/images/thumbnail1.jpg",
        price: 1.55,
        discount: 5,
        description: "کابل کواکسیال RG11 با هادی ضخیم و افت سیگنال بسیار کم، مناسب سیستم‌های آنتن مرکزی، دوربین‌های مداربسته در متراژ بالا و انتقال سیگنال با کیفیت در فواصل طولانی",
        link: "/products?c=f7a4a542-de4c-4b60-b4c3-b2012ca34506"
    }
]


export const productComments: {
    id: number;
    userName: string;
    text: string;
}[] = [
        {
            id: 1,
            userName: "Ali",
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
        },
        {
            id: 2,
            userName: "Ali",
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
        },
        {
            id: 3,
            userName: "Ali",
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
        },
        {
            id: 4,
            userName: "Ali",
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
        },
        {
            id: 5,
            userName: "Ali",
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
        },
    ];
export const productImageList = [
    "https://www.wireandcableyourway.com/media/wysiwyg/3420_2.jpg",
    "https://www.wireandcableyourway.com/media/wysiwyg/33012_3.jpg",
    "https://www.wireandcableyourway.com/media/wysiwyg/392_4.jpg",
    "https://www.wireandcableyourway.com/media/wysiwyg/1895_3.jpg",
];
export const productSpecs: {
    label: string;
    value: string;
}[] = [
        { label: "جنس هادی", value: "مس خالص" },
        { label: "تعداد رشته", value: "7 رشته" },
        { label: "مقاومت کششی", value: "50 نیوتن/میلی‌متر مربع" },
        { label: "روکش", value: "PVC مقاوم" },
        { label: "سطح مقطع", value: "2.5 میلی‌متر مربع" },
        { label: "کلاس انعطاف‌پذیری", value: "کلاس 5" },
    ];

export const mockOrders = [
    {
        id: "ORD-1001",
        userId: "USER-001",
        status: "sending",
        cost: 18500000,
        address: {
            province: "تهران",
            city: "تهران",
            postalCode: "1419987654",
            description: "خیابان آزادی، بعد از میدان انقلاب، کوچه یاس",
            plaque: "۱۲"
        },
        items: [
            {
                id: "ITEM-1",
                quantity: 2,
                available: true,
                price: 3500000,
                product: {
                    id: "PR-001",
                    name: "کابل افشان ۲×۱.۵ خراسان افشارنژاد",
                    price: 3500000
                }
            },
            {
                id: "ITEM-2",
                quantity: 1,
                available: true,
                price: 11500000,
                product: {
                    id: "PR-002",
                    name: "سیم ارت ۱۶ میلی‌متر",
                    price: 11500000
                }
            }
        ]
    },

    {
        id: "ORD-1002",
        userId: "USER-001",
        status: "completed",
        cost: 9200000,
        address: {
            province: "اصفهان",
            city: "اصفهان",
            postalCode: "8174671234",
            description: "خیابان چهارباغ بالا، مجتمع تجاری سپهر",
            plaque: "۵۴"
        },
        items: [
            {
                id: "ITEM-3",
                quantity: 4,
                available: true,
                price: 2300000,
                product: {
                    id: "PR-003",
                    name: "کابل شبکه CAT6 SFTP لگراند (حلقه ۳۰۵ متری)",
                    price: 2300000
                }
            }
        ]
    },

    {
        id: "ORD-1003",
        userId: "USER-001",
        status: "sending",
        cost: 14300000,
        address: {
            province: "البرز",
            city: "کرج",
            postalCode: "3145678901",
            description: "بلوار طالقانی، روبروی پاساژ مهستان",
            plaque: "۸"
        },
        items: [
            {
                id: "ITEM-4",
                quantity: 1,
                available: true,
                price: 9800000,
                product: {
                    id: "PR-004",
                    name: "کابل قدرت NYY 3×6 زمینی",
                    price: 9800000
                }
            },
            {
                id: "ITEM-5",
                quantity: 2,
                available: false,
                price: 2250000,
                product: {
                    id: "PR-005",
                    name: "سیم مفتولی ۱×۴ (نمره ۴)",
                    price: 2250000
                }
            }
        ]
    }
];


export const MOCK_PRODUCTS = [
    {
        id: "1",
        name: "کابل برق افشان 2×1.5",
        description: "کابل برق افشان مناسب برای مصارف خانگی و صنعتی",
        price: 125000,
        weightKg: 1.2,
        stock: 12,
        discount: 15,
        images: [{ url: "/placeholder.png" }],
        category: { id: "c1", name: "کابل برق" },
        attributes: [
            { id: "a1", name: "جنس", value: "مس" },
            { id: "a2", name: "طول", value: "10 متر" },
        ],
    },
    {
        id: "2",
        name: "سیم برق نایلونی 1×1",
        description: "سیم برق نایلونی مقاوم در برابر حرارت",
        price: 78000,
        weightKg: 0.8,
        stock: 0,
        discount: null,
        images: [{ url: "/placeholder.png" }],
        category: { id: "c2", name: "سیم برق" },
        attributes: [
            { id: "a3", name: "جنس", value: "آلومینیوم" },
        ],
    },
    {
        id: "3",
        name: "کابل شبکه CAT6",
        description: "کابل شبکه CAT6 با سرعت بالا مناسب شبکه‌های حرفه‌ای",
        price: 320000,
        weightKg: 1.5,
        stock: 7,
        discount: 25,
        images: [{ url: "/placeholder.png" }],
        category: { id: "c3", name: "کابل شبکه" },
        attributes: [
            { id: "a4", name: "نوع", value: "UTP" },
        ],
    },
    {
        id: "4",
        name: "کابل تلفن 4 زوج",
        description: "کابل تلفن چهار زوج مناسب سیستم‌های مخابراتی",
        price: 95000,
        weightKg: 1,
        stock: 20,
        discount: 0,
        images: [{ url: "/placeholder.png" }],
        category: { id: "c4", name: "کابل تلفن" },
        attributes: [],
    },
];
