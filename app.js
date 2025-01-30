const express=require('express');
const app=express();
app.listen(3000,()=>{
  console.log('server running on port 3000')
})

app.get('/get-list',async(req,res)=>{
  const data={
    name:"abc",
    email:"abc@gmailc.com",
    mobil:8989898989
  }
  res.status(200).json({message:"successfully",data})
})