const express =require("express")
const PORT= process.env.PORT || 3001
const htmlRoute=require("./routes/htmlRoutes")
const app= express()

app.use(express.static("public"))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(htmlRoute)

app.listen(PORT,()=>{
    console.log("App is listening on Port http://localhost:"+ PORT)
})