const projects = [
  {
    title: "Face Mask Detection in Hospital Monitoring System",
    tech: "YOLOv8, FastAPI, Docker, Twilio, ResNet50",
    date: "Present",
    desc1:
      "⚙️ Engineered a real-time face mask compliance monitoring system using YOLOv8 and ResNet50, achieving high-accuracy detection in dynamic hospital environments.",
    desc2:
      "🚀 Deployed with FastAPI and Docker for robust, scalable backend operations, ensuring seamless performance even under high load.",
    desc3:
      "📢 Enabled Twilio-based real-time alerts (SMS/voice) for non-compliance, supporting hospital authorities with automated compliance reporting and enhanced safety protocols.",
    bgColor: "bg-red-950",
    github:"https://github.com/Deepanshu-Sehgal/AI-Powered-FaceMask-Monitoring-System-for-Hospitals-and-Clinic",
    live:""
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
    github:"https://github.com/Deepanshu-Sehgal/AI-Powered-Class-Attendance-System",
    live:""
  },
  {
    title: "Sandwich Leave Policy AI-Based Approval System",
    tech: "GPT-4, FastAPI, SMOTE, LangChain, Docker, Twilio",
    date: "March 2025",
    desc1:
      "🧠 Built an AI-driven automated leave approval system powered by GPT-4 and LangChain, capable of analyzing complex leave scenarios like Sandwich Policy in under 5 seconds.",
    desc2:
      "📊 Applied SMOTE to ensure fairness in classification of HR decisions across imbalanced datasets.",
    desc3:
      "📬 Integrated with Twilio for real-time notifications, and deployed using FastAPI and Docker, streamlining HR workflows and reducing approval delays by 80%.",
    bgColor: "bg-[#6B4226]",
    github:"https://github.com/Deepanshu-Sehgal/Leave-Approval-Project",
    live:""
  },
  {
    title: "Dynamic E-Learning Platform",
    tech: "MERN Stack, Cloudinary, Razorpay",
    date: "May 2024",
    desc1:
      "📚 Designed and built a full-stack interactive learning platform using MERN stack, delivering a seamless experience for both learners and instructors.",
    desc2:
      "💳 Integrated Cloudinary for media hosting and Razorpay for secure payments, enabling smooth course purchases and instructor monetization.",
    desc3:
      "🌍 Empowered instructors to host content and reach global audiences, with support for role-based access and secure JWT authentication.",
    bgColor: "bg-[#111B26]",
    github:"https://github.com/Deepanshu-Sehgal/StudyNotion-MERN-Mega_Project",
    live:"https://study-notion-ashy-zeta.vercel.app/"
  },
  {
    title: "UBERAPP Clone – Cab Booking Backend",
    tech: "Java Spring Boot, Swagger UI, RESTful APIs",
    date: "October 2024",
    desc1:
      "🚖 Created a scalable backend for a cab booking system using Spring Boot, replicating core features of platforms like Uber and Ola.",
    desc2:
      "🔁 Built secure RESTful APIs for user onboarding, ride booking, fare calculation, and location-based ride allocation.",
    desc3:
      "📄 Integrated Swagger UI for comprehensive API documentation and testing, improving dev onboarding and third-party integration.",
    bgColor: "bg-[#147536]",
    github:"https://github.com/Deepanshu-Sehgal/UberApp-SpringBoot",
    live:""
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
    github:"https://github.com/Deepanshu-Sehgal/Police-Unified-Language-Semantic-Evaluation",
    live:""
  },
];

export default projects;