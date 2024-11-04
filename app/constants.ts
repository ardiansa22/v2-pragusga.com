export const EXPERIENCES = [
  {
    title: `Cloud Platform Engineer`,
    company: `Telkomsel`,
    period: `February 2024 - June 2024`,
    location: `Jakarta, Indonesia`,
    type: `Internship`,
    current: false,
    responsibilities: [
      `Automated data extraction from Datadog, saving it to a database for AI-based infrastructure analysis, enhancing data processing efficiency.`,
      `Created AWS EC2 module using Terraform, enabling consistent and automated infrastructure provisioning across environments.`,
      `Built a platform for managing AWS account permissions, simplifying permission management and enhancing security compliance for cloud resources.`,
    ],
  },
  {
    title: `Software Engineer`,
    company: `Tokopedia`,
    period: `September 2023 - December 2023`,
    location: `Jakarta, Indonesia`,
    type: `Internship`,
    current: false,
    responsibilities: [
      `Optimized prompt engineering for AI chatbot, implementing the HYDE method to enhance response relevance and improve overall user interactions.`,
      `Refactored existing codebase, improving code readability and maintainability, making it easier for team members to collaborate and onboard.`,
      `Developed and implemented comprehensive unit tests, ensuring higher code quality and stability, and reducing potential issues in production.`,
    ],
  },
  {
    title: `Software Engineer`,
    company: `Dana Indonesia`,
    period: `May 2023 - July 2023`,
    location: `Jakarta, Indonesia`,
    type: `Apprenticeships`,
    current: false,
    responsibilities: [
      `Collaborated on Dana's fraud detection system, unifying frontend, backend, and cloud technologies to bolster 
financial security.`,
      `Enhanced fraud detection capabilities by integrating machine learning algorithms, resulting in a 40% reduction in 
false positives and a 20% increase in the accuracy of fraud detection.`,
      `Streamlined the file analysis process through cloud functions, reducing the processing time for uploaded CSV 
files by 50%, thus enabling quicker fraud prediction.`,
    ],
  },
  {
    title: `Backend Engineer`,
    company: `Nomura Research Institute`,
    period: `August 2022 - May 2023`,
    location: `Jakarta, Indonesia`,
    type: `Internship`,
    current: false,
    responsibilities: [
      `Utilized modern technologies including CQRS, event-driven development, and event store to build robust and 
scalable backend systems, ensuring high performance and maintainability.`,
      `Simplified the recruitment process by developing an automated system from initial testing and CV screening to 
interview stages, resulting in a more efficient and seamless hiring process.`,
      `Engineered an employee management system with features such as attendance tracking, leave requests, and absence 
authorization, improving overall operational efficiency.`,
    ],
  },
];

export const PROJECTS = [
  {
    title: 'AI Resume Reviewer',
    description:
      'Get instant, professional feedback on your resume with AI-powered analysis',
    images: [
      '/rev0.jpeg',
      '/rev1.jpeg',
      '/rev2.jpeg',
      '/rev5.jpeg',
      '/rev3.jpeg',
      '/rev4.jpeg',
    ],
    techStack: [
      'Google Vertex',
      'Node.js',
      'Typescript',
      'React',
      'Next.js',
      'Tailwind CSS',
    ],
    liveDemo: 'https://resume-reviewer.pragusga.com',
    sourceCode: 'https://github.com/pragusga25/ai-resume-reviewer',
    carouselDelay: 3800, // 3 seconds
  },
  {
    title: 'Adhan',
    description:
      'Adhan is a web app visualizing the continuous cycle of the Islamic call to prayer across global time zones.',
    images: ['/adhand.jpeg', '/adhan3.jpeg', '/adhanw.jpeg', '/adhan4.jpeg'],
    techStack: ['Typescript', 'React', 'Next.js', 'Tailwind CSS', 'Three.js'],
    liveDemo: 'https://adhan.pragusga.com',
    sourceCode: 'https://github.com/pragusga25/adhan',
    carouselDelay: 4400, // 6 seconds
  },
  {
    title: 'Image Watermarker',
    description:
      'Easily create custom watermarks for your images. Adjust text, size, position, and style to personalize your watermark.',
    images: ['/wm-banner-1.png', '/wm-banner-2.png', '/wm-banner.png'],
    techStack: ['Typescript', 'React', 'Next.js', 'Tailwind CSS'],
    liveDemo: 'https://wm.pragusga.com',
    carouselDelay: 3000, // 3 seconds
  },
  {
    title: 'Resonance',
    description:
      'Enjoy real-time canvas animations, mood-responsive wave patterns, color therapy, and binaural beat visualization.',
    images: ['/resonance-banner.png', '/resonance-banner-1.png'],
    techStack: ['Typescript', 'React', 'Next.js', 'Tailwind CSS'],
    liveDemo: 'https://resonance.pragusga.com',
    carouselDelay: 4000, // 4 seconds
  },
  {
    title: 'Snake Game',
    description:
      'Play the classic Snake game. Control the snake to eat food and grow longer without hitting the walls or itself.',
    images: ['/snake.jpeg', '/snake2.jpeg'],
    techStack: ['Typescript', 'React', 'Next.js', 'Tailwind CSS'],
    sourceCode: 'https://github.com/pragusga25/snake',
    liveDemo: 'https://snake.pragusga.com',
    carouselDelay: 5000, // 5 seconds
  },
  {
    title: 'Earthquake Early Warning System (EEWS)',
    description:
      'The EEWS project developed a scalable, event-driven system using deep learning and Apache Kafka for real-time earthquake detection.',
    images: ['/eews.jpeg', '/eews1.jpeg'],
    techStack: [
      'Python',
      'Go',
      'Kafka',
      'Docker',
      'MongoDB',
      'Prometheus',
      'Grafana',
    ],
    carouselDelay: 6000, // 6 seconds
  },
  {
    title: 'Quiz Islam',
    description: 'Test your knowledge of Islam with this quiz app.',
    images: ['/quiz-islam1.jpeg', '/quiz-islam2.jpeg', '/quiz-islam3.jpeg'],
    techStack: [
      'Typescript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Prisma',
      'MongoDB',
    ],
    liveDemo: 'https://quiz-islam.pragusga.com',
    carouselDelay: 4700, // 6 seconds
  },
  {
    title: 'CariKajian',
    description: 'Search for Islamic lectures and events in Indonesia.',
    images: ['/carikajian.png'],
    techStack: [
      'Typescript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
    ],
    liveDemo: 'https://carikajian.com',
    carouselDelay: 9000, // 6 seconds
  },

  {
    title: 'Sudoku',
    description:
      'Play Sudoku online. Choose from easy, medium, and hard difficulty levels.',
    images: ['/sudoku.png', '/sudoku2.jpeg'],
    techStack: ['Typescript', 'React', 'Next.js', 'Tailwind CSS'],
    sourceCode: 'https://github.com/pragusga25/sudoku',
    liveDemo: 'https://sudoku.pragusga.com',
    carouselDelay: 3500, // 3.5 seconds
  },
  {
    title: 'Tic Tac Toe',
    description: 'Play Tic Tac Toe against the computer. Try to win!',
    images: ['/tictactoe1.jpeg', '/tictactoe.jpeg'],
    techStack: ['Typescript', 'React', 'Next.js', 'Tailwind CSS'],
    sourceCode: 'https://github.com/pragusga25/tictactoe',
    liveDemo: 'https://tictactoe.pragusga.com',
    carouselDelay: 4500, // 4.5 seconds
  },

  {
    title: 'CryptoBot',
    description:
      'CryptoBot is an AI chatbot that specializes in cryptocurrency topics. Ask CryptoBot about the latest prices and can send you email!',
    images: ['/cryptobot.jpeg'],
    techStack: [
      'Typescript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Google Vertex',
    ],
    liveDemo: 'https://cryptobot.pragusga.com',
    carouselDelay: 3300, // 6 seconds
  },
];
