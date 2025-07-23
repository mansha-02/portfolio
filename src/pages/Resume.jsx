import React from "react";
import { Container } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaBriefcase } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "../utils/experienceData";
import { Badge } from "react-bootstrap";
import "./style.css";


const Experience = () => {
  return (
    <section id="experience">
      <Container>
        <h1 className="section-title mt-40"></h1>
        <VerticalTimeline lineColor="#AE944F">
          {experienceData.map((work, i) => (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#0d0d2b", // Dark navy background
                color: "#ffffff",
                boxShadow: "0 4px 20px rgba(255, 215, 0, 0.15)", // Gold soft glow
                borderRadius: "20px",
                padding: "25px",
              }}
              contentArrowStyle={{ borderRight: "7px solid #0d0d2b" }}
              date={
                <span style={{ color: "#f4f4f4", fontSize: "14px" }}>
                  {work.years}
                </span>
              }
              iconStyle={{
                background: "#AE944F", // Gold
                color: "#fff",
                textAlign: "center",
                boxShadow: "0 0 0 4px #fff",
              }}
              icon={<FaBriefcase size={20} />}
            >
              <h3 className="vertical-timeline-element-title">{work.title}</h3>
              <h5 className="vertical-timeline-element-subtitle">
                {work.company}
              </h5>
              <p>
                {work.mainTech &&
                  work.mainTech.map((tech, idx) => (
                    <Badge
                      pill
                      key={idx}
                      style={{
                        background: "#AE944F",
                        color: "#000",
                        fontSize: "13px",
                        marginRight: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
              </p>
              <p>
                {work.technologies &&
                  work.technologies.map((tech, idx) => (
                    <Badge
                      pill
                      key={idx}
                      style={{
                        background: "#2d2d55",
                        color: "#fff",
                        fontSize: "13px",
                        marginRight: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
              </p>
              <p>{work.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </section>
  );
};

export default Experience;
