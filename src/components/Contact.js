import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { useState } from "react";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});  
  const onFormUpdate = (category, value) => {
    setFormDetails({...formDetails, [category]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonText("Sending..");
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(event.target)).toString()
    })
    .then(() => {
      setButtonText("Sent!");
      setFormDetails(formInitialDetails); 
    })
    // .catch((error) => {
    //   setButtonText("Failed!:(");
    // });
  };

  return (
    <section className="contact" id="contact"> 
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} md={6}>
            <div className="animate__animated animate__fadeIn">
              <h2 data-aos="fade-right">Contact</h2>
              <form name="contact-ntl" method="post" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name"  value="contact-ntl"/>
                {/*Honeypot*/}
                <div style={{ visibility: 'hidden', position: 'absolute', top: 0, left: -9999 }}>
                  <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </div>
              <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" name="firstName" placeholder="First Name" value={formDetails.firstName} onChange={(e) => onFormUpdate("firstName", e.target.value)}/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" name="lastName" placeholder="Last Name" value={formDetails.lastName} onChange={(e) => onFormUpdate("lastName", e.target.value)}/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" name="email" placeholder="Email Address" value={formDetails.email} onChange={(e) => onFormUpdate("email", e.target.value)}/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" name="phone" placeholder="Phone No." value={formDetails.phone} onChange={(e) => onFormUpdate("phone", e.target.value)}/>
                  </Col>
                  <Col size={12} className="px-1" date-aos="fade-up">
                    <textarea rows="6" name="message" placeholder="Message" value={formDetails.message} onChange={(e) => onFormUpdate("message", e.target.value)}/>
                    <button type="submit"><span>{buttonText}</span></button>
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