// Домашня робота:
// -Створіть змінну  userNickname  і розмість там значення типу стрінг
// - Створіть змінну типу userScore  і розмістіть там числове значення
// - Отримайте через prompt 2 значення Ціна покупки  і кількість 
// продуктів та порахуйте  загальну сумму до сплати
// Додаткова робота:
// - вирахуйте скільки буде знижка 5% від загальної суми  розрахованої
//  в попередньому завданні
// Тег для домашньої роботи fed-pro-290124
// _______________________________________________________

//  Створення зьінних "userNickname" та "userScore"

let userNickname = 'Yurii';
let userScore = 12;

console.log(userNickname,userScore);

// Отримання Ціни покупки

let itemNumber = prompt('Введіть кількість купленого товару');
let itemPrice = prompt('Введіть ціну за одиницю товару');

let PriceValue = Number(itemNumber * itemPrice);

console.log('ЦІНА ПОКУПКИ =',PriceValue);

// Розрахунок знижки

let discount = PriceValue/100*5;

console.log('Знижка =', discount);

let itemCost=PriceValue - discount;

console.log('Ціна товару зі знижкою буде = ', itemCost); 



