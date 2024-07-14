const express = require('express');
const app = express();
const port = 5000;
const db = require('./db'); // Import the database connection
const cors = require('cors'); // Import cors middleware

// Import all routes
//const achievementRoutes = require('./routes/Achievement');
//const adminRoutes = require('./routes/Admin');
//const attendanceRoutes = require('./routes/Attendance');
//const coanalysisRoutes = require('./routes/Coanalysis');
const dataRoutes = require('./routes/Data');
//const parentRoutes = require('./routes/Parent');
const resultRoutes = require('./routes/Result');

app.use(express.json());
app.use(cors()); // Use cors middleware

// Mount all routes under the '/api' path
//app.use('/api/achievement', achievementRoutes(db));
//app.use('/api/admin', adminRoutes(db));
//app.use('/api/attendance', attendanceRoutes(db));
//app.use('/api/coanalysis', coanalysisRoutes(db));
app.use('/api/data', dataRoutes(db));
//app.use('/api/parent', parentRoutes(db));
app.use('/api/result', resultRoutes(db));

app.listen(port, () => {
  console.log('Server is running on http://localhost:${port}');
});