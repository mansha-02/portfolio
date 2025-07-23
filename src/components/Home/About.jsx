import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/laptop2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode , SiGeeksforgeeks } from "react-icons/si";



const About = () => {
    return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <p className="home-about-body">
                As a<b className="yellow"> Full-Stack </b>developer, I love
                tackling real-world problems and creating products that blend
                seamless user experiences with robust backend systems.
                <br />
                <br />I am proficient in
                <b className="yellow"> JavaScript, TypeScript, and C++, </b>
                with hands-on experience in frameworks like
                <b className="yellow"> React.js, Node.js, Next.js, </b> and
                working with databases such as{" "}
                <b className="yellow"> MongoDB and MySQL. </b>
                <br />
                <br />
                With industry experience from internships at IIIT Bangalore
                CTRI-DG and Bluestock Fintech, I’ve contributed to improving
                product efficiency, reducing system latencies and accelerating
                development cycles. I’m also an active problem solver, having
                tackled 500+ DSA problems, and a lifelong learner with interests
                in building modern web applications, optimizing system
                performance, and exploring AI-driven technologies to enhance
                user experiences.
                <br />
                <br />
                Let’s connect and build something awesome together!
                <br />
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={LaptopImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/mansha-02"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    aria-label="github"
                  >
                    <AiFillGithub />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/mansha02/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    aria-label="linkedin"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://leetcode.com/u/Mansha02/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="instagram"
                  >
                    <SiLeetcode />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.geeksforgeeks.org/user/mansha02/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="gfg"
                  >
                    <SiGeeksforgeeks />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    );
    
}

export default About