const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const EventSchema = new Schema(
    {
        id:{
            type:String,
            required:true,
            trim: true,
        },
        title:{
            type: String,
            required: true,
            trim: true,
        },
        startDate:{
            type: Date,
            required: true,
            trim: true,
        },
        endDate:{
            type: Date,
            required: true,
            trim: true,
        },
        description:{
            type:String,
            required: true,
            trim: true,
        },
        priorityName:{
            type:String,
            required: true,
            trim: true,
        },
        priorityColor:{
            type:String,
            required: true,
            trim: true,
        },
        priorityColorCode:{
            type:String,
            required: true,
            trim: true,
        }, 
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);
const Event = mongoose.model("event",EventSchema);
module.exports = Event;