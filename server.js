const 
  express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require("body-parser");  
  items = require("./routes/api/items"),
  app = express();

//body prser middlewre
app.use(bodyParser.json());

 
// DB CONFIG
const db = require('./config/keys').mongoURI;

// CONNECT MONGO DB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("mongo connected successfully"))
  .catch(err => console.log( err ))

//Use routes
app.use("/api/items", items)


  
const port = process.env.PORT || 4000
app.listen( port, () => console.log(`Server started on port ${port}`))