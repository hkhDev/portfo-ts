import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const ContactForm = () => {
  const [toastShow, setToastShow] = useState<boolean>(false);
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    // setToastShow(true);

    emailjs
      .sendForm(
        "service_ir3vgy5",
        "template_ycetpbt",
        form.current,
        "Ez-dHlx3-l29gDsHj"
      )
      .then(
        (result) => {
          e.target.reset();
          setToastShow(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="home-form">
      <Row>
        <Col>
          <h2>Inbox Me!</h2>
          <p>
            I'd love if you reached out to me. Drop me a message and I will get
            back to you soon. It is ok even if you just want to say Hi. We all
            love make friends :&#41;
          </p>
        </Col>
        <Col lg="8">
          {/* <h2>Inbox Me!</h2>
          <p>
            I'd love if you reached out to me. Drop me a message and I will get
            back to you soon.
          </p> */}
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="email"
                placeholder="Enter your Email"
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                placeholder="Enter your message"
                name="message"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <ToastContainer position="bottom-start" className="position-fixed">
            <Toast
              bg="success"
              onClose={() => setToastShow(false)}
              show={toastShow}
              delay={3000}
              autohide
            >
              {/* <Toast.Header>
            <strong className="me-auto">Sumitted</strong>
          </Toast.Header> */}
              <Toast.Body>Message Sent</Toast.Body>
            </Toast>
          </ToastContainer>
        </Col>
        {/* <Col></Col> */}
      </Row>
    </div>

    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="from_name" />
    //   <label>Email</label>
    //   <input type="email" name="from_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
  );
};

export default ContactForm;
