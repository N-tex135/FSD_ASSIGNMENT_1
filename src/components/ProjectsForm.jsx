import { useState } from "react";

function ProjectsForm({ projects, setProjects }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addProject = () => {
    if (title.trim() === "") return;
    setProjects([...projects, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="panel">
      <h3>Projects</h3>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Project name" />
      <label>Short description</label>
      <textarea rows="2" value={desc} onChange={(e) => setDesc(e.target.value)} />
      <p>
        <button onClick={addProject}>Add project</button>
      </p>
      {projects.map((p, i) => (
        <div className="item" key={i}>
          <b>{p.title}</b>
          <button className="small" onClick={() => removeProject(i)}>Remove</button>
          <div>{p.desc}</div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsForm;