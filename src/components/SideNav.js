import style from "../assets/data/style.json";
import "./sideNav.scss";
const SideNav = () => {
  const root = document.querySelector(":root");
  const setVariables = (vars) =>
    Object.entries(vars).forEach((v) => root.style.setProperty(v[0], v[1]));

  return (
    <aside>
      <button className="btn" onClick={() => setVariables(style[0])}>
        1
      </button>
      <button className="btn" onClick={() => setVariables(style[1])}>
        2
      </button>
    </aside>
  );
};
export default SideNav;
