import express from "express"
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";

//middleware
app.use(express.json());
app.use(
  cors({
    origin:"http://localhost:3000"
  })
);
app.use(cookieParser())
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Credentials",true);
  next();
})




const port =8800;
app.listen(port,()=>{
  console.log(`Server ${port} is working!`)
})