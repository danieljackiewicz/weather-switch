import { useState } from "react";
import { Light } from "./conditions/Light";
import { Moderate } from "./conditions/Moderate";
import { Heavy } from "./conditions/Heavy";
import { Off } from "./conditions/Off";

export const Fog = () => {
  const conditions = ["off", "light", "moderate", "heavy"];
  const [mode, setMode] = useState("off");

  const handleClick = () => {
    const index = conditions.indexOf(mode);
    const nextIndex = index + 1 > 3 ? 0 : index + 1;
    const nextMode = conditions[nextIndex];
    setMode(nextMode);
  };

  return (
    <div>
      <div className="button-name">Fog</div>
      <button
        className={mode === "off" ? "button" : "button active-button"}
        onClick={handleClick}
      >
        {mode === "off" ? (
          <Off />
        ) : mode === "light" ? (
          <Light />
        ) : mode === "moderate" ? (
          <Moderate />
        ) : (
          <Heavy />
        )}
      </button>
    </div>
  );
};
