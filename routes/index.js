const eventController = require("../api/Controller/event.Controller");
const priorityController = require("../api/Controller/priority.Controller");

const initialize = (app) =>{
    app.use("/api/v1/event",eventController);
    app.use("/api/v1/priority",priorityController);
}

module.exports = { initialize };