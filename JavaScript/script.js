(function() {
    var buttons = document.querySelectorAll("button.order-button");
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener(onclick, flog);
    };

    function flog() {
        console.log("worked");
    }
}());