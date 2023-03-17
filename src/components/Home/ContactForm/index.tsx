import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { Fade, AttentionSeeker } from "react-awesome-reveal";

const ContactForm = () => {
  const [validated, setValidated] = useState<boolean>(false);
  const [toastShow, setToastShow] = useState<boolean>(false);
  const form: any = useRef();

  const handleSubmit = (e: any) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
    } else {
      sendEmail(e);
    }
    setValidated(true);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    // setToastShow(true);
    // setValidated(false);
    console.log("sent");
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
          setValidated(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="home-form" id="contact">
      <Row>
        <Col>
          <Fade direction="left" triggerOnce>
            <AttentionSeeker effect="bounce">
              <h2>Inbox Me!</h2>
            </AttentionSeeker>
            <p>
              I'd love if you reached out to me. Drop me a message and I will
              get back to you soon. It is ok even if you just want to say Hi. We
              all love making friends :&#41;
            </p>
          </Fade>
        </Col>
        <Col lg="8">
          <Form
            noValidate
            validated={validated}
            ref={form}
            onSubmit={handleSubmit}
          >
            <Fade direction="right" triggerOnce>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Control
                  as="textarea"
                  aria-label="With textarea"
                  placeholder="Enter your message"
                  name="message"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Fade>
          </Form>
        </Col>
        <ToastContainer position="bottom-start" className="position-fixed">
          <Toast
            bg="success"
            onClose={() => setToastShow(false)}
            show={toastShow}
            delay={500}
            autohide
          >
            <Toast.Header>
              <strong className="me-auto toast-body">Message Sent</strong>
            </Toast.Header>
          </Toast>
        </ToastContainer>
      </Row>
    </div>
  );
};

export default ContactForm;
