const { priorityHandler } = require("../../helper");

exports.list = async () => {
  try {
    return {
      success: true,
      message: "PRIORITY LIST",
      data: priorityHandler,
    };
  } catch (err) {
    return {
        success: false,
        message: "PRIORITY LIST",
        data: [],
      };
  }
};
