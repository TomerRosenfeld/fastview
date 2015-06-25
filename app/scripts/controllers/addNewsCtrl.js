/**
 * Created by tomer on 24/06/15.
 */


angular.module('testApp')
  .controller('addNewsCtrl', function ($scope) {

    $scope.saveNews = function(){
      var GameScore = Parse.Object.extend("News");
      var gameScore = new GameScore();

      gameScore.set("title", $scope.title);
      gameScore.set("message", $scope.message);
      gameScore.set("date", $scope.date);

      gameScore.save(null, {
        success: function(gameScore) {
          // Execute any logic that should take place after the object is saved.
          alert('New object created with objectId: ' + gameScore.id);
        },
        error: function(gameScore, error) {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and message.
          alert('Failed to create new object, with error code: ' + error.message);
        }
      });
    }

  });
