import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';

export const Contact = () => {
  return (
    <section className="contact" id="contact"> 
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} md={6}>
            <div className="animate__animated animate__fadeIn">
              <h2 data-aos="fade-right">Contact</h2>
              <form name="contact-ntl" method="post">
              <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" name="firstName" placeholder="First Name"/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" name="lastName" placeholder="Last Name"/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" name="email" placeholder="Email Address"/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" name="phone" placeholder="Phone No."/>
                  </Col>
                  <Col size={12} className="px-1" date-aos="fade-up">
                    <textarea rows="6" name="message" placeholder="Message"/>
                    <button type="submit"><span>Send</span></button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default Contact;