const express=require('express')
require('dotenv').config()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
//import routes
const userRoutes=require('./routes/user');

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


//middleware routes
app.use("/api", userRoutes);

const port=process.env.PORT || 8000

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})