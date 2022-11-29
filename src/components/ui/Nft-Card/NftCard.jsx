import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../modal/Modal";
import "./nft-card.css";
export default function NftCard(props) {
  const { title, id, currentBid, creatorImg, imgUrl, creator } = props.item;
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="single__nft__card">
        <div className="nft__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>
        <div className="nft__content">
          <h5 className="nft__title">
            <Link to={`/market/${id}`}>{title}</Link>
          </h5>
          <div className="creater__info-wrapper d-flex gap-3">
            <div className="creator__img">
              <img src={creatorImg} alt="" className="w-100" />
            </div>
            <div className="creater__info w-100 d-flex justify-content-between align-items-center ">
              <div>
                <h6>Created by</h6>
                <p>{creator}</p>
              </div>
              <div>
                <h6>currnet bid</h6>
                <p>{currentBid} ETH</p>
              </div>
            </div>
          </div>
          <div className=" mt-10 d-flex justify-content-between align-items-center">
            <button className="bid__btn  d-flex gap-1 align-items-center" onClick={()=>setShowModal(true)}>
              <i className="ri-handbag-line"></i>Place Bid
            </button>
            { showModal && <Modal setShowModal={setShowModal}/>}
            <span className="history__link">
              <Link to="#">View history</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
