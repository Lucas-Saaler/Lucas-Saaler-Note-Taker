// Required libraries
const router=require("express").Router()
const fs=require("fs")
const db=require("../db/db.json")
// Router
router.get("/api/notes",(req,res)=>{
     res.json(db)
})

// Handles POST operations
router.post("/api/notes", (req, res)=>{
    console.log(req.body)
     // Adds new note to array
    db.push(req.body)
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