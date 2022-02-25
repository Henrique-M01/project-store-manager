require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./router/productsRouter');
const salesRouter = require('./router/salesRouter');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/sales', salesRouter);

app.use('/products', productsRouter);

app.use((err, _req, res, _next) => {
  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(500).json({ message: err.message });
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
