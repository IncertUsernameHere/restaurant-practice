window.onload = function() {
       var buttons = document.querySelectorAll(".order-button");
       var order = {
              //order: [name, quantanty, price]
              0: ["Cheeze Pizza", 0, 10],
              1: ["Pepperoni Pizza", 0, 11],
              2: ["Little Bit of Everything Pizza", 0, 15],
              3: ["Vegetarian Pizza", 0, 13],
              4: ["Hawaiian Pizza", 0, 12],
              5: ["Ceasar Salad", 0, 3],
              6: ["Fruit Salad", 0, 3],
              7: ["Make Your Own Salad", 0, 5],
              8: ["Buffalo Wings", 0, 3],
              9: ["Spicy Wings", 0, 3],
              10: ["Coke", 0, 2],
              11: ["Pepsi", 0, 2],
              12: ["Lemonade", 0, 2],
              13: ["Tea", 0, 2]
       };

       function createOrder(item) {
              var orderPlaced = function () {
                     order[item][1] += 1;
                     sessionStorage.setItem("customer-order", JSON.stringify(order));
              };
              return orderPlaced;
       };
      
       if (sessionStorage.getItem("customer-order") != null) {
              order = JSON.parse(sessionStorage.getItem("customer-order"));
       }

       for(var i = 0; i < buttons.length; i++) {
              var placeOrder = createOrder(i)
              buttons[i].addEventListener('click', placeOrder);
       }

       window.$order = order;
};

document.onunload = function() {
       sessionStorage.setItem("customer-order", JSON.stringify($order));

};