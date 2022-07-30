const express = require('express');
const productsRouter = require('./routes/products.routes');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/api', productsRouter);

app.listen(PORT, () => {
  console.log('Hello');
});
