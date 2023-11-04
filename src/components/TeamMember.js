import "./teammember.scss";

const TeamMember = ({ member }) => {
  return (
    <div className="team-member" style={{ borderColor: member.color }}>
      <div className="member-info">
        <img
          src={require("../assets/img/" + member.img + ".png")}
          alt={member.img + "pic"}
        />
        <ul className="skills" style={{ color: member.color }}>
          {member.skills.map((e) => {
            return <li>#{e}</li>;
          })}
        </ul>
      </div>
      <h3 style={{ color: member.color }}># {member.name}</h3>
      <p>{member.text}</p>
    </div>
  );
};

export default TeamMember;
