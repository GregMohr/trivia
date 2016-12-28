app.factory('sessionFactory', function($http){
  var factory = {};

  factory.getSession = function(cb){
    $http.get('/getSessionUser').then(function(output){
      factory.sessionUser = output.data;
      cb(output);
    })
  }
  factory.index = function(cb){
    $http.get('/index').then(function(output){
      factory.users = output.data;
      cb(output);
    })
  }
  factory.login = function(user, cb){
    $http.post('/login', user).then(function(output){
      cb(output.data)
    })
  }
  factory.logout = function(){
    $http.get('/logout')
  }

  return factory;
})
