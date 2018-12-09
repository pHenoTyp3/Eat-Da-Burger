const routes = require("./controllers/burgers_controller.js");
const express = require("express");
const methodOverride = require("method-override");
const PORT = process.env.PORT || 3000;
const app = express();
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));


app.use("/", routes);

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
   
});