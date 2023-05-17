const mongoose =require('mongoose')
const connectionstring ='mongodb+srv://NodeExpressProject:NodeExpressProject321@ttt.2frh5xa.mongodb.net/?retryWrites=true&w=majority'



const connectdb =(url)=>{
    return mongoose
    .connect(connectionstring,{useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true})
}

module.exports=connectdb