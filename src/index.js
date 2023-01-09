/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数の上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言;";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// val3 = "const変数を上書き";

// //constは再宣言不可能
// const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの変数が可能
// const val4 = {
//   name: "こぼりん",
//   age: 26
// };
// val4.name = "kobo";  //object name の変更可能　obejectの場合は.でつなぐ
// val4.address = "Ibaraki";　　//objectを追加することも可能
// console.log(val4);

// //constで定義した配列はプロパティの変数が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird"; //値の要素の変更も可能
// val5.push("monkey"); //値の要素の追加
// console.log(val5);

// //基本はconst。上書きが必要な場合はletを使う

/**
 * テンプレート文字列
 */
// const name = "こぼりん";
// const age = 26;
// //「私の名前はこぼりんです。年齢は26歳です。」

// //従来の方法→＋を書かなければならないしコードも長くなるので読みづらい
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数  指定した値をそのままリターンする
// ①function func1(str) {
//   return str;
// }
// ②const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

//アロー(arow)関数  ※()の中が引数　()を省略することも可能。保存すると()がつく。{}とreturnを省略することもできる。
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "こぼりん",
//   age: 26
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);
// // cf.テンプレート文字列

// ↓オブジェクトNEW
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);
// // ↑これがNEW　コードが短くて済む。簡潔。Reactでもよく使う。オブジェクトだけでなく配列にも使える↓

// ↓配列
// const myProfile = ["こぼりん", 26];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// //　↓配列NEW　※順番が異なるので注意
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など　※Reactでよく使う
 */
// nameだけでは undefinedとなるので、name="ゲスト"と入れてデフォルト化（初期値）する。
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello("こぼりん");

/**
 * スプレッド構文 ...　ややこいらしい
 */
//配列の展開
