// Load Data
var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");
// Routing
module.exports = function(app){
    //GET requests, display JSON of tables or waitlist
    app.get("/api/tables", function(req,res){
        res.json(tableData);
    });
    app.get("/api/waitlist", function(req,res){
        res.json(waitListData);
    });
    //POST requests, when user submits a form/data to the server
    //submits a JSON object, which is pushed to the tableData array
    // if the table data IS FULL, push the request to the waitListData array
    app.post("/api/tables", function(req,res){
        // if table data isnt full, push the request to the tableData array
        if(tableData.length < 5){
            tableData.push(req.body);
            res.json(true);
        }
        else{
            waitListData.push(req.body);
            res.json(false);
        }
    });
    // Empty arrays of data
    app.post("/api/clear", function(){
        tableData = [];
        waitListData = [];
        console.log(tableData);
    })

}