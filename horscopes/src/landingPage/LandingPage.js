import React, { useState } from "react";
import "./LandingPage.css";
import SelectComponent from "./selectComponent/SelectComponent";

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

  const mockDataForHoroscopeMatches = [
    {
      name: "Aries",
      value: 1,
      compatibilityMapping: [
        {
          name: "Aries",
          value: 1,
          compatible: false,
        },
        {
          name: "Taurus",
          value: 2,
          compatible: false,
        },
        {
          name: "Gemini",
          value: 3,
          compatible: true,
        },
        {
          name: "Cancer",
          value: 4,
          compatible: false,
        },
        {
          name: "Leo",
          value: 5,
          compatible: true,
        },
        {
          name: "Virgo",
          value: 6,
          compatible: false,
        },
        {
          name: "Libra",
          value: 7,
          compatible: false,
        },
        {
          name: "Scorpio",
          value: 8,
          compatible: false,
        },
        {
          name: "Sagittarius",
          value: 9,
          compatible: true,
        },
        {
          name: "Capricorn",
          value: 10,
          compatible: false,
        },
        {
          name: "Aquarius",
          value: 11,
          compatible: true,
        },
        {
          name: "Pisces",
          value: 12,
          compatible: false,
        },
      ],
    },
    {
      name: "Taurus",
      value: 2,
      compatibilityMapping: [
        {
          name: "Aries",
          value: 1,
          compatible: false,
        },
        {
          name: "Taurus",
          value: 2,
          compatible: false,
        },
        {
          name: "Gemini",
          value: 3,
          compatible: false,
        },
        {
          name: "Cancer",
          value: 4,
          compatible: true,
        },
        {
          name: "Leo",
          value: 5,
          compatible: false,
        },
        {
          name: "Virgo",
          value: 6,
          compatible: true,
        },
        {
          name: "Libra",
          value: 7,
          compatible: false,
        },
        {
          name: "Scorpio",
          value: 8,
          compatible: false,
        },
        {
          name: "Sagittarius",
          value: 9,
          compatible: false,
        },
        {
          name: "Capricorn",
          value: 10,
          compatible: true,
        },
        {
          name: "Aquarius",
          value: 11,
          compatible: false,
        },
        {
          name: "Pisces",
          value: 12,
          compatible: true,
        },
      ],
    },
    {
      name: "Gemini",
      value: 2,
      compatibilityMapping: [
        {
          name: "Aries",
          value: 1,
          compatible: true,
        },
        {
          name: "Taurus",
          value: 2,
          compatible: false,
        },
        {
          name: "Gemini",
          value: 3,
          compatible: false,
        },
        {
          name: "Cancer",
          value: 4,
          compatible: false,
        },
        {
          name: "Leo",
          value: 5,
          compatible: true,
        },
        {
          name: "Virgo",
          value: 6,
          compatible: false,
        },
        {
          name: "Libra",
          value: 7,
          compatible: true,
        },
        {
          name: "Scorpio",
          value: 8,
          compatible: false,
        },
        {
          name: "Sagittarius",
          value: 9,
          compatible: false,
        },
        {
          name: "Capricorn",
          value: 10,
          compatible: false,
        },
        {
          name: "Aquarius",
          value: 11,
          compatible: true,
        },
        {
          name: "Pisces",
          value: 12,
          compatible: false,
        },
      ],
    },
  ];

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

      {yourSign.rising && partnerSign.rising && (
        <div>
          <button onClick={calculateComp}>Check Compatibility</button>
        </div>
      )}

      {isCompatible && <h1>You two are compatible</h1>}
      {!isCompatible && isCompatible != null && (
        <h1>You two are NOT compatible</h1>
      )}
    </div>
  );
}

export default LandingPage;
