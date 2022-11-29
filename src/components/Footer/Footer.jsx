import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
const MY__ACCOUNT = [
  {
    display: "author profile",
    url: "/seller-profile",
  },
  {
    display: "Create item",
    url: "/seller-profile",
  },
  {
    display: "Collection",
    url: "/create",
  },
  {
    display: "Edit profile",
    url: "/edit-profile",
  },
];
const RESCOURCE = [
  {
    display: "help center",
    url: "#",
  },
  {
    display: "Partner",
    url: "#",
  },
  {
    display: "Communitiy",
    url: "#",
  },
  {
    display: "Activity",
    url: "/edit-profile",
  },
];
const COMPANY = [
  {
    display: "About",
    url: "#",
  },
  {
    display: "Career",
    url: "#",
  },
  {
    display: "Ranking",
    url: "#",
  },
  {
    display: "Contact Us ",
    url: "/contact",
  },
];
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="3" md="6" sm="6" className="mb-4">
              <div className="logo">
                <h2 className="d-flex gap-2 align-items-center">
                  <span>
                    <i className="ri-fire-fill"></i>
                  </span>
                  Nfts
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  sapiente laudantium explicabo voluptas vero atque placeat
                  praesentium culpa laboriosam reiciendis.
                </p>
              </div>
            </Col>
            <Col lg="2" md="3" sm="6" className="mb-4">
              <h5>my account</h5>
              <ListGroup className="list__group">
                {MY__ACCOUNT.map((item, index) => (
                  <ListGroupItem key={index} className="list__item">
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="2" md="3" sm="6" className="mb-4">
              <h5>Resources</h5>
              <ListGroup className="list__group">
                {RESCOURCE.map((item, index) => (
                  <ListGroupItem key={index} className="list__item">
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="2" md="3" sm="6" className="mb-4">
              <h5>Company</h5>
              <ListGroup className="list__group">
                {COMPANY.map((item, index) => (
                  <ListGroupItem key={index} className="list__item">
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="3" md="6" sm="6" className="mb-4">
              <h5>NewsLetter</h5>
              <input type="text" className="newsletter" placeholder="email" />
              <div className="social__links d-flex gap-3 align-items-center">
                <span>
                  <Link to="#">
                    <i className="ri-facebook-line"></i>
                  </Link>
                </span>

                <span>
                  <Link to="#">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>

                <span>
                  <Link to="#">
                    <i className="ri-telegram-line"></i>
                  </Link>
                </span>

                <span>
                  <Link to="#">
                    <i className="ri-discord-line"></i>
                  </Link>
                </span>
              </div>
            </Col>
       
          </Row>
        </Container>
      </footer>
    </>
  );
}
