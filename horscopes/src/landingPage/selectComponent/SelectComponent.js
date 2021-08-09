import React from "react";
import "./SelectComponent.css";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function SelectComponent({ selectName, type, yourSign, action }) {
  console.log("child render");

  return (
    <div>
      <InputLabel id={selectName}>{type}</InputLabel>
      <Select
        labelId={selectName}
        value={yourSign[`${selectName}`]}
        onChange={(event) =>
          action({ ...yourSign, [selectName]: event.target.value })
        }
      >
        <MenuItem value={1}>Aries (March 21 - April 19)</MenuItem>
        <MenuItem value={2}>Taurus (April 20 - May 20)</MenuItem>
        <MenuItem value={3}>Gemini (May 21 - June 21)</MenuItem>
        <MenuItem value={4}>Cancer (June 22 - July 22)</MenuItem>
        <MenuItem value={5}>Leo (July 23 - August 22)</MenuItem>
        <MenuItem value={6}>Virgo (August 23 - September 22)</MenuItem>
        <MenuItem value={7}>Libra (September 23 - October 23)</MenuItem>
        <MenuItem value={8}>Scorpio (October 24 - November 22)</MenuItem>
        <MenuItem value={9}>Sagittarius (November 23 - December 21)</MenuItem>
        <MenuItem value={10}>Capricorn (December 22 - January 19)</MenuItem>
        <MenuItem value={11}>Aquarius (January 20 - February 18)</MenuItem>
        <MenuItem value={12}>Pisces (February 19 - March 20)</MenuItem>
      </Select>
    </div>
  );
}

export default SelectComponent;
