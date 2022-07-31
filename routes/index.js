const express = require('express');
const router = express.Router();
const { readJson } = require('../services/json-parser');

/* GET home page. */
router.get('/', async (_req, res) => {
  debugger
  const filename = 'coffee-recipes.json';
  const recipes = await readJson(filename);

  res.render('index', { title: 'Sample express app', recipes });
});

module.exports = router;
