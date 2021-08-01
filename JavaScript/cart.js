window.onload = function() {
    var order = JSON.parse(sessionStorage.getItem("customer-order"));
    var orderSummary = document.querySelector(".order-summary");
    var totalPrice = 0;

    function addOrderItem(itemNum, itemAmount) {
        var dotNum = 37 - order[itemNum][0].length;
        var orderItem = "<div class='order-item'>" + order[itemNum][0];
        var price = order[itemNum][2];
        if (itemAmount > 1) {
            orderItem += " X" + itemAmount;
            price *= itemAmount;
        }
        for (var i = 0; i < dotNum; i++) {
            orderItem += ".";
        }
        orderItem += "$" + price + ".00</div>";
        orderSummary.innerHTML += orderItem;
        return price;
    }

    for (var i = 0; i < 13; i++) {
        if (order[i][1] > 1) {
            totalPrice += addOrderItem(i, order[i][1]);
        }
        else if (order[i][1] > 0) {
            totalPrice += addOrderItem(i);
        }
    }

    orderSummary.innerHTML += "<div class='total-price'>Total Price: $" + totalPrice + ".00</div>";
};