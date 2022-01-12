//  Add your code here
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// todo : fill the Scheam below !

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: [{type: mongoose.Schema.Types.ObjectId, ref: 'Celebrities'}]
});

const MovieModel = mongoose.model("Movies", movieSchema);

module.exports = MovieModel;
