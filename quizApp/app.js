const quiz = [
  {
   question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
   answers: [
    'スーパーファミコン',
    'プレイステーション2',
    'ニンテンドースイッチ',
    'ニンテンドーDS'
   ],
   correct: 'ニンテンドーDS'
  },{
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: [
     'MOTHER2',
     'スーパーマリオブラザーズ3',
     'スーパードンキーコング',
     '星のカービィ'
      ],
    correct: 'MOTHER2'
  },{
    question: 'ファイナルファンタジーⅣの主人公の名前は？',
    answers: [ 
     'フリオニール',
     'クラウド',
     'ティーダ',
     'セシル'
    ],
    correct: 'セシル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button'); //何度も使うものは、変数、定数に設定する　$でHTMLのオブジェクトが入っていることが理解しやすい
const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question; // textContent　このHTMLタグが持っているテキスト情報を取得するプロパティ =にするだけで書き換え可能
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
    score++;
  }else{
    window.alert('不正解!');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題文がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！'); //score=正解数＋「/」＋quizLength=問題数　//文字列と変数は「＋」で結合することができる
  }

};

//ボタンをクリックしたら正誤判定   //e イベントのオブジェクト  //target クリックされたボタン
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
