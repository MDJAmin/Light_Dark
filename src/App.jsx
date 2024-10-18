import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import "./App.css";
import { Toggle } from "./components/Toggle";

export const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <h1>This Will Change Color <br /> Automatically! <span>(☞ﾟヮﾟ)☞</span> </h1>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
    </div>
  );
};
