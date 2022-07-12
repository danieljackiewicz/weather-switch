import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export const MainSlider = () => {
  return (
    <div className="main-slider">
      <Box width={500}>
        <Slider sx={{ color: "darkblue" }} defaultValue={15} />
      </Box>
    </div>
  );
};
