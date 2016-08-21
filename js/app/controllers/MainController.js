function MainController($scope) {
  $scope.contact = {
    name:'Cory',
    phone: '856-340-0092',
    email: 'corya0687@gmail.com'
  };

}

angular
  .module('app')
  .controller('MainController', MainController);
