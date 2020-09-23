const app = require("./app");

require("dotenv").config();

const mongoose = require("mongoose");
const uri ="mongodb+srv://vvats:<password>@cluster0.ol48y.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection ERROR: " + err.message);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!");
});

app.listen(3000,() =>{
    console.log("server is listening on port 3000");
})