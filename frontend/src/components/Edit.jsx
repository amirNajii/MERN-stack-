import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const [image,setImage]=useState("")
    const [prev,setPrev]=useState("")
    const [title,setTitle]=useState("")
     const navigate=useNavigate()
     const {id}=useParams()


     const loadImage=(e)=>{
        const image=e.target.files[0];
        setImage(image)
        setPrev(URL.createObjectURL(image))
      }
   

      useEffect(()=>{
        getItembyId()
      },[])

    const getItembyId=async()=>{
    const response=await axios.get(`http://localhost:5080/products/${id}`)
    setImage(response.data.image);
    setTitle(response.data.name);
    setPrev(response.data.url)
   }
 

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const formData=new FormData()
        formData.append("file",image)
        formData.append("title",title)
        try {
            const res=await axios.put(`http://localhost:5080/products/${id}`,formData,
            {
                headers:{"Content-Type":"moltipart/form-Data"}
              }
            )
            
        } catch (error) {
            console.log(error);
        }
       navigate("/")
    }
  return (
    <div>
         <div className='formdiv'>
        <form className='form' onSubmit={handleSubmit}>
          
           <label htmlFor='title'> Edit Title</label>
            <input 
            name='title' 
            onChange={(e)=>setTitle(e.target.value)}
            id='title'
            value={title}
             
             />
      
        
            <label htmlFor='photo'>Edit photo</label>
            <input type='file' id='photo'
              
              onChange={ loadImage}
            />
         
         
            <button>Edited.</button>
          

        </form>
        <>
        {
            prev?(
                <img className='images' src={prev}></img>
            ):("")
        }
        </>
    </div>
    </div>
  )
}

export default Edit