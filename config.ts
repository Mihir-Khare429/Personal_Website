export const siteConfig = {
  name: "Mihir Khare",
  title: "MSCE Student at NYU",
  description:
    "Master's student in Computer Engineering at NYU Tandon focused on production-grade systems at the intersection of machine learning, software development, and cloud.",
  accentColor: "#1d4ed8",
  social: {
    email: "mkhare429@gmail.com",
    linkedin: "https://www.linkedin.com/in/mihir-khare/",
    github: "https://github.com/Mihir-Khare429",
  },
  aboutMe:
    "I’m a Master’s student in Computer Engineering at NYU Tandon, building production-grade systems at the intersection of Machine Learning, Software Development, and Cloud. Most recently at McKinsey & Company (MIO Partners), I architected a serverless data lake using AWS Glue (Apache Spark), Iceberg, and Athena that cut an Excel-extract workflow by 58% and reduced data fetch latency by 70%. Previously at Cimpress India, I migrated to a high-performance pricing architecture by restructuring .NET and Node.js service-level code, optimizing APIs to sustain 150k+ RPM and improving end-to-end latency by 25%.",
  skills: [
    "Python",
    "JavaScript (ES6+)",
    "TypeScript",
    "C++",
    "Node.js",
    "React",
    "Next.js",
    "Express",
    ".NET Core",
    "GraphQL",
    "AWS",
    "Docker",
    "Kubernetes",
    "Apache Spark",
    "Terraform",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
  ],
  experience: [
    {
      company: "McKinsey Investment Office (MIO Partners)",
      title: "Software Engineer Intern",
      dateRange: "May 2025 – August 2025",
      bullets: [
        "Architected and implemented a serverless data lake solution using AWS Glue (Apache Spark), Iceberg, and Athena, resulting in a 58% reduction in the average time taken to run the TradeOps data retrieval cycle.",
        "Redesigned the Trades OT extract pipeline using Parquet columnar storage and Presto parallelized execution, decreasing data fetch latency by 70% while enabling dynamic schema adaptability for real-time field additions.",
      ],
    },
    {
      company: "Cimpress Technologies Pvt Ltd",
      title: "Software Engineer",
      dateRange: "August 2022 – August 2024",
      bullets: [
        "Led the migration to a high-performance pricing architecture by restructuring .NET and Node.js service-level code, implementing new functional features while optimizing database I/O, reducing read/write latency by 30% and supporting 150k+ requests per minute.",
        "Engineered full-stack pricing workflows using React, GraphQL, and Express, achieving a 25% reduction in end-to-end latency and ensuring consistent page loads across 3 global regions.",
        "Developed and rolled out business-critical pricing tools utilizing AWS, Docker, and Kubernetes to streamline infrastructure and cut deployment times by 40%.",
        "Collaborated with product designers to refine component state logic and API contracts, enhancing frontend reliability and accessibility.",
        "Championed code reviews focusing on scalability/security in Python/Node.js, reducing production incidents by 20%.",
      ],
    },
    {
      company: "Apple Developers Group (ADG-VIT)",
      title: "Technical Advisor",
      dateRange: "July 2018 – May 2022",
      bullets: [
        "Directed 90+ students in the web development domain, overseeing end-to-end project lifecycles from initial planning to deployment.",
      ],
    },
    {
      company: "Softech Applutions Pvt Ltd",
      title: "Backend Developer Intern",
      dateRange: "June 2020 – November 2020",
      bullets: [
        "Spearheaded backend development for Trailer 2 You, a trailer-booking app, utilizing Node.js, Express, and MongoDB.",
        "Optimized performance by implementing efficient database structures, reducing data retrieval times by 20%.",
        "Configured AWS Elastic Load Balancers and Auto Scaling Groups to sustain requests exceeding 10k per minute.",
        "Engineered a complete booking process from React UI to Node.js backend, integrating Socket.io and Google Maps API.",
      ],
    },
  ],
  projects: [
    {
      name: "Intelligent Multimedia Processing (IMP) for Enterprises",
      description:
        "Designed a comprehensive ML system automating extraction and indexing of enterprise multimedia data. Integrated a multimodal pipeline using Whisper for transcription, Sentence Transformers for semantic search, and Flan-T5-Large for RAG. Optimized deployment via Ray and quantization to achieve <200ms embedding latency.",
      link: "https://github.com/Mihir-Khare429",
      skills: ["Python", "Machine Learning", "Ray", "Whisper", "BERT", "Cloud"],
    },
    {
      name: "Trailer 2 You (T2Y)",
      description:
        "Architected the backend for a trailer-booking application (Uber-style) using Node.js, Express, and MongoDB. Engineered the full booking workflow from React UI to backend, integrating Socket.io for live map updates and Google Maps API to lower booking abandonment by 8%.",
      link: "https://trailer2you.com.au/about/",
      skills: ["Node.js", "Express", "MongoDB", "React", "Socket.io"],
    },
    {
      name: "Entertainment By Xpressions (EBX)",
      description:
        "Developed an automated music selection application based on real-time facial expression analysis. Built the entire UI and participated in the development of algorithms to map moods to playlists, streamlining user engagement through interactive ML features.",
      link: "https://github.com/Mihir-Khare429/EBX-CapstoneProject-Frontend",
      skills: ["Machine Learning", "Computer Vision", "React", "Emotion Recognition"],
    },
  ],
  education: [
    {
      school: "New York University",
      degree: "Master's in Computer Engineering",
      dateRange: "Sept 2024 - May 2026 (Expected)",
      achievements: [
        "Master's candidate at NYU Tandon focusing on Cloud-native systems and ML-driven applications.",
      ],
    },
    {
      school: "Vellore Institute of Technology",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      dateRange: "July 2018 - May 2022",
      achievements: [
        "Graduated with a focus on full-stack and backend engineering.",
      ],
    },
  ],
};
