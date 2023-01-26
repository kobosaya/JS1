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
// // nameだけでは undefinedとなるので、name="ゲスト"と入れてデフォルト化（初期値）する。
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("こぼりん");

/**
 * スプレッド構文 ...　ややこいらしい
 */
// //配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // //→かっこ付きの数字が表示される

// // console.log(...arr1);
// // //→配列の中身を単純に表示した形となる

// const sumFunc = (num1, num2) => console.log(num1 + num2); //→アロー関数
// sumFunc(arr1[0], arr1[1]); //→引数の指定　　→結果は3となる
// sumFunc(...arr1);  //→136行目と同じ処理。スプレッド構文は要素は順番に設定され処理される（順番処理）

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// //　↑スプレッド構文で残りの値が何であろうとまとめて受け取る設定
// console.log(num1);
// console.log(num2);
// console.log(arr3);
// //まとめて配列を受け取るときにスプレッド構文が便利！

//配列のコピー、結合　※よくReactで使う！
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4]; //149行目と全く同じ。→配列をコピーするときにも使える
// arr6[0] = 100;
// console.log(arr4);
//スプレッド構文では163行目のようなことは起きない→元の配列は変更の影響を受けない
//arr6の値を変更すると、[100,20]と表示される。arr4を宣言しても元の値は変わらず[10,20]と出る

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);
//158行目みたいに指定するとarr4の元の値も影響を受けて変化してしまう→エラーの原因に

/**
 * mapやfilterを使った配列の処理→構文を使わなくてもよくなる
 */
// const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

//mapは中にアロー関数を書ける　↓基本的なmapの書き方
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

//アロー関数の省略版書いてる↓　一行で170～172のことが書けた！
// nameArr.map((name) => console.log(name));

//filter関数＝ある条件に一致したものだけ返却して新しい配列を生成する
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// //何番目は○○ですとしたいとき↓　``はテンプレート文字列
// const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }
// //↑　+1するとより何番目かわかりやすくなる（しないと0番目スタート）

//mapは引数を2つ以上取ることができる　→用途に合わせて引数を増やせる
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);
// //じゃけぇ以外の名前に「さん」をつけることができた　mapはTODOリストでも多用していく

/**
 * 三項演算子
 */
//ある条件? 条件がtrueの時：条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);
//1より大きければtrueですと返される。小さければfalse

// const num = "1300";
// console.log(num.toLocaleString());
// //toLocaleStringは金額などの3桁表示に最適。文字列には対応しない

//例①
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);
//typeofはどんな型なのかを判定してくれるもの

// //例②
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です";
};
console.log(checkSum(50, 40));
//checkSumは数値に対して許容範囲内なのかチェックしてくれるもの

/**
 * 論理演算子の本当の意味を知ろう　&& ||
 */
