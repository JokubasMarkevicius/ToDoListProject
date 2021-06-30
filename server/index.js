const express = require("express");
const cors = require('cors');
const router = require("./router");
const app = express();

const options = {
  origin: 'http://localhost:4200'
};

app.use(cors(options));
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log('Server is running');
})