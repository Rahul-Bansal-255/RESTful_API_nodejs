const { v4: uuid } = require("uuid");
const dataAccess = require('../database/dataAccessLayer');


const getAllItems = () => {
  return dataAccess.getAllItems();
}


const getSingleItem = (id) => {
  return dataAccess.getSingleItem(id);
}


const addItem = (body) => {
  const item = {
    title: body.title,
    description: body.description,
    id: uuid()
  }
  return dataAccess.addItem(item);
}


const deleteItem = (id) => {
  return dataAccess.deleteItem(id);
}


const updateItem = (body, id) => {
  const item = {
    title: body.title,
    description: body.description,
    id
  }
  return dataAccess.updateItem(item);
}


module.exports = {
  getAllItems,
  getSingleItem,
  addItem,
  deleteItem,
  updateItem
}