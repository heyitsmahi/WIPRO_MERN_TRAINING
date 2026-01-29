import React from 'react'
import {FaRupeeSign} from "react-icons/fa";
const product = () => {
  return (
    <div>
      <h3>{props.proctname}</h3>
      {/*to add react icons i.e price icon we have to install - npm install react-icons --save*/}
      {/* */}

      <p>Price : <FaRupeeSign/>{props.productprice}</p>
    </div>
  )
}

export default Product


/*Create two components employee and employeelist(name ,role) and display the name and role with the event button which will display the name of employee if he is promoted*/