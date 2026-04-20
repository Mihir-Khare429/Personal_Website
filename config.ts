export const siteConfig = {
  name: "Mihir Khare",
  title: "Software Engineer • NYU MS CE '26",
  description:
    "Full-stack software engineer building production-grade data, API, and ML platforms across AWS, Spark, and React. MS in Computer Engineering at NYU Tandon (May 2026).",
  accentColor: "#1d4ed8",
  social: {
    email: "mkhare429@gmail.com",
    linkedin: "https://www.linkedin.com/in/mihir-khare/",
    github: "https://github.com/Mihir-Khare429",
  },
  aboutMe:
    "Full-stack software engineer with 2+ years shipping production systems at McKinsey MIO and Cimpress. At McKinsey Investment Office, I architected MIO's first serverless trade-ops data lake on AWS Glue + Apache Iceberg + Athena — ingesting ~2.1M rows/day and cutting the TradeOps retrieval cycle from 14 min → 6 min (58% faster). At Cimpress, I drove the migration of the pricing platform from a .NET monolith to Node.js microservices sustaining 150K+ RPM across 3 AWS regions with 25% lower end-to-end latency. Currently completing my MS in Computer Engineering at NYU Tandon (May 2026), focused on distributed systems, cloud-native architecture, and ML platforms.",
  skills: [
    "Python",
    "TypeScript",
    "JavaScript (ES6+)",
    "Java",
    "C++",
    "SQL",
    "Node.js",
    "React",
    "Next.js",
    "FastAPI",
    ".NET Core",
    "GraphQL",
    "gRPC",
    "REST APIs",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Apache Spark",
    "Apache Kafka",
    "Apache Iceberg",
    "PostgreSQL",
    "MongoDB",
    "DynamoDB",
    "Redis",
    "CI/CD",
    "ArgoCD",
    "RAG / LLM Systems",
  ],
  experience: [
    {
      company: "McKinsey Investment Office (MIO Partners)",
      title: "Software Engineer Intern",
      dateRange: "May 2025 – August 2025",
      bullets: [
        "Architected MIO's first serverless trade-ops data lake on AWS Glue (Apache Spark 3.4), Apache Iceberg, and Athena — ingesting ~2.1M trade rows/day and cutting the TradeOps retrieval cycle from 14 min → 6 min (58% faster), saving an estimated 120 analyst-hours per quarter.",
        "Rebuilt the OTC trade-extract pipeline on Parquet + Presto with a 16-worker parallel scan, dropping p95 fetch latency 70% (110s → 33s) and introducing Iceberg schema evolution so analysts add trade attributes without a redeploy.",
        "Shipped IAM-scoped FastAPI endpoints and PySpark ETL DAGs that deprecated ~9K LOC of ad-hoc Python used by 40+ TradeOps analysts, cutting data-pull support tickets by 60%.",
        "Caught 3 pre-production race conditions in the Iceberg commit path via a concurrent-write load test and authored the Q4 migration playbook adopted by 2 downstream quant teams.",
      ],
    },
    {
      company: "Cimpress Technologies Pvt Ltd",
      title: "Software Engineer",
      dateRange: "August 2022 – August 2024",
      bullets: [
        "Drove the migration of the pricing platform from a .NET monolith to Node.js microservices with a Postgres read-replica fan-out, cutting p95 read latency 30% while sustaining 150K+ RPM across 3 AWS regions.",
        "Engineered full-stack pricing workflows with React, GraphQL, and Express — achieving a 25% reduction in end-to-end latency and consistent page loads across 3 global regions.",
        "Cut pricing-service deployment time 40% by containerizing .NET and Node services on EKS with blue-green rollouts, enabling real-time publishing of live prices during peak sales.",
        "Refactored Redux state and GraphQL schema alongside 4 product designers and 2 accessibility engineers on dashboards serving 150K+ RPM — lifting Lighthouse accessibility scores from 78 → 96 and cutting client-side state bugs 35% (Sentry).",
        "Championed code reviews focused on scalability and security across Python/Node.js services, reducing production incidents by 20%.",
      ],
    },
    {
      company: "Apple Developers Group (ADG-VIT)",
      title: "Technical Advisor",
      dateRange: "July 2018 – May 2022",
      bullets: [
        "Ran the 90-student web-development chapter across two cohorts — designed a 14-workshop curriculum, mentored 6 project teams, and coached 2 winning VIT Hackathon teams (top 5%). 4 mentee apps shipped to TestFlight.",
      ],
    },
    {
      company: "Softech Applutions Pvt Ltd",
      title: "Backend Developer Intern",
      dateRange: "June 2020 – November 2020",
      bullets: [
        "Owned the backend for Trailer 2 You (Node.js + Express + MongoDB), shipping geospatial booking, payments, and live tracking to 3,500 Australian users in 6 months while sustaining 99.7% uptime on a t3.medium cluster.",
        "Cut booking-API p95 latency 20% by introducing compound indexes and migrating N+1 Mongoose queries to aggregation pipelines.",
        "Configured AWS Elastic Load Balancers and Auto Scaling Groups with CloudWatch monitoring to sustain request rates exceeding 10k per minute without significant lag or failures.",
        "Shipped the end-to-end booking flow (React + Socket.io + Node/Express + Google Maps) — the app's primary conversion surface — enabling 11K+ trips in the first 6 months post-launch.",
      ],
    },
  ],
  projects: [
    {
      name: "Intelligent Multimedia Processing (IMP) for Enterprises",
      description:
        "End-to-end RAG system that indexes enterprise multimedia and serves natural-language search plus auto-generated meeting minutes. Built a multimodal pipeline — Whisper (transcription) + Sentence Transformers (semantic search) + Flan-T5-Large (generation) — served via FastAPI, achieving <200ms embedding latency through model quantization and distributed Ray training. Automated CI/CD and continuous-training workflows with Terraform, Ansible, and ArgoCD.",
      link: "https://github.com/Mihir-Khare429",
      skills: [
        "Python",
        "FastAPI",
        "RAG",
        "Ray",
        "Whisper",
        "Sentence-Transformers",
        "Flan-T5",
        "Terraform",
        "ArgoCD",
      ],
    },
    {
      name: "Trailer 2 You (T2Y)",
      description:
        "Architected the backend for an Uber-style trailer-booking app using Node.js, Express, and MongoDB. Engineered the full booking workflow from React UI to backend, integrating Socket.io for live map updates and Google Maps API — reducing booking abandonment by 8% and serving 3,500 Australian users at 99.7% uptime.",
      link: "https://trailer2you.com.au/about/",
      skills: ["Node.js", "Express", "MongoDB", "React", "Socket.io", "AWS"],
    },
    {
      name: "Entertainment By Xpressions (EBX)",
      description:
        "Automated music-selection app powered by real-time facial expression analysis. Built the React frontend and co-developed the mood-to-playlist mapping algorithm, streamlining user engagement through interactive ML features.",
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
        "Focus on distributed systems, cloud-native architecture, and ML platforms.",
        "Relevant coursework: Distributed Systems, Cloud Computing, Machine Learning Systems, Computer Architecture, Algorithms.",
      ],
    },
    {
      school: "Vellore Institute of Technology",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      dateRange: "July 2018 - May 2022",
      achievements: [
        "Concentration in full-stack and backend engineering.",
        "Technical Advisor, Apple Developers Group — VIT (90+ students, 14 workshops).",
      ],
    },
  ],
};
