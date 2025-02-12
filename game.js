// ランダムな数を生成する
const answer = Math.floor(Math.random() * 100) + 1;

// ゲームの要素を取得する
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const result = document.getElementById('result');

// ボタンクリックイベントのリスナーを設定する
guessButton.addEventListener('click', function() {
  const guess = parseInt(guessInput.value);

  // 入力値が正しいかチェックする
  if (isNaN(guess) || guess < 1 || guess > 100) {
    result.textContent = '1から100までの数字を入力してください。';
    return;
  }

  // 結果を表示する
  if (guess === answer) {
    result.textContent = '正解です!';
  } else if (guess < answer) {
    result.textContent = 'もっと大きな数です。';
  } else {
    result.textContent = 'もっと小さな数です。';
  }
});
