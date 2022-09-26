var ShowHide = document.getElementById('ShowHide');
var Password = document.getElementById('Password');
var Username = document.getElementById('Username');
var ShowHidePassword = true;

ShowHide.addEventListener('click', function () {
    if (ShowHidePassword == true) {
        Password.type = 'text';
        ShowHide.src = "img/hide.jpg"
        ShowHidePassword = false;
    }
    else {
        Password.type = 'password';
        ShowHide.src = "img/show.jpg"
        ShowHidePassword = true;
    }
})





