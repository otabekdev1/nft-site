import React from "react";
import CommonSection from "../components/ui/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useParams, Link } from "react-router-dom";
import { NFT__DATA } from "../assets/data/data";
import LiveAuction from "../components/ui/live-auction/LiveAuction";
import "../styles/nft-details.css";
export default function NftDetails() {
  const { id } = useParams();
  const singLenft = NFT__DATA.find((item) => item.id === id);
  return (
    <>
      <CommonSection title={singLenft.title} />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img
                src={singLenft.imgUrl}
                alt=""
                className="w-100 single__nft__img  "
              />
            </Col>
            <Col lg="6">
              <div className="single__nft__content">
                <h2>{singLenft.title}</h2>
              </div>
              <div className="d-flex  align-items-center justify-content-between mt-4 mb-4">
                <div className="d-flex align-items-center justify-content-between single__nft__seen  gap-4">
                  <span className="d-flex align-items-center gap-4  ">
                    <i className="ri-eye-line">123</i>
                  </span>
                  <span className="d-flex align-items-center gap-4  ">
                    <i className="ri-heart-line">1234</i>
                  </span>
                </div>

                <div className="d-flex gap-4 align-items-center justify-content-between single__nft__more ">
                  <span className="d-flex align-items-center gap-4  ">
                    <i className="ri-send-plane-line"> </i>
                  </span>
                  <span className="d-flex align-items-center gap-4  ">
                    <i className="ri-more-2-line"></i>
                  </span>
                </div>
              </div>
              <div className="nft__creator d-flex gap-3 align-items-center">
                <div className="creator__img">
                  <img src={singLenft.creatorImg} alt="" className="w-100" />
                </div>
                <div className="creator__detail">
                  <p className="mb-0">Creted By</p>
                  <h6>{singLenft.creator}</h6>
                </div>
              </div>
              <p className="my-4">{singLenft.desc}</p>
              <button className="singlenft-btn d-flex gap-2 align-items-center w-100">
                <i className="ri-shopping-bag-line"></i>
                <Link to="/wallet">Place a bid</Link>
              </button>
            </Col>
          </Row>
        </Container>
      </section>
      <LiveAuction />
    </>
  );
}
