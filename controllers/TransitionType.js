const db = require("../model");
const Model = db.TransitionTypes;

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

    const data = await Model.findByPk(from.TransitionTypeID);
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
        TransitionTypeName: from.TransitionTypeName,
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
      TransitionTypeName: from.TransitionTypeName,
      TransitionCode: from.TransitionCode,

      Status: from.Status      
    };
    const data = await Model.update(data1, {
      where: {
        TransitionTypeID: from.TransitionTypeID,
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
        TransitionTypeID: from.TransitionTypeID,
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
