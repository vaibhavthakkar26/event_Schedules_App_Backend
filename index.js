const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8080;

const mongoString = `mongodb+srv://vaibhav:okiK2WkntXY18tqe@cluster0.qoyzzli.mongodb.net/`


mongoose.connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.json({ extended: false, limit: "50mb" }));
app.use(cors());
app.use(express.static("public"));

const indexRouter = require("./routes/index")
indexRouter.initialize(app);

app.listen(port, () => {
    console.log(`Server Started at ${port}`);
 });
  
