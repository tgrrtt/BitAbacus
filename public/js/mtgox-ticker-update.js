$(document).ready(function () {

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
