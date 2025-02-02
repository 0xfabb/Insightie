const express = require("express");
const HomeRoute = require('./routes/Home')
const app = express();
const PORT = process.env.PORT || 5001;


app.use('/', HomeRoute)

app.listen(PORT, () => console.log(`App is listening on Port ${PORT}`));
