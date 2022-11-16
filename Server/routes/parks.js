const express = require('express');
const router = express.Router();
const data = require('../data');
const parksData = data.parks;
let { ObjectId } = require('mongodb');

router.get('/parks', async (req, res) => {           
  try {
    const parks = await parksData.getAll();
    res.json(parks);
  } catch (e) {
    res.status(404).json({error: e });
  }
});

router.get('/parks/:id', async (req, res) => {
  if (!req.params.id) {
    res.status(400).json({error: 'id needed' });
    return;
  }
  if (!ObjectId.isValid(req.params.id)){
    res.status(400).json({error: "id is not a valid Object ID"});
    return;
  }
  try {
    const parks = await parksData.get(req.params.id);
    res.json(parks);
  } catch (e) {
    res.status(404).json({error: e });
  }
});


module.exports = router;