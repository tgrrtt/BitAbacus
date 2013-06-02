//TODO: Implement ajax

$(document).ready(function () {
    var price = "$190";
    var priceUpdate = "$130";
    $("#gox-ticker-price").text(price)
    setInterval(function () {
        $("#gox-ticker-price").text(priceUpdate);
    }, 300000);
});
