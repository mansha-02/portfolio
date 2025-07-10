import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiMysql,
  DiDocker,
  DiGithubBadge,
  DiCode,
  DiTerminal,
} from "react-icons/di";
import {
  SiTypescript,
  SiMongodb,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiPrisma,
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[
        { icon: <DiJavascript1 size={40} />, name: "JavaScript" },
        { icon: <SiTypescript size={40} />, name: "TypeScript" },
        { icon: <DiReact size={40} />, name: "React.js" },
        { icon: <SiRedux size={40} />, name: "Redux" },
        { icon: <SiNextdotjs size={40} />, name: "Next.js" },
        { icon: <DiNodejs size={40} />, name: "Node.js" },
        { icon: <SiExpress size={40} />, name: "Express.js" },
        { icon: <SiMongodb size={40} />, name: "MongoDB" },
        { icon: <DiMysql size={40} />, name: "MySQL" },
        { icon: <DiCode size={40} />, name: "C++ / C" },
        { icon: <SiPrisma size={40} />, name: "Prisma" },
        { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS" },
        { icon: <SiBootstrap size={40} />, name: "Bootstrap" },
        { icon: <DiDocker size={40} />, name: "Docker" },
        { icon: <DiGit size={40} />, name: "Git" },
        { icon: <DiGithubBadge size={40} />, name: "GitHub" },
        { icon: <DiTerminal size={40} />, name: "DSA / OOP / OS" },
      ].map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tech.icon}
          <div
            style={{ fontSize: "12px", marginTop: "5px", textAlign: "center" }}
          >
            {tech.name}
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Techstack;


