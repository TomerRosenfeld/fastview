/**
 * Created by tomer on 5/14/2015.
 */
var gender = 0;
var g2g = true;

function init(){
    Parse.initialize("jZanB7UiysichOfl0w2BA10Jm2Q6WDuVeWi0CQsO", "Hp7klnTR1gvug9bMCm9DurYpQTpX310DMrXO3dNC");
    $("#imgInput").change(function(){
        readURL(this);
    });
    $("#submit").click(function(){
        try{verifyData()}catch (e){alert(e)}
    });
    var currentUser = Parse.User.current();
    if (currentUser) {
        // do stuff with the user
        Parse.User.logOut();
    }
}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profile_pic').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
function createUser(name,password,email,gender,pic,birthday,phone,school,parent_name,parent_phone,username){
    var fileUploadControl = $("#imgInput")[0];
    if (fileUploadControl.files.length > 0) {
        var file = fileUploadControl.files[0];
        var fileName = "photo.jpg";

        var parseFile = new Parse.File(fileName, file,file.type);
    }
    parseFile.save().then(function() {
        // The file has been saved to Parse.
    }, function(error) {
        // The file either could not be read, or could not be saved to Parse.
    });
    var user = new Parse.User();
    user.set("username", username );
    user.set("name", name );
    user.set("email",email);
    user.set("password", password);
    user.set("gender", gender);
    user.set("pic", parseFile);
    user.set("birthday", birthday);
    user.set("phone", phone);
    user.set("school", school);
    user.set("parent_name", parent_name);
    user.set("parent_phone", parent_phone);
    user.set("admin", false);
    user.set("teacher", false);
    user.signUp(null, {
        success: function(user) {
            alert("hooray user created");
          location.replace("#/")
          // Hooray! Let them use the app now.

        },
        error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }
    });
}
function verifyData(){
    try {
        var name, password, email, pic, birthday, phone, school, parent_name, parent_phone,username;
        name = $("#name").val();
        if(!verify(name)){
            error("name")
        }
       username = $("#username").val();
        if(!verify(username)){
         error("username")
       }
        password = $("#password").val();
        if (!verify(password)) {
            error("password");
        }
        email = $("#email").val();
        if (!verify(email)) {
            error("email");
        }
        if (!verify(gender)) {
            error("gender");
        }
        pic = $("#profile_pic");
        if (!verify(pic)) {
            error("profile_pic");
        }
        birthday = document.getElementById("birthday").value;
        if (!verify(birthday)) {
            error("birthday");
        }
        phone = $("#phone").val();
        if (!verify(phone)) {
            error("phone");
        }
        parent_name = $("#parent_name").val();
        if (!verify(parent_name)) {
            error("parent_name");
        }
        parent_phone = $("#parent_phone").val();
        if (!verify(parent_phone)) {
            error("parent_phone");
        }
        school = $("#school").val();
        if (!verify(school)) {
            error("school");
        }
        if(g2g){
            createUser(name,password,email,gender,pic,new Date(birthday),phone,school,parent_name,parent_phone,username);
        }
        else{
            alert("something went wrong");
            g2g = true;
        }
    }
    catch (e){alert(e)}
}
function verify(VAR){
    return !(VAR == undefined || VAR == null||VAR==0);
}
function error(id){
    g2g = false;
    try {
        alert("You missed the "+id+" field");
        $("#"+id).addClass("invalid")
    }catch (e){alert(e)}
}


function logIn(username,password){
    Parse.initialize("jZanB7UiysichOfl0w2BA10Jm2Q6WDuVeWi0CQsO", "Hp7klnTR1gvug9bMCm9DurYpQTpX310DMrXO3dNC");
    Parse.User.logIn(username, password, {
        success: function(user) {
            var currentUser = Parse.User.current();  // this will now be null
            handlesuccessLogin(currentUser)

        },
        error: function(user, error) {
            alert('?? ?????? ?? ?????? ??????'); return false;
        }
    });
}
function replaceHTML(toreplace,toload){
    $("#"+toreplace).load(toload);
}
function initLogIn(){

    var currentUser = Parse.User.current();
    if (currentUser) {
        handlesuccessLogin(currentUser)
    } else {
        // show the signup or login page
    }
}
