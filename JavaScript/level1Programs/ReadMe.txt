What is JavaScript ?
JavaScript is a high-level, interpreted programming language that allows you to make web pages
 interactive and dynamic. 
 Alongside HTML and CSS, it is one of the core technologies of web development.
	• HTML → Builds the structure of a webpage (headings, paragraphs, buttons).
	• CSS → Adds style and design (colors, fonts, layouts).
	• JavaScript → Adds behavior and interactivity (clicks, animations, live updates).
Who Created JavaScript?
	• Originally named Mocha, then LiveScript, and finally renamed to JavaScript.
	• Amazingly, the first version was developed in just 10 days.
	• Today, JavaScript is maintained by ECMA International under the standard ECMAScript (ES).
Latest versions (ES6 and beyond) introduced features like let, const, arrow functions, promises, and classes — making JavaScript more powerful and modern.
Why Use JavaScript?
JavaScript is used everywhere — from simple web pages to large-scale applications.
Here’s what you can do with it:
	1. Interactive Web Pages – Respond to user actions like clicks, hover, or form submissions.
	2. DOM Manipulation – Dynamically change HTML content or CSS styles.
	3. Web Applications – Build apps like Gmail, Facebook, or e-commerce websites.
	4. Server-Side Development – Use Node.js for backend tasks like APIs and databases.
	5. Games and Animations – Create browser games and animations.
Event Handling – React to keyboard, mouse, or page events.

Javascript keywords &  reserved words
break, continue, if else, throw
void , class , for , try , cons, let , var 

identifiers : names you are giving to a variable ,
             function , classes etc.

const  - fixed value

student = []

variable names use camelCase, for eg rollNo
to declare the variable we can either let or var
 
 generally we prefer to use let keyword to declare a variable

 let var1  =10;
 const pi = 3.14;


 a company wants to automate monthly salary calculation for employees based on their working days, basic pay and bonus
 . create a script file to 
 a) calculate gross salary
 b) apply tax deduction 
 c) display employee net salary 

 DOM  stands for document object model
The DOM is a programming interface that allows js to access , change add or remove html elements on a webpage
HTML page is converted into a tree structure that java script can control

HTML is a static (all alone we cannot change by itself)

--------------------------------------------------------



Functional Programming and Pure Functions.

What is pure functions  ---    where we focus on what to do rather then how to do 
traditional functions --- like for , foreach --
 here we  focus on what to do and also on how to do (logic)


Pure functions are like : - map(), reduce() and filter()

map() -> when we want to transform each element in an array and it returns a new array.

filter() -- when we want to select specific elements that meets a condition or when we want to Extract the data 

reduce() -- when we want to return a single value after accumulating array values that we have or we want to 
summarize or to get aggregate data 

== We want to calculate the total sum of 10 natural numbers  sum += sum +n

----------------------------------------------------


JSON -- It is a lightweight data- interchange format used to store and exchange data between client and Server
though there are different other sources too -- xml , csv ,mysql

format of json   :   "key":"stringvalue"  or    "key":numbervalue

JSON.parse(jsonString) -- converts json string to js object -- mainly we use when receiving the data from a server
JSON.stringify(obj) -- converts js object to json string -- mainly used when sending data to a server.



Asynchronous / Synchronous Based:

Sysnchronous --  when one execution will get completed then the other execution will take place --- Blocker 
               line by line , if there is any blocker then in that case the rest of the code will not work  

			   it is slow in process

			   XMLHttpRequest(sync)

Asynchronous -- It's a non-blocker , next code runs immediately 
We can implement asynchronous using
fetch() ,  or using new Promise(resolve,reject) and  fetch() , asyn/await , XMLHttpRequest(async)

basically fetch() will return a Promise Object and 
		 .then() will be called on that Promise object when it's fulfilled ( means data is received) 
		 .catch() will run if the Promise is rejected(due to wrong api , network error)


        fetch is a built in api that returns a promise object for http calls and new Promise() is used to manually return an object




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Products with Names</title>
</head>
<body>

<h2>Products Price Calculation</h2>

<script>
    // Array of products (name + price)
    const products = [
        { name: "Mobile", price: 16000 },
        { name: "Laptop", price: 55000 },
        { name: "TV", price: 30000 },
        { name: "Headphones", price: 5000 },
        { name: "Washing Machine", price: 25000 }
    ];

    // Display original products
    products.forEach(p =>
        document.writeln(p.name + " : " + p.price + "<br>")
    );
    document.writeln("<br>");

    // Total price before discount
    const totalBeforeDiscount = products.reduce(
        (sum, p) => sum + p.price, 0
    );
    document.writeln("Total Price Before Discount: " + totalBeforeDiscount + "<br><br>");

    // Apply 10% discount
    const discountedProducts = products.map(p => ({
        name: p.name,
        price: p.price - (p.price * 0.10)
    }));

    document.writeln("Discounted Products:<br>");
    discountedProducts.forEach(p =>
        document.writeln(p.name + " : " + p.price + "<br>")
    );
    document.writeln("<br>");

    // Total price after discount
    const totalAfterDiscount = discountedProducts.reduce(
        (sum, p) => sum + p.price, 0
    );
    document.writeln("Total Price After Discount: " + totalAfterDiscount + "<br><br>");

    // Filter products with price > 2000 after discount
    const filteredProducts = discountedProducts.filter(p => p.price > 2000);

    document.writeln("Products greater than 2000 after discount:<br>");
    filteredProducts.forEach(p =>
        document.writeln(p.name + " : " + p.price + "<br>")
    );
    document.writeln("<br>");

    // Total price of filtered products
    const totalFilteredPrice = filteredProducts.reduce(
        (sum, p) => sum + p.price, 0
    );
    document.writeln("Total Price of items greater than 2000: " + totalFilteredPrice);
</script>

</body>
</html>



 Anurag Verma . 15:55
let empName = prompt("Enter Employee Name:");
let basicSalary = Number(prompt("Enter Basic Monthly Salary:"));
let workingDays = Number(prompt("Enter Number of Working Days:"));
let bonus = Number(prompt("Enter Bonus Amount:"));
let totalDays = 30;
let grossSalary, tax, netSalary;
function calculateGrossSalary() {
        let perDaySalary = basicSalary / totalDays;
        let earnedSalary = perDaySalary * workingDays;
        grossSalary = earnedSalary + bonus;
    }
function calculateTax() {
        if (grossSalary <= 25000) {
            tax = grossSalary * 0.05;
        } else {
            tax = grossSalary * 0.10;
        }
    }
function calculateNetSalary() {
        netSalary = grossSalary - tax;
    }
calculateGrossSalary();
calculateTax();
calculateNetSalary();

    document.writeIn("Employee Name : " + empName + "<br>");
    document.writeIn("Gross Salary  : ₹" + grossSalary + "<br>");
    document.writeIn("Tax Deduction : ₹" + tax + "<br>");
    document.writeIn("Net Salary    : ₹" + netSalary);

Reethu M 15:56
let employee = {
    calculateSalary: function () {
        let name = document.getElementById("ename").value;
        let days = parseInt(document.getElementById("days").value);
        let basic = parseFloat(document.getElementById("basic").value);
        let bonus = parseFloat(document.getElementById("bonus").value);
        // Gross salary
        let grossSalary = (days * basic) + bonus;
        // Tax deduction (10%)
        let tax = grossSalary * 0.10;
        // Net salary
        let netSalary = grossSalary - tax;
        document.getElementById("result").innerHTML =
            "Employee Name: " + name + "<br>" +
            "Gross Salary: ₹" + grossSalary + "<br>" +
            "Tax Deduction: ₹" + tax + "<br>" +
            "Net Salary: ₹" + netSalary;
    }
};




html file:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Salary Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h2>Employee Salary Calculator</h2>

    <label>Working Days:</label>
    <input type="number" id="days" placeholder="Enter working days">

    <label>Basic Salary:</label>
    <input type="number" id="basic" placeholder="Enter basic salary">

    <button onclick="calculateSalary()">Calculate Salary</button>

    <div class="result">
        <p>Gross Salary: ₹ <span id="gross">0</span></p>
        <p>Tax Deduction: ₹ <span id="tax">0</span></p>
        <p><strong>Net Salary: ₹ <span id="net">0</span></strong></p>
    </div>
</div>

<script src="salary.js"></script>
</body>
</html>


css file:

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #4facfe, #00f2fe);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background: white;
    padding: 30px;
    border-radius: 10px;
    width: 300px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    text-align: center;
}

input {
    width: 90%;
    padding: 8px;
    margin: 8px 0;
}

button {
    padding: 10px 15px;
    background: #4facfe;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #007bff;
}

.result {
    margin-top: 15px;
    font-size: 16px;
}



js file:

function calculateSalary() {
    let workingDays = Number(document.getElementById("days").value);
    let basicSal = Number(document.getElementById("basic").value);

    let bonus = 0.10 * basicSal;

    let grossSal = (basicSal / 22) * workingDays + bonus;

    let tax = 0.10 * grossSal;
    let netSal = grossSal - tax;

    document.getElementById("gross").innerText = grossSal.toFixed(2);
    document.getElementById("tax").innerText = tax.toFixed(2);
    document.getElementById("net").innerText = netSal.toFixed(2);
}