#jquery.heightLine.js

[heightLine.js](http://blog.webcreativepark.net/2007/07/26-010338.html)のjQuery/レスポンシブWebデザイン対応版

高さを揃えたい要素をセレクタで指定して実行

```
$(".box0>div").heightLine();
```

ウィンドウ幅640px以下の場合のみ高さを揃えたい場合はmaxWidthオプションを指定

```
$(".box1>div").heightLine({
	maxWidth:640
});
```

ウィンドウ幅640px以上の場合のみ高さを揃えたい場合はminWidthオプションを指定

```
$(".box2>div").heightLine({
	minWidth:640
});
```

ウィンドウ幅500px以上、700px以下の場合のみ高さを揃えたい場合はminWidthオプションとmaxWidthオプションの両方を指定

```
$(".box3>div").heightLine({
	maxWidth:700,
	minWidth:500
});
```

fontSizeCheckオプションを指定するとフォントサイズが変更された際も高さを再設定します。

```
$(".box4>div").heightLine({
	fontSizeCheck:true
});
```

設定されたheightLineを取り除きたい場合はdestroyメソッドを利用します。

```
$(".box0>div").heightLine("destroy");
```

コンテンツの内部が変更された場合などはrefreshメソッドで再度高さの設定が可能です。

```
$(".box0>div").heightLine("refresh");
```