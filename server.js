const express = require('express');
const app = express();
// const Message = require('./db/Message');
const db = require("./db/config")
const Message =require('./db/Message')
const bodyparser = require("body-parser")

app.use(bodyparser.json());

const port = 3000;

app.get("/api/messages",function(req,res,next){
  Message.find().then((message)=> {
    message.push("something")
    res.send(message)

  })
});
app.post("/api/messages",(req,res)=>{
  console.log(req.body)
  Message.create(req.body)
  .then((something =>{res.send(something)}))
})
//app.prependListener()
app.post("/api/messages",(req,res)=>{
  //Message.find().then(req.body.remove())
  //Messages.remove();
  console.log(req.body)
  Message.remove(req.body)
  .then((something =>{res.send(something)}))
})



app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
