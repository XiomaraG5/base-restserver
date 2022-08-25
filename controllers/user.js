const {response, request}=require('express')


const userGet = (req = request,res=response)=>{
                                                            // http://localhost:8080/api/user?q=xiom&name=Xiomara&apikey=123fr&page=1&limit=20
    const { q, name, apikey, page='1', limit}=req.query; 
    res.json({
        msg:'get api - controller',
        q, 
        name, 
        apikey, 
        page, 
        limit
    })
}

const userPost =(req,res=response)=>{

    const {name, age}= req.body;

    res.json({
        msg:'Post api - controller',
        name, age
    })
}

const userPut =(req,res=response)=>{
    const { id }= req.params

    res.json({
        msg:'Put api - controller',
        id
    })
}

const userPatch =(req,res=response)=>{
    res.json({
        msg:'Patch api - controller'
    })
}

const userDelete =(req,res=response)=>{
    const { id }= req.params
    res.json({
        msg:'Delete api - controller',
        id
    })
}

module.exports={
    userGet,
    userPost,
    userPatch,
    userPut,
    userDelete
}