
# 鳥大ものづくり教室「LEDスタンドを作ろう！」

![LEDスタンド](./icon.png)

このプロジェクトは，「LEDスタンドを作ろう！」のプログラム編で利用する[MakeCode Maker](https://maker.makecode.com/)の拡張機能です．  
家でプログラミングの続きをするときは，下の「[使い方](#使い方)」を見てください．  
  
---

## 使い方

詳しい方法はイベントのときに配ったテキストを確認してください．ここでは，プログラミングを始めるまでのステップを紹介します．  
  
### 【簡単な方法】

配布したテキストの「自宅でプログラミングするときは？」に記載されている方法です．  
  
1. 以下の共有プロジェクトにアクセスしてください．  
    [https://makecode.com/_KPJVvLfytgkb](https://makecode.com/_KPJVvLfytgkb)  
  
2. 画面右上の「Edit Code」をクリックしてください．  
  
3. プログラムを作って遊ぼう！  
  
### 【最新のプログラムを使う方法】

拡張機能のプログラムに問題が見つかったときは修正を行っています．  
共有プログラムにはその修正が反映されません．  
以下の手順でプログラムを作成すると最新の拡張機能を使うことができます．  
  
1. 下のURLからMakeCode Makerにアクセスします．  
    [https://maker.makecode.com/](https://maker.makecode.com/)  
  
2. 「New Project」をクリックします．  
    Give your project a nameにプログラムの名前を入力してCreateをクリックします．  
  
3. Bordsの一覧から「adafruit-trinket-m0」をクリックします．  
  
4. 「EXTENSIONS」をクリックします．  
  
5. 「Search or enter project URL...」に以下のURLを入力します．  
    https://github.com/icee-workshop/pxt-makeLedStand  
  
6. 「makeledstand」をクリックして拡張機能を追加します．  
  
7. プログラムを作って遊ぼう！  
  
---

## プログラム例

イベントで紹介した様々なイルミネーションのプログラムです．  
プログラム例を参考にして自分だけのイルミネーションを作ってみよう！  
  
### 基本プログラム

MakeCode Maker：[基本](https://makecode.com/_KPJVvLfytgkb)  
  
このプログラムでは，LEDテープ全体が赤色に点灯します．  
最初だけブロックは電源を入れた後に動作するブロックです．  
ここでは，LEDスタンドの設定ブロックでスイッチで切り替えるモードの数を決めています．  
このLEDスタンドの設定ブロックは必ず最初だけブロックで使ってください．  

### グラデーション点灯

MakeCode Maker：[グラデーション点灯](https://makecode.com/_JvpU360zDW4s)  
  
このプログラムでは，スイッチにより３つのモードを切り替えることができます．  
１つ目のモードは，LEDテープ全体が赤色に点灯します．  
２つ目のモードは，LEDテープが赤色から青色へグラデーション点灯します．  
３つ目のモードは，LEDテープがグラデーション点灯し，その色がカラフルに移り変わります．  

### 流れる点灯

MakeCode Maker：[流れる点灯](https://makecode.com/_047Mp59jE6h7)  
  
このプログラムでは，グラデーション点灯のプログラムにさらにモードを1つ追加して  
順番にLEDが点灯する動作を追加しています．  

### 点滅

MakeCode Maker：[点滅](https://makecode.com/_C36cWoWthfA2)  
  
このプログラムでは，光の強さを設定ブロックを使って点滅する動作を作っています．  

### 流れる点灯２

MakeCode Maker：[流れる点灯２](https://makecode.com/_i9Y8MXFsa5pK)  
  
このプログラムでは，LEDの数ブロックを使って流れる点灯を作っています．  

### 標準ブロックと組み合わせ

MakeCode Maker：[標準ブロックと組み合わせ](https://makecode.com/_0KCWV6VFuP8x)  

このプログラムでは，MakerCode Makerに標準で準備されているLED制御用ブロックと組み合わせた点灯を作っています．  

## おわりに

このプロジェクトは，鳥大ものづくり教室「LEDスタンドを作ろう！」のために作成されたものです．  
  
鳥取大学 工学部附属 ものづくり教育実践センター  
Web：[https://site.icee.tottori-u.ac.jp/home/](https://site.icee.tottori-u.ac.jp/home/)  

#### Metadata (used for search, rendering)

* for PXT/maker
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
