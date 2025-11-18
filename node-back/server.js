require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./src/models');
const cors = require('cors');
const noteRoutes = require('./src/routers/router.js');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/api', noteRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

  

