const express = require("express");
const HomeRoute = require('./routes/Home')
const app = express();
const PORT = process.env.PORT || 5001;


app.use('/', HomeRoute)
app.set("view engine", "ejs");
app.set('views', path.resolve('../frontend/views'));




app.listen(PORT, () => console.log(`App is listening on Port ${PORT}`));
