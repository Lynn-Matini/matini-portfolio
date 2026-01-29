function Experience(props) {
  return (
    <div className="experience hoverable">
      <h2>{props.title}</h2>
      <h3>{props.company}</h3>
      <h4>{props.duration}</h4>
      <ul>
        {props.descriptions.map((desc, index) => {
          return <li key={index}>{desc}</li>;
        })}
      </ul>
    </div>
  );
}

export default Experience;
