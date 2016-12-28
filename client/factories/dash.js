app.factory('dashFactory', function($http){
  var factory = {};

  factory.getGames = function(callback){
    $http.get('/getGames').then(function(output){
      callback(output.data);
    })
  }
  return factory;
})
