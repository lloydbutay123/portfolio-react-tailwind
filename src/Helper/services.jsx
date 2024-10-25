import ApiIcon from "@mui/icons-material/Api";
import GridViewIcon from "@mui/icons-material/GridView";
import StorageIcon from "@mui/icons-material/Storage";
import SecurityIcon from "@mui/icons-material/Security";
import BugReportIcon from "@mui/icons-material/BugReport";

const ServicesList = [
  {
    id: 1,
    icon: <ApiIcon />,
    title: "API Development",
    text: "I design secure, efficient APIs that bridge front and back ends, ensuring smooth data flow and functionality. From custom RESTful and GraphQL endpoints to third-party integrations, my APIs are built for scalability and seamless performance. With detailed documentation and a focus on security, I make integration effortless and adaptable for growth.",
  },
  {
    id: 2,
    icon: <GridViewIcon />,
    title: "Front-End Development",
    text: "I create responsive, user-centric interfaces that bring your vision to life, ensuring a seamless experience across devices. Leveraging modern frameworks like React and Vue, I build fast, engaging UIs tailored to your brand. With a focus on accessibility and performance, my front-end development empowers your users and enhances your digital presence.",
  },
  {
    id: 3,
    icon: <StorageIcon />,
    title: "Database Management",
    text: "I design and optimize databases for secure, efficient data storage and retrieval, ensuring seamless scalability as your application grows. Skilled in mySql, I structure data to support robust performance and fast access. From schema design to backups and data migration, I provide dependable management for critical data integrity.",
  },
  {
    id: 4,
    icon: <SecurityIcon />,
    title: "Authentication",
    text: "I implement secure, user-friendly authentication systems that protect your application and data, including multi-factor and role-based access controls. By integrating reliable authentication frameworks, I ensure smooth login experiences without compromising security. My solutions prioritize data privacy and compliance, giving users and admins confidence in secure access.",
  },
  {
    id: 5,
    icon: <BugReportIcon />,
    title: "Testing",
    text: "I conduct thorough testing to ensure your application is reliable, efficient, and bug-free across all environments. From unit and integration tests to end-to-end testing, I identify and resolve issues early, safeguarding performance and user experience. With automated testing and continuous feedback loops, I deliver resilient, high-quality software ready for any challenge.",
  },
];

export default ServicesList;
