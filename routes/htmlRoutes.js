// Required libraries
const router=require("express").Router()
const path=require("path")

// Handles GET operations
router.get("/notes",(req,res)=>{

    res.sendFile(path.join(__dirname,'../public/notes.html') )
})

// Landing page
router.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html') )
})

module.exports=router