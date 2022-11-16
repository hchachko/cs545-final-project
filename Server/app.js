const express = require('express');
const app = express();
const configRoutes = require("./routes");
const cors = require('cors');

app.use(cors());
app.use(express.json());

configRoutes(app);

app.listen(4000, () =>{
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:4000');
});