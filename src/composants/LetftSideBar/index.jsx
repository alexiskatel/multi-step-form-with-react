import React from "react";
import bgSideBar from "../../assets/images/bg-sidebar-desktop.svg";
// import bgSideBarMobile from "../../assets/images/bg-sidebar-mobile.svg";

export const LeftSideBar = () => {
  const progressInfo = [
    {
      status: "1",
      title: "STEP 1",
      subtitle: "YOUR INFO",
      pathname: "/",
    },
    {
      status: "2",
      title: "STEP 2",
      subtitle: "SELECT PLAN",
      pathname: "/select-your-plan",
    },
    {
      status: "3",
      title: "STEP 3",
      subtitle: "ADD-ONS",
      pathname: "/pick-add-ons",
    },
    {
      status: "4",
      title: "STEP 4",
      subtitle: "SUMMARY",
      pathname: "/summary", 
    },
  ];
  return (
    <div className="left-side-bar col-lg-3 col-12">
      <div className="sidebar mx-3">
        <img src={bgSideBar} alt="bgsidebar" className="img-desktop"/>
        {/* <img src={bgSideBarMobile} alt="bgsidebar" className="img-mobile d-none"/> */}
        <div className="progressView">
          {progressInfo.map((progress, key) => (
            <div key={key} className=" d-lg-flex pt-3">
              <span
                  className={
                    window.location.pathname == progress.pathname
                      ? "status-active status mt-1"
                      : "status mt-1"
                  }
                >
                  {progress.status}
                </span>
              <div className="px-3">
                <span className="d-flex titleSideBar">{progress.title}</span>
                <span className="fw-bold subtitleSideBar">
                  {progress.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

