import { useState } from "react";
import "./App.css";
import { MainSlider } from "./components/MainSlider";
import { Switches } from "./components/Switches";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <div className="wrapper">
          <MainSlider />
          <Switches />
        </div>
      </div>
    </>
  );
};
