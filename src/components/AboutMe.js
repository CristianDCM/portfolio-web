import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import image from "../assets/img/header-img.png";

export const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <h2 data-aos="fade-up" className="section-title">
            About Me
          </h2>
          <Col
            size={12}
            sm={12}
            md={6}
            className="about-img"
            data-aos="fade-down"
          >
            <TrackVisibility once partialVisibility>
              {({ isVisible }) => {
                return (
                  <img
                    src={image}
                    alt="Cristian David"
                    className={
                      isVisible
                        ? "animate__animated animate__fadeInLeft"
                        : "hidden"
                    }
                  />
                );
              }}
            </TrackVisibility>
          </Col>
          <Col
            size={12}
            sm={12}
            md={6}
            className="about-text"
            data-aos="fade-up"
          >
            <h3>Cristian David</h3>
            <p>
              I am a developer based in Bogotá, specializing in web development.
              With a deep passion for coding, I have built a solid foundation in
              programming and cybersecurity, continually expanding my expertise
              by learning new technologies and languages. I am a quick learner,
              dedicated worker, and always eager to embrace new challenges and
              opportunities for growth.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
