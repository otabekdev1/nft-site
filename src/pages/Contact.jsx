import React, { useRef } from "react";
import CommonSection from "../components/ui/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
export default function Contact() {
  const handleSubmit = (e) => {
    e.prevenaDefault();
  };
  const nameRef = useRef("");
  const emailRef = useRef("");
  const subectRef = useRef("");
  const msgRef = useRef("");

  return (
    <>
      <CommonSection title="contact" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="m-auto">
              <h2>Drop a Message</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                quia ad deserunt sed mollitia voluptate commodi vel aut maxime
                repudiandae?
              </p>
              <div className="contact">
                <form className="text-center " onSubmit={handleSubmit}>
                  <div className="form__input">
                    <input
                      style={{ padding: "24px" }}
                      type="text"
                      placeholder="Enter Your Name"
                      ref={nameRef}
                    />
                  </div>
                  <div className="form__input">
                    <input
                      style={{ padding: "24px" }}
                      type="email"
                      placeholder="Enter Your email"
                      ref={emailRef}
                    />
                  </div>

                  <div className="form__input">
                    <input
                      style={{ padding: "24px" }}
                      type="text"
                      placeholder="Enter Your subject"
                      ref={subectRef}
                    />
                  </div>

                  <div className="form__input">
                    <textarea
                      style={{ padding: "24px" ,color:"white"}}
                      rows="7"
                      placeholder="Write message"
                      ref={msgRef}
                    ></textarea>
                  </div>
                  <button
                    className="send_btn mt-4"
                    style={{
                      border: "none",
                      padding: "7px 25px ",
                      borderRadius: "20px",
                    }}
                  >
                    Send Btn
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
