//require dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

//initialize express create server
const app = express();

//middleware 
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 8080;


//tell server to listen
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



module.exports = app => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;

        var notes = JSON.parse(data);
        //index html route
        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });

        //notes html route
        app.get("/notes", (req, res) => {
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        })

        //Api get route
        app.get("api/notes", (req, res) => {
            //read db.json file and save as json
            res.json(notes);
        });

        //set up to get note with id
        app.get("/api/notes/:id", (req, res) => {
            res.json(notes[req.params.id]);
        });

        //Api post route
        app.post("/api/notes", (req, res) => {
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
            return console.log("Added new note: " + newNote.title);
            //res.jason(newNote);
        });

        //return the note id
        app.delete("/api/notes", (req, res) => {
            notes.splice(req.params.id, 1);
            updateDb();
            console.log("Deleted note" + req.params.id);
        });


    });
}



