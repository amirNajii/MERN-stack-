import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {  toast } from 'react-toastify';


const ProductList = () => {
    const[prd,setPrd]=useState([])
    
    useEffect(()=>{
        product()
    },[])
      
    const product=async()=>{
        const response=await axios.get("http://localhost:5080/products")
        setPrd(response.data)
    }
   
  
    const handleDelete=async(pid)=>{
        const resp=await axios.delete(`http://localhost:5080/products/${pid}`)
        toast(resp.data.msg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            product()
    }
     
   

  return (
    <div className='contilist'>
        {
            prd.map(p=>(<div key={p.id} className='product'>
                <img src={p.url}/>
                <p>{p.name}</p>
               <div>
                <Link className='link' onClick={()=>handleDelete(p.id)}>Delete</Link>
                <Link className='link' to={`/edit/${p.id}`}>Edit</Link>
               </div>
            </div>))
        }
        
    </div>
  )
}

export default ProductList