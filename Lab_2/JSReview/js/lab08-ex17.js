/* code goes here */
// const isCandian = true;
//
//
//
// function calculateTax(amount){
//
//   // define a function as an object
//   const tax = function taxRate(){
//     if(isCandian){
//       return 0.05;
//     } else {
//       return 0.0;
//     }
//
//     // now invoke the function using the
//     return  amount * tax();
//   }
//
//
// }
//
// function calculateTotal(price, quantity){
//   return (price * quantity) + calculateTax(price * quantity);
// }


 const isCandian = true;



function calculateTax(amount,tax){

    // now invoke the function using the
    return  amount * tax();
}




function calculateTotal(price, quantity){
  let amount = price * quantity;

  return amount + calculateTax(amount, function(){
    if(isCandian){
      return 0.05;
    } else {
      return 0.0;
    }
  });
}
