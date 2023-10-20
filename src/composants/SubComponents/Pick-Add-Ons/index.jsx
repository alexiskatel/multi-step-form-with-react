import React from "react";
import { Header } from "../Header/index";
import { BackForward } from "../Back-Forward/index";
import { LeftSideBar } from "../../LetftSideBar";


export const PickAddOns = () => {
  const titleInfo = {
    title: "Pick add-ons",
    subTitle: "Add-ons help enhance your gaming experience",
  };
  const picks = [
    {
      title: "Online service",
      subTitle: "Access to multiplayer games",
      price: "+1$/mo",
    },
    {
      title: "Larger storage",
      subTitle: "Extra 1TB of cloud save",
      price: "+2$/mo",
    },
    {
      title: "Customizable profile",
      subTitle: "Custome them on your profile",
      price: "+2$/mo",
    },
  ];
  return (
    <div className="row">
      <LeftSideBar />
      <div className="mainpage col-lg-9 col-12 p-lg-5 px-1 py-3">
        <div className="px-5">
          <Header title={titleInfo.title} subTitle={titleInfo.subTitle} />
          <div className="mt-4">
            {picks.map((pick, key) => (
              <div key={key} className='form-check picks mt-2 py-3'>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id={pick.title}
                />
                <label className="form-check-label" htmlFor={pick.title}>
                  <div className="">
                    <span className="d-flex type fw-bold">{pick.title}</span>
                    <span className="subtitle">{pick.subTitle}</span>
                    <span className="price type">{pick.price}</span>
                  </div>
                </label>
              </div>
            ))}
          </div>
          <BackForward lastStep={'/select-your-plan'} nextStep={'/summary'} />
        </div>
      </div>
    </div>
  );
};
