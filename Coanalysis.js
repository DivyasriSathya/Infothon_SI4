import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Coanalysis = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/coanalysis')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


return (
    <div className="container mt-5">
      <h2 className="mb-4">Coanalysis Page</h2>
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

export default Coanalysis;