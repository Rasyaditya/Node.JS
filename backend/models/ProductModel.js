import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Product = db.define('Product', {
    name:DataTypes.STRING,
    image:DataTypes.STRING,
    url:DataTypes.STRING
},{
    freezeTableName: true
});

export default Product;

(async()=>{
    await db.sync();
})();