import { useState } from "react";
import { ActionButton } from "../components/ActionButton";




export const Janken = () => {
  // 🔽 初期値を3項目を持つオブジェクトで設定
  const [jankenResult, setJankenResult] = useState({
    myHand: "入力待ち",
    comHand: "待機中",
    result: "未対戦",
  });


	// プレイヤーが各手を出せる残り回数を保存するための state を作成。初期値はそれぞれ5回。
	const [playerRemainingCount, setPlayerRemainingCount] = useState({
		gu_player: 5,
		cho_player: 5,
		par_player: 5
	});


  // コンピューターが各手を出せる残り回数を保存するための state を作成。初期値はそれぞれ5回。
	const [computerRemainingCount, setComputerRemainingCount] = useState({
		gu_computer: 5,
		cho_computer: 5,
		par_computer: 5
	});


	// コンピューターの手元に残っているカードの種類と枚数を保存するための state を作成。初期値は配列。
	const [computerRemainingCard, setComputerRemainingCard] = useState([
		0,0,0,0,0,
		1,1,1,1,1,
		2,2,2,2,2
	]);


	// コンピューターの手（0：グー 1：チョキ 2：パー）を保存するための state を作成。初期値はヌル
  const [computerHand, setComputerHand] = useState(null);


  // じゃんけんの対戦結果を保存するための state をオブジェクトで作成。初期値はそれぞれ0。
	const [matchResultCount, setMatchResultCount] = useState({
		playerWin_computerLose: 0,
		playerLose_computerWin: 0,
		draw: 0
	});


  // 「自分の手」と「自分の手の残りカウント」を入力して、新しい「自分の手の残りカウント」をセットする関数
	const getPlayerRemainingCount = (myHand, playerRemainingCount) => {
    if (myHand = "グー") {
      playerRemainingCount.gu_player -= 1;
      // 下記のものをjQueryではなくReactで実装するにはどうしたらよいか？（残りカウントが0になったらボタンを選択肢から消す）
      // if(gu_you == 0){
      //   $("#gu_btn").css("display","none");
      // }
    }
    if (myHand = "チョキ") {
      playerRemainingCount.cho_player -= 1;
    }
    if (myHand = "パー") {
      playerRemainingCount.par_player -= 1;
    }
    setPlayerRemainingCount(playerRemainingCount);
	};


  // 「コンピューターの残りカード」を入力して、「コンピューターが各手を出せる残り回数」をセットする関数
  const getComputerRemainingCount = (computerRemainingCard) => {
    const gu = 0, cho = 1, par = 2;
    let gu_count = 0, cho_count = 0, par_count = 0;
    for (let i = 0;  i < computerRemainingCard.length; i++) {
      if(computerRemainingCard.length[i] == gu){
          gu_count++;
      }
    }
    for (let i = 0;  i < computerRemainingCard.length; i++) {
      if(computerRemainingCard.length[i] == cho){
          cho_count++;
      }
    }
    for (let i = 0;  i < computerRemainingCard.length; i++) {
      if(computerRemainingCard.length[i] == par){
          par_count++;
      }
    }
    setComputerRemainingCount({
      gu_computer: gu_count,
      cho_computer: cho_count,
      par_computer: par_count
    });
  }


  // 「コンピューターの残りカード」を入力して、「コンピューターの手」をセットしつつ戻り値として出力する関数。
  const getComputerHand = (computerRemainingCard) => {
    	// 配列からランダムで値を1個取り出す
      const i = Math.floor(Math.random() * computerRemainingCard.length);
      const computerHand = computerRemainingCard[i];
      // 「コンピューターの手」をセットしつつ戻り値として出力する
      setComputerHand(computerHand);
      return computerHand;
  };


  // 現在の「コンピューターの残りカード」を入力して、新しい「コンピューターの残りカード」をセットする関数
	const getComputerRemainingCard = (computerRemainingCard) => {
    // 削除するカードのインデックス番号をランダムで決める
    const i = Math.floor(Math.random() * computerRemainingCard.length);
		// 取り出した値は配列から削除してsetし直す
    const newArray = computerRemainingCard.splice(i,1);
    setComputerRemainingCard(newArray);
	};


  // 「自分の手」と「コンピューターの手」を入力して、新しい「じゃんけんの対戦結果」をセットする関数
  const getMatchResultCount = (myHand, computerHand) => {
    
  };


  // 🔽 履歴を保存するための state を作成．初期値は空配列
  const [history, setHistory] = useState([]);


  // 🔽 「自分の手」を入力して，「自分の手，相手の手，勝敗」を持ったオブジェクトを出力する関数
  const getJankenResult = (myHand) => {
    const hand = ["グー", "チョキ", "パー"];
    const myIndex = hand.indexOf(myHand);
    const comIndex = getComputerHand(computerRemainingCard);
    const resultSheet = [
      ["あいこ", "あなたの勝ち", "あなたの負け"],
      ["あなたの負け", "あいこ", "あなたの勝ち"],
      ["あなたの勝ち", "あなたの負け", "あいこ"],
    ];
    return {
      myHand: myHand,
      comHand: hand[comIndex],
      result: resultSheet[myIndex][comIndex],
    };
  };


  // 🔽 ボタンクリック時に実行する「じゃんけんをして結果を保存する関数」
  // const getJanken = (myHand) => {
  //   const result = getJankenResult(myHand);
  //   setJankenResult(result);
  //   // 🔽 「履歴の配列の先頭にじゃんけんの結果を追加した新しい配列」を作成して履歴のデータを上書きする．
  //   setHistory([result, ...history]);
  // };


  // ボタンクリック時に実行する「じゃんけんをして結果を保存する関数」
  const getJanken = (myHand) => {
    const result = getJankenResult(myHand);
    setJankenResult(result);
    getPlayerRemainingCount(myHand, playerRemainingCount);
    getComputerRemainingCount(computerRemainingCard);
    getComputerRemainingCard(computerRemainingCard);
  }




  return (
    <>
      <p>じゃんけんの画面</p>
      <ActionButton text="グー" action={() => getJanken("グー")} />
      <ActionButton text="チョキ" action={() => getJanken("チョキ")} />
      <ActionButton text="パー" action={() => getJanken("パー")} />

      <p>自分の手：{jankenResult.myHand}</p>
      <p>相手の手：{jankenResult.comHand}</p>
      <p>結果：{jankenResult.result}</p>

			<div>
				<p>【あなた】</p>
				<p>
					残りの回数：グー{playerRemainingCount.gu_player}回
					　チョキ{playerRemainingCount.cho_player}回
					　パー{playerRemainingCount.par_player}回
				</p>
				<p>
					{matchResultCount.playerWin_computerLose}勝
					{matchResultCount.playerLose_computerWin}敗
					{matchResultCount.draw}引き分け
				</p>
			</div>

			<div>
				<h2>【コンピューター】</h2>
				<p>
					残りの回数：グー{computerRemainingCount.gu_computer}回
					　チョキ{computerRemainingCount.cho_computer}回
					　パー{computerRemainingCount.par_computer}回
				</p>
				<p>
          {matchResultCount.playerLose_computerWin}勝
					{matchResultCount.playerWin_computerLose}敗
					{matchResultCount.draw}引き分け
				</p>
			</div>

      {/* 🔽 追加 */}
      <p>履歴</p>
      <table>
        <thead>
          <tr>
            <th>自分の手</th>
            <th>相手の手</th>
            <th>結果</th>
          </tr>
        </thead>
        <tbody>
          {/* 🔽 履歴の配列から要素を生成して表示する */}
          {history.map((x, i) => (
            <tr key={i}>
              <td>{x.myHand}</td>
              <td>{x.comHand}</td>
              <td>{x.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
