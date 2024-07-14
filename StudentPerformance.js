import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentPerformance = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // First, update the student performance data
    fetch('http://localhost:5000/update-studentperformance', { method: 'POST' })
      .then((response) => response.json())
      .then(() => {
        // After updating, fetch the updated student performance data
        fetch('http://localhost:5000/studentperformance')
          .then((response) => response.json())
          .then((data) => {
            if (Array.isArray(data)) {
              setData(data);
            } else {
              console.error('Fetched data is not an array:', data);
              setData([]);
            }
          })
          .catch((error) => console.error('Error fetching data:', error));
      })
      .catch((error) => console.error('Error updating data:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">StudentPerformance Page</h2>
      <table className="table table-success table-striped-columns">
        <thead className="thead-dark">
          <tr>
            {data.length > 0 && Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentPerformance;
