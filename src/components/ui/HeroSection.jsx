import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./hero-section.css";
import heroimg from "../../assets/images/hero.jpg";
export default function HeroSection() {
  return (
    <>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h2>
                  Discover rare digital art and collect{" "}
                  <span>sell extraoridinary</span>NFTs
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis ut nihil officia necessitatibus quibusdam
                  assumenda, natus labore quisquam iste? Eaque!
                </p>
                <div className="hero__btns d-flex align-items-center gap-4">
                  <button className="explore__btn d-flex align-items-center gap-4">
                    <i className="ri-rocket-line"></i>
                    <Link to="/market">explore</Link>
                  </button>
                  <button className=" create__btn d-flex align-items-center gap-4">
                    <i className="ri-ball-pen-line"></i>
                    <Link to="/create">
                      <div>Create</div>
                    </Link>
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroimg} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
