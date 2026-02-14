//going to take care of request coming from user or client and send response back to the client, it will interact with the database to perform CRUD operations.
const pool=require("../db/connection"); //importing the connection pool to interact with the database.

exports.getAllUsers=async(req,res,next)=>{
    try{
        const [rows]=await pool.query("SELECT * FROM users limit ? offset ?",[10,0]); //query to get all users from the database.
        res.status(200).json(rows); //sending response back to the client with status code 200 and the data in JSON format.
    }catch(error){
        next(error); //if there is an error, pass it to the error handling middleware.
    };
};

exports.createUsers = async (req,res,next) => {
    try{
      // const{name,email} = req.body; // Extract name and email from the request body
       /* await pool.query("INSERT INTO users (name, email) VALUES (?, ?)", [req.body.name, req.body.email]);
        console.log(req.body.name, req.body.email);
        res.status(200).json({message: "User created successfully"});
    }*/
   const connection=await pool.getConnection(); // Get a connection from the pool
 await connection.beginTransaction(); // Start a transaction
 await connection.query("INSERT INTO users (name, email) VALUES (?, ?)", [req.body.name, req.body.email]); // Insert user into the database
 await connection.commit();
 res.status(200).json({message: "User created successfully"});
    }


    //to fetch the passbook entry
    //in between somebody has done the deposit
    //also in betwenn another user is withdrawing the amount

    //for performance we have tgo apply the indexing on the table with hte command CREATE INDEX idx_email ON users(email); //this will create an index on the email column of the users table, which will improve the performance of the query that is searching for a user by email.
catch(error){
    next(error);
}
};

/*exports.updateUsers = async (req,res,next) => {
    try{
      // const{name,email} = req.body; // Extract name and email from the request body
        await pool.query("DELETE users SET name(?, ?)", [req.body.name, req.body.email]);
        console.log(req.body.name, req.body.email);
        res.status(200).json({message: "User created successfully"});
    }
catch(error){
    next(error);
}
};*/