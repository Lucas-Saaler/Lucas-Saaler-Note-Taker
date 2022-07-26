// Required libraries
const router=require("express").Router()
const fs=require("fs")
const db=require("../db/db.json")
// Id maker
const uuid = require("../helper/uuid")
// Router
router.get("/api/notes",(req,res)=>{
     res.json(db)
})

// Handles POST operations
router.post("/api/notes", (req, res)=>{
    console.log(req.body)
    const {title, text} = req.body;
    const newNoteWID = {
        title,
        text,
        id: uuid()
    }
     // Adds new note to array
    db.push(newNoteWID)
     // Stringifies array
    const notesString = JSON.stringify(db,null,'\t')
//     Writes stringified array to db.json
    fs.writeFile("./db/db.json", notesString, (err) =>
//     If there's an error, throw the error. Else, log success
    err
      ? console.error(err)
      : console.log(
          "Saved new note to database!"
        )
  )
     res.json(db)
})

module.exports=router