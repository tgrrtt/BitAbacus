//Code for updating portfolio amount "Currency" into Bitcoins worth

$(document).ready(function () {

    var minutesPerUpdate = function (minutes){
        return minutes * 1000 * 60;
    };
//Fill in element and add json path at the end of .done
    var tickerAjax = function (){
        $.ajax("/api/btce_ltc_btc_data", {
            type: "GET"
        }).done(function(response) {
                $(element_goes_here).text(response.insert_json_here);
            });
    };

    tickerAjax();

    var tickerTimeout = window.setInterval(tickerAjax, minutesPerUpdate(1));
});


