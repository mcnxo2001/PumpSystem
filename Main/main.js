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

var ActionMode = true;
var ActivePump = false;
var Direction = true;

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

database.ref("/System/WaterLevel").on("value", function (snapshot) {
    WaterLevel.innerHTML = snapshot.val();
})

database.ref("/System/SpeedPump").on("value", function (snapshot) {
    SpeedPump.innerHTML = snapshot.val();
})

database.ref("/System/ActiveMode").on("value", function (snapshot) {
    if (snapshot.val() == true) {
        StatusMode.innerHTML = "AUTO";
    }
    else {
        StatusMode.innerHTML = "MANU";
    }
})

database.ref("/System/ActivePump").on("value", function (snapshot) {
    if (snapshot.val() == true) {
        Status_Pump.innerHTML = "ON";
    }
    else {
        Status_Pump.innerHTML = "OFF";
    }
})

database.ref("/System/DirectionPump").on("value", function (snapshot) {
    if (snapshot.val() == true) {
        Status_Direction_Pump.innerHTML = "FORWARD";
    }
    else {
        Status_Direction_Pump.innerHTML = "BACK";
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
                "SpeedPump": Number(DataSpeed)
            })
        }
        catch
        {
            alert("Write your speed Pumps Failed !!!");
        }
    }
}

//--------------------------------------------------------------------------------------------------------------------------------

switch_button_Mode.addEventListener('click', function () {
    if (ActionMode == false) {
        swichMode.style.backgroundColor = 'rgb(64, 240, 47)';
        switch_button_Mode.style.backgroundColor = 'rgb(64, 190, 47)';
        switch_button_Mode.style.marginLeft = '2.6rem';
        ActionMode = true;
        database.ref("/System").update({
            "ActiveMode": true
        })
    }
    else {
        swichMode.style.backgroundColor = 'gray';
        switch_button_Mode.style.backgroundColor = 'rgba(255, 255, 255, 0.616)';
        switch_button_Mode.style.marginLeft = '0.2rem';
        ActionMode = false;
        database.ref("/System").update({
            "ActiveMode": false
        })
    }
})

switch_Pump_button_Mode.addEventListener('click', function () {
    if (ActivePump == false) {
        switch_Pump.style.backgroundColor = 'rgb(64, 240, 47)';
        switch_Pump_button_Mode.style.backgroundColor = 'rgb(64, 190, 47)';
        switch_Pump_button_Mode.style.marginLeft = '2.6rem';
        ActivePump = true;
        database.ref("/System").update({
            "ActivePump": true
        })
    }
    else {
        switch_Pump.style.backgroundColor = 'gray';
        switch_Pump_button_Mode.style.backgroundColor = 'rgba(255, 255, 255, 0.616)';
        switch_Pump_button_Mode.style.marginLeft = '0.2rem';
        ActivePump = false;
        database.ref("/System").update({
            "ActivePump": false
        })
    }
})

switch_button_Direction_Pump.addEventListener('click', function () {
    if (Direction == false) {
        switch_Direction_Pump.style.backgroundColor = 'rgb(64, 240, 47)';
        switch_button_Direction_Pump.style.backgroundColor = 'rgb(64, 190, 47)';
        switch_button_Direction_Pump.style.marginLeft = '2.6rem';
        Direction = true;
        database.ref("/System").update({
            "DirectionPump": true
        })
    }
    else {
        switch_Direction_Pump.style.backgroundColor = 'gray';
        switch_button_Direction_Pump.style.backgroundColor = 'rgba(255, 255, 255, 0.616)';
        switch_button_Direction_Pump.style.marginLeft = '0.2rem';
        Direction = false;
        database.ref("/System").update({
            "DirectionPump": false
        })
    }
})

//--------------------------------------------------------------------------------------------------------------------------------


