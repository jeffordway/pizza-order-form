// Global variables
let crust = document.getElementById("crust");
let sauce = document.getElementById("sauce");

// toppings array
let toppingsArray = [];

// event listener
const formButton = document.getElementById("btn");

formButton.addEventListener("click", function (event) {
  event.preventDefault();
  let topping1 = document.getElementById("topping1").value;
  let topping2 = document.getElementById("topping2").value;
  let topping3 = document.getElementById("topping3").value;
  toppingsArray.push(topping1, topping2, topping3);
  calculateTotal(toppingsArray);
});

function calculateTotal(toppingsArray) {
  // cost of crust and sauce
  let total = 0;
  let toppingCost = 2.5;
  let baseCost = 5.5; 
  // order string concatenation
  let orderString = crust.value + " Crust Pizza with " + sauce.value + " Sauce.";
  let toppingString = "Toppings: ";
  // For Loop
  for (let i = 0; i < toppingsArray.length; i++) {
    if (toppingsArray[i] !== "") {
      total += toppingCost;
      toppingString += toppingsArray[i] + " ";
    }
  }

  // total = baseCost + cost of all toppings
  total += baseCost;
  // set DOM total += total
  document.getElementById("total").innerHTML += total;
  // use DOM: = orderString
  document.getElementById("pizzaOrder").innerHTML = orderString;
  // use DOM: = toppingString
  document.getElementById("toppings").innerHTML = toppingString;
  //use DOM: = Congratulations message
  document.getElementById("congrats").innerHTML =
    "Congratulations! We have received your pizza order.";
}
