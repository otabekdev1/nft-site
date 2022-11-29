import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./step-section.css";
export default function StepSection() {
  const STEP__DATA = [
    {
      title: "Setup you wallet",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores minima harum iure,`,
      icon: "ri-wallet-line",
    },
    {
      title: "Creator your collection",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores minima harum iure,`,
      icon: "ri-collage-line",
    },
    {
      title: "Add your NFTs",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores minima harum iure,`,
      icon: "ri-image-line",
    },
    {
      title: "List them for sale",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores minima harum iure,`,
      icon: "ri-list-check",
    },
  ];
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4">
              <h3 className="step__title">Create and Sell your NFT's</h3>
            </Col>

            {STEP__DATA.map((item, index) => (
              <Col lg="3" className="mb-4" md="4" sm="6" key={index}>
                <div className="Single__step__item">
                  <span>
                    <i class={item.icon}></i>
                  </span>
                  <div className="step__item__content">
                    <h5>
                      <Link to="/wallet">{item.title}</Link>
                    </h5>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
