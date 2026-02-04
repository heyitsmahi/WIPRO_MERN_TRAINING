//oldest way
/*function fetchData(callback){
    setTimeout(()=>{
    callback("Data recieved");
    },2000);
}
fetchData((data)=>{
    console.log(data);
}); */

//most industy used..
async function getData(){
    const data=await fetchData("Recieved");
    console.log(data);
}
getData();
