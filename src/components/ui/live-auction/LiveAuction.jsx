import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import NftCard from "../Nft-Card/NftCard";
import { NFT__DATA } from "../../../assets/data/data";
import "./live-auction.css";
export default function LiveAuction() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="live__auctoin__top d-flex align-items-center justify-content-between">
                <h3>live Auction</h3>
                <span>
                  <Link to="/market">explore market</Link>
                </span>
              </div>
            </Col>

            {NFT__DATA.slice(0, 4).map((item) => (
              <Col lg="3" md="6" sm="6" className="mb-4">
                <NftCard key={item.id} item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
