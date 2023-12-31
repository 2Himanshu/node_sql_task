const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
var corsOption = {
    origin: 'http://localhost:8081'
}

app.use(express.json());
app.use(cors(corsOption));

// db connection
require('./config/dbConfig.js')

const prodRouter = require('./routes/productRoutes.js')
const orderRouter = require('./routes/orderRoutes.js')

app.use('/api/products',prodRouter)
app.use('/api/order',orderRouter)

// 
require('./utils/modelRelationShip.js').ModelRelationShip()

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{ 
    console.log(`running on port ${PORT}`);
})

