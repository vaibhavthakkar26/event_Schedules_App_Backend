const joi = require("joi");
// joi.objectId = require("joi-objectid")(Joi);

exports.eventCreateValidator = (req,res,next) =>{
    try{
        if(req.body){
            console.log("e",req.body);
            const Schema = joi.object({
                title : joi.string().required(),
                startDate : joi.string().required(),
                endDate : joi.string().required(),
                description : joi.string().required(),
                priority : joi.string().required()
            });

            let data = Schema.validate(req.body);
            if (data.error) {
                return res
                  .status(400)
                  .json({
                    success: false,
                    message: data.error.details[0].message,
                    data: {},
                  });
              } else {
                next();
              }
        }
    }catch(err){
        return res.status(400).send({success: false, message: "ERROR HAPPEND", data: {}})
    }
}