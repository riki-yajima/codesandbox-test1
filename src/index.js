// 分割代入
// オブジェクト、配列

// const myPro = {
//   name: "sato",
//   age: "28"
// };

// const message1 = `名前は${myPro.name}です。年は${myPro.age}です。`;
// console.log(message1);

// const { name, age } = myPro;
// const message2 = `名前は${name}です。年は${age}です。`;
// console.log(message2);

// // デフォルト値、引数

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}`);
// sayHello("sato");

// ||は左側がfalseなら右側を返す
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);