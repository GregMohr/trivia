app.factory('gameFactory', function($http){
  var factory = {};

  factory.chooseQuestions = function(callback){
    $http.get('/chooseQuestions').then(function(output){
      callback(output.data);
    })
  }
  factory.submitGame = function(game){
    $http.post('/submitGame', game)
  }
  return factory;
})
