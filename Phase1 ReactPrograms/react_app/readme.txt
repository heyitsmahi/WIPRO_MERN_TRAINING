import MyButton from "./MyButton";
export default function Card(obj)
{
    return (
        
        <div className=" border border-gray-300 w-70 rounded p-2 m-2 
         bg-gray-50 shadow-lg flex flex-col gap-4 transition-all duration-200 cursor-pointer hover:bg-neutral-300 ">
            <div className="card_header">
                <h className="font-bold">{obj.cardTitle}</h>
            </div>
            <div className = "card_body">
                <h> {obj.cardDescription}</h>
            </div>
            <div  className="card_footer">
                 <MyButton title={"Click Here.."}></MyButton>
                 <MyButton title ={"Read More.."}></MyButton>
            </div>
             
        
        </div>

    )
}


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from '../../vite_project/src/components/Header'
import Footer from '../../vite_project/src/components/Footer'
import Card from '../../vite_project/src/components/Card'
import MyButton from '../../vite_project/src/components/Button'
import './App.css'

function App() {


  return (
    <>
      <div>
        <Header />
        <h3>Hi , This is the app content.</h3>
        <p> React app content can be added here.</p>
        <div className='flex flex-wrap'>
        <Card cardTitle="React Js Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Full Stack Java Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="MEAN Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="MERN Course" cardDescription="Module frontend course for 40 days"></Card>
         <Card cardTitle="Dev OPs Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Cloud Computing Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Dot Net Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Python Course" cardDescription="Module frontend course for 40 days"></Card>
          <Card cardTitle="Azure  Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Angular Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Data Analyst Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Data Science Course" cardDescription="Module frontend course for 40 days"></Card>
        </div>
       
        <Footer />
        
      </div>
      
    </>
  )
}

export default App



const MyButton = (obj) => {
    return <button className="bg-blue-400 m-1.5
    txt white px-2 py-1 rounded-2xl cursor-pointer hover:bg-amber-600 transition-all duration-500 " > 
    {obj.title}</button>;
};
export default MyButton;




import MyButton from "./Button";

export default function Card(obj)
{
    return (
        
        <div className=" border border-gray-300 w-70 rounded p-2 m-2 
         bg-gray-50 shadow-lg flex flex-col gap-4 transition-all duration-200 cursor-pointer hover:bg-neutral-300 ">
            <div className="card_header">
                <h className="font-bold">{obj.cardTitle}</h>
            </div>
            <div className = "card_body">
                <h> {obj.cardDescription}</h>
            </div>
            <div  className="card_footer">
                 <MyButton title={"Click Here.."}></MyButton>
                 <MyButton title ={"Read More.."}></MyButton>
            </div>
             

        
        </div>


    )
}



import MyButton from "./Button";

function Footer()
{
return (

    <footer className="  my-4 px-2 py-5 w-full flex items-center justify-between bg-neutral-900 text-amber-50" >
      <h1 className ="text-xl font-bold"> Great Learning</h1>
      <p className=" font-light underline">Made with great efforts 😊</p>
      <MyButton title="Contact Us" />
</footer>
);


}
export default Footer;



function Header()
{
    function get_brand_name()
    {
        return "Learning React ";
    }
    let brand_name = "Great Learning";
return(
<div className=" p-5 border-b m-2 border-gray-300 w-full  px-2 py-5  bg-neutral-900 text-amber-50">

    <h1 className="text-2xl font-bold underline">Welcome to react basics</h1>

    <p className="font-light"> Wow , we are welcoming you on this website we have created</p>
    <h1> Brand Name : {brand_name}</h1>
       <h1> Topic : {get_brand_name()}</h1>
</div>

)
}
export default Header;