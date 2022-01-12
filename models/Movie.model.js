//  Add your code here
const { Schema, model } = require('mongoose');

// todo : fill the Scheam below !

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: [{type: Schema.Types.ObjectId, ref: 'Celebrities'}]
});

const MovieModel = model("Movies", movieSchema);

module.exports = MovieModel;
