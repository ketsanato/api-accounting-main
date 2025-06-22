const mysql = require("mysql2");

const conn = mysql.createConnection({ host: "localhost",
  user: "root",
  password: "",
  database: "kcl"
});

module.exports.get = async (req, res) => {
  try {
conn.connect(function(err) {
  if (err) throw err;
  conn.query("select * from tb_loan_transaction_history", function (err, result) {
    if (err) throw err;
 res.status(201).json({
      data: result,
      message: "Create successfully",
      status: true,
    });
  });
});

   
  } catch (error) {
    console.error("Error creating Currency:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};