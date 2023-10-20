import React from "react";
import { LeftSideBar } from "../../LetftSideBar";
import thanksImage from "../../../assets/images/thanks.svg";


export const Thanks = () => {
  return (
    <div>
      <div className="row">
        <LeftSideBar />
        <div className="mainpage col-lg-9 col-12 p-lg-5 p-1 d-flex">
          <div className="px-5 aling-self-center d-flex">
            <div className="thanks text-center align-self-center">
              <img src={thanksImage} alt='thank you logo' />
                <p className="fw-bold fs-2 mt-2">Thank you !</p>
              <p className="fs-5">Thanks for confirming your subscription ! We hope you have fun using our plateform. If you ever need support, please feel free to email us at support@loremgaming.com. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
