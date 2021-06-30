const express = require("express");
const router = express.Router();
const itemController = require("./controllers/itemController");

router.get("/getList", itemController.getAllItems)
router.post("/addItem", itemController.addItem);
router.post("/editItem", itemController.editItem);
router.delete("/deleteItem/:itemId", itemController.deleteItem);

module.exports = router;