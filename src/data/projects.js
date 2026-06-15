const projects = [
  // ── New Resume Projects ──────────────────────────────────────────────
  {
    title: "DevSecOps CI/CD Pipeline for Food Delivery Platform",
    tech: "Jenkins, Docker, Kubernetes, AWS (EKS, ECR), Prometheus, Grafana, Argo CD",
    date: " Feb 2026",
    desc1:
      "⚙️ Engineered fully automated CI/CD pipeline leveraging Jenkins, Docker, and Kubernetes (EKS) for a food delivery platform, enabling zero-manual deployments and faster release cycles with automated rollback.",
    desc2:
      "📊 Delivered scalable microservices architecture with auto-scaling capabilities, real-time monitoring dashboards using Prometheus and Grafana, and high availability during peak traffic loads.",
    desc3:
      "🚀 Implemented Argo CD for GitOps-based continuous delivery, ensuring declarative infrastructure management and seamless deployment orchestration across environments.",
    bgColor: "bg-[#1a1a2e]",
    github: "https://github.com/Deepanshu-Sehgal/DevOps-Project-Zomato",
    live: "",
    image: "/projects/devops_pipeline.png",
    pipeline: [
      { name: "Clean WS", icon: "Trash2", color: "text-gray-400" },
      { name: "Git Checkout", icon: "GitBranch", color: "text-orange-400" },
      { name: "SonarQube", icon: "CheckCircle", color: "text-blue-400" },
      { name: "Quality Gate", icon: "ShieldCheck", color: "text-green-400" },
      { name: "NPM Install", icon: "Package", color: "text-red-400" },
      { name: "OWASP Scan", icon: "ShieldAlert", color: "text-rose-500" },
      { name: "Trivy Scan", icon: "Search", color: "text-teal-400" },
      { name: "Docker Build", icon: "Box", color: "text-blue-500" },
      { name: "Push to Registry", icon: "UploadCloud", color: "text-sky-400" },
      { name: "Docker Scout", icon: "Radar", color: "text-indigo-400" },
      { name: "Deploy Container", icon: "Server", color: "text-emerald-400" }
    ]
  },
  {
    title: "DevOps CI/CD Pipeline for Online Ticketing Platform",
    tech: "Jenkins, Docker, Kubernetes (EKS), Ansible, AWS (EKS, ECR), Prometheus, Grafana",
    date: "Aug 2025",
    desc1:
      "🚀 Migrated a monolithic movie ticketing application into a scalable microservices architecture and developed automated CI/CD pipelines using Jenkins.",
    desc2:
      "⚙️ Containerized services using Docker and orchestrated deployments on Kubernetes (AWS EKS), automating infrastructure configuration with Ansible.",
    desc3:
      "📊 Implemented monitoring and alerting with Prometheus and Grafana, and configured deployment rollback mechanisms to minimize downtime.",
    bgColor: "bg-[#2b0c16]",
    github: "",
    live: "",
    pipeline: [
      { name: "Git Checkout", icon: "GitBranch", color: "text-orange-400" },
      { name: "Jenkins Build", icon: "Package", color: "text-blue-400" },
      { name: "Docker Build", icon: "Box", color: "text-blue-500" },
      { name: "Push to ECR", icon: "UploadCloud", color: "text-sky-400" },
      { name: "Ansible Provision", icon: "TerminalSquare", color: "text-indigo-400" },
      { name: "Deploy to EKS", icon: "Server", color: "text-emerald-400" },
      { name: "Grafana Verify", icon: "Activity", color: "text-rose-400" }
    ]
  },
  {
    title: "AWS 3-Tier Web Application Deployment",
    tech: "AWS S3, EC2, RDS (MySQL), VPC, IAM, Route 53, Security Groups",
    date: "July 2025",
    desc1:
      "☁️ Designed and deployed a secure 3-tier architecture consisting of frontend, backend, and database layers on AWS, ensuring high availability.",
    desc2:
      "🔒 Configured VPC networking with public and private subnets, established Security Groups, and implemented IAM roles for secure resource access.",
    desc3:
      "🗄️ Deployed backend services on EC2, managed databases with RDS MySQL, and configured Route 53 for reliable domain management.",
    bgColor: "bg-[#0b1f38]",
    github: "",
    live: "",
    image: "/projects/aws_3tier.png",
    pipeline: [
      { name: "VPC & Subnets", icon: "Network", color: "text-purple-400" },
      { name: "Security Groups", icon: "Shield", color: "text-rose-400" },
      { name: "RDS Provision", icon: "Database", color: "text-blue-400" },
      { name: "EC2 Backend", icon: "Server", color: "text-orange-400" },
      { name: "S3 Frontend", icon: "Cloud", color: "text-sky-400" },
      { name: "Route 53 DNS", icon: "Globe", color: "text-indigo-400" }
    ]
  },
  {
    title: "AI Return Assistant (GenAI + FastAPI)",
    tech: "Python, FastAPI, OpenAI API, LangChain, REST APIs, Prompt Engineering",
    date: "Jan 2026",
    desc1:
      "🤖 Built an AI-powered return decision system using OpenAI APIs to automate eCommerce return workflows, reducing manual intervention in return approvals.",
    desc2:
      "🔗 Leveraged LangChain for prompt engineering and chaining, enabling intelligent multi-step reasoning for complex return scenarios.",
    desc3:
      "⚡ Exposed scalable REST APIs via FastAPI with structured input validation, enabling seamless integration with existing eCommerce platforms.",
    bgColor: "bg-[#0f3460]",
    github: "https://github.com/Deepanshu-Sehgal/Ai-return-Assistant",
    live: "",
  },
  {
    title: "AI-Powered Pre-Leave Approval System",
    tech: "Deep Learning, Python, Twilio, FastAPI",
    date: "Dec 2025",
    desc1:
      "🧠 Built an AI-based leave approval system using Deep Learning and Python, automating policy checks and pre-approval scoring for HR departments.",
    desc2:
      "📬 Integrated Twilio for real-time SMS/voice notifications, alerting employees and managers instantly on approval decisions.",
    desc3:
      "📈 Reduced manual HR tasks and improved efficiency by automating the entire leave request evaluation pipeline.",
    bgColor: "bg-[#6B4226]",
    github: "https://github.com/Deepanshu-Sehgal/Leave-Approval-Project",
    live: "",
  },
  {
    title: "StudyNotion: Interactive Learning Management System",
    tech: "MongoDB, Express.js, React.js, Node.js, Cloudinary, Razorpay, JWT",
    date: "Nov 2024",
    desc1:
      "📚 Built a full-stack LMS using MERN stack with JWT-based authentication and role-based access control, enabling secure and structured access for students and instructors.",
    desc2:
      "💳 Integrated Razorpay APIs for end-to-end payment processing and Cloudinary for scalable media storage and delivery, resulting in a seamless course purchase and content streaming experience.",
    desc3:
      "🌍 Empowered instructors to host content and reach global audiences, with support for role-based access and secure JWT authentication.",
    bgColor: "bg-[#111B26]",
    github: "https://github.com/Deepanshu-Sehgal/StudyNotion-MERN-Mega_Project",
    live: "https://study-notion-ashy-zeta.vercel.app/",
    image: "/projects/study_notion.png",
  },
  {
    title: "UberApp Clone: Cab Riding Backend System",
    tech: "Java, Spring Boot, Swagger UI, RESTful APIs, Jenkins, Docker, Microservices, AWS",
    date: "April 2024",
    desc1:
      "🚖 Architected a microservices-based backend using Java and Spring Boot to handle real-time cab booking, driver allocation, and ride management across independently deployable services.",
    desc2:
      "📄 Designed and documented RESTful APIs with versioning and Swagger UI, then automated deployment to AWS using Jenkins and Docker CI/CD pipelines, eliminating manual releases.",
    desc3:
      "🔁 Built secure RESTful APIs for user onboarding, ride booking, fare calculation, and location-based ride allocation.",
    bgColor: "bg-[#147536]",
    github: "https://github.com/Deepanshu-Sehgal/UberApp-SpringBoot",
    live: "",
  },

  // ── Existing Projects ────────────────────────────────────────────────
  {
    title: "Face Mask Detection in Hospital Monitoring System",
    tech: "YOLOv8, FastAPI, Docker, Twilio, ResNet50",
    date: "Jan 2025",
    desc1:
      "⚙️ Engineered a real-time face mask compliance monitoring system using YOLOv8 and ResNet50, achieving high-accuracy detection in dynamic hospital environments.",
    desc2:
      "🚀 Deployed with FastAPI and Docker for robust, scalable backend operations, ensuring seamless performance even under high load.",
    desc3:
      "📢 Enabled Twilio-based real-time alerts (SMS/voice) for non-compliance, supporting hospital authorities with automated compliance reporting and enhanced safety protocols.",
    bgColor: "bg-red-950",
    github:
      "https://github.com/Deepanshu-Sehgal/AI-Powered-FaceMask-Monitoring-System-for-Hospitals-and-Clinic",
    live: "",
  },
  {
    title: "AI-Based Attendance Monitoring System",
    tech: "YOLOv11n, OpenCV, React.js, FastAPI, Docker, AWS",
    date: "April 2025",
    desc1:
      "🎯 Developed a customizable, automated classroom attendance system using YOLOv11n and OpenCV for real-time face recognition.",
    desc2:
      "📂 Created a pipeline to automate preprocessing and training triggered by CSV uploads, ensuring data freshness and minimal manual intervention.",
    desc3:
      "☁️ Integrated with React.js (frontend), FastAPI (backend), and deployed using Docker and AWS, supporting live attendance capture and reporting.",
    bgColor: "bg-[#1D3557]",
    github:
      "https://github.com/Deepanshu-Sehgal/AI-Powered-Class-Attendance-System",
    live: "",
  },
  {
    title: "Police Unified Language & Semantic Evaluation",
    tech: "NLP, Roberta, FastAPI, Twilio, Docker",
    date: "December 2023",
    desc1:
      "🚔 Built a semantic analysis engine using fine-tuned Roberta models to classify public complaints for the Chandigarh Police Cyberthon 2023 – Ranked in Top 13 teams nationally.",
    desc2:
      "📈 Automated complaint sorting and routing with FastAPI and WhatsApp-based Twilio alerts, reducing response time from hours to under 10 seconds.",
    desc3:
      "📊 Embedded NER, sentiment analysis, and data visualization dashboards for actionable feedback and analytics-driven policing.",
    bgColor: "bg-[#45376E]",
    github:
      "https://github.com/Deepanshu-Sehgal/Police-Unified-Language-Semantic-Evaluation",
    live: "",
  },
];

export default projects;