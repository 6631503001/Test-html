function clearInput(Input){
    document.getElementById(Input).addEventListener('click',function(){
        let Input1 = document.getElementById(Input).value;
        if(Input1 == "Departure" || Input1 == "Arrival"){
        document.getElementById(Input).value = "";
        }
    });
}

document.addEventListener('click', function() {
    let box = document.getElementById("city-left");
    if (!box.contains(event.target) && document.getElementById("city-left").value == "") {
        document.getElementById("city-left").value = "Departure";
    }
});
document.addEventListener('click', function() {
    let box = document.getElementById("city-right");
    if (!box.contains(event.target) && document.getElementById("city-right").value == "") {
        document.getElementById("city-right").value = "Arrival";
    }
});

function findFlight() {
    let tripType = document.getElementById("tripType").value;
    let numPassengers = document.getElementById("passenger-num").value;
    let seatType = document.getElementById("seatType").value;
    let city_left = document.getElementById("city-left").value;
    let city_right = document.getElementById("city-right").value;

    alert('Trip Type: ' + tripType + '\nNumber of Passengers: ' + numPassengers + '\nClass: ' + seatType + "\nDeparture:" + city_left + "\nArrival: " + city_right);
}


//* To clear input brabra
clearInput("city-left");
clearInput("city-right");
document.getElementById("search-button").addEventListener('click', findFlight);