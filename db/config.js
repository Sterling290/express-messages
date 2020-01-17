const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost:27017/messages', {useNewUrlParser: true, useUnifiedTopology: true});
   var  db = mongoose.connection;
   db.once('open',function(){
    console.log("connection")
});

   db.on('error',console.error.bind(console,'connection error:'))
   module.exports = {db}

//    const MyModel = mongoose.model('Test', new Schema({ name: String }));
//    const doc = new MyModel();
   
//    doc instanceof MyModel; 
//    doc instanceof mongoose.Model; 
//    doc instanceof mongoose.Document; 
//______________________________________________
//     var Messages = mongoose.model('messages',messageSchema);
 //    Messages.save()
 
// var connection = mongoose.createConnection('mongodb://localhost:27017/messages');
// var Tank = connection.model('Tank', messageSchema);

//Messages.save(function (err, Messages) {
//if (err) return console.error(err);
// Messages.speak();
//});
