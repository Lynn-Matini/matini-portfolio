function Certifications(props) {
  return (
    <div className="certification hoverable">
      <img src={props.logo} className="svg" />
      <h2>{props.title}</h2>
      <h4>
        {props.issuer}, {props.issueDate}
      </h4>
    </div>
  );
}

export default Certifications;
