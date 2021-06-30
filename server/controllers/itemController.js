const itemModel = require("../models/itemModel.js");

const getAllItems = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200);
    res.json(items);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};

const addItem = async (req, res) => {
  try {
    const item = new itemModel(req.body);
    const savedItem = await item.save();
    res.status(201);
    res.json(savedItem);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};

const editItem = async (req, res) => {
  try {
    const item = await itemModel.findByIdAndUpdate({ _id: req.body._id }, req.body, {new: true});
    const savedItem = await item.save();
    res.status(200);
    res.json(savedItem);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};

const deleteItem = async (req, res) => {
  try {
    await itemModel.findByIdAndDelete({ _id: req.params.itemId});
    res.status(202);
    res.json("Successfully deleted item")
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};

module.exports = { getAllItems, addItem, editItem, deleteItem }