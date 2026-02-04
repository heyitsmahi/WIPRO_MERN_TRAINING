//using promise 

const login =()=> new Promise(resolve=>{
    setTimeout(()=>{
        console.log("Login success");
        resolve();
    },2000)
});
const fetchProfile =()=> new Promise(resolve=>{
    setTimeout(()=>{
        console.log("Profile Fetch");
        resolve();
    },2000)
});
const fetchOrders =()=> new Promise(resolve=>{
    setTimeout(()=>{
        console.log("Orders Fetch");
        resolve();
    },2000)
});
login().then(()=>fetchProfile())
.then(()=>fetchOrders())
.catch(err=>console.error(err));


/*const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Login success");
      resolve();
    }, 2000);
  });
};
const fetchProfile = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Profile fetched");
      resolve();
    }, 2000);
  });
};
const fetchOrders = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Orders fetched");
      reject();
    }, 2000);
  });
};
login()
  .then(() => fetchProfile())
  .then(() => fetchOrders())
  .then(() => console.log("All done"))
  .catch(err => console.log("Error:", err));*/ 