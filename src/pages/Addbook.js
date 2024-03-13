import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Redirect, useParams,useNavigate } from 'react-router-dom'
import Sessionchecker from './Sessionchecker';

export default function Addbook() {
  
  const [author,setAuthor]= useState('');
  const [bookname,setBookname] = useState('');
  const [price,setPrice] = useState("");
  const [description,setDescription]= useState("")
  const [imgfile,setImage]=useState("")
  const userid=sessionStorage.getItem("userId")

 
  
  const navigate = useNavigate()

  const uploading= async(event)=>{
    event.preventDefault();
    
    const dataset ={userid,author,bookname,price,description}
    console.log(dataset)

    try{
      const fromdata= new FormData()
      fromdata.append("file",imgfile)
      
      
      

      //await axios.post("http://localhost:8000//Book/Uploading/",formData, { headers:{'Content-Type': 'multipart/form-data'}})
     /* await axios.post("http://localhost:8000/Book/Uploading/",fromdata, {headers: {'Content-Type': 'multipart/form-data'}})

      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
      */
      await axios.post("http://localhost:8000//Book/Uploading/Data/",dataset).then((res)=>{
        console.log(res)
        if(res.data.status==="inserted"){
          window.alert("Insert Complete")
          navigate("/home")
        }

      }).catch((err)=>console.log(err))

    }catch(error){}
  }

  return (
    <div>
    <Sessionchecker/>
        <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Book Sailing</span>
        </Link>
        <button 
          data-collapse-toggle="navbar-solid-bg" 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
          aria-controls="navbar-solid-bg" 
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link to="/Home" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Services" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Services
              </Link>
            </li>
            <li>
              <Link to="/Addbook" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Add books
              </Link>
            </li>
            <li>
              <Link to="/Myaccount" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                My Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="min-h-screen flex items-top justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add a  New Book</h2>
        </div>
        <form onSubmit={uploading} className="mt-8 space-y-6" method="post">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="bookname" className="sr-only">Book name</label>
              <input id="bookname" name="username" type="text"  required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Book Name" value={bookname} onChange={e => setBookname(e.target.value)} />
            </div>
            <br/>
            <div>
              <label htmlFor="author" className="sr-only">Author</label>
              <input id="author" name="text" type="text"  required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
            <br/>    
                <label htmlFor="description" className="sr-only">email</label>
              <input id="description" name="text" type="text"  required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="description" value={description} onChange={e => setDescription(e.target.value)} />
            <br/>
              <label htmlFor="price" className="sr-only">mobile</label>
              <input id="price" name="price" type="number"  required
               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
           {/*
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">
             Upload image
            </label>
            <input   accept=".png,.jpg,." name="imgfile"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            id="imgfile"
             type="file"
               onChange={e =>setImage(e.target.value[0])}
            />  */}
            </div>
          </div>

          <div>
            <button  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Upload
            </button>
          </div>
        </form>
        
      </div>
      
    </div>





    </div>
  )
  }
