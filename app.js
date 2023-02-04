const db = require("./db");
var express = require("express");
var app = express();
var cors = require('cors')
app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.post("/api/signup", (req, res, next) => {
  var sql = `INSERT INTO user (username,password) VALUES ("${req.body.username}","${req.body.password}")`
  var params = [req.params.id]
  db.run(sql, params, (err, row) => {
      if (err) { 
        res.status(400).json({"error":err.message});
        return;
      }
      console.log("Hello!")
      res.json({
          "message":"Sign-up Successful",
          "data":row
      })
    });
});