import React from "react";
// import { Container } from "reactstrap";
import HeroSection from "../components/ui/HeroSection";
import LiveAuction from "../components/ui/live-auction/LiveAuction";
import SellerSection from "../components/ui/seller-section/SellerSection";
import StepSection from "../components/ui/Stepsection/StepSection";
import TradingSection from "../components/ui/trading-section/TradingSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <TradingSection />
      <StepSection/>
  
    </>
  );
}
