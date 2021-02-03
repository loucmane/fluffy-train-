window.onload = function() {

    document.getElementById("opennew").addEventListener('click', openInNewTab);
    document.getElementById("closecurrent").addEventListener('click', closeCurrent);
    document.getElementById("openincurrent").addEventListener('click', openInSame);

    document.getElementById("runaftertime").addEventListener('click', runAfter);
    document.getElementById("runagainandagain").addEventListener('click', runAgain);

    console.log(window.navigator.userAgent);

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(gotPosition, errorGettingPosition);
    }
    else {
        alert("Du saknar stöd för geolocation, uppdatera din webbläsare");
    }

}

function openInNewTab() {
    // window.open('http://www.dn.se');
    window.open('html/about.html');
}

function closeCurrent() {
    window.close();
}

function openInSame() {
    window.location.assign('html/about.html');
}

function runAfter() {
    setTimeout(delayedExectution, 4000);
}

let intervalId = 0;
let i = 0;

function runAgain() {
    intervalId = setInterval(delayedExectution, 1500);
}

function delayedExectution() {
    i++;

    console.log("Nu kördes funktionen för", i, "gången");

    if( i === 10 ) {
        clearInterval(intervalId);
    }
}

function gotPosition(position) {
    console.log("Lat:", position.coords.latitude, "Lng:", position.coords.longitude);

    const whereIam = { lat: position.coords.latitude, lng: position.coords.longitude };
    // The map, centered at whereIam
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: whereIam,
    });

    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: whereIam,
        map: map,
        title: 'Där Sebastian bor'
    });
}

function errorGettingPosition(error) {
    console.log(error);
}