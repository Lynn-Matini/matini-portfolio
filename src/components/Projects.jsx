function Projects(props) {
  return (
    <div className="project hoverable">
      {/* <iframe
        src="https://subscription-management-sys.vercel.app/"
        style={{ border: 'none' }}
        title={props.title}
        scrolling="no"
      /> */}
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href={props.link}>Live Demo</a>
    </div>
  );
}

export default Projects;
