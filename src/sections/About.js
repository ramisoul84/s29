import TeamMember from "../components/TeamMember";
import members from "../assets/data/members.json";
import teamPhoto from "../assets/img/team.png";
import "./about.scss";
const About = (props) => {
  const colors = [
    "#73c046",
    "#cb866d",
    "#60a53a",
    "#af715d",
    "#3c6b26",
    "#73473c",
  ];
  const randomNum = () => {
    return Math.floor(Math.random() * 6);
  };
  return (
    <section id="about">
      <div className="about">
        <h5>ABOUT</h5>
        <p>
          S29.designis here to cover all your creative needs. We offer a wide
          range of services, including
          <span style={{ color: colors[randomNum()] }}> game design, </span>
          <span style={{ color: colors[randomNum()] }}>web design, </span>
          <span style={{ color: colors[randomNum()] }}>brand design, </span>
          <span style={{ color: colors[randomNum()] }}>arch-viz, </span>
          and <span style={{ color: colors[randomNum()] }}>architecture</span>.
          With our diverse skill set, we're well-equipped to handle projects
          that cut across various industries.
        </p>
      </div>
      <div className="team">
        <h5 className="team-title">TEAM</h5>
        <div className="team-grid">
          {members.map((e) => {
            return <TeamMember member={e} />;
          })}
        </div>
      </div>
      <img className="team-pic" src={teamPhoto} alt="team-pic" />
      <div className="philosophy">
        <h5>OUR DESIGN PHLIOSOPHY</h5>
        <p>
          S29.designis here to cover all your creative needs. We offer a wide
          range of services, including
          <span style={{ color: colors[randomNum()] }}> game design, </span>
          <span style={{ color: colors[randomNum()] }}>web design, </span>
          <span style={{ color: colors[randomNum()] }}>brand design, </span>
          <span style={{ color: colors[randomNum()] }}>arch-viz, </span>
          and <span style={{ color: colors[randomNum()] }}>architecture</span>.
          With our diverse skill set, we're well-equipped to handle projects
          that cut across various industries.
        </p>
      </div>
    </section>
  );
};
export default About;
