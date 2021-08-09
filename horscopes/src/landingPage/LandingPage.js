import React, { useState } from "react";
import "./LandingPage.css";
import SelectComponent from "./selectComponent/SelectComponent";

function LandingPage() {
  console.log("parent render");

  const [yourSign, setYourSign] = useState({});
  const [partnerSign, setPartnerSign] = useState({});

  const calculateComp = () => {
    console.log(
      `your signs are: ${yourSign.rising} - ${yourSign.sun} - ${yourSign.moon}`
    );
    console.log(
      `partner signs are: ${partnerSign.rising} - ${partnerSign.sun} - ${partnerSign.moon}`
    );
  };

  return (
    <div>
      <div>
        <h1>Select your signs</h1>
        <SelectComponent
          selectName={"rising"}
          type={"RISING"}
          yourSign={yourSign}
          action={setYourSign}
        ></SelectComponent>
        <SelectComponent
          selectName={"sun"}
          type={"SUN"}
          yourSign={yourSign}
          action={setYourSign}
        ></SelectComponent>
        <SelectComponent
          selectName={"moon"}
          type={"MOON"}
          yourSign={yourSign}
          action={setYourSign}
        ></SelectComponent>
      </div>

      <div>
        <h1>Select your partner's signs</h1>
        <SelectComponent
          selectName={"rising"}
          type={"RISING"}
          yourSign={partnerSign}
          action={setPartnerSign}
        ></SelectComponent>
        <SelectComponent
          selectName={"sun"}
          type={"SUN"}
          yourSign={partnerSign}
          action={setPartnerSign}
        ></SelectComponent>
        <SelectComponent
          selectName={"moon"}
          type={"MOON"}
          yourSign={partnerSign}
          action={setPartnerSign}
        ></SelectComponent>
      </div>

      <div>
        <button onClick={calculateComp}>Check Compatibility</button>
      </div>
    </div>
  );
}

export default LandingPage;
