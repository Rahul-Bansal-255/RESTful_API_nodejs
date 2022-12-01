const bodyParser = require('body-parser');
const express = require('express');
const itemsRoutes = require('./routes/routes');

const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening to PORT: ${PORT}`);
});

app.use(bodyParser.json());
app.use('/api/items', itemsRoutes);


