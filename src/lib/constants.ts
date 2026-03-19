export const COMPANY = {
  name: "ХимСнаб Композит",
  brandName: "Химснаб",
  groupName: "Группа компаний «ХимСнаб Композит»",
  slogan: "Партнёр для развития композитных производств",
  subtitle:
    "Объединяем поставки, производственные активы и технологическую экспертизу в единую инфраструктуру",
  phone: "+7 (495) 665-23-80",
  phoneRaw: "+74956652380",
  email: "market@igcmail.ru",
  inn: "5409231479",
  ogrn: "1085473006695",
  legalName: "ООО ХимСнаб Композит",
  foundedYear: 2003,
  socials: {
    whatsapp: "https://wa.me/+79232445982?text=Добрый%20день%2C%20вопрос%20с%20сайта",
    telegram: "https://t.me/cscomposites",
    vk: "https://vk.com/cs.composites",
    max: "https://max.ru/u/f9LHodD0cOJAxJXWMggeBL4e0ecqFgQYJXdwmv4b0tc6uChIxw58ZhjsqxY",
  },
} as const;

export const NAV_ITEMS = [
  { label: "Главная", href: "/" },
  { label: "О группе компаний", href: "/about" },
  { label: "Производство", href: "/production" },
  { label: "Деятельность", href: "/activities" },
  { label: "Работа с B2B", href: "/b2b" },
  { label: "ГОЗ", href: "/goz" },
  { label: "Карьера", href: "/career" },
  { label: "Контакты", href: "/contacts" },
] as const;

export const GROUP_COMPANIES: {
  name: string;
  description: string;
  href: string;
  logo: string;
  color: "primary" | "accent" | "green" | "gold";
  external?: boolean;
}[] = [
  {
    name: "ХимСнаб Композит",
    description: "Поставки сырья и оборудования",
    href: "/about",
    logo: "/images/logos/himsnab.png",
    color: "primary",
  },
  {
    name: "ХСК Инновация",
    description: "Производство из стеклопластика",
    href: "/production",
    logo: "/images/logos/hsk-innovation.png",
    color: "accent",
  },
  {
    name: "ХСКомпозит",
    description: "Беларусь, локальные поставки",
    href: "https://igc-market.by",
    logo: "/images/logos/hsk-composit.png",
    external: true,
    color: "green",
  },
  {
    name: "ICE-City",
    description: "Казахстан, дистрибуция и логистика",
    href: "https://ice-city.shop",
    logo: "/images/logos/ice-city.png",
    external: true,
    color: "gold",
  },
];

export const STATS = [
  { value: 22, suffix: "+", label: "Лет на рынке композитов" },
  { value: 9, suffix: "", label: "Филиалов" },
  { value: 3, suffix: "", label: "Страны присутствия" },
  { value: 5000, suffix: "+", label: "Наименований материалов" },
  { value: 3, suffix: "", label: "Производственных площадки" },
] as const;

export const TIMELINE = [
  { year: "2003", event: "Открытие склада и офиса в Новосибирске" },
  { year: "2016", event: "Открытие логистического центра и офиса в Москве" },
  {
    year: "2016",
    event: "Запуск собственного производства изделий из стеклопластика",
  },
  { year: "2018", event: "Открытие филиала в Санкт-Петербурге" },
  { year: "2021", event: "Открытие филиала в Краснодаре" },
  { year: "2022", event: "Открытие филиала в Минске (ХСКомпозит)" },
  { year: "2023", event: "Открытие филиалов в Казани и Екатеринбурге" },
  { year: "2024", event: "Открытие филиала в Красноярске" },
  {
    year: "2024",
    event:
      "Регистрация ХСК Инновации как отдельного юридического лица, получение статуса резидента Сколково",
  },
  {
    year: "2025",
    event:
      "Заключение контракта с ICE CITY на эксклюзивную дистрибуцию композитных материалов в Казахстане",
  },
] as const;

export const OFFICES: { city: string; address: string; country?: string }[] = [
  { city: "Москва", address: "43-й км МКАД, ЛЦ «Славянский Мир», корпус 13, склад №3" },
  { city: "Новосибирск", address: "ул. Бердское шоссе, д. 61/13" },
  { city: "Санкт-Петербург", address: "ул. Кибальчича, 28Л" },
  { city: "Екатеринбург", address: "ул. Косарева, 91А" },
  { city: "Краснодар", address: "ул. Селезнева, 16/1, 2 этаж, офис 4" },
  { city: "Казань", address: "ул. Горьковское шоссе, 53А" },
  { city: "Красноярск", address: "Судостроительная ул., 6" },
  { city: "Минск", address: "ул. Инженерная, 14а", country: "Беларусь" },
  { city: "Алматы", address: "проспект Турара Рыскулова, 70", country: "Казахстан" },
];
