/* add code below this */


// creating and populating arrays in JavaScript
const days = new Array("Mon","Tues","Wed","Thur","Fri");
const months = ['jan','feb','mar'];
const years = [];

years[0] = 1999;
years[1] = 2000;

console.log(days);
console.log(months);
console.log(years);

console.log(months.length);
days.push("Sat");     //  adds a new elemene to the end of the array
days.unshift("Sun");  //  adds an element to the front of an array
console.log(days);
months.pop();         //  removes the last element
console.log(months);

for (let day in days){  // this would only get you the index "in"
  console.log(days[day]);
}

for (let i = 0; i < days.length; i++){
  console.log("index=" + i + ' value=' + days[i]);
}


for (let day of days){ // this would get the value instead of the index "of"
  console.log(day);
}
