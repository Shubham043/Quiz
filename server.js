import  express  from 'express';
import morgan from 'morgan';
import  cors  from "cors";
const app = express();
import router from '../Quiz/routers/routes.js'

//connect database
import connect from './database/conn.js';


// app middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json())

app.use('/api',router)

app.get('/',(req,res)=>{
  try{
    res.json("get requests")
  }
  catch(e){
    console.log(e);
  }
})
// server should be start only when database is connected

connect().then(()=>{
    try{
        app.listen(8000,()=>{
            console.log('app is running at 8000');
        })
    }
    catch(error){
        console.log("cannot connect to database")
    }
}).catch(error=>{
    console.log("invalid database connection")
})

