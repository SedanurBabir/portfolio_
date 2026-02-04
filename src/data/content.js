export const profile = {
  name: "Sedanur Babir",
  title: "Frontend Developer",
  description: "3.5+ yıl deneyimli Frontend Developer olarak React, React Native, Angular ve Ionic ile kullanıcı dostu ve performans odaklı arayüzler geliştiriyorum. Modern web ve mobil teknolojileriyle ölçeklenebilir projeler oluşturuyorum.",
  location: "Ankara, Turkey",
  email: "sedababir1@gmail.com",
  phone: "0 (541) 567 87 76",
  socials: [
    { label: "GitHub", href: "https://github.com/SedanurBabir", img: "/github.png" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/seda-babir/", img: "/linkedln.png" },
  ],
};

export const focusAreas = [
  {
    title: "Ürün Geliştirme",
    description:
      "Öğrenci platformlarından kurumsal dashboardlara kadar karmaşık ihtiyaçları sade ve tutarlı arayüzlere dönüştürüyorum.",
  },
  {
    title: "Etkileşim & Motion",
    description:
      "Kullanıcı yolculuğunu güçlendiren mikro animasyonlar, yönlendirmeler ve erişilebilir hareket sistemleri tasarlıyorum.",
  },
  {
    title: "Takım Çalışması",
    description:
      "Ürün, tasarım ve backend ekipleriyle yakın çalışarak süreçleri hızlandıran bileşen kütüphaneleri ve dokümantasyon üretiyorum.",
  },
];

export const experiences = [
  {
    company: "SarSistem Yazılım",
    role: "Frontend Developer",
    period: "2023 - Devam ediyor",
    description:
      "React, Next.js, Redux ve React Native ile web ve mobil uygulamalar geliştiriyorum. Gerçek zamanlı API entegrasyonları, state management ve responsive tasarım konularında ürün ekibiyle birlikte çalışıyorum.",
  },
  {
    company: "İdea Teknoloji",
    role: "Frontend Developer",
    period: "2022 - 2023",
    description:
      "Angular ve NgRx ile ölçeklenebilir kurumsal çözümler geliştirdim. Ionic Framework ile mobil uygulama yayınladım; JWT tabanlı kimlik doğrulama ve rol bazlı yetkilendirme süreçlerini koordine ettim.",
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
  "Araçlar & Diğer": ["Git", "GitHub", "GitLab", "Jira", "Firebase", "WordPress", "Figma", "ESLint", "Prettier", "i18n", "Socket.IO"],
};

export const professionalWorkDisclaimer = {
  title: "📋 Profesyonel Projeler Hakkında",
  message: "Gizlilik anlaşmaları (NDA) nedeniyle, SarSistem Yazılım, İdea Teknoloji ve Netcad Yazılım'daki profesyonel projelerim hakkında detaylı bilgi halka açık olarak paylaşılamaz. Aşağıdaki projeler, üzerinde çalıştığım uygulama türlerini temsil eder ve genelleştirilmiş açıklamalar içerir.",
  icon: "🔒",
};

export const projects = [
  {
    id: 1,
    title: "Eğitim ve Sınav Hazırlık Platformu",
    category: "Web Uygulaması",
    role: "Frontend Developer",
    duration: "2023 - Devam ediyor",
    description:
      "React / Next.js ve Material-UI ile geliştirilen, öğrencilere kişiselleştirilmiş öğrenme deneyimi sunan kapsamlı eğitim platformu. Diagnostik değerlendirmeler, çalışma planları ve interaktif içerik yönetimi içerir.",
    highlights: [
      "Kişiselleştirilmiş öğrenme yolu ve çalışma planı modülleri",
      "İnteraktif video oynatıcı ve ders izleme sistemi",
      "Öğrenci performans analitiği ve veri görselleştirme",
      "Responsive tasarım ve akıcı animasyonlar",
    ],
    tech: ["React", "Next.js", "Material UI", "Redux Toolkit", "Axios", "ApexCharts"],
    professional: true,
  },
  {
    id: 2,
    title: "Kurumsal Analitik Dashboard",
    category: "Kurumsal Platform",
    role: "Frontend & Mobile Developer",
    duration: "2022 - 2023",
    description:
      "Kurumsal müşterilere veri analitiği ve danışmanlık sağlayan sistem. Büyük veri setlerini işleyebilen interaktif dashboardlar ve cross-platform mobil uygulamalar.",
    highlights: [
      "Merkezi state yönetimi ve performans optimizasyonu",
      "JWT tabanlı güvenli kimlik doğrulama sistemi",
      "Yapay zeka entegrasyonu ile akıllı veri analizi",
      "iOS ve Android mobil uygulamalar",
      "Responsive ve erişilebilir kullanıcı arayüzleri",
    ],
    tech: ["Angular", "NgRx", "RxJS", "Material UI", "SCSS", "Highcharts", "Ionic", "JWT"],
    professional: true,
  },
  {
    id: 3,
    title: "Cross-Platform Mobil Uygulama",
    category: "Mobil Uygulama",
    role: "Frontend & Mobile Developer",
    duration: "2023 - Devam ediyor",
    description:
      "Lokasyon bazlı servisler ve gerçek zamanlı veri sağlayan mobil platform. Harita entegrasyonu, veri görselleştirme ve offline çalışma özellikleriyle kullanıcı deneyimi sunar.",
    highlights: [
      "React ve Material-UI ile web yönetim paneli",
      "DataGrid bileşenleriyle gelişmiş veri yönetimi",
      "iOS ve Android için native performans",
      "Global state yönetimi ve offline destek",
      "App Store ve Google Play yayınına hazır",
    ],
    tech: ["React Native", "React", "Material UI", "Redux Toolkit", "Xcode", "Android Studio"],
    professional: true,
  },
  {
    id: 4,
    title: "Emlak Yönetim Platformu",
    category: "Web Platformu",
    role: "Frontend Developer",
    duration: "2023 - Devam ediyor",
    description:
      "Emlak yönetimi ve kullanıcı portalı sunan kapsamlı web platformu. Kurumsal tanıtım sitesi ve interaktif kullanıcı paneli içerir.",
    highlights: [
      "Modern ve performanslı kurumsal web sitesi",
      "React ve Next.js ile kullanıcı yönetim sistemi",
      "İnteraktif veri görselleştirme ve dashboardlar",
      "Animasyonlu kullanıcı rehberi ve onboarding",
      "Responsive ve mobile-first tasarım",
    ],
    tech: ["React", "Next.js", "WordPress", "Axios", "Redux", "Chart.js"],
    professional: true,
  },
  {
    id: 5,
    title: "Kişisel Portfolio Web Sitesi",
    category: "Web Uygulaması",
    role: "Frontend Developer",
    duration: "2024",
    description:
      "Modern ve responsive kişisel portfolio web sitesi. Projelerimi, yeteneklerimi ve profesyonel deneyimimi sergileyen, kullanıcı dostu arayüze sahip platform.",
    highlights: [
      "Temiz ve modern UI/UX tasarımı",
      "Akıcı animasyonlar ve geçişler",
      "SEO optimizasyonu ve hızlı yükleme",
      "Tam responsive tasarım",
    ],
    tech: ["React", "Vite", "CSS3"],
    professional: false,
    github: "https://github.com/SedanurBabir/portfolio_",
    live: "https://sedababir.com.tr",
  },
];
