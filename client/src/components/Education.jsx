function Education(props) {
  return (
    <div className="education-item hoverable">
      <h2>{props.degree}</h2>
      <h3>{props.school}</h3>
      <h4>Status: {props.graduation}</h4>
      <p>{props.description}</p>
    </div>
  );
}

export default Education;
