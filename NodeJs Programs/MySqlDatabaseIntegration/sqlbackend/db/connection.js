const mysql=require("mysql2/promise");
require("dotenv" ).config(); //It will read the .env file and load the environment variables into process.env

const pool=mysql.createPool({   //createconnection to manage single connection to the database, createPool allows us to manage multiple connections efficiently.
host:process.env.DB_HOST,
user:process.env.DB_USER,
password:process.env.DB_PASSWORD,
database:process.env.DB_NAME,
connectionLimit:10, //optional: limits maximum number of connections in the pool
waitForConnections:true, //if all connections are in use, the pool will queue the connection request and call it when a connection is released.
})

module.exports=pool;