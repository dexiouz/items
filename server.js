const 
  express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require("body-parser");  
  items = require("./routes/api/items"),
  app = express();
  path = require('path');

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

// Serve static assests if in production
if(process.env.NODE_ENV === 'production'){
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


  
const port = process.env.PORT || 5000
app.listen( port, () => console.log(`Server started on port ${port}`))