//Updates the btc price ticker on portfolio/index.html "Currency" column.
//Specifically litecoin at this time.

$(document).ready(function(){


    var minutesPerUpdate = function (minutes){
        return minutes * 1000 * 60;
    };

//use array and loop to iterate through and update all spans in ajax call?

    var portfolioUpdateAjax = function (elm){
        $.ajax("/mock/mock-user-data.json", {
            type: "GET"
            // Now this wont work with nested objects...
        }).done(function(response){
            var test = response.portfolio.address_book.adr2.amount;
            elm.text(test);
            window.setInterval(function(){
                test++
                elm.text(test);
            }, minutesPerUpdate(.1));
        });
    };

    portfolioUpdateAjax($("#user-address2-amount"));

});