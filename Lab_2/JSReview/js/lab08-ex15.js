/* code goes here */
// function outputBox(){
//   document.write("<div id = 'div1'>");
//   document.write("This is div 1");
//   document.write("</dvi>");
// }

// function outputBox(){
//   let box = "<div id = 'div1'>";
//   box += "This is div 1";
//   box += "</div>";
//   return box;
// }

function outputBox(num){
  let box = '<div id = "div${num}">';
  box += "This is div " + num;
  box += "</div>";
  return box;
}
