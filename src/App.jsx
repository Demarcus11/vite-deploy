import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cardFront from "./assets/bg-card-front.png";
import { Component } from "./components/Component";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Component />
    </>
  );
}
