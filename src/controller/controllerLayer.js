const service = require('../service/serviceLayer');


const getAllItems = (req, res) => {
  const { data, err } = service.getAllItems();

  if (err) {
    res.status(500).send({
      status: "failed"
    });
    return;
  } else {
    res.send({
      status: "success",
      data
    });
  }
};


const getSingleItem = (req, res) => {
  const { data, err } = service.getSingleItem(req.params.id);

  if (err) {
    res.status(500).send({
      status: "failed"
    });
  } else {
    res.send({
      status: "success",
      data
    });
  }
};


const addItem = (req, res) => {
  if (
    !req.body.title ||
    !req.body.description
  ) {
    res.status(400).send({
      status: "failed"
    });
    return;
  }

  const err = service.addItem(req.body);

  if (err) {
    res.status(500).send({
      status: "failed"
    });
  } else {
    res.status(201).send({
      status: "success"
    })
  }
};


const deleteItem = (req, res) => {
  const err = service.deleteItem(req.params.id);

  if (err) {
    res.status(500).send({
      status: "failed"
    });
  } else {
    res.send({
      status: "success"
    })
  }
};


const updateItem = (req, res) => {
  if (
    !req.body.title &&
    !req.body.description
  ) {
    res.status(400).send({
      status: "failed"
    });
    return;
  }

  const err = service.updateItem(req.body, req.params.id);

  if (err) {
    res.status(500).send({
      status: "failed"
    });
  } else {
    res.send({
      status: "success"
    })
  }
};


module.exports = {
  getAllItems,
  getSingleItem,
  addItem,
  deleteItem,
  updateItem
}