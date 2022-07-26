const router=require("express").Router()
const fs=require("fs")
const db=require("../db/db.json")

router.get("/api/notes",(req,res)=>{
     res.json(db)
})


router.post("/api/notes", (req, res)=>{
    console.log(req.body)
    db.push(req.body)
    const notesString = JSON.stringify(db,null,'\t')
    fs.writeFile("./db/db.json", notesString, (err) =>
    err
      ? console.error(err)
      : console.log(
          "Saved new note to database!"
        )
  )
     res.json(db)
})

module.exports=router