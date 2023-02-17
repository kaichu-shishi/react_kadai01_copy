import React from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";

import { useState } from "react";
import { ActionButton } from "./components/ActionButton";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";




const App = () => {
  return (
    <>
    <Reset />
      <BackgroundOfTitle>
        <StyledMainTitle>
          限定じゃんけんゲーム<span>（元ネタ：『賭博黙示録カイジ』, 福本伸行, 講談社, 1996年）</span>
        </StyledMainTitle>
      </BackgroundOfTitle>

      <table>
        <tbody>
          <tr>
            <th>【ルール1】</th>
            <td>あなたはグー、チョキ、パーのカードをそれぞれ5枚ずつ持っています。<br />コンピューターもそれぞれ5枚ずつ持っています。</td>
          </tr>
          <tr>
            <th>【ルール2】</th>
            <td>あなたは自分の15枚のカードから、1回の手につき1枚カードを選んで出します。<br />コンピューターも同様とします。</td>
          </tr>
          <tr>
            <th>【ルール3】</th>
            <td>カードに書かれた手がそのままじゃんけんとなって勝ち・負け・あいこが決まります。<br />出されたカードは手もとから無くなります。<br />あいこでもカードは消費され、1回の手が終了となります。</td>
          </tr>
          <tr>
            <th>【ルール4】</th>
            <td>コンピューターの手は、コンピューターの残りのカードの中からランダムで1枚選ばれます。<br />例えばグー5枚、チョキ1枚、パー4枚の場合、グーは5/10の確率、チョキは1/10の確率、パーは4/10の確率で選ばれます。</td>
          </tr>
          <tr>
            <th>【ルール5】</th>
            <td>上記が1回のサイクルで、勝負は全部で15回行われます。<br />5枚使いきった手は選択肢から自動的に消えます。</td>
          </tr>
        </tbody>
      </table>

      <BrowserRouter>
        <ul>
          <li>
            <Link to="/omikuji">おみくじ</Link>
          </li>
          <li>
            <Link to="/janken">じゃんけん</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/omikuji" element={<Omikuji />} />
          <Route path="/janken" element={<Janken />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;




const BackgroundOfTitle = styled.div`
  background: linear-gradient(to right, #000000, #e74c3c); 
`;

const StyledMainTitle = styled.h1`
  text-align: center;
  font-weight: bold;
  color: white;
  font-size: 1.5rem;
  padding-top: 32px;
  padding-bottom: 32px;

  span {
    display: block;
    font-weight: normal;
    font-size: 0.5rem;
    padding-top: 10px;
  }


  @media screen and (min-width: 600px) {
    font-size: 2rem;
    padding-top: 40px;
    padding-bottom: 40px;

    span {
      font-size: 0.875rem;
      padding-top: 12px;
    }
  }


  @media screen and (min-width: 1025px) {
    font-size: clamp(2rem, -0.75rem + 3.44vw, 3.375rem);
    padding-top: clamp(2.5rem, -0.5rem + 3.75vw, 4rem);
    padding-bottom: clamp(2.5rem, -0.5rem + 3.75vw, 4rem);

    span {
      font-size: 1rem;
      padding-top: clamp(0.875rem, 0.125rem + 0.94vw, 1.25rem);
    }
  }
`;