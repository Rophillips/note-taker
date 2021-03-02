//require dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

//initialize express create server
const app = express();

//set static folder to public 
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000;

//tell server to listen
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


//set up to get API notes route 
app.get("api/notes", function (req, res) {
    //  //read db.json file and save as json
    res.json(notes);
});


app.post("/api/notes", function(req,res) {
    let newNote = req.body;
    notes.push(newNote);
    updateDb();
    return console.log("Added new note: "+newNote.title);
})




