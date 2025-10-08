export const profile = {
  name: "Sedanur Babir",
  title: "Front-end Developer",
  description: "3+ yıl deneyimli Front-End Developer olarak React, React Native, Angular ve Ionic ile kullanıcı dostu ve performans odaklı arayüzler geliştiriyorum. Modern web ve mobil teknolojileriyle ölçeklenebilir projeler oluşturuyorum.",
  location: "Mamak / Ankara",
  email: "sedababir1@gmail.com",
  phone: "0 (541) 567 87 76",
  socials: [
    { label: "GitHub", href: "https://github.com/SedanurBabir", img: "/github.png" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/seda-babir/", img: "/linkedln.png" },
  ],
};

export const focusAreas = [
  {
    title: "Ürün geliştirme",
    description:
      "Öğrenci platformlarından kurumsal dashboardlara kadar karmaşık ihtiyaçları sade ve tutarlı arayüzlere dönüştürüyorum.",
  },
  {
    title: "Etkileşim & motion",
    description:
      "Kullanıcı yolculuğunu güçlendiren mikro animasyonlar, yönlendirmeler ve erişilebilir hareket sistemleri tasarlıyorum.",
  },
  {
    title: "Takım çalışması",
    description:
      "Ürün, tasarım ve backend ekipleriyle yakın çalışarak süreçleri hızlandıran bileşen kütüphaneleri ve dokümantasyon üretiyorum.",
  },
];

export const experiences = [
  {
    company: "SarSistem Yazılım",
    role: "Front-end Developer",
    period: "2023 - Devam ediyor",
    description:
      "React, Next.js, Redux ve React Native ile web ve mobil uygulamalar geliştiriyorum. Gerçek zamanlı API entegrasyonları, state management ve responsive tasarım konularında ürün ekibiyle birlikte çalışıyorum.",
  },
  {
    company: "İdea Teknoloji",
    role: "Front-end Developer",
    period: "2022 - 2023",
    description:
      "Angular ve NgRx ile ölçeklenebilir kurumsal çözümler geliştirildi. Ionic Framework ile mobil uygulama yayınladım; JWT tabanlı kimlik doğrulama ve rol bazlı yetkilendirme süreçlerini koordine ettim.",
  },
  {
    company: "Netcad Yazılım A.Ş.",
    role: "Stajyer Yazılım Geliştirici",
    period: "2022",
    description:
      "Vue.js tabanlı bir projede bileşen geliştirme, Vuex ile state yönetimi ve Git iş akışlarına katkı sağladım.",
  },
];

export const education = [
  {
    title: "Bilgisayar Mühendisliği",
    school: "Sivas Cumhuriyet Üniversitesi",
    period: "2020 - 2024",
  },
  {
    title: "Sosyal Medya Yöneticiliği",
    school: "Anadolu Üniversitesi (AÖF)",
    period: "2024 - Devam ediyor",
  },
  {
    title: "B1 İngilizce",
    school: "Dilmer",
    period: "2022",
  },
];

export const skills = {
  "Frontend Frameworkleri": ["React.js", "React Native", "Next.js", "Angular", "Vue.js", "Ionic"],
  "State Yönetimi": ["Redux", "Redux Toolkit", "Context API", "NgRx"],
  Programlama: ["JavaScript (ES6+)", "TypeScript"],
  Stil: ["HTML5", "CSS3", "SCSS", "Styled Components"],
  "UI Kütüphaneleri": ["Material UI", "Ant Design", "Bootstrap", "Chakra UI"],
  "Backend Entegrasyonu": ["RESTful API", "Axios", "Fetch API"],
  Görselleştirme: ["Chart.js", "ApexCharts", "Highcharts"],
  "Araçlar & Diğer": ["Git", "GitHub", "GitLab", "Jira", "Firebase", "WordPress", "Figma", "ESLint", "Prettier", "i18n"],
};

export const projects = [
  {
    id: 1,
    title: "SincApp Sınav Hazırlık Sistemi",
    category: "Web Uygulaması",
    role: "Front-end Developer",
    duration: "2023 - Devam ediyor",
    description:
      "React / Next.js ve MUI ile geliştirilen, öğrencilere kişiselleştirilmiş sınav hazırlık planları sunan platform. Diagnostik sınav sonuçlarına göre çalışma planları ve tercih listeleri üretiyor.",
    highlights: [
      "Tercih robotu ve çalışma planı modüllerinin tasarım ve geliştirilmesi",
      "Konu kazanımlarına göre sınav soruları görüntüleme",
      "YouTube benzeri video oynatma ve ders izleme deneyimi",
      "ApexCharts ile öğrenci performans görselleştirmeleri",
    ],
    tech: ["React", "Next.js", "Material UI", "Redux Toolkit", "Axios", "ApexCharts", "ImageMapper"],
    images: ["/S1.png", "/S2.png", "/S3.png", "/S4.png"],
  },
  {
    id: 2,
    title: "Bussion Analytics Platform",
    category: "Kurumsal Platform",
    role: "Front-end & Mobile Developer",
    duration: "2022 - 2023",
    description:
      "Turkcell, Botaş, Turkuaz gibi şirketlere veri analitiği ve danışmanlık sağlayan sistem. Büyük veri setlerini işleyebilen interaktif dashboardlar ve mobil uygulamalar sunuyor.",
    highlights: [
      "NgRx ile merkezi state yönetimi",
      "JWT tabanlı kimlik doğrulama ve rol bazlı yetkilendirme",
      "ChatGPT API entegrasyonu ile NLP chatbot",
      "Ionic ile Android ve iOS mobil uygulamalar",
      "Figma prototiplerini birebir uygulayan responsive arayüzler",
    ],
    tech: ["Angular", "NgRx", "RxJS", "Material UI", "SCSS", "Highcharts", "Ionic", "JWT"],
    images: ["/B1.png", "/B2.png", "/B3.png"],
  },
  {
    id: 3,
    title: "Bano Balık Noktam",
    category: "Mobil Uygulama",
    role: "Front-end & Mobile Developer",
    duration: "2023 - Devam ediyor",
    description:
      "Balıkçılar için derinlik haritaları, balık türleri ve hava durumu verileri sunan platform. Rota planlama ve sanal çapa özellikleriyle mobil deneyim sağlar.",
    highlights: [
      "React ve MUI ile yönetim paneli",
      "DataGrid bileşenleriyle veri görselleştirme",
      "iOS ve Android için cross-platform geliştirme",
      "Redux ile global state yönetimi",
      "Mağaza yayınına hazır mobil uygulama",
    ],
    tech: ["React Native", "React", "Material UI", "Redux Toolkit", "Xcode", "Android Studio"],
    images: ["/BA1.png", "/BA2.png", "/BA3.png", "/BA4.png"],
  },
  {
    id: 4,
    title: "E-Karbon",
    category: "Web Platformu",
    role: "Front-end Developer",
    duration: "2023 - Devam ediyor",
    description:
      "Karbondioksit emisyonlarını finansal değere dönüştürerek karbon piyasasında takip eden platform. WordPress tanıtım sitesi ve React/Next.js kullanıcı portalı içeriyor.",
    highlights: [
      "WordPress ile kurumsal tanıtım sitesi",
      "React ve Next.js ile kullanıcı yönetimi",
      "Chart.js ile dashboard ve veri görselleştirmeleri",
      "Driver.js ile animasyonlu kullanıcı rehberi",
      "DataGrid ile dinamik veri tabloları",
    ],
    tech: ["React", "Next.js", "WordPress", "Axios", "Redux", "Chart.js", "Driver.js"],
    images: ["/E1.png", "/E2.png", "/E3.png", "/E4.png"],
  },
];

export const showcaseSites = [
  { name: "DijiMülk", url: "https://www.dijimulk.com" },
  { name: "LentoDent", url: "https://lentodent.com" },
  { name: "Balık Noktam", url: "https://baliknoktam.com" },
  { name: "E-Karbon", url: "https://e-karbon.com" },
];
