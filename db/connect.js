const mongoose =require('mongoose')
const connectionstring ='MONGO_URI'



const connectdb =(url)=>{
    return mongoose
    .connect(connectionstring,{useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true})
}

module.exports=connectdb
