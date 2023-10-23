import { useRef, useEffect, useState } from "react";
import "./header.scss";
const Header = (props) => {
  const scrollRef = useRef(0);
  const [firstLoad, setFrirstLoad] = useState(true);
  useEffect(() => {
    function onScroll() {
      scrollRef.current = window.scrollY;
      if (window.scrollY >= 200) setFrirstLoad(false);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header ref={scrollRef}>
      <div
        className={`gradient-1 ${
          scrollRef.current < 200 && firstLoad
            ? "down-1"
            : scrollRef.current < 200
            ? "right"
            : "left"
        }`}
      ></div>
      <div
        className={`gradient-2 ${
          scrollRef.current < 200 && firstLoad
            ? "down-2 show-nav"
            : scrollRef.current < 200
            ? "right"
            : "left"
        }`}
      >
        <div className="grid-2">
          <a
            href="#home"
            className={` ${scrollRef.current < 200 ? "logo" : "logo-big"}`}
          >
            <p>
              s29<span className="design">.design</span>
            </p>
          </a>
          <div
            className={` ${
              scrollRef.current < 200 ? "nav-links" : "hide-links"
            }`}
          >
            <a href="#work" className="link">
              work
            </a>
            <a href="#about" className="link">
              about
            </a>
            <a href="#contact" className="link">
              contact
            </a>
          </div>
        </div>
      </div>
      <div
        className={`gradient-3 ${
          scrollRef.current < 200 && firstLoad
            ? "down-3"
            : scrollRef.current < 200
            ? "right"
            : "left"
        }`}
      ></div>
      <div
        className={`gradient-4 ${scrollRef.current < 200 ? "down-4" : "up-4"}`}
      ></div>
      <div
        className={`gradient-5 ${scrollRef.current < 200 ? "down-5" : "up-5"}`}
      ></div>
      <div
        className={`gradient-6 ${scrollRef.current < 200 ? "down-6" : "up-6"}`}
      ></div>
    </header>
  );
};
export default Header;
