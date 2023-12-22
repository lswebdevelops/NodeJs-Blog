require("dotenv").config();
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const session = require('express-session');
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const methodOverride = require('method-override')
const connectDB = require("./server/config/db");
const isActiveRoute = require('./server/helpers/routeHelpers')
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database and get the connection object
const dbConnection = connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'))

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      client: dbConnection, // Use the Mongoose connection
    }),
  })
);

app.use(express.static("public"));

// Templating engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.locals.isActiveRoute = isActiveRoute;
app.use("/", require("./server/routes/main"));
app.use("/", require("./server/routes/admin"));

app.listen(PORT, () => {
  console.log(`App listens on port ${PORT}`);
});
