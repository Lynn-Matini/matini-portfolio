function Certifications(props) {
  return (
    <div className="certification hoverable">
      <img loading="lazy" width="100px" height="50px" src={props.logo} />
      <h2>{props.title}</h2>
      <h4>
        {props.issuer}, {props.issueDate}
      </h4>
    </div>
  );
}

export default Certifications;
