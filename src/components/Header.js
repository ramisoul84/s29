import { useRef, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import "./header.scss";
const Header = () => {
  const scrollRef = useRef(0);
  const [firstLoad, setFrirstLoad] = useState(true);
  const [menu, setMenu] = useState(true);
  useEffect(() => {
    function onScroll() {
      const list = document.querySelector(".menu-list");
      const sections = document.querySelectorAll("section");
      scrollRef.current = window.scrollY;
      if (window.scrollY >= 180) setFrirstLoad(false);
      if (window.scrollY <= 180) {
        list.classList.remove("menu-list-down");
        setMenu(true);
        sections.forEach((e) => (e.style.filter = "blur(0rem)"));
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const toggleMenu = () => {
    const list = document.querySelector(".menu-list");
    const sections = document.querySelectorAll("section");
    list.classList.contains("menu-list-down")
      ? list.classList.remove("menu-list-down")
      : list.classList.add("menu-list-down");
    setMenu(!menu);
    menu
      ? sections.forEach((e) => (e.style.filter = "blur(0.3rem)"))
      : sections.forEach((e) => (e.style.filter = "blur(0rem)"));
  };
  return (
    <header ref={scrollRef}>
      <div
        className={`gradient-1 ${
          scrollRef.current < 180 && firstLoad
            ? "down-1"
            : scrollRef.current < 180
            ? "right"
            : "left-1"
        }`}
      ></div>
      <div
        className={`gradient-2 ${
          scrollRef.current < 180 && firstLoad
            ? "down-2"
            : scrollRef.current < 180
            ? "right"
            : "left-2-3 hide-link"
        }`}
      >
        <div className="grid-2">
          <a
            href="#home"
            className={` ${scrollRef.current < 180 ? "logo" : "logo-big"}`}
          >
            <p>
              s29<span className="design">.design</span>
            </p>
          </a>
          <div>
            {scrollRef.current < 180 ? (
              <div
                className={` ${
                  scrollRef.current < 180 ? "nav-links" : "hide-links"
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
            ) : menu ? (
              <RxHamburgerMenu className="menu" onClick={toggleMenu} />
            ) : (
              <AiOutlineClose className="menu" onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>
      <div className="menu-list">
        <ul>
          <li className="color1">
            <a href="#work">work</a>
          </li>
          <li className="color2">
            <a href="#about">about</a>
          </li>
          <li className="color3">
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
      <div
        className={`gradient-3 ${
          scrollRef.current < 180 && firstLoad
            ? "down-3"
            : scrollRef.current < 180
            ? "right"
            : "left-2-3"
        }`}
      ></div>
      <div
        className={`gradient-4 ${scrollRef.current < 180 ? "down-4" : "up-4"}`}
      ></div>
      <div
        className={`gradient-5 ${scrollRef.current < 180 ? "down-5" : "up-5"}`}
      ></div>
      <div
        className={`gradient-6 ${scrollRef.current < 180 ? "down-6" : "up-6"}`}
      ></div>
    </header>
  );
};
export default Header;
