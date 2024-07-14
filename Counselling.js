import React, { useState } from 'react';

const Councelling = () => {
  const [usn, setUsn] = useState('');
  const [cdate, setCdate] = useState('');
  const [ctime, setCtime] = useState('');
  const [issue, setIssue] = useState('');
  const [solution, setSolution] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Send the data to the server to store in the studentcouncelling table
    fetch('http://localhost:5000/councelling', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        usn,
        cdate,
        ctime,
        issue,
        solution,
        status,
      }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Councelling</h2>
      <form onSubmit={handleSubmit}>
        <label>
          USN:
          <input type="text" name="usn" value={usn} onChange={(e) => setUsn(e.target.value)} required style={{ marginBottom: '20px' }} />
        </label>

        <div style={{ marginBottom: '10px' }}></div>

        <label>
          CDate:
          <input type="date" name="cdate" value={cdate} onChange={(e) => setCdate(e.target.value)} required style={{ marginBottom: '20px' }} />
        </label>

        <div style={{ marginBottom: '10px' }}></div>

        <label>
          CTime:
          <input type="time" name="ctime" value={ctime} onChange={(e) => setCtime(e.target.value)} required style={{ marginBottom: '20px' }} />
        </label>

        <div style={{ marginBottom: '10px' }}></div>

        <label>
          Issue:
          <textarea name="issue" value={issue} onChange={(e) => setIssue(e.target.value)} required style={{ marginBottom: '20px' }} />
        </label>

        <div style={{ marginBottom: '10px' }}></div>

        <label>
          Solution:
          <textarea name="solution" value={solution} onChange={(e) => setSolution(e.target.value)} required style={{ marginBottom: '20px' }} />
        </label>

        <div style={{ marginBottom: '10px' }}></div>

        <label>
          Status:
          <input type="text" name="status" value={status} onChange={(e) => setStatus(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Councelling;