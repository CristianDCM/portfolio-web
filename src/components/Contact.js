import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';

export const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();  
    const myForm = event.target;
    const formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
  };
  document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contact");
    form.addEventListener("submit", handleSubmit);
  });

  const handleChange = (event) => { 
    const { name, value } = event.target;
    console.log(name, value);
  }
    return (
    <section className="contact" id="contact"> 
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} md={6}>
            <div className="animate__animated animate__fadeIn">
              <h2 data-aos="fade-right">Contact</h2>
              <form name="contact-nty" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact-nty" /> 
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" name="first-name" placeholder="First Name" data-aos="zoom-in-right" onChange={handleChange} required />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" name="last-name" placeholder="Last Name" data-aos="zoom-in-right" onChange={handleChange} required />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" name="email" placeholder="Email Address" data-aos="zoom-in-left" onChange={handleChange} required />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" name="phone" placeholder="Phone" data-aos="zoom-in-left" onChange={handleChange} required />
                  </Col>
                  <Col size={12} className="px-1" date-aos="fade-up">
                    <textarea rows="6" name="message" placeholder="Message" data-aos="zoom-in" onChange={handleChange} required />
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