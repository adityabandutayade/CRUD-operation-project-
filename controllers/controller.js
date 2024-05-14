const Assistant = require("../models/model.js");

const create_newdata = async (req, res) => {
  try {
    const assistant = await Assistant.create(req.body);
    res.status(201).json(assistant._id); 
  } catch (error) {
    res.status(500).json({ message: "New record Not Created ", error: error.message });
  }
};

const get_data = async (req, res) => {
  try {
    const { id } = req.params;
    const get_record = await Assistant.findById(id);

    if (!get_record) {
      return res.status(404).json({ message: "Id  Doesnt exit in Database " });
    }

    res.status(200).json(get_record);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve data  ", error: error.message });
  }
};

const update_data = async (req, res) => {
  try {
    const { id } = req.params;
    const update_data = await Assistant.findByIdAndUpdate(id, req.body);

    if (!update_data) {
      return res.status(404).json({ message: "Incorrect data_id, enter correct id " });
    }

    res.status(200).json({message:"update sucessfully "});
  } catch (error) {
    res.status(500).json({ message: "Failed to update record", error: error.message });
  }
};

const delete_data = async (req, res) => {
  try {
    const { id } = req.params;
    const delete_reco = await Assistant.findByIdAndDelete(id);

    if (!delete_reco) {
      return res.status(404).json({ message: "ID not found in Data" });
    }

    res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete record", error: error.message });
  }
};

module.exports = {
  create_newdata,
  get_data,
  update_data,
  delete_data,
};
