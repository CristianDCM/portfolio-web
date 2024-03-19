import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg"; //Linkedin
import navIcon2 from "../assets/img/nav-icon2.svg"; //Facebook
import navIcon3 from "../assets/img/nav-icon3.svg"; //Instagram
import navIcon4 from "../assets/img/nav-icon4.svg"; //Github
import navIcon5 from "../assets/img/nav-icon5.svg"; //X

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={12} className="text-center text-sm-end">
            <div className="social-icon d-flex justify-content-center">
              <a href="#" data-aos="fade-right">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#" data-aos="fade-right" data-aos-duration="300">
                <img src={navIcon3} alt="Icon" />
              </a>
              <a href="#" data-aos="fade-left" data-aos-duration="300">
                <img src={navIcon4} alt="Icon" />
              </a>
              <a href="#" data-aos="fade-left">
                <img src={navIcon5} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2024 © | Design with pain by CDCM</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};