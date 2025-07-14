import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import tic from "../assets/projects/tic.png";
import dict from "../assets/projects/dict.png";
import edu from "../assets/projects/edumate.png";
import news from "../assets/projects/newspop.png";
import bot from "../assets/projects/smartbot.png";
import text from "../assets/projects/texted.png";
import { AiFillGithub } from "react-icons/ai";
import exp from "../assets/projects/exp.png";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Here are a few<strong className="yellow"> projects </strong> I've
          worked on recently.
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edu}
              isBlog={false}
              title="Edumate"
              description="EduMate is an AI-driven personalized learning platform designed to transform the student learning experience. It brings together personalized study planning, smart content curation, and document analysis through an interactive PDF chatbot, all in one centralized platform. With built-in productivity tools like a Pomodoro timer and notes management, EduMate empowers learners to study smarter, stay organized, and achieve their academic goals more efficiently."
              ghLink="https://github.com/mansha-02/Edu-mate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bot}
              isBlog={false}
              title="Multi-functional Bot"
              description="SmartBot is a MERN stack-based multi-functional bot designed to enhance user experience and automate tasks. It features text summarization, AI-powered paragraph generation, a real-time chatbot, an English-to-JavaScript code converter, and sci-fi image generation. With dark mode and responsive design, it delivers a seamless and engaging user experience."
              ghLink="https://github.com/mansha-02/smart-bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exp}
              isBlog={false}
              title="Expense Tracker"
              description="It is a full-stack web application designed to help users manage their finances with ease and clarity. It features secure JWT-based authentication, categorized income and expense tracking, and historical insights with persistent data storage. The platform enables intuitive financial understanding through real-time data visualizations, including pie and line charts, allowing users to quickly identify spending patterns and make informed decisions."
              ghLink="https://github.com/mansha-02/expense-tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News App"
              description="NewsPop is a responsive web app that aggregates real-time news and engages users with dynamic features. Built using REST APIs, it delivers breaking headlines, enables smart search and filtering, and challenges users with interactive quizzes on current events. The platform also integrates live weather updates, optimizes for mobile responsiveness, and enhances user experience through sleek animations and transitions, empowering users to stay informed and engaged effortlessly."
              ghLink="https://github.com/mansha-02/NewsApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text}
              isBlog={false}
              title="Text Editor"
              description="Developed a rich text editor in React, enabling users to write, format, and preview content in real time. Implemented a dynamic toolbar with customizable formatting options, live markdown rendering, and syntax-highlighted code blocks. Optimized component layout for responsive design, ensuring seamless editing and previewing on all devices."
              ghLink="https://github.com/mansha-02/text-editor"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tic}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Created an interactive Tic Tac Toe game using HTML, CSS, and Vanilla JavaScript, offering a smooth and engaging user experience. Implemented core game logic to manage turns, detect win/tie conditions, and restart games efficiently. The project demonstrates strong DOM manipulation, event handling, and problem-solving skills, delivering a polished and fun browser-based game."
              ghLink="https://github.com/mansha-02/tic-tac-toe"
            />
          </Col>
        </Row>
        <h2 className="yellow"> Visit my Github for more : </h2>
        <span>
          <a
            href="https://github.com/mansha-02"
            target="_blank"
            rel="noreferrer"
            className="icon-color  contact-social-icons"
          >
            <AiFillGithub />
          </a>
        </span>
      </Container>
    </Container>
  );
};

export default Projects;
