import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, useSearchParams, useNavigate } from "react-router-dom";
import axios from 'axios'

export default  function Singin() {
  const [username,setUsername]= useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail] = useState("");
  const [mobile,setMobile]= useState("")
  
 
  const navigate = useNavigate()
  

     const clicksub= async (event)=>{
      event.preventDefault();
      
    const dataset ={username,password,email,mobile}
    console.log(dataset)

    try{
        await axios.post("https://localhost:8000/User/Getdata/",dataset)
        .then((res)=>{
          console.log(res)
          const status = res.data["status"]
          
          //const userId= res.data["user_id"]
          const handleResponse = (status) => {} 
          if(status==="inserted"){
            alert("Sign up Successfully! Please Login.")
            navigate("/")

          }
          else{
            alert("Internal Server Error")
          }

        })
        .catch(err=> console.error(err))

    }catch(err){

    }
  }
  
  
  return (
    
    <div className="min-h-screen flex items-top justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create a new account</h2>
        </div>
        <form onSubmit={clicksub} className="mt-8 space-y-6" method="post">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input id="username" name="username" type="text"  required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <br/>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password"  required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <br/>    
                <label htmlFor="email" className="sr-only">email</label>
              <input id="email" name="email" type="email"  required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
            <br/>
              <label htmlFor="mobile" className="sr-only">mobile</label>
              <input id="mobile" name="mobile" type="number"  required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="mobile" value={mobile} onChange={e => setMobile(e.target.value)} />

            </div>
          </div>

          <div>
            <button  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
          </div>
        </form>
        
      </div>
      
    </div>
  )
}
