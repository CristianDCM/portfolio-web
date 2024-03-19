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
              I am a web developer based in Bogota City. I have a passion for
              web development and love to create for web and mobile devices. I
              have a strong foundation in web development and programming. I am
              constantly learning new technologies and languages to improve my
              skills. I am a fast learner and a hard worker. I am always looking
              for new opportunities to grow and learn.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;