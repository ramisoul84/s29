import "./filters.scss";
const Filters = () => {
  return (
    <div className="filters">
      <p>Choose types you want to see</p>
      <div class="checkbox-wrapper">
        <label class="checkbox">
          <input
            class="checkbox__trigger visuallyhidden"
            type="checkbox"
            id="game"
            name="game"
          />
          <span class="checkbox__symbol">
            <svg
              aria-hidden="true"
              class="icon-checkbox"
              width="28px"
              height="28px"
              viewBox="0 0 28 28"
            >
              <path d="M4 14l8 7L24 7"></path>
            </svg>
          </span>
          <p class="checkbox__textwrapper">game design</p>
        </label>
        <label class="checkbox">
          <input
            class="checkbox__trigger visuallyhidden"
            type="checkbox"
            id="web"
            name="web"
          />
          <span class="checkbox__symbol">
            <svg
              aria-hidden="true"
              class="icon-checkbox"
              width="28px"
              height="28px"
              viewBox="0 0 28 28"
            >
              <path d="M4 14l8 7L24 7"></path>
            </svg>
          </span>
          <p class="checkbox__textwrapper">web design</p>
        </label>
        <label class="checkbox">
          <input
            class="checkbox__trigger visuallyhidden"
            type="checkbox"
            id="brand"
            name="brand"
          />
          <span class="checkbox__symbol">
            <svg
              aria-hidden="true"
              class="icon-checkbox"
              width="28px"
              height="28px"
              viewBox="0 0 28 28"
            >
              <path d="M4 14l8 7L24 7"></path>
            </svg>
          </span>
          <p class="checkbox__textwrapper">brand design</p>
        </label>
      </div>
    </div>
  );
};
export default Filters;
