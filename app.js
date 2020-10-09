const express = require('express');
const cors = require('cors');
const app = express();
// var corsOptions = {
//   origin: 'http://127.0.0.1:5000',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes/user'));

//Setup Error Handlers
const errorHandlers = require("./handlers/errorHandlers");
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
if (process.env.ENV === "DEVELOPMENT") {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

module.exports = app;