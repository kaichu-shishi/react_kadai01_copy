# react_kadai01_copy

## ①プロダクトの紹介
- カイジの漫画に出てくる「限定じゃんけん」の簡易版をReactで作ってみました！

## ②工夫した点
- アプリケーションのヘッダーのデザインにこだわったところ（デバイス幅に応じて文字の大きさなどが変化します）。
- コンピューターの手は、コンピュータが持っているカードの残り枚数によって、出る確率が変わるようにしたところ（15個の値を持つ配列で管理しました）。
- CSS-in-JSライブラリの一つである「styled-components」というものを使ってCSSを記述したところ。
- 「styled-components」の中の「styled-reset」というリセットCSSを導入したところ。

## ③苦戦した点
- ReactのuseStateの独特の書き方を自分でも書けるようになるまで苦戦しました
  - 手っ取り早く慣れるコツみたいなのは無く、ひたすら試行錯誤しながら自分の手を動かしてコーディングすることで段々と慣れていくことができました！
- 当初はグー、チョキ、パーのボタンを押しても思ったような挙動になりませんでした（例：全ての手が1回消費されてしまう、勝敗数の表示がおかしくなってしまう、…etc）
  - 元々はボタンを押した時に、getJanken関数に「グー」「チョキ」「パー」の文字を渡していました。しかし、それだと行き詰まってしまいました。そこで、getJanken関数に渡すものを0,1,2の数字に変えて、それに合わせてステートと関数も変えました。すると行き詰まりを打開することができました！

## ④質問・疑問・感想、シェアしたいこと等なんでも
- [参考記事：styled-componentsの導入関係]
  - https://ralacode.com/blog/post/how-to-use-styled-components/
  - https://qiita.com/sh19982580/items/70a6fcdb29826513bea2
- [参考記事：JavaScriptで、配列から値をランダムに1つ取得する方法]
  - https://programming-engineer.com/javascript-random/
- [参考記事：JavaScriptの配列に関するメソッドの1つである「indexOf」についての記事]
  - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  - 見つけた経緯：①「これは明らかにspliceメソッドを使うでしょ！」 → ②「あれ、どう頑張っても自分が求めている処理をつくることができない…」 → ③『JavaScript 配列 検索』でググったたところ、ヒントとなる記事（https://www.digitalocean.com/community/tutorials/js-array-search-methods-ja）を発見！ → ④『JavaScript メソッド 配列』でググったら、その中に発見！
