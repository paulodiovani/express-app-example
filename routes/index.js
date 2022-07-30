const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/', async (_req, res) => {
  debugger
  const file = path.join(__dirname, '../db/coffee-recipes.json');
  const json = await fs.readFile(file, { encoding: 'utf-8' });
  const recipes = JSON.parse(json);

  res.render('index', { title: 'Sample express app', recipes });
});

module.exports = router;
