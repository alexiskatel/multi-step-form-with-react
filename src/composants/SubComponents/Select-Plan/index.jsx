import React from "react";
import { Header } from "../Header";
import acardeProfile from "../../../assets/images/acarde.svg";
import advancedProfile from "../../../assets/images/icon-advanced.svg";
import proProfile from "../../../assets/images/icon-pro.svg";
import { BackForward } from "../Back-Forward/index";
import { LeftSideBar } from "../../LetftSideBar";

export const SelectPlan = () => {
  const titleInfo = {
    title: "Select your plan",
    subTitle: "You have the option of monthly or yearly billing.",
  };
  const options = [
    {
      icon: acardeProfile,
      type: "Arcarde",
      price: "$9/mo",
    },
    {
      icon: advancedProfile,
      type: "Advanced",
      price: "$12/mo",
    },
    {
      icon: proProfile,
      type: "Pro",
      price: "$15/mo",
    },
  ];
  return (
      <div className="row">
        <LeftSideBar />
        <div className="mainpage col-lg-9 col-12 p-lg-5 px-1 py-3">
          <div className="px-5">
            <Header title={titleInfo.title} subTitle={titleInfo.subTitle} />
            <div className="row pt-4">
              {options.map((option, key) => (
                <div key={key} className="col-sm-4 col-6 mb-3">
                  <div className="option mx-1 px-3">
                    <img
                      src={option.icon}
                      alt={option.type + " logo"}
                      className="pt-3"
                    />
                    <div className="content pb-3">
                      <span className="fs-6 d-flex fw-bold type">
                        {" "}
                        {option.type}{" "}
                      </span>
                      <span className="d-flex"> {option.price} </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="choice col-12 mx-2 d-flex mt-4">
              <span className="mx-2">Monthly</span>
              <div className="form-check form-switch mx-2 pt-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                />
              </div>
              <span>Yearly</span>
            </div>
            <BackForward lastStep={"/"} nextStep={"/pick-add-ons"} />
          </div>
        </div>
      </div>
  );
};
