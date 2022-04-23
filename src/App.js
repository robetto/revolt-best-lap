import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Account from "./components/Account";
import Signup from "./components/Signup";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  const cursore = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    },
  };

  const textEnter = () => setCursorVariant("text");

  const textLeave = () => setCursorVariant("default");

  return (
    <div className="App">
      <motion.div
        className="cursor"
        variants={cursore}
        animate={cursorVariant}
      />
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
        Revolt
      </h1>
      <div className="contenuto"></div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/account" element={<Account />}></Route>
      </Routes>
    </div>
  );
}

export default App;
