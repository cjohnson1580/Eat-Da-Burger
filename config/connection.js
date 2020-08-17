const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        database: "b49middx6khdvr5m",
        user: "hzbc0jnvpgc54w3p",
        port: 3306,
        password: "y0n1vptnsxkojkqf"
    });
}


module.exports = connection;
