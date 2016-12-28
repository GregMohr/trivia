app.controller('dashController', function($scope, dashFactory){
  dashFactory.getGames(function(data){
    $scope.games = data;
  })
})
