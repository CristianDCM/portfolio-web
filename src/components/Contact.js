import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { useState } from "react";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
  setFormDetails({ ...formDetails, [category]: value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("/",{
      method: "POST",
      headers: {
        //type para netlify
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({
        "form-name": "contactNtfy",
        ...formDetails
      }),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };
  return (
    <section className="contact" id="contact"> 
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} md={6}>
            <div className="animate__animated animate__fadeIn">
              <h2 data-aos="fade-right">Contact</h2>
              <form name="contactNtfy" method="post" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contactNtfy"/>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                  </Col>
                  <Col size={12} className="px-1" date-aos="fade-up">
                    <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                    <button type="submit"><span>{buttonText}</span></button>
                  </Col>
                  {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}