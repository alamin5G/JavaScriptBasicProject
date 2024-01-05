const statusTexts = document.getElementById('onlineOrNot');

if(navigator.onLine){
    statusTexts.textContent = "Online";

}else{
    statusTexts.textContent = "Offline"
}

    const statusText = document.getElementById('statusText');
    const ipAddressText = document.getElementById('ipAddressText');
    const networkStrengthText = document.getElementById('networkStrengthText');

    

    if (navigator.onLine) {
        statusText.textContent = "Connected";
        document.getElementById('statusText').style.color = "#0AA91A";

        const connection = navigator.connection;
        const networkStrength = connection?connection.downlink +
            "MBps" : "Unknown";
        networkStrengthText.textContent = networkStrength;

        // Add "https://ipinfo.io" statement
        // this will communicate with the ipify servers 
        // in order to retrieve the IP address
        $.get("https://ipinfo.io",
        function (response) {
            ipAddressText.textContent = response.ip;
        }, "json");

        
        // "json" shows that data 
        // will be fetched in json format

    }else{
        statusText.textContent= "Disconnected";
        document.getElementById('statusText').style.color = "#ff0000";
        ipAddressText.textContent = "N/A";
        networkStrengthText.textContent = "N/A";
    }

