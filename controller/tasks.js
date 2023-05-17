const tusk =require('../models/task')


const getalltasks =async (req,res)=>{
    try {
        const yyy =await tusk.find({})
        res.json({yyy})
    }
    catch (error) {
        res.status(500).json({msg:error})
    }
}
const createtask =async (req,res)=>{
    try {
    const xxx =await tusk.create(req.body)
    
    res.status(201).json({xxx})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
    
}
const gettask =async (req,res)=>{
    const {id:taskid} =req.params
    
    try {
        const yyy =await tusk.findOne({_id:taskid})
        if(!yyy){
            res.status(404).send('no task with id '+taskid)
        }
        res.json({msg:yyy})
    }
    catch (error) {
        res.status(500).json({msg:error})
    }
}
const updatetask =(req,res)=>{
    res.send('all items updatetask')
}
const deletetask =(req,res)=>{
    res.send('all items deletetask')
}


module.exports={
    getalltasks,createtask,gettask,updatetask,deletetask
}