const mysql = require('mysql');


//Mysql config
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

//Check connect
connection.connect(error=>{
    if(error) throw error
    console.log("Express is running!!")
})

module.exports = connection;