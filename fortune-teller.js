

let fortune1= "hey dear"
let fortune2= "My mommy"
let fortune3="my sister"
let fortune4="hey pretty"
let fortune5="Have a great day"
console.log(Math.ceil(Math.random() * 4) + 1);
let randomNumber = Math.floor(Math.random() * 5) + 1;
let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else {
  selectedFortune = fortune5;
}
console.log( selectedFortune);

