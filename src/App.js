import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./sections/Home";
import Work from "./sections/Work";
import About from "./sections/About";
import Contact from "./sections/Contact";
import SideNav from "./components/SideNav";
const App = () => {
  const [currentScrollpos, setCurrentScrollpos] = useState(0);
  useEffect(() => {
    const updateScrollpos = (ev) => {
      let y = window.scrollY;
      setCurrentScrollpos(y);
    };
    window.addEventListener("scroll", updateScrollpos);
    return () => {
      window.removeEventListener("scroll", updateScrollpos);
    };
  }, []);
  const content = (
    <div>
      <Header scrollPos={currentScrollpos} />
      <Home scrollPos={currentScrollpos} />
      <Work scrollPos={currentScrollpos} />
      <About scrollPos={currentScrollpos} />
      <Contact scrollPos={currentScrollpos} />
      <SideNav />
    </div>
  );
  return content;
};

export default App;
