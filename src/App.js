import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState("true");

  function handleToggle() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={darkMode ? "container" : "light container"}>
      <Header toggle={handleToggle} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
