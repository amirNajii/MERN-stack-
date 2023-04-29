import express from 'express';
import { deleteProduct, getProduct, saveProduct, singleProduct, updateProduct } from '../Controller/ProductController.js';

const router=express.Router();

router.get("/products",getProduct);
router.post("/products",saveProduct)
router.get("/products/:id",singleProduct)
router.delete("/products/:id",deleteProduct)
router.put("/products/:id",updateProduct)




export default router;