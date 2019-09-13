const express = require("express");
const app = express();

app.use(express.static( __dirname + '/public/dist/public' ));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
require('./server/config/routes.js')(app);
app.listen(8000, () => console.log("listening on port 8000"));