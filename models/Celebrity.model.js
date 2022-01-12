//  Add your code here
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// todo : fill the Scheam below !

const celebritySchema = new Schema({
  name: String,
  occuation: String,
  catchPhrase: String
});

const CelebrityModel = mongoose.model("Celebrities", celebritySchema);

module.exports = CelebrityModel;
