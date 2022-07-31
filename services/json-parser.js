const fs = require('fs/promises');
const path = require('path');

exports.readJson = async (filename) => {
  const file = path.join(__dirname, '../files/', filename);
  const json = await fs.readFile(file, { encoding: 'utf-8' });
  const content = JSON.parse(json);

  return content;
};
