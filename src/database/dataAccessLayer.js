const DB = require('./db.json');
const updateDatabase = require('./utils');


const getAllItems = () => {
  const items = DB.items;
  if (items) {
    return {
      data: items
    }
  } else {
    return {
      err: "NO items found"
    }
  }
}


const getSingleItem = (id) => {
  const index = DB.items.findIndex(
    (item) => item.id == id
  );
  if (index === -1) {
    return {
      err: `NO item exist with id: ${id}`
    }
  }
  return {
    data: DB.items[index]
  }
}


const addItem = (item) => {
  DB.items.push(item);
  updateDatabase(DB);
  return;
}


const deleteItem = (id) => {
  const indexForDeletion = DB.items.findIndex(
    (item) => item.id == id
  );
  if (indexForDeletion === -1) {
    return `NO item exist with id: ${id}`;
  }
  DB.items.splice(indexForDeletion, 1);
  updateDatabase(DB);
  return;
}


const updateItem = (item) => {
  const indexForUpdation = DB.items.findIndex(
    (ele) => ele.id == item.id
  );

  if (indexForUpdation === -1) {
    return `NO item exist with id: ${item.id}`;
  }

  const updateditem = {
    ...DB.items[indexForUpdation]
  }

  if (item.title) {
    updateditem.title = item.title;
  }
  if (item.description) {
    updateditem.description = item.description;
  }

  DB.items[indexForUpdation] = updateditem;
  updateDatabase(DB);
  return;
}

module.exports = {
  getAllItems,
  getSingleItem,
  addItem,
  deleteItem,
  updateItem
}