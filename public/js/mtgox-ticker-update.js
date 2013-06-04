$(document).ready(function () {

    var minutesPerUpdate = function (minutes){
        return minutes * 1000 * 60;
    };

    var tickerAjax = function (){
        $.ajax("/api/mtgox_btc_usd_data", {
            type: "GET"
        }).done(function(response) {
                $("#gox-ticker-price").text(response.return.avg.value);
            });
    };

    tickerAjax();

    var tickerTimeout = window.setInterval(tickerAjax, minutesPerUpdate(1));
});
