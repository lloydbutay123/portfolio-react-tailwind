import amalogo from "../assets/logo/ama_logo.png";
import mmsulogo from "../assets/logo/mmsu_logo.png";
import aboutimg from "../assets/background_images/aboutimg.png";

const aboutList = [
  {
    name: "John Lloyd Butay",
    img: aboutimg,
    dob: "12/29/1999",
    title:
      "I'am a passionate Web Developer, specialized in Web Design, UX / UI, Webflow, and Front End Development.",
    contacts: [
      {
        email: "johnlloydbutay123@gmail.com",
        phone1: "09567223090",
        phone2: "09070343386",
        address: "#14 Bungon, City of Batac, Ilocos Norte Philippines",
      },
    ],
    education: [
      {
        id: 1,
        logo: mmsulogo,
        name: "Mariano Marcos State University",
        course: "Bachelor of Science in Computer Engineering",
        year: "2018-2022",
      },
      {
        id: 2,
        logo: amalogo,
        name: "AMA Computer College Laoag",
        course: "Information and Communications Technology",
        year: "2016-2018",
      },
    ],
    experience: [
      {
        id: 1,
        name: "CCK City Network, Inc.",
        title: "Software Engineer",
        year: "Jan 2022- June 2022",
      },
    ],
    trainings: [
      {
        id: 1,
        name: "Programming Foundations with JavaScript, HTML and CSS",
        company: "Duke University, Coursera",
        issuedOn: "23-Oct-2020",
        verify:
          "https://www.coursera.org/account/accomplishments/certificate/6ZBW3A3SAZD5",
      },
      {
        id: 2,
        name: "Responsive Web Design",
        company: "freeCodeCamp",
        issuedOn: "23-Oct-2024",
        verify:
          "https://www.freecodecamp.org/certification/fcc6d332a42-87cb-43c3-8c58-ce5d376112c8/responsive-web-design",
      },
      {
        id: 3,
        name: "C for Everyone: Programming Fundamentals",
        company: "University of California, Santa Cruz, Coursera",
        issuedOn: "01-Nov-2020",
        verify:
          "https://www.coursera.org/account/accomplishments/certificate/EUKCVQTFC9M5",
      },
      {
        id: 4,
        name: "E-commerce Store: Introduction to Full-stack Development ",
        company: "Xaltius Pte Ltd",
        issuedOn: "27-Jan-2024",
        verify:
          "https://www.coursera.org/account/accomplishments/certificate/EUKCVQTFC9M5",
      },
      {
        id: 5,
        name: "The Complete 2024 Web Development Bootcamp",
        company: "Dr. Angela Yu, Udemy",
        issuedOn: "04-Mar-2024",
        verify:
          "https://www.udemy.com/certificate/UC-5ffa4249-e97f-4cf7-9ca2-eb5b8639cce5/",
      },
    ],
    story: [
      {
        introduction: "Hi I'm John Lloyd Butay. A passionate Front-end Developer based in the Philippines.",
        text1:
          "I’am John Lloyd Butay. I reside in the Philippines. I graduated from Mariano Marcos State University's Computer Engineering program. I started drawing and creating at an early age, and the majority of my design talents and expertise are self-taught. I became interested in programming after learning about web development in high school. It interested me and drew me in, so I chose to follow this job. Even though I pursued a career as a coder, my natural gift for arts and design lingered. As a result, I learned myself about multimedia design. I am capable of creating professional and dynamic websites by combining cutting-edge technology with my programming experience.",
        text2:
          "I will not stick around on just doing Front End development projects. My goal is to take it to the next level of becoming a Full Stack Developer and become one of the world's top designers, so now, I am working towards it. I have prepared myself to accept the challenges into this ever changing world and I will try my very best to achieve my dreams and goals.",
      },
    ],
  },
];
export default aboutList;
