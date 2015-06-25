/**
 * Created by tomer on 09-Jun-15.
 */
angular.module('testApp')
  .controller('signUpCtrl', function ($scope , $location,$rootScope,$window) {
    if(Parse.User.current()!=null){
      $scope.oldUser = Parse.User.current().getSessionToken();
    }
    $scope.gtg = true;
    $scope.birthday = new Date(2000,2,2);
    /*$scope.file_changed = function(element) {
      $scope.picture = "images/default_profile_pic.png";
      $scope.$apply(function(scope) {
        var photofile = element.files[0];
        $scope.photo = photofile;
        var reader = new FileReader();
        reader.onload = function(e) {
          $scope.picture = e.target.result;
        };
        reader.readAsDataURL(photofile);
      });
    };*/
    $("#imgInput").change(function(){
      readURL(this);
    });
    $scope.readURL = function(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $scope.picture = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
      }
    };
    $scope.signUp = function(){
      alert($scope.oldUser)
      var fileUploadControl = $("#imgInput")[0];
      var file = fileUploadControl.files[0];
      var fileName = "photo.jpg";
      var parseFile = new Parse.File(fileName, file,file.type);
      parseFile.save().then(function() {
        // The file has been saved to Parse.
      }, function(error) {
        $scope.gtg = false;
        alert("error "+error.message)
      });

      var user = new Parse.User();
      if(parseFile != undefined){user.set("pic",parseFile)}else{gtg=false}
      if($scope.verifyData($scope.UserName)){user.set("username",$scope.UserName)}
      if($scope.verifyData($scope.name)){user.set("name",$scope.name)}
      if($scope.verifyData($scope.gender)){user.set("gender",$scope.gender)}
      if($scope.verifyData($scope.email)){user.set("email",$scope.email)}
      if($scope.verifyData($scope.password)){user.set("password",$scope.password)}
      if($scope.verifyData($scope.birthday)){user.set("birthday",$scope.birthday)}
      if($scope.verifyData($scope.phone)){user.set("phone",$scope.phone)}
      if($scope.verifyData($scope.school)){user.set("school",$scope.school)}
      if($scope.verifyData($scope.parent_name)){user.set("parent_name",$scope.parent_name)}
      if($scope.verifyData($scope.parent_phone)){user.set("parent_phone",$scope.parent_phone)}
      if($scope.verifyData($scope.school)){user.set("school",$scope.school)}
      user.set("admin", false );
      user.set("teacher", false);
      if($scope.gtg) {
        user.signUp(null, {
          success: function (user) {
            if($scope.oldUser!=null){
              Parse.User.become('<%= '+ $scope.oldUser+' %>').then(function (user) {
                  $location.url("#/")
                },
                function (error) {
                  alert('Login with GitHub Failed.');

                });
            }
            alert("created");
            $location.url("#/")
          },
          error: function (user, error) {
            alert("Error: " + " " + error.message);
          }
        });
      }
      else{
        alert("אנא מלא את כל הטופס")
      }
    };
    $scope.verifyData = function(key){
      if(key==null){
        $scope.gtg = false;
        alert("Please fill in all fields "+key);
        return false;
      }
      return true;
    };
    $scope.saveImage = function(){
      var fileName = "photo.jpg";
      var parseFile = new Parse.File(fileName, $scope.photo,$scope.photo.type);
      parseFile.save().then(function() {
        return parseFile;
      }, function(error) {
        alert(error.message+" Try a different image");
        return false;
      });
    }
  });
