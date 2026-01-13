
import { NavItem, Activity, Champion } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Champions', href: '#champions' },
  { label: 'Activities', href: '#activities' },
  { label: 'Vision 2026', href: '#vision' },
  { label: 'Partners', href: '#partners' },
  { label: 'Nominate', href: '#nominate' },
  { label: 'Contact', href: '#contact' },
];

export const ACTIVITIES: Activity[] = [
  { id: 1, title: 'High-Stakes Networking', description: 'Exclusive, closed-door networking opportunities with top-tier investors, policymakers, and ecosystem builders from across the continent and beyond.' },
  { id: 2, title: 'Masterclass Series', description: 'Deep-dive sessions led by global experts on venture scaling, AI ethics, digital trade policy, and public-private partnerships to sharpen their competitive edge.' },
  { id: 3, title: 'Continental Showcase', description: 'A global platform for Champions to showcase their ventures to international media, corporate partners, and investors during the annual Africa Digital Festival.' },
  { id: 4, title: 'Policy & Innovation Tours', description: 'Curated, fact-finding missions to leading African tech hubs and government institutions to bridge the gap between innovation and regulation.' },
];

export const PARTNERS = [
  { name: 'Gainako', logo: 'https://gainako.com/wp-content/uploads/2016/01/cropped-GAINAKO-LOGO-NEW-1.png' },
  { name: 'Citi Newsroom', logo: 'https://citinewsroom.com/wp-content/uploads/2018/01/Citi-News-Logo-1.png' },
  { name: 'SAPO', logo: 'https://picsum.photos/seed/sapo/150/50' },
  { name: 'RDP Africa', logo: 'https://picsum.photos/seed/rdp/150/50' },
];

export const CHAMPIONS_2025: Champion[] = [
  {
    name: "Abdellah Mallek",
    role: "Founder & Manager, SyLabs",
    country: "Algeria",
    countryCode: "dz",
    imageUrl: "input_file_64.jpeg",
    category: "Entrepreneurship",
    bio: "A pioneer in Algeria's startup ecosystem, Abdellah leads SyLabs, a premier innovation hub fostering tech talent and entrepreneurial growth in North Africa.",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Pedro Beirão",
    role: "Digital Innovator",
    country: "Angola",
    countryCode: "ao",
    imageUrl: "input_file_72.jpeg",
    category: "Software",
    bio: "Technology leader championing Angola's digital transformation initiatives and fostering local tech talent.",
    socials: { linkedin: "#" }
  },
  {
    name: "Aurélie Adam Soulé",
    role: "Minister of Digital Economy",
    country: "Benin",
    countryCode: "bj",
    imageUrl: "input_file_46.jpeg",
    category: "Policy",
    bio: "Government Minister working tirelessly on digital innovation and ICT development, positioning Benin as a digital hub in West Africa.",
    socials: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Nomsa Makgabenyana",
    role: "Digital Champion",
    country: "Botswana",
    countryCode: "bw",
    imageUrl: "input_file_69.jpeg",
    category: "Infrastructure",
    bio: "Advancing technology adoption and innovation across Botswana's public and private sectors.",
    socials: { linkedin: "#" }
  },
  {
    name: "Lassina Konaté",
    role: "Digital Transformation Lead",
    country: "Burkina Faso",
    countryCode: "bf",
    imageUrl: "input_file_76.jpeg",
    category: "Infrastructure",
    bio: "Leading Burkina Faso's efforts in digital infrastructure expansion and e-government services.",
    socials: { linkedin: "#" }
  },
  {
    name: "Gatare Libère",
    role: "Technology Leader",
    country: "Burundi",
    countryCode: "bi",
    imageUrl: "input_file_66.jpeg",
    category: "Policy",
    bio: "Driving digital transformation initiatives in Burundi with a focus on sustainable tech infrastructure.",
    socials: { website: "#" }
  },
  {
    name: "Jean Lobe Lobe",
    role: "Digital Economy Advocate",
    country: "Cameroon",
    countryCode: "cm",
    imageUrl: "input_file_60.jpeg",
    category: "Education",
    bio: "Promoting innovation and digital economy growth through advocacy and community leadership in Cameroon.",
    socials: { linkedin: "#" }
  },
  {
    name: "José Ulisses Correia e Silva",
    role: "Prime Minister",
    country: "Cabo Verde",
    countryCode: "cv",
    imageUrl: "input_file_62.jpeg",
    category: "Policy",
    bio: "Leading Cabo Verde's digital transformation strategy with a vision to become a digital gateway for the mid-Atlantic.",
    socials: { website: "https://presidencia.cv" }
  },
  {
    name: "Jean-Bruno Dedeane",
    role: "Tech Policy Advisor",
    country: "CAR",
    countryCode: "cf",
    imageUrl: "https://picsum.photos/seed/cf_champ/800/1000",
    category: "Policy",
    bio: "Advocating for digital rights and infrastructure development in the Central African Republic.",
    socials: { twitter: "#" }
  },
  {
    name: "Mystère Belmamou Diksia",
    role: "Technology Innovator",
    country: "Chad",
    countryCode: "td",
    imageUrl: "https://picsum.photos/seed/td_champ/800/1000",
    category: "Software",
    bio: "Championing digital solutions and ICT development to solve local challenges in Chad's emerging tech sector.",
    socials: { twitter: "#" }
  },
  {
    name: "Ali Nassor",
    role: "Innovation Hub Founder",
    country: "Comoros",
    countryCode: "km",
    imageUrl: "https://picsum.photos/seed/km_champ/800/1000",
    category: "Entrepreneurship",
    bio: "Fostering a new generation of Comorian tech talent through community hubs and digital literacy programs.",
    socials: { website: "#" }
  },
  {
    name: "Verone Mankou",
    role: "Founder, VMK",
    country: "Congo",
    countryCode: "cg",
    imageUrl: "input_file_70.jpeg",
    category: "Hardware",
    bio: "Entrepreneur and innovator, founder of Africa's first tablet computer brand.",
    socials: { linkedin: "#", website: "#" }
  },
  {
    name: "Thierry N'Doufou",
    role: "Digital Economy Leader",
    country: "Côte d'Ivoire",
    countryCode: "ci",
    imageUrl: "input_file_52.jpeg",
    category: "Entrepreneurship",
    bio: "Advancing technology and innovation initiatives in Côte d'Ivoire.",
    socials: { linkedin: "#" }
  },
  {
    name: "Mustafa Rawji",
    role: "CEO, Rawbank",
    country: "DRC",
    countryCode: "cd",
    imageUrl: "input_file_43.jpeg",
    category: "Fintech",
    bio: "Pioneering digital banking solutions in the Democratic Republic of Congo.",
    socials: { linkedin: "#" }
  },
  {
    name: "Mohamed Assoweh Bouh",
    role: "ICT Champion",
    country: "Djibouti",
    countryCode: "dj",
    imageUrl: "input_file_67.jpeg",
    category: "Policy",
    bio: "Working to advance Djibouti's technology sector through strategic ICT initiatives.",
    socials: { linkedin: "#" }
  },
  {
    name: "Ahmed El-Zaher",
    role: "Tech Entrepreneur",
    country: "Egypt",
    countryCode: "eg",
    imageUrl: "input_file_78.jpeg",
    category: "Fintech",
    bio: "A leading figure in Egypt's tech ecosystem, contributing to high-impact digital ventures.",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Oscar Ondo",
    role: "Founder, Atom",
    country: "Equatorial Guinea",
    countryCode: "gq",
    imageUrl: "https://picsum.photos/seed/gq_champ/800/1000",
    category: "Entrepreneurship",
    bio: "Spearheading Equatorial Guinea's first major tech startup, focusing on digital services.",
    socials: { linkedin: "#" }
  },
  {
    name: "Samuel Ghebrendrias",
    role: "Digital Strategist",
    country: "Eritrea",
    countryCode: "er",
    imageUrl: "https://picsum.photos/seed/er_champ/800/1000",
    category: "Infrastructure",
    bio: "Advocating for technological resilience and digital adaptation in Eritrea.",
    socials: { twitter: "#" }
  },
  {
    name: "Princess Sikhanyiso Dlamini",
    role: "Minister for ICT",
    country: "Eswatini",
    countryCode: "sz",
    imageUrl: "input_file_74.jpeg",
    category: "Policy",
    bio: "Leading Eswatini's digital transformation agenda.",
    socials: { website: "#" }
  },
  {
    name: "Betelhem Dessie",
    role: "CEO, Anyone Can Code",
    country: "Ethiopia",
    countryCode: "et",
    imageUrl: "https://picsum.photos/seed/et_champ/800/1000",
    category: "Education",
    bio: "Prominent tech leader in Ethiopia, empowering youth through coding.",
    socials: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Yannick Ebibie",
    role: "Digital Champion",
    country: "Gabon",
    countryCode: "ga",
    imageUrl: "input_file_59.jpeg",
    category: "Education",
    bio: "Driving innovation initiatives across Gabonese industries.",
    socials: { linkedin: "#" }
  },
  {
    name: "Kawsu Jabbi",
    role: "Founder, Kids in Technology",
    country: "The Gambia",
    countryCode: "gm",
    imageUrl: "input_file_68.jpeg",
    category: "Education",
    bio: "Social entrepreneur empowering youth in The Gambia.",
    socials: { twitter: "#", website: "#" }
  },
  {
    name: "Theodore Ohene Botchway",
    role: "Innovation Leader",
    country: "Ghana",
    countryCode: "gh",
    imageUrl: "input_file_49.jpeg",
    category: "Software",
    bio: "Advancing Ghana's tech ecosystem through software innovation.",
    socials: { linkedin: "#" }
  },
  {
    name: "Mountaga Keita",
    role: "Founder, Tulip Industries",
    country: "Guinea",
    countryCode: "gn",
    imageUrl: "https://picsum.photos/seed/gn_champ/800/1000",
    category: "Hardware",
    bio: "Innovative entrepreneur developing hardware solutions in Guinea.",
    socials: { website: "#", linkedin: "#" }
  },
  {
    name: "Janna Barbosa",
    role: "Transformation Advocate",
    country: "Guinea-Bissau",
    countryCode: "gw",
    imageUrl: "input_file_54.jpeg",
    category: "Policy",
    bio: "Advancing technology adoption in Guinea-Bissau.",
    socials: { linkedin: "#" }
  },
  {
    name: "Paul Kimani",
    role: "Entrepreneur",
    country: "Kenya",
    countryCode: "ke",
    imageUrl: "input_file_53.jpeg",
    category: "Fintech",
    bio: "Driving innovation in Kenya's Silicon Savannah.",
    socials: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Hon. Nthati Moorosi",
    role: "Government Official",
    country: "Lesotho",
    countryCode: "ls",
    imageUrl: "input_file_57.jpeg",
    category: "Policy",
    bio: "Championing digital transformation in Lesotho.",
    socials: { linkedin: "#" }
  },
  {
    name: "Christopher B. Jones",
    role: "CEO of Ezee Markets",
    country: "Liberia",
    countryCode: "lr",
    imageUrl: "input_file_75.jpeg",
    category: "Entrepreneurship",
    bio: "Driving e-commerce and digital marketplace innovation in Liberia through his leadership at Ezee Markets.",
    socials: { website: "#" }
  },
  {
    name: "Mohammed Zaid",
    role: "Program Coordinator, Lybotics",
    country: "Libya",
    countryCode: "ly",
    imageUrl: "input_file_63.jpeg",
    category: "Education",
    bio: "Pioneering robotics education and competitive tech programs in Libya.",
    socials: { twitter: "#", website: "#" }
  },
  {
    name: "Jary Razafindrakoto",
    role: "Tech Entrepreneur",
    country: "Madagascar",
    countryCode: "mg",
    imageUrl: "input_file_56.jpeg",
    category: "Software",
    bio: "Driving Madagascar's digital ecosystem through software innovation.",
    socials: { linkedin: "#" }
  },
  {
    name: "Clarence Gama",
    role: "CEO, NICO Technologies",
    country: "Malawi",
    countryCode: "mw",
    imageUrl: "input_file_51.jpeg",
    category: "Infrastructure",
    bio: "Leading digital innovation to bridge connectivity gaps in Malawi.",
    socials: { linkedin: "#" }
  },
  {
    name: "Djénéba Gory",
    role: "Founder, Suadela",
    country: "Mali",
    countryCode: "ml",
    imageUrl: "https://picsum.photos/seed/ml_champ/800/1000",
    category: "Entrepreneurship",
    bio: "Entrepreneur championing digital solutions for social impact in Mali.",
    socials: { linkedin: "#" }
  },
  {
    name: "Mariem Kane",
    role: "Innovation Lead",
    country: "Mauritania",
    countryCode: "mr",
    imageUrl: "https://picsum.photos/seed/mr_champ/800/1000",
    category: "Policy",
    bio: "Shaping Mauritania's digital future through ecosystem building.",
    socials: { linkedin: "#" }
  },
  {
    name: "Derick Kazimoto",
    role: "CEO, Black Swan",
    country: "Mauritius",
    countryCode: "mu",
    imageUrl: "https://picsum.photos/seed/mu_champ/800/1000",
    category: "Software",
    bio: "Driving digital transformation in Mauritius' tech sector.",
    socials: { website: "#" }
  },
  {
    name: "Mehdi Alaoui",
    role: "Digital Economy Leader",
    country: "Morocco",
    countryCode: "ma",
    imageUrl: "input_file_41.jpeg",
    category: "Entrepreneurship",
    bio: "Advancing Morocco's position as a regional tech hub.",
    socials: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Jessica Cumbana",
    role: "Founder, Girls Can Code",
    country: "Mozambique",
    countryCode: "mz",
    imageUrl: "input_file_55.jpeg",
    category: "Education",
    bio: "Empowering girls through technology education in Mozambique.",
    socials: { linkedin: "#" }
  },
  {
    name: "Nawa Likando",
    role: "Head of Strategy, MTC Namibia",
    country: "Namibia",
    countryCode: "na",
    imageUrl: "input_file_61.jpeg",
    category: "Infrastructure",
    bio: "Leading digital strategy for Namibia's premier telecommunications provider.",
    socials: { linkedin: "#" }
  },
  {
    name: "S.E. Ibrahim Yacoubou",
    role: "Minister of State",
    country: "Niger",
    countryCode: "ne",
    imageUrl: "https://picsum.photos/seed/ne_champ/800/1000",
    category: "Policy",
    bio: "Championing digital transformation for Niger's development.",
    socials: { website: "#" }
  },
  {
    name: "Zita Agwunobi",
    role: "CEO, iverify.ng",
    country: "Nigeria",
    countryCode: "ng",
    imageUrl: "input_file_50.jpeg",
    category: "Fintech",
    bio: "Digital identity champion advancing verification solutions in Nigeria.",
    socials: { linkedin: "#", website: "https://iverify.ng" }
  },
  {
    name: "Paula Ingabire",
    role: "Minister of ICT",
    country: "Rwanda",
    countryCode: "rw",
    imageUrl: "input_file_71.jpeg",
    category: "Policy",
    bio: "MIT-trained technology leader driving Rwanda's digital strategy.",
    socials: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Baba Dioum",
    role: "Innovation Champion",
    country: "Senegal",
    countryCode: "sn",
    imageUrl: "https://picsum.photos/seed/sn_champ/800/1000",
    category: "Software",
    bio: "Contributing to Senegal's reputation as a West African tech hub.",
    socials: { linkedin: "#" }
  },
  {
    name: "Dr. David Sengeh",
    role: "Minister of Education",
    country: "Sierra Leone",
    countryCode: "sl",
    imageUrl: "input_file_47.jpeg",
    category: "Policy",
    bio: "Innovation leader leveraging technology to transform education in Sierra Leone.",
    socials: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Ahmed Mohamed Yusuf",
    role: "CEO, Hormuud Telecom",
    country: "Somalia",
    countryCode: "so",
    imageUrl: "input_file_44.jpeg",
    category: "Infrastructure",
    bio: "Telecommunications leader advancing financial inclusion in Somalia.",
    socials: { website: "https://hormuud.com" }
  },
  {
    name: "Bongekile Filana",
    role: "Youth ICT Council",
    country: "South Africa",
    countryCode: "za",
    imageUrl: "input_file_48.jpeg",
    category: "Education",
    bio: "Championing youth digital skills in South Africa.",
    socials: { linkedin: "#" }
  },
  {
    name: "Adam A. Duma",
    role: "Co-founder, Silabu",
    country: "Tanzania",
    countryCode: "tz",
    imageUrl: "input_file_42.jpeg",
    category: "Education",
    bio: "EdTech entrepreneur creating digital learning solutions in Tanzania.",
    socials: { website: "https://silabu.com" }
  },
  {
    name: "Cina Lawson",
    role: "Minister for Digital Economy",
    country: "Togo",
    countryCode: "tg",
    imageUrl: "input_file_45.jpeg",
    category: "Policy",
    bio: "Digital transformation pioneer who launched the Novissi program in Togo.",
    socials: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Yahya Bouhel",
    role: "Innovation Leader",
    country: "Tunisia",
    countryCode: "tn",
    imageUrl: "input_file_73.jpeg",
    category: "Software",
    bio: "Advancing Tunisia's technology sector through strategic leadership.",
    socials: { linkedin: "#" }
  },
  {
    name: "Mina Shahid",
    role: "CEO & Co-founder, Numida",
    country: "Uganda",
    countryCode: "ug",
    imageUrl: "input_file_65.jpeg",
    category: "Fintech",
    bio: "Fintech entrepreneur providing credit solutions to small businesses in Uganda.",
    socials: { website: "https://numida.com", linkedin: "#" }
  },
  {
    name: "Perseus Mlambo",
    role: "CEO, ChitChat",
    country: "Zambia",
    countryCode: "zm",
    imageUrl: "input_file_58.jpeg",
    category: "Software",
    bio: "Building digital communication solutions in Zambia.",
    socials: { linkedin: "#", website: "https://chitchat.com" }
  },
  {
    name: "Dr. Ethel M. Chiwara",
    role: "CEO, MoneyMart",
    country: "Zimbabwe",
    countryCode: "zw",
    imageUrl: "input_file_38.jpeg",
    category: "Fintech",
    bio: "Financial services leader driving mobile money innovation in Zimbabwe.",
    socials: { linkedin: "#", website: "https://moneymart.co.zw" }
  }
];