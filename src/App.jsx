import { useState } from "react";
import "./App.css";
import DetailsForm from "./components/DetailsForm";
import SkillsForm from "./components/SkillsForm";
import ProjectsForm from "./components/ProjectsForm";
import TemplatePicker from "./components/TemplatePicker";
import Portfolio from "./components/Portfolio";

function App() {
  const [details, setDetails] = useState({ name: "", title: "", about: "", email: "" });
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [template, setTemplate] = useState("t-classic");

  return (
    <div className="app">
      <div className="forms">
        <h1>ProfileForge</h1>
        <DetailsForm details={details} setDetails={setDetails} />
        <SkillsForm skills={skills} setSkills={setSkills} />
        <ProjectsForm projects={projects} setProjects={setProjects} />
        <TemplatePicker template={template} setTemplate={setTemplate} />
      </div>
      <div>
        <h3>Preview</h3>
        <Portfolio details={details} skills={skills} projects={projects} template={template} />
      </div>
    </div>
  );
}

export default App;