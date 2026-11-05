function DetailsForm({ details, setDetails }) {
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div className="panel">
      <h3>1. Details</h3>
      <label>Name</label>
      <input name="name" value={details.name} onChange={handleChange} />
      <label>Title</label>
      <input name="title" value={details.title} onChange={handleChange} />
      <label>About you</label>
      <textarea name="about" rows="3" value={details.about} onChange={handleChange} />
      <label>Email</label>
      <input name="email" value={details.email} onChange={handleChange} />
    </div>
  );
}

export default DetailsForm;