import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import ProductRoute from './router/ProductRoute.js'


const app=express();
app.use(cors()) 
app.use(express.json())
app.use(fileUpload())
app.use(express.static("public"))


app.use(ProductRoute)




app.listen(5080,console.log("server is running on port 5080"))