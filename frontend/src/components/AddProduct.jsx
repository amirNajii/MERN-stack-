import axios from 'axios'
import React, { useState } from 'react'
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const [image,setImage]=useState("")
    const [prev,setPrev]=useState("")
    const [title,setTitle]=useState("")

    const navigate=useNavigate()

    const loadImage=(e)=>{
      const image=e.target.files[0];
      setImage(image)
      setPrev(URL.createObjectURL(image))
    }
 
    const handleForm=async(e)=>{
        e.preventDefault();
        const formData=new FormData()
        formData.append("file",image);
        formData.append("title",title)
        
        const response=await axios.post("http://localhost:5080/products",formData,
          {
            headers:{"Content-Type":"moltipart/form-Data"}
          }
        )
        navigate('/')
        toast(response.data.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    }
     
  return (
    <div className='formdiv'>
        <form className='form' onSubmit={handleForm}>
          
           <label htmlFor='title'>Product Title</label>
            <input name='title' 
             onChange={(e)=>setTitle(e.target.value)}
             id='title' />
      
        
            <label htmlFor='photo'>photo</label>
            <input type='file' id='photo'
              onChange={loadImage}
            />
         
         
            <button>Send</button>
          

        </form>
        <>
        {
            prev?(
                <img className='images' src={prev}></img>
            ):("")
        }
        </>
    </div>
  )
}

export default AddProduct