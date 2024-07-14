import React, { useState } from 'react';
const Achievement = () => {
  const [usn, setUsn] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
       // Send the data to the server to store in the sportsscore table
       fetch('http://localhost:5000/data1', { // Ensure this URL is correct
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ usn,description, category }),
     })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

const handleSubmit1 = (event) => {
  event.preventDefault();
  
     // Send the data to the server to store in the sportsscore table
     fetch('http://localhost:5000/data2', { // Ensure this URL is correct
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ usn,description, category }),
   })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
};

  return (
    <div>
      <h2>Achievements</h2>
      <form onSubmit={handleSubmit}>
        <label>
          USN:
          <input type="text" value={usn} onChange={(e) => setUsn(e.target.value)} required />
        </label>
        <br />
        <label>
          Name:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select an option</option>
            <option value="Sports">Sports</option>
            <option value="Webinar">Webinar</option>
            <option value="Project">Project</option>
            <option value="Hackathon">Hackathon</option>
            <option value="Mooc">Mooc</option>
            <option value="Cultural">Cultural</option>
            <option value="Cocurriculum">Cocurriculum</option>
          </select>
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>




    </div>

  );
};
export default Achievement ; 