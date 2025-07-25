import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si"; // ✅ GFG icon added
import "./Social.css";

const Social = () => {
  return (
    <Container style={{ padding: "30px" }}>
      <Row>
        <Col md={12} className="contact-social">
          <div className="contact-text">
            <h1>SOCIALS -</h1>
          </div>
          <ul className="contact-social-links">
            <li className="contact-icons">
              <a
                href="https://github.com/mansha-02"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="contact-icons">
              <a
                href="https://www.linkedin.com/in/mansha02/"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://leetcode.com/u/Mansha02/"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <SiLeetcode />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://auth.geeksforgeeks.org/user/mansha02/"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <SiGeeksforgeeks />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Social;
