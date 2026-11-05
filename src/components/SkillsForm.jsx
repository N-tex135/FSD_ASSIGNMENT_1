import { useState } from "react";

function SkillsForm({ skills, setSkills }) {
  const [text, setText] = useState("");

  const addSkill = () => {
    if (text.trim() === "") return;
    setSkills([...skills, text.trim()]);
    setText("");
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="panel">
      <h3>2. Skills</h3>
      <div className="row">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="e.g. Python" />
        <button onClick={addSkill}>Add</button>
      </div>
      <div className="chips">
        {skills.map((skill, i) => (
          <span key={i}>
            {skill} <b className="remove" onClick={() => removeSkill(i)}>×</b>
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsForm;