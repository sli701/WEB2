// const TIPS = 0.1;
//
// let enterBill = prompt("what is a bill total?");
//
// let bill = Number(enterBill);
//
// if (!isNaN(bill)){
//   tip = bill * TIPS;
//   console.log("For bill of $" + enterBill + " the tip should be $" + tip);
// } else {
//   console.log("Number Expected");
// }


const billTotals = [50, 150, 20, 500];
const tips = [];


for (let bill of billTotals){
  if(bill > 75){
      tips.push(bill*0.1);
  } else if ( bill > 30 && bill <= 75){
      tips.push(bill*0.2);
  } else {
      tips.push(bill*0.3);
  }
}


for(let index in billTotals){
  console.log("For bill of $" + billTotals[index] + " the tip should be $" + tips[index]);
}
