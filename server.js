const express = require('express')
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// app middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json())
app.get('/',(req,res)=>{
  try{
    res.json("get requests")
  }
  catch(e){
    console.log(e);
  }
})

app.listen(8000,()=>{
    console.log('app is running at 8000');
})