const express =require('express')
const app =express()
const tasks =require('./routes/tasks')
const port  =5000
const connectdb =require('./db/connect')
app.use(express.json())


app.get('/hello',(req,res)=>{
    res.send('hello')
})


app.use('/api/v1/tasks', tasks)
const start= async()=>{
    try {
        await connectdb()
        app.listen(port, console.log('server has started'))
    } catch (error) {
        console.log(error);
    }
}
start()
