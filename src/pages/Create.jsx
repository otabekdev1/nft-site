import React from "react";
import CommonSection from "../components/ui/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import NftCard from "../components/ui/Nft-Card/NftCard";
import img from "../assets/images/img-01.jpg";
import avatar from "../assets/images/ava-01.png";
import "../styles/create.css";
export default function Create() {
  const item = {
    id: "04",
    title: "Guard",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
    imgUrl: img,
    creator: "Trista Francis",
    creatorImg: avatar,
    currentBid: 7.89,
  };
  return (
    <>
      <CommonSection title="Create Item" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">preview Item</h5>
              <NftCard item={item} />
            </Col>
            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form>
                  <div className="form__input">
                    <label htmlFor="">Upload file</label>
                    <input
                      type="file"
                      placeholder="browse"
                      className="upload__input"
                    />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">price</label>
                    <input
                      type="number"
                      placeholder=" Enter price for one item (ETH)"
                      className="upload__input"
                    />
                  </div>
                  <div className="form__input  w-100">
                    <label htmlFor="">Minimum Bid</label>
                    <input
                      type="number"
                      placeholder=" Ene=ter Minimum Bid"
                      className="upload__input"
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="form__input w-50">
                      <label htmlFor="">Starting Data</label>
                      <input
                        type="date"
                        placeholder=" Ene=ter Minimum Bid"
                        className="upload__input"
                      />
                    </div>
                    <div className="form__input w-100">
                      <label htmlFor="">Expiration Data</label>
                      <input
                        type="date"
                        placeholder=" Ene=ter Minimum Bid"
                        className="upload__input"
                      />
                    </div>
                  </div>
                  <div className="form__input">
                    <label htmlFor="">title</label>
                    <input
                      type="text"
                      placeholder=" Eneter title"
                      className="upload__input"
                    />
                  </div>{" "}
                  <div className="form__input">
                    <label htmlFor="">Description</label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Enter Description"
                      className="w-100"
                    ></textarea>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
