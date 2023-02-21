import { useState } from "react";
import { ActionButton } from "../components/ActionButton";
import { JankenButton } from "../components/JankenButton";




export const Janken = () => {
  // 🔽 初期値を3項目を持つオブジェクトで設定
  const [jankenResult, setJankenResult] = useState({
    playerHand: "入力待ち",
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


  // プレイヤーの手元に残っているカードの種類と枚数を保存するための state を作成。初期値は配列。
	const [playerRemainingCard, setPlayerRemainingCard] = useState([
		0,0,0,0,0,1,1,1,1,1,2,2,2,2,2
	]);


	// コンピューターの手元に残っているカードの種類と枚数を保存するための state を作成。初期値は配列。
	const [computerRemainingCard, setComputerRemainingCard] = useState([
		0,0,0,0,0,1,1,1,1,1,2,2,2,2,2
	]);


	// コンピューターの手（0：グー 1：チョキ 2：パー）を保存するための state を作成。初期値はヌル
  const [computerHand, setComputerHand] = useState();


  // じゃんけんの対戦結果を保存するための state をオブジェクトで作成。初期値はそれぞれ0。
	const [matchResultCount, setMatchResultCount] = useState({
		playerWin_computerLose: 0,
		playerLose_computerWin: 0,
		draw: 0
	});


  // 🔽 プレイヤー側は配列を使わずにやろうと思ったけど、これだとなんかうまくいかなかった
  // 「自分の手」と「自分の手の残りカウント」を入力して、新しい「自分の手の残りカウント」を戻り値として返す関数
	// const getPlayerRemainingCount = (myHandIndex, playerRemainingCount) => {
  //   let new_gu_player = 0, new_cho_player = 0, new_par_player = 0;
  //   if (myHandIndex === 0) {
  //     new_gu_player = playerRemainingCount.gu_player--;
  //     new_cho_player = playerRemainingCount.cho_player;
  //     new_par_player = playerRemainingCount.par_player;
  //     // 下記のものをjQueryではなくReactで実装するにはどうしたらよいか？（残りカウントが0になったらボタンを選択肢から消す）
  //     // if(gu_you == 0){
  //     //   $("#gu_btn").css("display","none");
  //     // }
  //   }
  //   if (myHandIndex === 1) {
  //     new_gu_player = playerRemainingCount.gu_player;
  //     new_cho_player = playerRemainingCount.cho_player--;
  //     new_par_player = playerRemainingCount.par_player;
  //   }
  //   if (myHandIndex === 2) {
  //     new_gu_player = playerRemainingCount.gu_player;
  //     new_cho_player = playerRemainingCount.cho_player;
  //     new_par_player = playerRemainingCount.par_player--;
  //   }
  //   return {
  //     gu_player: new_gu_player,
  //     cho_player: new_cho_player,
  //     par_player: new_par_player
  //   };
	// };


  // 「プレイヤーの残りカード」を入力して、「プレイヤーが各手を出せる残り回数」を戻り値として返す関数
  const getPlayerRemainingCount = (playerRemainingCard) => {
    const gu = 0, cho = 1, par = 2;
    let gu_count = 0, cho_count = 0, par_count = 0;
    for (let i = 0;  i < playerRemainingCard.length; i++) {
      if(playerRemainingCard[i] === gu){
          gu_count++;
      }
    }
    for (let i = 0;  i < playerRemainingCard.length; i++) {
      if(playerRemainingCard[i] === cho){
          cho_count++;
      }
    }
    for (let i = 0;  i < playerRemainingCard.length; i++) {
      if(playerRemainingCard[i] === par){
          par_count++;
      }
    }
    return {
      gu_player: gu_count,
      cho_player: cho_count,
      par_player: par_count
    };
  };


  // 「コンピューターの残りカード」を入力して、「コンピューターが各手を出せる残り回数」を戻り値として返す関数
  const getComputerRemainingCount = (computerRemainingCard) => {
    const gu = 0, cho = 1, par = 2;
    let gu_count = 0, cho_count = 0, par_count = 0;
    for (let i = 0;  i < computerRemainingCard.length; i++) {
      if(computerRemainingCard[i] === gu){
          gu_count++;
      }
    }
    for (let i = 0;  i < computerRemainingCard.length; i++) {
      if(computerRemainingCard[i] === cho){
          cho_count++;
      }
    }
    for (let i = 0;  i < computerRemainingCard.length; i++) {
      if(computerRemainingCard[i] === par){
          par_count++;
      }
    }
    return {
      gu_computer: gu_count,
      cho_computer: cho_count,
      par_computer: par_count
    };
  }


  // 「コンピューターの残りカード」を入力して、「コンピューターの手」を戻り値として返す関数。
  const getComputerHand = (computerRemainingCard) => {
    	// インデックス番号をランダムで決め、配列から値を1個取り出す
      const i = Math.floor(Math.random() * computerRemainingCard.length);
      const computerHand = computerRemainingCard[i];
      return computerHand;
  };


  // 🔽 「indexOf」の便利機能に気づく前の書き方
  // // 現在の「コンピューターの残りカード」を入力して、新しい「コンピューターの残りカード」を戻り値として返す関数
	// const getComputerRemainingCard = (computerRemainingCard) => {
  //   // 削除するカードのインデックス番号をランダムで決める
  //   const i = Math.floor(Math.random() * computerRemainingCard.length);
	// 	// インデックス番号に対応するカードを配列から削除する
  //   computerRemainingCard.splice(i,1);
  //   // 1枚のカードを削除した後の新しい配列を返す
  //   return computerRemainingCard;
	// };


  // 「自分の手」と現在の「プレイヤーの残りカード」を入力して、新しい「プレイヤーの残りカード」を戻り値として返す関数
	const getComputerRemainingCard = (computerHand, computerRemainingCard) => {
    // 削除するカードのインデックス番号を取得
		const i = computerRemainingCard.indexOf(computerHand);
    // インデックス番号に対応するカードを配列から削除する
    computerRemainingCard.splice(i,1);
    // 1枚のカードを削除した後の新しい配列を返す
    return computerRemainingCard;
	};


  // 「自分の手」と現在の「プレイヤーの残りカード」を入力して、新しい「プレイヤーの残りカード」を戻り値として返す関数
	const getPlayerRemainingCard = (playerHandIndex, playerRemainingCard) => {
    // 削除するカードのインデックス番号を取得
		const i = playerRemainingCard.indexOf(playerHandIndex);
    // インデックス番号に対応するカードを配列から削除する
    playerRemainingCard.splice(i,1);
    // 1枚のカードを削除した後の新しい配列を返す
    return playerRemainingCard;
	};


  // 「自分の手」と「コンピューターの手」と「じゃんけんの対戦結果」を入力して、新しい「じゃんけんの対戦結果」を戻り値として返す関数
  const getMatchResultCount = (playerHandIndex, computerHand, matchResultCount) => {
    if (playerHandIndex === 0) {
      switch (computerHand) {
        case 0:
          matchResultCount.draw++;
          break;
        case 1:
          matchResultCount.playerWin_computerLose++;
          break;
        case 2:
          matchResultCount.playerLose_computerWin++;
          break;
      }
    }
    if (playerHandIndex === 1) {
      switch (computerHand) {
        case 0:
          matchResultCount.playerLose_computerWin++;
          break;
        case 1:
          matchResultCount.draw++;
          break;
        case 2:
          matchResultCount.playerWin_computerLose++;
          break;
      }
    }
    if (playerHandIndex === 2) {
      switch (computerHand) {
        case 0:
          matchResultCount.playerWin_computerLose++;
          break;
        case 1:
          matchResultCount.playerLose_computerWin++;
          break;
        case 2:
          matchResultCount.draw++;
          break;
      }
    }
    return {
      playerWin_computerLose: matchResultCount.playerWin_computerLose,
      playerLose_computerWin: matchResultCount.playerLose_computerWin,
      draw: matchResultCount.draw
    };
  };


  // 🔽 「自分の手」を入力して，「自分の手，相手の手，勝敗」を持ったオブジェクトを出力する関数
  const getJankenResult = (playerHandIndex, computerHand) => {
    const hand = ["グー", "チョキ", "パー"];
    const playerHand = hand[playerHandIndex];
    const comHand = hand[computerHand];
    const resultSheet = [
      ["あいこ", "あなたの勝ち", "あなたの負け"],
      ["あなたの負け", "あいこ", "あなたの勝ち"],
      ["あなたの勝ち", "あなたの負け", "あいこ"],
    ];
    return {
      playerHand: playerHand,
      comHand: comHand,
      result: resultSheet[playerHandIndex][computerHand],
    };
  };


  // ボタンクリック時に実行する「じゃんけんをして結果を保存する関数」
  const getJanken = (playerHandIndex) => {

    // 「コンピューターの手」を決めてセット
    const computerHand = getComputerHand(computerRemainingCard);
    console.log(computerHand);
    setComputerHand(computerHand);

    // プレイヤーの手とコンピューターの手から、じゃんけんの結果を導出してセット
    const result = getJankenResult(playerHandIndex, computerHand);
    console.log(result);
    setJankenResult(result);

    // 新しい「じゃんけんの対戦結果」を導出してセット
    const newMatchResultCount = getMatchResultCount(playerHandIndex, computerHand, matchResultCount);
    console.log(newMatchResultCount);
    setMatchResultCount(newMatchResultCount);


    // 「プレイヤーの残りカード」の情報を更新
    const newPlayerRemainingCard = getPlayerRemainingCard(playerHandIndex, playerRemainingCard);
    console.log(newPlayerRemainingCard);
    setPlayerRemainingCard(newPlayerRemainingCard);

    // 「プレイヤーの手の残りカウント」の情報を更新
    const newPlayerRemainingCount = getPlayerRemainingCount(playerRemainingCard);
    console.log(newPlayerRemainingCount);
    setPlayerRemainingCount(newPlayerRemainingCount);
    

    // 「コンピューターの残りカード」の情報を更新
    const newComputerRemainingCard = getComputerRemainingCard(computerHand, computerRemainingCard);
    console.log(newComputerRemainingCard);
    setComputerRemainingCard(newComputerRemainingCard);

    // 「コンピューターの手の残りカウント」の情報を更新
    const newComputerRemainingCount = getComputerRemainingCount(newComputerRemainingCard);
    console.log(newComputerRemainingCount);
    setComputerRemainingCount(newComputerRemainingCount);
  }




  return (
    <>
      <p>じゃんけんの画面</p>
      <JankenButton text="グー" value="0" action={() => getJanken(0)} />
      <JankenButton text="チョキ" value="1" action={() => getJanken(1)} />
      <JankenButton text="パー" value="2" action={() => getJanken(2)} />

      <p>自分の手：{jankenResult.playerHand}</p>
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

    </>
  );
};
