function Portfolio({ details, skills, projects, template }) {
  return (
    <div className={"portfolio " + template}>
      <h1>{details.name || "Your Name"}</h1>
      <h3>{details.title}</h3>
      <p>{details.about}</p>

      {skills.length > 0 && (
        <>
          <h2>Skills</h2>
          <div className="chips">
            {skills.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        </>
      )}

      {projects.length > 0 && (
        <>
          <h2 className="gap">Projects</h2>
          {projects.map((p, i) => (
            <div className="item" key={i}>
              <b>{p.title}</b>
              <div>{p.desc}</div>
            </div>
          ))}
        </>
      )}

      {details.email && <p className="gap">Contact: {details.email}</p>}
    </div>
  );
}

export default Portfolio;