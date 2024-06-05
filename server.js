const express = require('express');
const cors = require('cors');
const xlsx = require('xlsx');
const path = require('path');
const app = express();


const excelFilePath = path.join(__dirname, 'data.xlsx');
const workbook = xlsx.readFile(excelFilePath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(worksheet);

app.use(cors());

app.get('/data', (req, res) => {
  res.json(data);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
