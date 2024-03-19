import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';

export const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        form.reset();
        alert("Gracias por tu mensaje, te contactaré pronto.");
      })
      .catch((error) => alert(error));
  };
  return (
    <section className="contact" id="contact"> 
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} md={6}>
            <div className="animate__animated animate__fadeIn">
              <h2 data-aos="fade-right">Contact</h2>
              <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" name="first-name" placeholder="First Name" data-aos="zoom-in-right" required />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" name="last-name" placeholder="Last Name" data-aos="zoom-in-right" required />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" name="email" placeholder="Email Address" data-aos="zoom-in-left" required />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" name="phone" placeholder="Phone" data-aos="zoom-in-left" required />
                  </Col>
                  <Col size={12} className="px-1" date-aos="fade-up">
                    <textarea rows="6" name="message" placeholder="Message" data-aos="zoom-in" required></textarea>
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