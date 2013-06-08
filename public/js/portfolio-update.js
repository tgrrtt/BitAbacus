$(document).ready(function(){


    var minutesPerUpdate = function (minutes){
        return minutes * 1000 * 60;
    };

    var portfUpdateAjax = function (){
        $.ajax("/mock/mock-user-data.json", {
            type: "GET"
        }).done(function(response) {
                $("#user-address2-amount").text(response.portfolio.address_book.address2.amount);
            });
    };

    portfUpdateAjax();

//    var amount = portfolio.address2.amount;
    var amount1 = 200;
    var amount2 = 225;


//    var updateUserAmount = function(elm, arg){
//        elm.text(arg);
//        console.log(elm);
//        var argPlus = arg;
//        window.setInterval(function(){
//            argPlus++;
//            console.log(elm);
//            elm.text(argPlus);
//        }, minutesPerUpdate(0.1));
//    };
//
//    updateUserAmount($("#user-address2-amount"), amount1);

});