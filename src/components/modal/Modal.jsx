import React from "react";
import "./Modal.css";
export default function Modal({ setShowModal }) {
  return (
    <>
      <div className="modal__wraper">
        <div className="single__modal">
          <span className="close__modal">
            <i
              className="ri-close-line"
              onClick={() => setShowModal(false)}
            ></i>
          </span>
          <h6 className="text-center text-light"> Place a bid</h6>
          <p className="text-center text-light">
            You must bid at least <span className="money">5.89 ETH</span>
          </p>
          <div className="input__item mb-4">
            <input type="number" placeholder="00 : 00 ETH" />
          </div>
          <div className="input__item mb-3">
            <h6 className="text-white">Enter Quantity,7 availabe</h6>
            <input type="number" placeholder="Enter quantity" />
          </div>
          <div className="d-flex justify-content-between">
            <p> you must bid at least</p>
            <span className="money">5.89 ETH</span>
          </div>
          <div className="d-flex justify-content-between">
            <p> Service Fee</p>
            <span className="money">5.89 ETH</span>
          </div>
          <div className="d-flex justify-content-between">
            <p> Total bid Amout</p>
            <span className="money">5.89 ETH</span>
          </div>
          <button className="place__bid-btn">place a bid</button>
        </div>
      </div>
    </>
  );
}
