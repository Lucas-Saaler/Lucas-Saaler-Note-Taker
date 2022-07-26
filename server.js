// Required libraries
const express =require("express")
const htmlRoute=require("./routes/htmlRoutes")
const apiRoute=require("./routes/apiRoutes")
// Port. If Heroku, process.env.PORT, if local, 3001
const PORT= process.env.PORT || 3001
const app= express()

// Makes the public folder public
app.use(express.static("public"))

// Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Using the helper files for handling GET and POST requests from html and API respectively. HTML loaded last to ensure landing page doesn't overwrite API requests
app.use(apiRoute)
app.use(htmlRoute)

app.listen(PORT,()=>{
    console.log("App is listening on Port http://localhost:"+ PORT)
})