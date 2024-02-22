import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

import navIcon1 from "../assets/img/nav-icon1.svg"; //Linkedin
import navIcon2 from "../assets/img/nav-icon2.svg"; //Facebook
import navIcon3 from "../assets/img/nav-icon3.svg"; //Instagram
import navIcon4 from "../assets/img/nav-icon4.svg"; //Github
import navIcon5 from "../assets/img/nav-icon5.svg"; //X

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1>{`Hi! I'm Cristian David`}</h1>
                  <h2>
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>
                  <p>
                    Through my studies, I have acquired a solid foundation in
                    various technologies and programming languages. My goal is
                    to use these skills to create web projects that are not only
                    functional, but also visually appealing and easy to use.
                  </p>
                  <button className="tagline">
                    <span>Download CV</span>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  {<img className="mov-img" src={headerImg} alt="Header Img" />}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={1}>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#" target="_blank">
                  <img src={navIcon1} alt="Linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/cristianzdmc/"
                  target="_blank"
                >
                  <img src={navIcon3} alt="Instagram" />
                </a>
                <a href="https://github.com/CristianDCM" target="_blank">
                  <img src={navIcon4} alt="Github" />
                </a>
                <a href="https://twitter.com/Cristianzdmc14" target="_blank">
                  <img src={navIcon5} alt="X" />
                </a>
              </div>
              {/* <HashLink to='#connect'>
                <button className="vvd"><span>Contact</span></button>
              </HashLink> */}
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
