require('dotenv').config()
require('./config/db.config')

const express = require('express')
const app = express()



//ENABLE FRONT+BACK
const cors = require('cors')
app.use(cors({
  credentials: true, 
  origin: ['http://localhost:3000']
}))


//REQ.BODY + BODY.PARSER => to get serverside console.log!! ALWAYS
app.use(
  express.urlencoded({
    extended: true
  })
)
//Use body parser. To be able parse post request information
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()) //crucial for post requests from client

//TO BUNDLE FRONT In BACK
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//ROUTES
const productRoutes = require('./routes/product.routes')
app.use('/api', productRoutes)

const orderRoutes = require('./routes/order.routes')
app.use('/api', orderRoutes)

//LISTEN
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server LH running on port ${PORT}`))