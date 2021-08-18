import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import SelectComponent from "./selectComponent/SelectComponent";
import axios from "axios";

function LandingPage() {
  console.log("parent render");

  const [yourSign, setYourSign] = useState({});
  const [partnerSign, setPartnerSign] = useState({});
  const [isCompatible, setIsCompatible] = useState(null);

  const horoscopeTextMappings = {
    1: "Aries",
    2: "Taurus",
    3: "Gemini",
    4: "Cancer",
    5: "Leo",
    6: "Virgo",
    7: "Libra",
    8: "Scorpio",
    9: "Sagittarius",
    10: "Capricorn",
    11: "Aquarius",
    12: "Pisces",
  };

  const getHoroscopeUrl = "http://localhost:5000/horoscope/all";

  const [mockDataForHoroscopeMatches, setMockDataForHoroscopeMatches] =
    useState([]);

  useEffect(() => {
    axios.get(getHoroscopeUrl).then((response) => {
      console.log(response);
      setMockDataForHoroscopeMatches(response.data);
    });
  }, []);

  useEffect(() => {
    // if the user has selected a value for both dropdowns
    // proceed to return comp value
    if (
      Object.keys(yourSign).length !== 0 &&
      Object.keys(partnerSign).length !== 0
    ) {
      calculateComp();
    }
  }, [yourSign, partnerSign]);

  const calculateComp = () => {
    console.log(`your signs are: ${yourSign.rising}`);
    console.log(`partner signs are: ${partnerSign.rising}`);

    // loop through mock data and find your entry first
    let yourHoroscope = mockDataForHoroscopeMatches.filter(
      (sign) => sign.value == yourSign.rising
    );

    // check the compatibility mappings for a match with partner
    let isCompatible = checkComp(yourHoroscope[0].compatibilityMapping);
    setIsCompatible(isCompatible);
  };

  const checkComp = (compatibilityMapping) => {
    let partnerMapping = compatibilityMapping.filter(
      (sign) => sign.value == partnerSign.rising
    );

    return partnerMapping[0].compatible;
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
      </div>

      {yourSign.rising && (
        <div>
          <h1>Select your partner's signs</h1>
          <SelectComponent
            selectName={"rising"}
            type={"RISING"}
            yourSign={partnerSign}
            action={setPartnerSign}
          ></SelectComponent>
        </div>
      )}

      {isCompatible && <h1>Compatible</h1>}
      {!isCompatible && isCompatible != null && <h1>NOT compatible</h1>}
    </div>
  );
}

export default LandingPage;
