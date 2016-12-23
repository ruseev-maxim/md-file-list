(() => {
  'use strict';

  angular.module('app', [
    'ngMaterial',
    'md.fileList',
  ]).controller('AppController', AppController);


  AppController.$inject = ['$scope'];
  function AppController($scope) {
    $scope.images = [
      {
        name: 'images/feelsbadman.png',
        id: 0,
        type: 'image/png'
      }, {
        name: 'images/feelsbeeman.jpg',
        id: 1,
        type: 'application/pdf'
      }, {
        name: 'images/feelsgoodman.png',
        id: 2,
        type: 'application/msword'
      },
    ];
  }

})();