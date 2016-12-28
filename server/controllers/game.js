var mongoose = require('mongoose'),
    Question = mongoose.model('Question'),
    Game = mongoose.model('Game');

function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

module.exports = (function(){
  return {
    chooseQuestions: function(req, res){
      Question.find({}, function(err, questions){
        var gameQuestions = getRandomArrayElements(questions, 3);
        res.json(gameQuestions);
      })
    },
    submitGame: function(req, res){
      var game = new Game(req.body)
      console.log(game);
      game.save(function(err, savedGame){
        if(!savedGame){
          res.json(err)
        }
      })
    },
    getGames: function(req, res){
      Game.find({}, function(err, games){
        if(games){
          res.json(games)
        } else {
          res.json(err)
        }
      })
    }
  }
})()
