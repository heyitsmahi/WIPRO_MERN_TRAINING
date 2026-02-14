Activity 2: when customer is placing an order
 
Validate input
Check the availability of that product
Reduce product stock - 4
Create order record
Create order items
Commit transaction
 
Create two tables
Product (id , name , price , stock)
Order (id, custname , totalamount, created_at Timestamp)
 
Order_items(id , order_id ,product_id,quantity, foreign key (order_id) references orders(id),foreign key (product_id) references products(id)
 
.env
Connection
Middleware / validateOrder.js  (name, )
 
Controller with Transaction (begin transaction and check the stock & calculate total , reduce the stock(update),  insert order record, insert order items
 
Await connection.commit();
 
Or else it will go to the catch
Await connection.rollback();
 const connection =  await pool.getConnection();
       await connection.beginTransaction();
       //Logic to insert user into users table
         await connection.query("INSERT INTO users (name, email) VALUES (?, ?)", [req.body.name, req.body.email]);
         await connection.commit();
         res.status(200).json({message: "User created successfully"});