/* add code below this */
const TIPS = 0.1;

let enterBill = prompt("what is a bill total?");

let bill = Number(enterBill);

if (!isNaN(bill)){
  tip = bill * TIPS;
  console.log("For bill of $" + enterBill + " the tip should be $" + tip);
} else {
  console.log("Number Expected");
}
