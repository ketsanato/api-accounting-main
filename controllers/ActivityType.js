const db = require("../model");
const Model = db.ActivityType;
module.exports.create = async (req, res) => {
  try {
    const from = req.body;
    console.log(from);

    const data = await Model.create(from);
    res.status(201).json({
      data: data,
      message: "Create successfully",
      status: true,
    });
  } catch (error) {
    console.error("Error creating Currency:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports.get = async (req, res) => {
  try {
    const data = await Model.findAll();
    res.status(201).json({
      data: data,
      message: "Select successfully",
      status: true,
    });
  } catch (error) {
    console.error("Error creating Currency:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
module.exports.getbyid = async (req, res) => {
  try {
    const from = req.body;

    const data = await Model.findByPk(from.ActivityTypeID);
    res.status(201).json({
      data: data,
      message: "Select by CurrencyID successfully",
      status: true,
    });
  } catch (error) {
    console.error("Error creating Currency:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
module.exports.getByOne = async (req, res) => {
  try {
    const from = req.body;

    const data = await Model.findOne({
      where: {
        ActivityTypeName: from.ActivityTypeName,
      },
    });

    res.status(201).json({
      data: data,
      message: "Select by name successfully",
      status: true,
    });
  } catch (error) {
    console.error("Error :", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
module.exports.update = async (req, res) => {
  try {
    const from = req.body;
    const data1 = {
      ActivityTypeName: from.ActivityTypeName,
      ActivityTypeCode: from.ActivityTypeCode,

      Status: from.Status      
    };
    const data = await Model.update(data1, {
      where: {
        ActivityTypeID: from.ActivityTypeID,
      },
    });

    res.status(201).json({
      data: data,
      message: "update successfully",
      status: true,
    });
  } catch (error) {
    console.error("Error update:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
module.exports.delete = async (req, res) => {
  try {
    const from = req.body;

    const data = await Model.destroy({
      where: {
        ActivityTypeID: from.ActivityTypeID,
      },
    });

    res.status(201).json({
      data: data,
      message: "delete successfully",
      status: true,
    });
  } catch (error) {
    console.error("Error creating Currency:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
