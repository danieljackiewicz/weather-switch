import React from "react";
import { Fog } from "./Fog";
import { Turbulence } from "./Turbulence";

export const Switches = () => {
  return (
    <>
      <div className="switches">
        <Turbulence />
        <Fog />
      </div>
    </>
  );
};
