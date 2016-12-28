var mongoose = require('mongoose'),
    Question = mongoose.model('Question');

module.exports = (function(){
  return {
    create: function(req, res){
      console.log('be cnt - create - ', req.body);
      var question = new Question(req.body)
      question.save(function(err, savedQuestion){
        if(!savedQuestion){
          res.json(err);
        }
      })
    },
  }
})()
