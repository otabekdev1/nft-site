import React from "react";
import Routers from "../../routes/Routers";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function Layout() {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
}
