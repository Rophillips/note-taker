//require dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

//initialize express create server
const app = express();

//middleware 
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
const PORT = process.env.PORT || 8080;


//tell server to listen
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


//module.exports = app => {
// function readDB() {
//     var notes;

//     fs.readFile("db/db.json", "utf8", (err, data) => {
//         if (err) throw err;


//         notes = JSON.parse(data);

//     }).then()
//     return notes;
// }
// console.log(readDB())
//Api get route
app.get("/api/notes", (req, res) => {
    //read db.json file and save as json
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;


        notes = JSON.parse(data);
    res.json(notes);
    })
});
//index html route

app.get("/", (req, res) => {
    console.log(__dirname)
    console.log("hi")
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

//notes html route
app.get("/notes", (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, "/public/notes.html"));

});



//set up to get note with id url parameter
app.get("/api/notes/:id", (req, res) => {
    res.json(notes[req.params.id]);
});

//Api post route
app.post("/api/notes", (req, res) => {
    let notes;
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        notes = JSON.parse(data);
        let newNote = req.body;
        notes.push(newNote);
        //res.jason(newNote);
        updateDb(notes);
        res.send("Added new note: " + newNote.title);
    })

});

//return the note id
app.delete("/api/notes/:id", (req, res) => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;


        notes = JSON.parse(data);
        notes.forEach((note, i) => {
            if (note.id == req.params.id) {
                notes.splice(i, 1)
                updateDb(notes);
            }
        })
    // notes.splice(req.params.id, 1);
    // updateDb(notes);
    res.send ("Deleted note " + req.params.id);
    console.log("Deleted note " + req.params.id);
});
});

function updateDb(notes) {
    fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
        if (err) throw err;
        return true;
    });
}



    //}



