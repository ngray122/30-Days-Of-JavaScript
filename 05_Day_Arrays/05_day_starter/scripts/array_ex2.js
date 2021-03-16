//Exercise Level 2
//1.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];

//2.
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let textToString = text.split(" ");
textToString.length;

//3.
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.slice(4, 5);
shoppingCart[3] = "Green Tea";
