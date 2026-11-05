function TemplatePicker({ template, setTemplate }) {
  return (
    <div className="panel">
      <h3>3. Template</h3>
      <select value={template} onChange={(e) => setTemplate(e.target.value)}>
        <option value="t-classic">Classic</option>
        <option value="t-dark">Dark</option>
        <option value="t-warm">Warm</option>
      </select>
    </div>
  );
}

export default TemplatePicker;