/* add code below this */

const photos = JSON.parse(content);

console.log(photos);

for( let figure of photos){ // 'of' get the value, 'in' get the properties
  var HTMLContent = "<figure>";
  HTMLContent += `<img src="images/${figure.filename}" alt ="${figure.title}">`;
  HTMLContent += `<figcaption><h2>${figure.title}</h2>`;
  for (let color of figure.colors){
    HTMLContent += `<span style="background-color: ${color.hex}"> </span>`;
  }
  HTMLContent += "</figcaption></figure>";
  document.write(HTMLContent);
}
