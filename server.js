//require dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

//initialize express
const app = express();

//set static folder to public to join needed routes
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));