const express = require("express");
const router = express.Router();
const priorityService = require("../Service/priority.Service");

router.get("/list",async(req,res)=>{
    try{
        const {data,message,success} = await priorityService.list();
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