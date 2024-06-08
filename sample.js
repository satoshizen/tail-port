// 元々のclassCheck関数
function classCheck() {
	var target = document.getElementById('target');
	var output = document.getElementById('output');
  
	if (target.classList.contains('apple') == true ) {
		output.innerHTML = 'appleが含まれています。';
	} else {
 		output.innerHTML = 'appleが含まれていません。';
  }
}

// ifの条件式はtrue/falseが結果として出れば比較じゃ無くても良い例
function classCheck() {
	var target = document.getElementById('target');
	var output = document.getElementById('output');
  
	if (target.classList.contains('apple') ) {
		output.innerHTML = 'appleが含まれています。';
	} else {
 		output.innerHTML = 'appleが含まれていません。';
  }
}

// varを使わない例
function classCheck() {
	const target = document.getElementById('target');
  const output = document.getElementById('output');
  // const => 中身の変更も変数の再定義もできない = 定数
  // let => 変数の再定義はできないが、中身は変更できる
  
	if (target.classList.contains('apple') ) {
		output.innerHTML = 'appleが含まれています。';
	} else {
 		output.innerHTML = 'appleが含まれていません。';
  }
}

// idをいきなり指定できる例
function classCheck() {
	if (target.classList.contains('apple') ) {
		output.innerHTML = 'appleが含まれています。';
	} else {
 		output.innerHTML = 'appleが含まれていません。';
  }
}

// アロー関数で記述する例
/*
    アロー関数の書き方
    (引数) => {処理}
*/
const classCheck = () => {
	if (target.classList.contains('apple') ) {
		output.innerHTML = 'appleが含まれています。';
	} else {
 		output.innerHTML = 'appleが含まれていません。';
  }
}