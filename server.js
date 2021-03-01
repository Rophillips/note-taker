//require dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

//initialize express create server
const app = express();

//set static folder to public 
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

//tell server to listen
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
