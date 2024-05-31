export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart){
  cart = 
  [
    {
        productId: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
        quantity: 1
    },
    {
        productId: "dd82ca78-a18b-4e2a-9250-31e67412f98d" ,
        quantity: 5
    }
]
}

export function addToCart(productId){
    let matchingItem;

    cart.forEach((item) => {

      if (productId === item.productId){
        matchingItem = item;
      }
    })
  
    if (matchingItem){
      matchingItem.quantity ++;
    }
    else {
      cart.push(
        {
          productId : productId,
          quantity: 1
        }
      )
    }
    saveToStorage();
  }

  export function removeFromCart(cartItemId) {
    
      const newCart = [];
      cart.forEach((item) => 
      {
        if (item.productId !== cartItemId){
          newCart.push(item);
        }
      });
      cart = newCart;
      saveToStorage();
      // console.log(cart);
  
  }

  function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
  }

