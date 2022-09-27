var ShowHide = document.getElementById('ShowHide');
var Username = document.getElementById('Username');
var Password = document.getElementById('Password');
var ShowHidePassword = true;

function ShowHideF() {
    if (ShowHidePassword == true) {
        var Password = document.getElementById('Password').type = "text";
        ShowHide.src = "img/hide.jpg"
        ShowHidePassword = false;
    }
    else {
        var Password = document.getElementById('Password').type = "password";
        ShowHide.src = "img/show.jpg"
        ShowHidePassword = true;
    }
}






