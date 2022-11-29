import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Market from "../pages/Market";
import Create from "../pages/Create";
import Contact from "../pages/Contact";
import SellerProfile from "../pages/SellerProfile";
import EditProfile from "../pages/EditProfile";
import Wallet from "../pages/Wallet";
import NftDetails from "../pages/NftDetails";
export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Market" element={<Market />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Edit-Profile" element={<EditProfile />} />
      <Route path="/Seller-Profile" element={<SellerProfile />} />
      <Route path="/Wallet" element={<Wallet />} />
      <Route path="/Market/:id" element={<NftDetails />} />
    </Routes>
  );
}
