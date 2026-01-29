function Languages(props) {
  return (
    <div className="language hoverable">
      <h3>{props.language}</h3>
      <h4>{props.proficiency}</h4>
    </div>
  );
}

export default Languages;
