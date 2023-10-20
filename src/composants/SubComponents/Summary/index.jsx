import React from "react";
import { LeftSideBar } from "../../LetftSideBar/index";
import { BackForward } from "../Back-Forward/index";
import { Header } from "../Header/index";

export const Summary = () => {
  const titleInfo = {
    title: "Finishing up",
    subTitle: "Double check everything look OK before confirming.",
  };

  const summary = [
    {
      title: "Arcade (Yearly)",
      price: "$90/yr",
      changeButton: true,
    },
    {
      title: "Online service",
      price: "+$10/yr",
      changeButton: false,
    },
    {
      title: "Larger storage",
      price: "+$20/yr",
      changeButton: false,
    },
    {
      title: "Total year",
      price: "+$120/yr",
      changeButton: false,
    }
  ];

  return (
    <div className="row">
      <LeftSideBar />
      <div className="mainpage col-lg-9 col-12 p-lg-5 px-1 py-3">
        <div className="px-5">
          <Header title={titleInfo.title} subTitle={titleInfo.subTitle} />
          <div className="mt-5">
            {summary.map((sum, key) => (
              <div key={key} className="summary mx-3 py-2 border-bottom">
                <span className={sum.changeButton === true ? 'fw-bold d-flex' : 'fw-bold'}>{sum.title}</span>
                {sum.changeButton === true ? <span><a href="">change</a></span> : ''}
                <span className={sum.changeButton === true ? 'fw-bold price' : 'price'}>{sum.price}</span>
              </div>
            ))}
          </div>
          <BackForward
            lastStep={"/pick-add-ons"}
            nextStep={"/thanks"}
            nextStepText={"Confirm"}
          />
        </div>
      </div>
    </div>
  );
};
