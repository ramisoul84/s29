import { useState } from "react";
import Spectrum from "../components/Spectrum";
import Filters from "../components/Filters";

import "./work.scss";
const Work = (props) => {
  const [show, setShow] = useState("spect");
  return (
    <section id="work">
      <div className="work-head">
        <p className="work-title">WORK</p>
        <p
          className="spectrum-title"
          style={show === "spect" ? { color: "white" } : {}}
          onClick={() => setShow("spect")}
        >
          SPECTRUM
        </p>
        <p
          className="filters-title"
          style={show === "filt" ? { color: "white" } : {}}
          onClick={() => setShow("filt")}
        >
          FILTERS
        </p>
      </div>

      {show === "spect" ? <Spectrum /> : <Filters />}
    </section>
  );
};
export default Work;
