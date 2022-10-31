var swichMode = document.getElementById('switch_Mode');
var switch_button_Mode = document.getElementById('switch_button_Mode')
var StatusMode = document.getElementById('StatusMode');

var switch_Pump = document.getElementById('switch_Pump');
var switch_Pump_button_Mode = document.getElementById('switch_Pump_button_Mode')
var Status_Pump = document.getElementById('Status_Pump');

var switch_Direction_Pump = document.getElementById('switch_Direction_Pump');
var switch_button_Direction_Pump = document.getElementById('switch_button_Direction_Pump')
var Status_Direction_Pump = document.getElementById('Status_Direction_Pump');

var WaterLevel = document.getElementById('WaterLevel')
var SpeedPump = document.getElementById('SpeedPump')
var SendData = document.getElementById('SendData')
var DataSpeed = document.getElementById('DataSpeed')
var LogOut = document.getElementById('LogOut')

var ActionMode = false;

//--------------------------------------------------------------------------------------------------------------------------------

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
firebase.analytics();

var database = firebase.database();

database.ref("/System/MonitorWaterLevel").on("value", function (snapshot) {
    var MonitorWaterLevel = document.getElementById('MonitorWaterLevel')
    MonitorWaterLevel.innerHTML = snapshot.val();
})

database.ref("/System/MonitorSpeed").on("value", function (snapshot) {
    var MonitorSpeed = document.getElementById("MonitorSpeed")
    MonitorSpeed.innerHTML = snapshot.val();
})

database.ref("/System/MonitorMotorStatus").on("value", function (snapshot) {
    var MonitorMotorStatus = document.getElementById('MonitorMotorStatus')
    if (snapshot.val() == true) {
        MonitorMotorStatus.innerHTML = "ON";
    }
    else {
        MonitorMotorStatus.innerHTML = "OFF";
    }
})

DataSpeed.addEventListener('keyup', function (e) {
    e.preventDefault();
    if (e.keyCode === 13) {
        SendDataSpeed();
    }
})

function SendDataSpeed() {
    var DataSpeed = document.getElementById('DataSpeed').value;
    if (DataSpeed == "") {
        alert("Please enter your speed Pumps !!!");
    }
    else {
        try {
            database.ref("/System").update({
                "ControlSpeedPump": Number(DataSpeed)
            })
            alert("Successfully !!!")
        }
        catch
        {
            alert("Write your speed Pumps Failed !!!");
        }
    }
}

function LogOutWeb() {
    window.location = ("https://mcnxo2001.github.io/PumpSystem/Login/index.html");
}

//--------------------------------------------------------------------------------------------------------------------------------

switch_button_Mode.addEventListener('click', function () {
    if (ActionMode == false) {
        swichMode.style.backgroundColor = 'rgb(64, 240, 47)';
        switch_button_Mode.style.backgroundColor = 'rgb(64, 190, 47)';
        switch_button_Mode.style.marginLeft = '2.6rem';
        ActionMode = true;
        database.ref("/System").update({
            "ControlMotorStatus": true
        })
    }
    else {
        swichMode.style.backgroundColor = 'gray';
        switch_button_Mode.style.backgroundColor = 'rgba(255, 255, 255, 0.616)';
        switch_button_Mode.style.marginLeft = '0.2rem';
        ActionMode = false;
        database.ref("/System").update({
            "ControlMotorStatus": false
        })
    }
})

//--------------------------------------------------------------------------------------------------------------------------------