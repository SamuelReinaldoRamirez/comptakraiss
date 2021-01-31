var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "compta_kraiss"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("SELECT * FROM orders", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });

        var sql = "UPDATE orders SET order_state = 5 WHERE order_id=1";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });

        con.query("SELECT * FROM orders", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });

    });