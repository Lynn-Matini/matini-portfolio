function Projects(props) {
  return (
    <div className="project hoverable">
      <div className="project-card">
        <div className="preview-container">
          {/* <iframe src={props.webLink} title={props.title} scrolling="no" /> */}
        </div>
      </div>
      <div className="project-content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>

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
