const express = require('express');
const { connectBD } = require('./services/dbConnection');
const excelRoutes = require('./routes/excelRoutes');
require('dotenv').config();

const app = express();

connectBD();

app.use(express.json());

app.use('/api/excel', excelRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

app.use(express.static('public'));

module.exports = app;