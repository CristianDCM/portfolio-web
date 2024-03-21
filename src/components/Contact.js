import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { useState } from 'react';

const Contact = () => {
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    const data = await response.json();
    setButtonText("Send");
    setFormDetails(formInitialDetails);
    if (data.code === 200) {
      setStatus({success: true, message: "Message Sent", code: 200});
    }
    else {
      setStatus({success: false, message: "Message Failed", code: 400});
    }
  }

  return (
    <section className="contact" id="contact"> 
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} md={6}>
            <div className="animate__animated animate__fadeIn">
              <h2 data-aos="fade-right">Contact</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" placeholder="First Name" value={formDetails.firstName} onChange={(e) => onFormUpdate("firstName", e.target.value)}/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" placeholder="Last Name" value={formDetails.lastName} onChange={(e) => onFormUpdate("lastName", e.target.value)}/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" placeholder="Email Address" value={formDetails.email} onChange={(e) => onFormUpdate("email", e.target.value)}/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" placeholder="Phone No." value={formDetails.phone} onChange={(e) => onFormUpdate("phone", e.target.value)}/>
                  </Col>
                  <Col size={12} className="px-1" date-aos="fade-up">
                    <textarea rows="6" placeholder="Message" value={formDetails.message} onChange={(e) => onFormUpdate("message", e.target.value)}/>
                    <button type="submit"><span>{buttonText}</span></button>
                    {status.message && <p className={!status.code ? "success" : "error"}>{status.message}</p>
                    }
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