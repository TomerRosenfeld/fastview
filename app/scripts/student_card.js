/**
 * Created by tomer on 5/18/2015.
 */
function setInfo(){
    try {
        $("#name").text(get("name"));
        $("#email").text(get("email"));
        if(get("gender")=="1"){
            $("#gender").attr("src","images/male.png");
        }
        if(get("gender")=="2"){
            $("#gender").attr("src","images/female.png");
        }
        if(get("gender")=="3"){
            $("#gender").attr("src","images/other.png");
        }
        $("#phone").text(get("phone"));
        $("#school").text(get("school"));
        $("#profile_picture").attr("src",get("profile_pic"));
        $("#birthday").text(get("birthday"));
        $("#parent_name").text(get("parent_name"));
        $("#parent_phone").text(get("parent_phone"))
    }
    catch (e){alert(e)}
}
function get(item){
    return localStorage.getItem(item);
}