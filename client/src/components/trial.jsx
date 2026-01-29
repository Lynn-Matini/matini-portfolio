export default function Trial() {
  return (
    <div className="project-card">
      <div className="project-preview">
        <div className="preview-container">
          <iframe src="https://eruditedigital.com" scrolling="no" />
        </div>
      </div>
      <div className="project-content">
        <h3>Erudite Digital Africa</h3>
        <p>
          A comprehensive fintech startup website featuring a blog, form
          submission system, and pricing details.
        </p>
        <div className="project-tech">
          <span>Next.js</span>
          <span>Node.js</span>
          <span>MongoDB</span>
        </div>
      </div>
    </div>
  );
}
