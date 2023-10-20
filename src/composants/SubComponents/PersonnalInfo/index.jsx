import React from "react";
import { Header } from "../Header/index";
import { LeftSideBar } from "../../LetftSideBar/index";
import { BackForward } from "../Back-Forward/index";

export const PersonnalInfo = () => {
  const titleInfo = {
    title: "Personnal Info",
    subTitle: "Please provide your name, email address, and phone number.",
  };
  const inputs = [
    {
      name: "Name",
      type: "text",
      placeholder: "e.g. Stephane King ",
    },
    {
      name: "Email Address",
      type: "email",
      placeholder: "e.g. stephaneking@lorem.com ",
    },
    {
      name: "Phone Number",
      type: "number",
      placeholder: "e.g. +1 234 567 890",
    },
  ];
  return (
    <div className="row">
      <LeftSideBar />
      <div className="mainpage col-lg-9 col-12 p-lg-5 px-1 py-3">
        <div className="px-5">
          <Header title={titleInfo.title} subTitle={titleInfo.subTitle} />
          <div>
            {inputs.map((input, key) => (
              <div key={key} className="pt-3">
                <label htmlFor={input.name} className="label">
                  {input.name}
                </label>
                <input
                  type={input.type}
                  className="form-control"
                  placeholder={input.placeholder}
                />
              </div>
            ))}
          </div>
          <BackForward lastStep={""} nextStep={"/select-your-plan"} />
        </div>
      </div>
    </div>
  );
};
