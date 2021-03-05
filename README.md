# note-taker


Description
Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

The application frontend has already been created, it's your job to build the backend and connect the two.

The following HTML routes should be created:

GET /notes - Should return the notes.html file.

GET * - Should return the index.html file

The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

The following API routes should be created:

GET /api/notes - Should read the db.json file and return all saved notes as JSON.

POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

User Story
AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

The app is deployed in Heroku under the name of glacial-beach-92039. The link is available in About section.

Run npm install to install all dependencies. To use the application locally, run node server.js in your CLI, and then open http://localhost:8080 in your preferred browswer. 

![image](https://user-images.githubusercontent.com/74886597/110139783-6a350b80-7da1-11eb-904c-235aadb66655.png)

![image](https://user-images.githubusercontent.com/74886597/110141050-c0567e80-7da2-11eb-8ab1-f56dfaaf545e.png)

