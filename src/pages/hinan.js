// 「自分の手」を入力して、内部処理用の数値に変換した値を出力する関数
	// const getStringToInteger = (myHand) => {
  //   let num = null;
	// 	if (myHand = "グー") {
	// 		num = 0;
	// 	}
	// 	if (myHand = "チョキ") {
	// 		num = 1;
	// 	}
	// 	if (myHand = "パー") {
	// 		num = 2;
	// 	}
	// 	return num;
	// };


  // 「自分の手」と「カードのインデックス番号」を戻り値として返す関数
	// const getPlayerHand = (playerRemainingCard) => {
	// 	// 配列からランダムで値を1個取り出す
  //   const i = Math.floor(Math.random() * playerRemainingCard.length);
  //   const playerHand = playerRemainingCard[i];
  //   // 「自分の手」と「カードのインデックス番号」を戻り値として返す
  //   return [playerHand,i];
	// };


  // 「コンピューターの残りカード」を入力して、「コンピューターの手」と「カードのインデックス番号」を戻り値として返す関数
	// const getComputerHand = (computerRemainingCard) => {
	// 	// 配列からランダムで値を1個取り出す
  //   const i = Math.floor(Math.random() * computerRemainingCard.length);
  //   const computerHand = computerRemainingCard[i];
  //   // 「コンピューターの手」と「カードのインデックス番号」を配列にして戻り値として返す
  //   return [computerHand,i];
	// };


	// コンピューターの手を決める関数
	// const getComputerHand = (computerRemainingCard) => {
	// 	// 配列からランダムで値を1個取り出す
  //   const i = Math.floor(Math.random() * computerRemainingCard.length);
  //   const computerHand = computerRemainingCard[i];
	// 	// 取り出した値は配列から削除してsetし直す
  //   const newArray = computerRemainingCard.splice(i,1);
  //   setComputerRemainingCard(newArray);
  //   // コンピュターの手を戻り値として返す（0：グー 1：チョキ 2：パー）
  //   return computerHand;
	// };