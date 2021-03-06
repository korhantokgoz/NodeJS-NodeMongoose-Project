var express = require("express");
var app = express();
const router = require("./rooters/user.rooter");
var bodyParser = require("body-parser");
/**
 * parse requests of content-type - application/json
 */
app.use(bodyParser.json());
/**
 * parse requests of content-type - application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: false }));
//app.use("/", router);
app.use("/users", router);
app.get('/', (req, res) => {
    res.json({"message": "Congratulations! you are working great!"});
});
app.listen(3000);
console.log("Listening to PORT 3000");