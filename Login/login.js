const firebaseConfig = {
    apiKey: "AIzaSyATRkhlAvRakRxWvI8DQO4wG5rk76PG9Pc",
    authDomain: "arduino-3b384.firebaseapp.com",
    databaseURL: "https://arduino-3b384-default-rtdb.firebaseio.com",
    projectId: "arduino-3b384",
    storageBucket: "arduino-3b384.appspot.com",
    messagingSenderId: "807572278992",
    appId: "1:807572278992:web:f711223096d2c789a398d5",
    measurementId: "G-57K4NWXNXN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();


Password.addEventListener('keyup', function (e) {
    e.preventDefault();
    if (e.keyCode === 13) {
        Login();
    }
})

function Login() {

    Username = document.getElementById("Username").value;
    Password = document.getElementById("Password").value;
    if (Username == "" || Password == "") {
        alert("Please enter your username and password");
    }
    else {
        var starCountRef = firebase.database().ref('Account/' + Username);
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            try {
                if (Password == data.Password) {
                    window.location = ("https://mcnxo2001.github.io/PumpSystem/Main/main.html");
                }
                else {
                    alert("Sign up failed !!!");
                }
            }
            catch(error){
                alert("Sign up failed !!!");
            }
        }
        );
    }
}
