const express = require('express');

const mysql = require('mysql');

const PORT = process.env.PORT || 3000;

const app = express();

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password123',
    database:'sentiment_analysis'
});

connection.connect(function(err){
    (err)?console.log(err):console.log(connection);
});

var router = express.Router();

router.get("/", function(req, res, next) {
    console.log(req.query);
    connection.query('INSERT into sentiment_score_table (input_text,sentiment_score,ADD_DATE) values("'+ req.query.searchText + '","' +
    req.query.searchScore + '", current_date() )'),
    function(err,data) {
        (err)?res.send(err):console.log({data});
        input_text   
    }    

let sql = `SELECT * FROM sentiment_score_table `;
connection.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
  return (res.json({records:results}));
});

});

app.listen(PORT, () => {
    console.log('App running on port ${PORT}');
});

module.exports = router;
