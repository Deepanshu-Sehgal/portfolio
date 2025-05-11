import ProjectCard from "../cards/ProjectCard";

const projects = [
  {
    title: "Police Unified Language and Semantic Evaluation",
    tech: "NLP, Fast API, Twilio, Docker",
    date: "December 2023",
    desc1:
      "Team project for the CyberThon 2023 by Chandigarh Police, Infosys in Top 13 Teams nationally.",
    desc2:
      "Implemented an API-driven Semantic Analysis Model that automates complaint sorting and sends reports through WhatsApp (Twilio) to Police Departments, cutting allocation time to under 10 sec.",
    desc3:
      "Developed a feedback mechanism using Finetuned Roberta Models for sentiment analysis, complemented by data analytics, NER, and visualization for actionable insights.",
    bgColor: "bg-[#45376E]",
  },
  {
    title: "Dynamic E Learning Platform",
    tech: "MERN, Cloudinary, Razorpay Integration",
    date: "May 2024",
    desc1:
      "Developed a platform which aims to provide a seamless and interactive learning experience for students",
    desc2:
      "Integrated course management, user authentication and payment integration features",
    desc3:
      "Also, a platform for instructors to showcase their expertise and connect with learners across the globe",
    bgColor: "bg-[#111B26]",
  },
  {
    title: "UBERAPP CLONE (Backend System for Cab Services)",
    tech: "Spring Boot, Swagger UI, RestFull APIs",
    date: "October 2024",
    desc1:
      "Developed a backend application for an Uber-like cab riding service using Java Spring Boot.",
    desc2:
      "Implemented RESTful APIs for core functionalities such as user registration, ride booking, and fare calculation.",
    desc3:
      "Integrated Swagger documentation to facilitate API testing and ensure easy interaction with the endpoints.",
    bgColor: "bg-[#147536]",
  },
  {
    title: "Face Mask Detection in Hospital Monitoring System",
    tech: "YoloV8, Swagger UI, Fast API, Twilio",
    date: "Present",
    desc1:
      "Built a real-time AI system using YOLOv8, ResNet50, and advanced data augmentation techniques for high detection accuracy.",
    desc2:
      "Integrated APIs with FastAPI, leveraging Docker for seamless deployment and scalability.",
    desc3:
      "Enabled Twilio-based real-time audio/visual alerts and compliance reporting to enhance hospital safety monitoring.",
    bgColor: "bg-[#9C6737]",
  },
];

export default function Project() {
  return (
    <section id="project" className="w-full h-full px-8">
      {/* <div className="sticky top-[5rem]">
        <h2 className="text-4xl font-bold ">Project</h2>
      </div> */}

      {projects.map((project, index) => (
        <ProjectCard key={index} index={index} project={project} />
      ))}
    </section>
  );
}
