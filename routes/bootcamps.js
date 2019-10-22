const express = require('express');
const {
  getBottcamps,
  getBottcamp,
  createBottcamp,
  updateBottcamp,
  deleteBottcamp
} = require('../controllers/bootcamps');
const router = express.Router();

router
  .route('/')
  .get(getBottcamps)
  .post(createBottcamp);

router
  .route('/:id')
  .get(getBottcamp)
  .put(updateBottcamp)
  .delete(deleteBottcamp);

module.exports = router;
