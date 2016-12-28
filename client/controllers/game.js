app.controller('gameController', function($scope, gameFactory, $location){
  gameFactory.chooseQuestions(function(data){
    $scope.gameQuestions = data;
  });
  $scope.score = function(){
    if(!$scope.q0 || !$scope.q0.answer || !$scope.q1 || !$scope.q1.answer || !$scope.q2 || !$scope.q2.answer){
      $scope.errMsg = 'Please answer all questions.'
      return;
    }
    $scope.score = 0
    if($scope.q0.answer == "correct"){
      $scope.score++
    }
    if($scope.q1.answer == "correct"){
      $scope.score++
    }
    if($scope.q2.answer == "correct"){
      $scope.score++
    }
    var game={}
    game.player = $scope.sessionUser.name;
    game.score = $scope.score;
    gameFactory.submitGame(game);
    $location.path('/dashboard')
  }

})
