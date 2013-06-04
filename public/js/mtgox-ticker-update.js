$(document).ready(function () {

//    var price = "190";
//    var priceUpdate = "220";
//    $("#gox-ticker-price").text(price);
//    window.setInterval(function () {
//        $("#gox-ticker-price").text(priceUpdate);
//    }, minutesPerUpdate(1));
//

    var minutesPerUpdate = function (minutes){
        return minutes * 1000 * 60;
    };

    var tickerAjax = function (){
        $.ajax("/api/random", {
            type: "GET"
        }).done(function(response) {
                $("#gox-ticker-price").text(response.price);
            });
    };

    tickerAjax();

    var tickerTimeout = window.setInterval(tickerAjax, minutesPerUpdate(1));
});
