app.controller('triviaController', function($scope, triviaFactory, $location){
  $scope.create = function(){
    if(!$scope.newQuestion || !$scope.newQuestion.question || !$scope.newQuestion.answer || !$scope.newQuestion.fakeOne || !$scope.newQuestion.fakeTwo){
      $scope.errMsg = 'All fields required.'
      return;
    }
    if($scope.newQuestion.question.length < 15){
      $scope.errMsg = 'Question must be at least 15 characters long.'
      return;
    }
    triviaFactory.create($scope.newQuestion);
    $location.path('/dashboard')
  }
})
