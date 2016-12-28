var mongoose=require('mongoose'),
    Schema = mongoose.Schema,
    gameSchema = new Schema({
      player: String,
      score: Number
    })

mongoose.model('Game', gameSchema);
