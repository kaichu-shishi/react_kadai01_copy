import { useState } from "react";
import { ActionButton } from "../components/ActionButton";
import { JankenButton } from "../components/JankenButton";




export const Janken = () => {
  // ๐ฝ ๅๆๅคใ3้ ็ฎใๆใคใชใใธใงใฏใใง่จญๅฎ
  const [jankenResult, setJankenResult] = useState({
    playerHand: "ๅฅๅๅพใก",
    comHand: "ๅพๆฉไธญ",
    result: "ๆชๅฏพๆฆ",
  });


	// ใใฌใคใคใผใๅๆใๅบใใๆฎใๅๆฐใไฟๅญใใใใใฎ state ใไฝๆใๅๆๅคใฏใใใใ5ๅใ
	const [playerRemainingCount, setPlayerRemainingCount] = useState({
		gu_player: 5,
		cho_player: 5,
		par_player: 5
	});


  // ใณใณใใฅใผใฟใผใๅๆใๅบใใๆฎใๅๆฐใไฟๅญใใใใใฎ state ใไฝๆใๅๆๅคใฏใใใใ5ๅใ
	const [computerRemainingCount, setComputerRemainingCount] = useState({
		gu_computer: 5,
		cho_computer: 5,
		par_computer: 5
	});


  // ใใฌใคใคใผใฎๆๅใซๆฎใฃใฆใใใซใผใใฎ็จฎ้กใจๆๆฐใไฟๅญใใใใใฎ state ใไฝๆใๅๆๅคใฏ้ๅใ
	const [playerRemainingCard, setPlayerRemainingCard] = useState([
		0,0,0,0,0,1,1,1,1,1,2,2,2,2,2
	]);


	// ใณใณใใฅใผใฟใผใฎๆๅใซๆฎใฃใฆใใใซใผใใฎ็จฎ้กใจๆๆฐใไฟๅญใใใใใฎ state ใไฝๆใๅๆๅคใฏ้ๅใ
	const [computerRemainingCard, setComputerRemainingCard] = useState([
		0,0,0,0,0,1,1,1,1,1,2,2,2,2,2
	]);


	// ใณใณใใฅใผใฟใผใฎๆ๏ผ0๏ผใฐใผ 1๏ผใใงใญ 2๏ผใใผ๏ผใไฟๅญใใใใใฎ state ใไฝๆใๅๆๅคใฏใใซ
  const [computerHand, setComputerHand] = useState();


  // ใใใใใใฎๅฏพๆฆ็ตๆใไฟๅญใใใใใฎ state ใใชใใธใงใฏใใงไฝๆใๅๆๅคใฏใใใใ0ใ
	const [matchResultCount, setMatchResultCount] = useState({
		playerWin_computerLose: 0,
		playerLose_computerWin: 0,
		draw: 0
	});


  // ๐ฝ ใใฌใคใคใผๅดใฏ้ๅใไฝฟใใใซใใใใจๆใฃใใใฉใใใใ ใจใชใใใใพใใใใชใใฃใ
  // ใ่ชๅใฎๆใใจใ่ชๅใฎๆใฎๆฎใใซใฆใณใใใๅฅๅใใฆใๆฐใใใ่ชๅใฎๆใฎๆฎใใซใฆใณใใใๆปใๅคใจใใฆ่ฟใ้ขๆฐ
	// const getPlayerRemainingCount = (myHandIndex, playerRemainingCount) => {
  //   let new_gu_player = 0, new_cho_player = 0, new_par_player = 0;
  //   if (myHandIndex === 0) {
  //     new_gu_player = playerRemainingCount.gu_player--;
  //     new_cho_player = playerRemainingCount.cho_player;
  //     new_par_player = playerRemainingCount.par_player;
  //     // ไธ่จใฎใใฎใjQueryใงใฏใชใReactใงๅฎ่ฃใใใซใฏใฉใใใใใใใ๏ผ๏ผๆฎใใซใฆใณใใ0ใซใชใฃใใใใฟใณใ้ธๆ่ขใใๆถใ๏ผ
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


  // ใใใฌใคใคใผใฎๆฎใใซใผใใใๅฅๅใใฆใใใใฌใคใคใผใๅๆใๅบใใๆฎใๅๆฐใใๆปใๅคใจใใฆ่ฟใ้ขๆฐ
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


  // ใใณใณใใฅใผใฟใผใฎๆฎใใซใผใใใๅฅๅใใฆใใใณใณใใฅใผใฟใผใๅๆใๅบใใๆฎใๅๆฐใใๆปใๅคใจใใฆ่ฟใ้ขๆฐ
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


  // ใใณใณใใฅใผใฟใผใฎๆฎใใซใผใใใๅฅๅใใฆใใใณใณใใฅใผใฟใผใฎๆใใๆปใๅคใจใใฆ่ฟใ้ขๆฐใ
  const getComputerHand = (computerRemainingCard) => {
    	// ใคใณใใใฏใน็ชๅทใใฉใณใใ ใงๆฑบใใ้ๅใใๅคใ1ๅๅใๅบใ
      const i = Math.floor(Math.random() * computerRemainingCard.length);
      const computerHand = computerRemainingCard[i];
      return computerHand;
  };


  // ๐ฝ ใindexOfใใฎไพฟๅฉๆฉ่ฝใซๆฐใฅใๅใฎๆธใๆน
  // // ็พๅจใฎใใณใณใใฅใผใฟใผใฎๆฎใใซใผใใใๅฅๅใใฆใๆฐใใใใณใณใใฅใผใฟใผใฎๆฎใใซใผใใใๆปใๅคใจใใฆ่ฟใ้ขๆฐ
	// const getComputerRemainingCard = (computerRemainingCard) => {
  //   // ๅ้คใใใซใผใใฎใคใณใใใฏใน็ชๅทใใฉใณใใ ใงๆฑบใใ
  //   const i = Math.floor(Math.random() * computerRemainingCard.length);
	// 	// ใคใณใใใฏใน็ชๅทใซๅฏพๅฟใใใซใผใใ้ๅใใๅ้คใใ
  //   computerRemainingCard.splice(i,1);
  //   // 1ๆใฎใซใผใใๅ้คใใๅพใฎๆฐใใ้ๅใ่ฟใ
  //   return computerRemainingCard;
	// };


  // ใ่ชๅใฎๆใใจ็พๅจใฎใใใฌใคใคใผใฎๆฎใใซใผใใใๅฅๅใใฆใๆฐใใใใใฌใคใคใผใฎๆฎใใซใผใใใๆปใๅคใจใใฆ่ฟใ้ขๆฐ
	const getComputerRemainingCard = (computerHand, computerRemainingCard) => {
    // ๅ้คใใใซใผใใฎใคใณใใใฏใน็ชๅทใๅๅพ
		const i = computerRemainingCard.indexOf(computerHand);
    // ใคใณใใใฏใน็ชๅทใซๅฏพๅฟใใใซใผใใ้ๅใใๅ้คใใ
    computerRemainingCard.splice(i,1);
    // 1ๆใฎใซใผใใๅ้คใใๅพใฎๆฐใใ้ๅใ่ฟใ
    return computerRemainingCard;
	};


  // ใ่ชๅใฎๆใใจ็พๅจใฎใใใฌใคใคใผใฎๆฎใใซใผใใใๅฅๅใใฆใๆฐใใใใใฌใคใคใผใฎๆฎใใซใผใใใๆปใๅคใจใใฆ่ฟใ้ขๆฐ
	const getPlayerRemainingCard = (playerHandIndex, playerRemainingCard) => {
    // ๅ้คใใใซใผใใฎใคใณใใใฏใน็ชๅทใๅๅพ
		const i = playerRemainingCard.indexOf(playerHandIndex);
    // ใคใณใใใฏใน็ชๅทใซๅฏพๅฟใใใซใผใใ้ๅใใๅ้คใใ
    playerRemainingCard.splice(i,1);
    // 1ๆใฎใซใผใใๅ้คใใๅพใฎๆฐใใ้ๅใ่ฟใ
    return playerRemainingCard;
	};


  // ใ่ชๅใฎๆใใจใใณใณใใฅใผใฟใผใฎๆใใจใใใใใใใฎๅฏพๆฆ็ตๆใใๅฅๅใใฆใๆฐใใใใใใใใใฎๅฏพๆฆ็ตๆใใๆปใๅคใจใใฆ่ฟใ้ขๆฐ
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


  // ๐ฝ ใ่ชๅใฎๆใใๅฅๅใใฆ๏ผใ่ชๅใฎๆ๏ผ็ธๆใฎๆ๏ผๅๆใใๆใฃใใชใใธใงใฏใใๅบๅใใ้ขๆฐ
  const getJankenResult = (playerHandIndex, computerHand) => {
    const hand = ["ใฐใผ", "ใใงใญ", "ใใผ"];
    const playerHand = hand[playerHandIndex];
    const comHand = hand[computerHand];
    const resultSheet = [
      ["ใใใ", "ใใชใใฎๅใก", "ใใชใใฎ่ฒ ใ"],
      ["ใใชใใฎ่ฒ ใ", "ใใใ", "ใใชใใฎๅใก"],
      ["ใใชใใฎๅใก", "ใใชใใฎ่ฒ ใ", "ใใใ"],
    ];
    return {
      playerHand: playerHand,
      comHand: comHand,
      result: resultSheet[playerHandIndex][computerHand],
    };
  };


  // ใใฟใณใฏใชใใฏๆใซๅฎ่กใใใใใใใใใใใฆ็ตๆใไฟๅญใใ้ขๆฐใ
  const getJanken = (playerHandIndex) => {

    // ใใณใณใใฅใผใฟใผใฎๆใใๆฑบใใฆใปใใ
    const computerHand = getComputerHand(computerRemainingCard);
    console.log(computerHand);
    setComputerHand(computerHand);

    // ใใฌใคใคใผใฎๆใจใณใณใใฅใผใฟใผใฎๆใใใใใใใใใฎ็ตๆใๅฐๅบใใฆใปใใ
    const result = getJankenResult(playerHandIndex, computerHand);
    console.log(result);
    setJankenResult(result);

    // ๆฐใใใใใใใใใฎๅฏพๆฆ็ตๆใใๅฐๅบใใฆใปใใ
    const newMatchResultCount = getMatchResultCount(playerHandIndex, computerHand, matchResultCount);
    console.log(newMatchResultCount);
    setMatchResultCount(newMatchResultCount);


    // ใใใฌใคใคใผใฎๆฎใใซใผใใใฎๆๅ ฑใๆดๆฐ
    const newPlayerRemainingCard = getPlayerRemainingCard(playerHandIndex, playerRemainingCard);
    console.log(newPlayerRemainingCard);
    setPlayerRemainingCard(newPlayerRemainingCard);

    // ใใใฌใคใคใผใฎๆใฎๆฎใใซใฆใณใใใฎๆๅ ฑใๆดๆฐ
    const newPlayerRemainingCount = getPlayerRemainingCount(playerRemainingCard);
    console.log(newPlayerRemainingCount);
    setPlayerRemainingCount(newPlayerRemainingCount);
    

    // ใใณใณใใฅใผใฟใผใฎๆฎใใซใผใใใฎๆๅ ฑใๆดๆฐ
    const newComputerRemainingCard = getComputerRemainingCard(computerHand, computerRemainingCard);
    console.log(newComputerRemainingCard);
    setComputerRemainingCard(newComputerRemainingCard);

    // ใใณใณใใฅใผใฟใผใฎๆใฎๆฎใใซใฆใณใใใฎๆๅ ฑใๆดๆฐ
    const newComputerRemainingCount = getComputerRemainingCount(newComputerRemainingCard);
    console.log(newComputerRemainingCount);
    setComputerRemainingCount(newComputerRemainingCount);
  }




  return (
    <>
      <p>ใใใใใใฎ็ป้ข</p>
      <JankenButton text="ใฐใผ" value="0" action={() => getJanken(0)} />
      <JankenButton text="ใใงใญ" value="1" action={() => getJanken(1)} />
      <JankenButton text="ใใผ" value="2" action={() => getJanken(2)} />

      <p>่ชๅใฎๆ๏ผ{jankenResult.playerHand}</p>
      <p>็ธๆใฎๆ๏ผ{jankenResult.comHand}</p>
      <p>็ตๆ๏ผ{jankenResult.result}</p>

			<div>
				<p>ใใใชใใ</p>
				<p>
					ๆฎใใฎๅๆฐ๏ผใฐใผ{playerRemainingCount.gu_player}ๅ
					ใใใงใญ{playerRemainingCount.cho_player}ๅ
					ใใใผ{playerRemainingCount.par_player}ๅ
				</p>
				<p>
					{matchResultCount.playerWin_computerLose}ๅ
					{matchResultCount.playerLose_computerWin}ๆ
					{matchResultCount.draw}ๅผใๅใ
				</p>
			</div>

			<div>
				<h2>ใใณใณใใฅใผใฟใผใ</h2>
				<p>
					ๆฎใใฎๅๆฐ๏ผใฐใผ{computerRemainingCount.gu_computer}ๅ
					ใใใงใญ{computerRemainingCount.cho_computer}ๅ
					ใใใผ{computerRemainingCount.par_computer}ๅ
				</p>
				<p>
          {matchResultCount.playerLose_computerWin}ๅ
					{matchResultCount.playerWin_computerLose}ๆ
					{matchResultCount.draw}ๅผใๅใ
				</p>
			</div>

    </>
  );
};
