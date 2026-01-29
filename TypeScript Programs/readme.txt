const anExampleVariable = "Hello World"
console.log(anExampleVariable)
class User {
    username: string;
    password: string;
 // input method
    input(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
    // method to display output
    output() {
        console.log("Username:", this.username);
        console.log("Password:", this.password);
    }
}
let u1 = new User();
u1.input("Jayaa", "12345");
u1.output();

Abhiyanshu kumar bhatt . 12:52
class User {
    username: string;
    password: string;
    inputCredential(): void {
        this.username = prompt("Enter username:") || "";
        this.password = prompt("Enter password:") || "";
    }
    display(): void {
        console.log("Username is : " + this.username);
        console.log("Password is : " + this.password);
    }
}
const u1 = new User();
u1.inputCredential();
u1.display();


class User {
    username: string;
    password: string;
    inputCredential(): void {
        this.username = prompt("Enter username:") || "";
        this.password = prompt("Enter password:") || "";
    }
    display(): void {
        console.log("Username is : " + this.username);
        console.log("Password is : " + this.password);
    }
}
const u1 = new User();
u1.inputCredential();
u1.display();