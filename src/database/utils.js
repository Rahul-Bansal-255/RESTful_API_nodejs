const fs = require('fs');

const updateDatabase = (data) => {
  fs.writeFileSync('./src/database/db.json', JSON.stringify(data, null, 2))
}

module.exports = updateDatabase;