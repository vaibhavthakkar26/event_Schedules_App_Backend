const { priorityHandler } = require("../../helper");
const Event = require("../Modal/event.modal");
const { v4: uuidv4 } = require("uuid");

exports.create = async (data) => {
  try {
    const priorityValue = priorityHandler.find(
      (res) => res.name === data.priority
    );
    let uuidString = uuidv4();

    const eventInfo = new Event({
      title: data.title,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
      description: data.description,
      priorityName: priorityValue.name,
      priorityColor: priorityValue.color,
      priorityColorCode: priorityValue.colorCode,
      id: uuidString,
    });

    const eventData = await eventInfo.save();

    if (eventData) {
      return {
        success: true,
        message: "User created successfully",
        data: eventData,
      };
    } else {
      await Event.findByIdAndDelete(eventData.id);
      return {
        success: false,
        message: "Something_went_wrong",
        data: {},
      };
    }
  } catch (err) {
    return {
      success: false,
      message: "ERROR_USER_",
      data: err.message,
    };
  }
};

exports.list = async () => {
  try {
    const response = await Event.find();
    if (response) {
      return {
        success: true,
        message: "Events found!",
        data: response,
      };
    } else {
      return {
        success: false,
        message: "Events not found!",
        data: response,
      };
    }
  } catch (err) {
    return {
      success: false,
      message: err,
      data: {},
    };
  }
};

exports.update = async (id, body) => {

  try {
    const priorityValue = priorityHandler.find(
      (res) => res.name === body.priority
    );
    if(priorityValue){
      const data = {
        priorityName: priorityValue?.name,
        priorityColor: priorityValue?.color,
        priorityColorCode: priorityValue?.colorCode, 
        startDate : body.startDate,
        endDate : body.endDate,
        title: body.title,
        description : body.description,
        id:id
      }
      if (id) {
        const updateEvent = await Event.findOneAndUpdate({ id }, data, {
          new: true,
        });
        return {
          success: true,
          message: "UPDATE SUCCESSFUL",
          data: updateEvent,
        };
      } else {
        return {
          success: false,
          message: "CANT UPDATE EVENT",
          data: {},
        };
      }
    }else{
      if (id) {
        const updateEvent = await Event.findOneAndUpdate({ id }, body, {
          new: true,
        });
        return {
          success: true,
          message: "UPDATE SUCCESSFUL",
          data: updateEvent,
        };
      } else {
        return {
          success: false,
          message: "CANT UPDATE EVENT",
          data: {},
        };
      }
    }
  } catch (err) {
    return {
      success: false,
      message: "CANT UPDATE EVENT",
      data: {},
    };
  }
};

exports.findOne = async (id) => {
  try {
    const singleEvent = await Event.findOne({ id });
    if (singleEvent) {
      return {
        success: true,
        message: "SINGLE_DATA",
        data: singleEvent,
      };
    } else {
      return {
        success: false,
        message: "INVALID_ID",
        data: {},
      };
    }
  } catch (err) {
    return {
      success: false,
      message: err,
      data: {},
    };
  }
};

exports.deleteById = async (id) => {
  try {
    const result = await Event.findOneAndUpdate(
      { id },
      { isActive: false },
      {
        new: true,
      }
    );
    if (result) {
      return {
        success: true,
        message: "Event Deleted!",
        data: result,
      };
    } else {
      return {
        success: false,
        message: "some thing went wrong!",
        data: null,
      };
    }
  } catch (err) {
    return {
      success: false,
      message: "some thing went wrong!",
      data: null,
    };
  }
};
