angular.module('caseMgmt',[])
.controller('MainCtrl', function($scope) {
   

$scope.cases = [];
      $scope.priorities = [1, 2, 3,4,5];
    $scope.addCase = function() {
          if (!$scope.summary || $scope.summary === "") {return;}
          if (!$scope.priority || $scope.priority === "") {return;}
          if (!$scope.desc || $scope.desc === "") {return;}

        $scope.cases.push({summary: $scope.summary, 
            priority: $scope.priority,
            desc: $scope.desc});
         $scope.summary = "";
         $scope.priority = "";
          $scope.desc = "";
            
    };

    $scope.increasePriority = function(post) {        
         post.priority += 1;        
    };
    
    $scope.decreasePriority = function(post) {        
         post.priority -= 1;        
    };
    
});
