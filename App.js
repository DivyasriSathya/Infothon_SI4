import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
//import DataComponent from './DataComponent';
//import Data from './Data';
import Coanalysis from './Coanalysis';
import Result from './Result';
import Attendance from './Attendance';
import Achievement from './Achievement';
import Parent from './Parent';
import Admin from './Admin';
import Data from './Data';
import StudentPerformance from './StudentPerformance';
import Counselling from './Counselling.js';

// Remove the duplicate import statement

const App = () => {
  const [role, setRole] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    if (role === 'admin' && id === 'manjuprasad32@gsss.edu.in' && password === '1234') {
      setIsLoggedIn(true);
    } else if (
      role === 'student' &&
      ['4GW22CI001', '4GW22CI002', '4GW22CI003', '4GW22CI004', '4GW22CI005', '4GW22CI006', '4GW22CI007', '4GW22CI008', '4GW22CI009', '4GW22CI010', '4GW22CI011', '4GW22CI012', '4GW22CI013', '4GW22CI014', '4GW22CI015', '4GW22CI016', '4GW22CI017', '4GW22CI018', '4GW22CI019', '4GW22CI020', '4GW22CI021', '4GW22CI022', '4GW22CI023', '4GW22CI024', '4GW22CI025', '4GW22CI026', '4GW22CI027', '4GW22CI028', '4GW22CI029', '4GW22CI030', '4GW22CI031', '4GW22CI032', '4GW22CI033', '4GW22CI034', '4GW22CI035', '4GW22CI036', '4GW22CI037', '4GW22CI038', '4GW22CI039', '4GW22CI040', '4GW22CI041', '4GW22CI042', '4GW22CI043', '4GW22CI044', '4GW22CI045', '4GW22CI046', '4GW22CI047', '4GW22CI048', '4GW22CI049', '4GW22CI050', '4GW22CI051', '4GW22CI052', '4GW22CI053', '4GW22CI054', '4GW22CI055', '4GW22CI056', '4GW22CI057', '4GW22CI058', '4GW22CI059', '4GW22CI060', '4GW22CI061', '4GW22CI062', '4GW22CI063', '4GW23CI400', '4GW23CI401', '4GW23CI402', '4GW23CI403', '4GW23CI404', '4GW23CI405', '4GW23CI406'].includes(id) && password === '5678'
    ) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials!');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="App">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Role:
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
            </select>
          </label>
          <br />
          <label>
            ID:
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  return (
    <Router>
      <div className="App">
        <h1 className="my-4">Welcome to the React App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/data1">Student Data</Link>
            </li>
            <li>
              <Link to="/coanalysis">Coanalysis</Link>
            </li>
            <li>
              <Link to="/result">Result</Link>
            </li>
            <li>
              <Link to="/attendance">Attendance</Link>
            </li>
            <li>
              <Link to="/achievement">Achievement</Link>
            </li>
            <li>
              <Link to="/parent">Parent</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/counselling">Counselling</Link>
            </li>
            <li>
              <Link to="/studentperformance">Student Performance</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/data1" element={<Data />} />
          <Route path="/coanalysis" element={<Coanalysis />} />
          <Route path="/result" element={<Result />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/counselling" element={<Counselling />} />
          <Route path="/studentperformance" element={<StudentPerformance />} />
        </Routes>
      </div>
    </Router>
  );
};



export default App;