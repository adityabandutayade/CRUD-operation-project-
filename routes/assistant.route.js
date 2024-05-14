const express = require("express");
const Assistant = require("../models/model.js");
const {
  create_newdata,
  get_data,
  delete_data,
  update_data,
} = require("../controllers/controller.js");
const router = express.Router();

router.post("/", create_newdata);
router.get("/:id", get_data);
router.patch("/:id", update_data);
router.delete("/:id", delete_data);

module.exports = router;
