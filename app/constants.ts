export const EXPERIENCES = [
  {
    title: `Fullstack Developer`,
    company: `PT. Cerebrum Edukanesia Nusantara`,
    period: `April 2024 - July 2024`,
    location: `Bandung, Indonesia`,
    type: `Internship`,
    current: false,
    responsibilities: [
      `mengembangkan aplikasi web peminjaman buku yang 
komprehensif menggunakan Laravel dan Livewire v3, meningkatkan efisiensi 
operasional`,
      `Merancang dan mengimplementasikan fungsionalitas inti seperti pencarian 
real-time, manajemen peminjaman berbasis pengguna, dan sistem notifikasi 
otomatis, meningkatkan pengalaman pengguna dan mengurangi manual 
effort`,
      `Berkontribusi aktif dalam sprint Agile, menerapkan praktik kode bersih, 
melakukan pengujian ekstensif, dan mengoptimalkan performa aplikasi untuk 
skalabilitas dan responsivitas`,
    ],
  },
  {
    title: `Fullstack Developer`,
    company: `PT. Bina Potensia Indonesia`,
    period: `January 2025 - March 2025`,
    location: `Bandung, Indonesia`,
    type: `Project Based`,
    current: false,
    responsibilities: [
      `Merancang dan mengembangkan sistem evaluasi kinerja karyawan dari nol menggunakan Laravel, dengan implementasi akses multi-peran (admin, evaluator, karyawan) dan fungsionalitas ekspor PDF dinamis.`,
      `Mengembangkan algoritma penilaian khusus yang meningkatkan efisiensi proses evaluasi HR sebesar 25%, menghemat sekitar 10 jam kerja HR per siklus evaluasi`,
    ],
  },
  {
    title: `Machine Learning Engineer Intern`,
    company: ` PT. Amati Karya Indonesia`,
    period: `Oct 2024 - December 2024`,
    location: `Jakarta, Indonesia`,
    type: `Internship`,
    current: false,
    responsibilities: [
      `Membangun sistem rekomendasi ekowisata berbasis lokasi menggunakan TensorFlow, yang meningkatkan relevansi rekomendasi sebesar 20% dan berkontribusi pada peningkatan user satisfaction di fase MVP.`,
      `Berhasil berkolaborasi lintas tim (Android, Cloud, dan ML) untuk mengirimkan 80% MVP dalam 1 bulan sesuai timeline proyek.`,
      `Terpilih sebagai salah satu dari Top 22 Capstone Teams dari 50 proyek dan mencapai skor final 93/100.`,
    ],
  },
  {
    title: `Data Analyst`,
    company: `Universitas Sangga Buana`,
    period: `July 2024 - December 2024`,
    location: `Bandung, Indonesia`,
    type: `Internship`,
    current: false,
    responsibilities: [
      `Menerapkan algoritma clustering K-Means dan DBSCAN untuk menganalisis penyebaran penyakit mata pada dataset lebih dari 10.000 catatan pasien, mengidentifikasi 3 klaster area berisiko tinggi untuk intervensi kesehatan.`,
      `Membangun dashboard interaktif berbasis Flask dengan filter, visualisasi, dan choropleth maps , yang digunakan oleh Dinas Kesehatan Kabupaten Pangandaran untuk mempercepat pengambilan keputusan strategis hingga 40%.`,
      `Mempresentasikan insight data kepada perwakilan Dinas Kesehatan Kabupaten Pangandaran, mendukung perumusan kebijakan kesehatan masyarakat.`,
    ],
  },
];

export const PROJECTS = [
  {
    title: 'NER Model for Indonesian Medical Consultation Texts',
    description:
      'An NLP project focused on extracting medical entities from patient-doctor consultation transcripts in Bahasa Indonesia. Leveraging IndoBERT and manually annotated data, the model identifies relevant symptom-related entities to aid medical data processing.',
    images: ['/ner1.jpg', '/ner2.jpg'],
    techStack: ['React', 'Tailwind', 'Flask', 'Python', 'HuggingFace','FastAPI','Pytorch'],
    liveDemo: '#',
    sourceCode: 'https://huggingface.co/Ferian22/IdobertNerMedical',
    carouselDelay: 5300,
  },
  {
    title: 'Compass360: Multi-Rater Feedback System',
    description:
      'A 360-degree employee assessment system designed to collect performance evaluations from peers, supervisors, subordinates, and self-assessment. The system generates insights such as Level of Achievement (LoA), competency gaps, and other key performance indicators to support individual and organizational development.',
    images: [
      '/bp1.jpg',
      '/bp2.jpg',
      '/bp3.jpg',
    ],
    techStack: [
      'Laravel',
      'Mysql',
      'Javascript',
      'Bootstrap Css',
    ],
    liveDemo: 'https://360degree-binapotensiaindonesia.com/',
    sourceCode: 'https://github.com/mrizkyn/ams360',
    carouselDelay: 4500, // 3 seconds
  },
  {
    title: 'Cerebook – Online Book Rental & Store Platform',
    description:
      'Cerebook is a dynamic and interactive web application that allows users to rent or purchase books online. The platform offers real-time stock updates, responsive UI, and seamless transactions to enhance the digital reading experience.',
    images: [
      '/cere5.jpg',
      '/bk1.jpg',
      '/cere6.jpg',
    ],
    techStack: [
      'Livewire',
      'Mysql',
      'Javascript',
      'Tailwind Css',
      'Flux UI',
      'PWA',
      'Payment Gateway',
    ],
    liveDemo: 'https://github.com/ardiansa22/cerebook/',
    sourceCode: 'https://matapangandaran.my.id/',
    carouselDelay: 4500, // 3 seconds
  },
  {
    title: 'EduTourism Village Platform',
    description:
      'A tourism web application focused on promoting educational village tourism. Designed for visitors who seek not only leisure but also learning experiences — including academic research, field studies, and community service (KKN). The platform helps connect researchers, students, and local tourism managers through structured data, service listings, and collaboration features.',
    images: ['/amatrip2.jpg', '/amatrip1.jpg', '/amatrip3.jpg'],
    techStack: ['Laravel', 'Mysql', 'Javascript', 'Bootstrap Css', 'PWA','Payment Gateway'],
    liveDemo: 'https://amatrip.my.id/',
    sourceCode: '#',
    carouselDelay: 6000, // 6 seconds
  },
  {
    title: 'Pangandaran Eye Disease Surveillance System',
    description:
      'A geospatial dashboard for tracking eye disease cases in Pangandaran, Indonesia. The system leverages K-Means and DBSCAN algorithms to cluster affected regions and provides visualization tools for health officials to monitor trends and prioritize intervention areas.',
    images: ['/mata1.jpg', '/mata2.jpg'],
    techStack: ['Flask', 'Python', 'Plotly.js','Streamlit'],
    liveDemo: 'https://matapangandaran.com',
    carouselDelay: 5500, // 3 seconds
  },
  {
    title: 'So Medika Electronic Medical Record System',
    description:
      'A custom Electronic Medical Record (EMR) system developed for So Medika Clinic, fully integrated with Indonesia`s SATU SEHAT platform. This web-based system supports patient data management, clinical documentation, and ensures standardized data interoperability with national health systems.',
    images: ['/resonance-banner.png', '/resonance-banner-1.png'],
    techStack: ['Laravel', 'Mysql', 'Javascript', 'Bootstrap Css'],
    liveDemo: '#',
    carouselDelay: 4000, // 4 seconds
  },
  {
    title: 'Weather Data Analysis Dashboard ',
    description:
      'A weather data analysis project built as part of the Bangkit Academy final assignment on Dicoding. The dashboard visualizes historical weather patterns using Python and Streamlit, highlighting temperature, humidity, wind speed, and their correlation with bike rentals. It demonstrates skills in data cleaning, visualization, and insight generation.',
    images: ['/bike1.jpg', '/bike2.jpg'],
    techStack: ['Streamlit', 'Python','Pandas','Matplotlib'],
    sourceCode: 'https://github.com/ardiansa22/bike_rentals_monitoring',
    liveDemo: 'https://matapangandaran-com.streamlit.app/',
    carouselDelay: 5000, // 5 seconds
  }
];
