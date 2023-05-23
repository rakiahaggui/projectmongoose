//config a server
const express = require("express")
const router = express.Router()
const req = require("express/lib/request")
const res =require("express/lib/response")
const person = require("../Model/person")
//create + save a person
router.post('/',async(req,res) =>{
        try{
            const newPerson = person(req.body)
            await newPerson.save()
            res.send({newPerson,msg:"ajout avec succes" })
        }
        catch{
            res.send(error.msg )
        }  
}
)
//Use model.find() to Search Your Database:
router.get("/findid/:_id",async(req,res) => {
    try{
        const findid  = await person.findById({_id:req.params.id}).exec()
        res.status(200).send(findId)
    }
    catch(error){
        res.status(404).send({msg:"person is not found"})
    }
})
//find and remove
router.delete("/deleteperson/:_id",async(req,res) =>{
    try{
        const deleteperson = await person.findByIdAndRemove({_id:req.params.id}).exec()
        res.status(200).send(deleteperson)
    }
    catch(error){
        res.status(404).send({msg:"person is not found"})
    }
})
    