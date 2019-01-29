//Dependency
var path = require("path");


//Routing
module.exports = function(app){
    // GET requests, handles when user visits a page
    // when route is /tables get table.html
    app.get("/tables", function(req,res){
        res.sendFile(path.join(__dirname, "../public/tables.html"));
    });
    //when route is /reserve get reserve.html
    app.get("/reserve", function(req,res){
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    })
    //if no matching route is found, default to home
    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}