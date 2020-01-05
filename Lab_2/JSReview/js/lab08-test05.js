const billTotals = [50, 150, 20, 500];
// const tips = [];
//
//
// for (let bill of billTotals){
//   if(bill > 75){
//       tips.push(bill*0.1);
//   } else if ( bill > 30 && bill <= 75){
//       tips.push(bill*0.2);
//   } else {
//       tips.push(bill*0.3);
//   }
// }

function calculateTip(total){
  if(total > 75){
      return total*0.1;
  } else if ( total > 30 && total <= 75){
      return total*0.2;
  } else {
      return total*0.3;
  }
}

for(let index in billTotals){
  console.log("For bill of $" + billTotals[index] + " the tip should be $" + calculateTip(billTotals[index]));
}
