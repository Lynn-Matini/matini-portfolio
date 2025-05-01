function Projects(props) {
  return (
    <div className="project hoverable">
      <div className="preview-container">
        <iframe src={props.webLink} title={props.title} scrolling="no" />
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className="project-links">
        <a href={props.gitHubLink} className="link-btn">
          Github
        </a>
        <a href={props.webLink} className="link-btn">
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default Projects;
