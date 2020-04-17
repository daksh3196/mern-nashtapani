const express=require('express')
require('dotenv').config()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const expressValidator = require('express-validator');

//import routes
const authRoutes=require('./routes/auth');
const userRoutes=require('./routes/user');
const categoryRoutes=require('./routes/category');

//app
const app = express();

//mongo connect
mongoose.connect(
  process.env.DATABASE, {
  	useNewUrlParser: true,
   	useCreateIndex: true
  })
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});


// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());


//middleware routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);


const port=process.env.PORT || 8000

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})

