const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/banco-de dados', 
              {useNewUrlParser:true});
        
mongoose.connection.once('open', ()=>{ 
    console.log('Mongoose Conectado ao banco')
})

module.exports = mongoose;
