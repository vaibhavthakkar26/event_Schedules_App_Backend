const eventController = require("../api/Controller/event.Controller");


const initialize = (app) =>{
    app.use("/api/v1/event",eventController);
}

module.exports = { initialize };