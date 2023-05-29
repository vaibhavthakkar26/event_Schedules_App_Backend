const express = require("express");
const { eventCreateValidator } = require("../validator/event.validator");
const router = express.Router();
const eventService = require("../Service/event.Service");

router.post('/create',eventCreateValidator,async (req,res)=>{
    try{
        let {data,message,success} = await eventService.create(req.body);
        if (success) {
            return res.status(200).json({ success, message, data });
          } else {
            return res.status(400).json({ success, message, data });
          }
    }catch(err){
        return res.status(400).json({ message: err });
    }
});

router.get("/list",async(req,res)=>{
  try{
    let {data,message,success} = await eventService.list();
  
    if (success) {
      return res.status(200).json({ success, message, data });
    } else {
      return res.status(400).json({ success, message, data });
    }
  }catch(err){
    return res.status(400).json({ message: err });
  }

});

router.patch("/:id",async(req,res)=>{
  try{
    console.log("req+patch",req.body);
    let {data,message,success} = await eventService.update(req.params.id,req.body);
    if (success) {
      return res.status(200).json({ success, message, data });
    } else {
      return res.status(400).json({ success, message, data });
    }
  }catch(err){
    console.log("----",err);
    return res.status(400).json({ message: err });
  }
})

router.get("/:id",async(req,res)=>{
  try{
    let {data,message,success} = await eventService.findOne(req.params.id);
    if (success) {
      return res.status(200).json({ success, message, data });
    } else {
      return res.status(400).json({ success, message, data });
    }
  }catch(err){
    return res.status(400).json({ message: err });
  }


});

router.delete("/:id",async(req,res)=>{
  try{
    const {data,message,success} = await eventService.deleteById(req.params.id);
    if (success) {
      return res.status(200).json({ success, message, data });
    } else {
      return res.status(400).json({ success, message, data });
    }
  }catch(err){
    return res.status(400).json({ message: err });
  }
})

module.exports = router;