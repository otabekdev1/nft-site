import React, { useState } from "react";
import CommonSection from "../components/ui/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import NftCard from "../components/ui/Nft-Card/NftCard";
import { NFT__DATA } from "../assets/data/data";
import "../styles/market.css";
export default function Market() {
  const [data, setData] = useState(NFT__DATA);
  const handleCategory = () => {};
  // const handleitem = () => {};
  const handleSort = (e) => {
    const FilterValue = e.target.value;
    if (FilterValue === "high") {
      const filterData = NFT__DATA.filter((item) => item.currentBid > 6);
      setData(filterData);
    }
    if (FilterValue === "mid") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid > 5.5 && item.currentBid < 6
      );
      setData(filterData);
    }
    if (FilterValue === "low") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid > 4.89 && item.currentBid < 5.5
      );
      setData(filterData);
    }
  };
  return (
    <>
      <CommonSection title={"MarketPlace"} />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="market__product__filtererr d-flex align-items-center justify-content-between">
                <div className="folter__left  d-flex  align-items-center gap-5">
                  <div className="all__category__filter">
                    <select onChange={handleCategory}>
                      <option>All Categories</option>
                      <option value="art">Art</option>
                      <option value="music">Music</option>
                      <option value="domain-name">Domain-name</option>
                      <option value="virtual-world">Virtual world</option>
                      <option value="trending-card">Trending-card</option>
                    </select>
                  </div>
                </div>
                <div className="fillter__right">
                  <select onChange={handleSort}>
                    <option>Sort By</option>
                    <option value="high">High Rate</option>
                    <option value="mid">Mid Rate</option>{" "}
                    <option value="low">Low Rate</option>
                  </select>
                </div>
              </div>
            </Col>
            {data?.map((item) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                <NftCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
