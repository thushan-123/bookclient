import React,{useState} from 'react';

import AlertBox  from './AlertBox';
import {Link, json,useNavigate} from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  
  const navigate = useNavigate()


  const handleLogin =async (event)=>{
    event.preventDefault();
    const dataset = {username,password}
    console.log(dataset);

    try{
      await axios.post("http://20.211.153.55/api/User/Checkdata/",dataset)
      .then((res)=>{
        console.log(res)
        const status = res.data["status"]
        const userid= res.data["user_id"]
        const username = res.data[ "username" ]
        const webtoken = res.data['webtoken']
        const email = res.data[  "email" ]
        const mobile = res.data['mobile']
        if(status==="valied"){
            window.alert("sucess")
            
           // navigate(`/?userId=${userId}`);
           sessionStorage.setItem( "LoggedIn",true)
           sessionStorage.setItem("username",username)
           sessionStorage.setItem("userId",userid)
           sessionStorage.setItem( "WebToken",webtoken)
           sessionStorage.setItem("email",email)
           sessionStorage.setItem("mobile",mobile)

           navigate('/Home')
           


          }
          else{
            //window.alert("invalied username or password")
            setShowAlert(true)
          }
      })
      .catch(err=> console.error(err))

    }catch(err){

    }

  }

  return (
    <div>
    
    {showAlert && <AlertBox />}
  
    <div className="min-h-screen flex items-top justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Logn in to your Book Salling  account</h2>
        </div>
        <form  className="mt-8 space-y-6" onSubmit={handleLogin} method="post">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input id="username" name="username" type="text" autoComplete="username" required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <br/>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
          </div>

          <div>
            <button   className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Login
            </button>
            

          </div>
        </form>
        <br/>
        <Link to="/singin">
            <button   className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
            </Link>
      </div>
    </div>
    </div>
  );
};

export default Login;
