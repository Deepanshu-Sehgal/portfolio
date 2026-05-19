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