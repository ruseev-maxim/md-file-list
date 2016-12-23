(() => {
  'use strict';

  angular.module('md.fileList', [])
    .directive('fileList', fileList)
    .directive('mdFileListIcon', mdFileListIcon)
    .filter('cut', cutString)
  ;


  function fileList() {
    return {
      restrict: 'E',
      templateUrl: 'fileList.html',
      replace: true,
    };
  }

  function mdFileListIcon() {
    return {
      restrict: 'E',
      replace: true,
      template: '<h1 ng-bind="tst(img.name)"></h1>',
      controller: ['$scope', function($scope) {
        $scope.tst = function(arg) {
          console.log(arg);
          return 'sup'
        }
      }
]    }
  }
  
  function cutString() {
    return function (value, wordwise, max, tail) {
      if (!value) return '';

      max = parseInt(max, 10);
      if (!max) return value;
      if (value.length <= max) return value;

      value = value.substr(0, max);
      if (wordwise) {
        let lastspace = value.lastIndexOf(' ');
        if (lastspace != -1) {
          //Also remove . and , so its gives a cleaner result.
          if (value.charAt(lastspace-1) == '.' || value.charAt(lastspace-1) == ',') {
            lastspace = lastspace - 1;
          }
          value = value.substr(0, lastspace);
        }
      }
      return value + (tail || ' …');
    };
  }

})();