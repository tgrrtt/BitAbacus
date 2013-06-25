//Updates ticker on portfolio/index.html with mtgox exchange data.

$(document).ready(function () {

    var minutesPerUpdate = function (minutes){
        return minutes * 1000 * 60;
    };

    var tickerAjax = function (){
        $.ajax("/api/mtgox_btc_usd_data", {
            type: "GET"
        }).done(function(response) {
                $("#gox-ticker-price").text(response.return.last.display_short);
            });
    };

    tickerAjax();

    var tickerTimeout = window.setInterval(tickerAjax, minutesPerUpdate(5));
});