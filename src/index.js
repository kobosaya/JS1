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

//constで定義した配列はプロパティの変数が可能
const val5 = ["dog", "cat"];
val5[0] = "bird"; //値の要素の変更も可能
val5.push("monkey"); //値の要素の追加
console.log(val5);

//基本はconst。上書きが必要な場合はletを使う
