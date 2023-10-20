import React from "react";
import { Route, Routes } from "react-router-dom";
import { Summary } from "../SubComponents/Summary/index";
import { PersonnalInfo } from "../SubComponents/PersonnalInfo";
import { SelectPlan } from "../SubComponents/Select-Plan";
import { Thanks } from "../SubComponents/Thanks/index";
import { ErrorPage } from "../Page not found/index";
import { PickAddOns } from "../SubComponents/Pick-Add-Ons";

export const MainPage = () => {
  return (
    
      <Routes>
        <Route path="/" element={<PersonnalInfo />} />
        <Route path="/" element={<PersonnalInfo />} />
        <Route path="/pick-add-ons" element={<PickAddOns />} />
        <Route path="/select-your-plan" element={<SelectPlan />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
  );
};
