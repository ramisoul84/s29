import "./home.scss";
const Home = (props) => {
  return (
    <section id="home">
      <div className="home-hello">
        <div className="hello-sq"> </div>
        <p>
          hello!
          <br />
          We are a multidiciblinary
          <br />
          designe team, ready to realize
          <br /> your ambition visions!
        </p>
      </div>
      {/*   <div className="home-txt">
        <h5>SERVICES{props.scrollPos}</h5>
        <p>
          S29.designis here to cover all your creative needs. We offer a wide
          range of services, including <span className=""></span>
          <span className="lcd">
            <span className="color1">game design, </span>
            <span className="color2">web design, </span>
            <span className="color3">brand design, </span>
            <span className="color4">arch-viz, </span>
          </span>{" "}
          and <span className="lcd color5">architecture</span>. With our diverse
          skill set, we're well-equipped to handle projects that cut across
          various industries. So whether you are in gameing, web development,
          branding, or architecture, we've got you covered.
        </p>
      </div>
      */}
    </section>
  );
};
export default Home;
