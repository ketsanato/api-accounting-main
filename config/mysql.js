 mysql = require("mysql2");
module.exports={
  host: "localhost",
  user: "root",
  password: "",
  database: "kcl"
}

const conn = mysql.createConnection({ host: "localhost",
  user: "root",
  password: "",
  database: "kcl"
});


module.exports.query=async (sql)=>{

await conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});

}






