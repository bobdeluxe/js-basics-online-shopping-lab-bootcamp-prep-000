var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({"itemName": item, "itemPrice": Math.floor(Math.random()*100)+1})
 return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length===0) {
    return "Your shopping cart is empty."
  } else if(cart.length===1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if(cart.length===2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice} and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var cartItems = "In your cart, you have"
    for(var i=0;i<cart.length;i++) {
      if(cart.length-2===i) {
        cartItems+=` ${cart[i].itemName} at $${cart[i].itemPrice}`
      } else if(cart.length-1===i) {
        cartItems+=` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      } else {
      cartItems+=` ${cart[i].itemName} at $${cart[i].itemPrice},`
      }
    }
    return cartItems
  }
}

function total() {
  var total = 0
  for(var i=0;i<cart.length;i++) {
    total=+cart[i].itemPrice
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
