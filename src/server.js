const express = require("express");
const bodyParser = require("body-parser");
const viewEngine = require("./config/viewEngine.js");
const initWebRoutes = require("./route/web.js");
const connectDB = require("./config/connectDB.js");
const cors = require("cors");

require("dotenv").config();

let app = express();
app.use(cors({ credentials: true, origin: true }));

//config app

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log("Backend Nodejs is runing on the port: " + port);
});
