/* code goes here */
console.log(content[0].title); // undefined, becasue it is a string, not an object


console.log(typeof content);

console.log('%c Separate', 'color:#F08080; background: #222; font-size: 24px');

// parsing
const photos = JSON.parse(content);
console.log(typeof photos);
console.log(photos[0].title);
console.log(photos);
