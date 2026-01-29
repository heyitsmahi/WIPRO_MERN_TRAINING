import React from 'react'
function Login() {
const login = () =>{
    localStorage.setItem("loggedIn" ,true);
    alert("Login Successful")
} 
  return (
    <div>
      <button onClick={login}>Login </button>
    </div>
  )
}
export default Login
