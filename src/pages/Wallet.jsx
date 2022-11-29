import React from "react";
import CommonSection from "../components/ui/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/wallet.css";
export default function Wallet() {
  const WALLET_DATA = [
    {
      title: "Bitcoin",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui dignissimos placeat iure nostrum.",
      icon: "ri-bit-coin-line",
    },
    {
      title: "Coinbase",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui dignissimos placeat iure nostrum.",
      icon: "ri-coin-line",
    },
    {
      title: "Metamask",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui dignissimos placeat iure nostrum.",
      icon: "ri-money-cny-circle-line",
    },
    {
      title: "autheroum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui dignissimos placeat iure nostrum.",
      icon: "ri-copper-coin-line",
    },
  ];
  return (
    <>
      <CommonSection title="Conect  Wallet" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4  text-center">
              <div className="w-50 m-auto">
                <h3 className="text-light">Connect your Wallet </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perferendis quia inventore ex assumenda fuga cupiditate eos
                  deserunt unde non sunt.
                </p>
              </div>
            </Col>
            {WALLET_DATA.map((item, index) => (
              <Col lg="3" md='4' sm='6' className="mb-5">
                <div className="wallet__item">
                  <span>
                    <i className={item.icon}></i>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
