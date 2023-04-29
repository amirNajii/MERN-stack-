import { Sequelize } from "sequelize";
import db from "../config/database.js";

import { DataTypes } from "sequelize";

const Product=db.define("product",
{
    name:DataTypes.STRING,
    image:DataTypes.STRING,
    url:DataTypes.STRING
},
{freezeTableName:true})


export default Product;

(
    async()=>{
        await db.sync()
    }
)()