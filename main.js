const initDraw=() =>{
    // 出力するウマ娘のリスト
    let umaList = ['toukaiteio', 'specialweek']
    // grayscaleのウマ娘を並べる
    umaList.forEach((umaName) => {
        $("#umamusume-picture").append(
            `<div class="grayscale-layer" onclick="picToggle(this, '${umaName}')">
            <img src="./picture/${umaName}.png" class="statePicture">
            </div>`
        )
    })
}

// HTMLの読み込みが終わったら呼び出される
window.onload = initDraw;

// ★2以下ウマ娘を選ぶ関数
const search=() => {
    let umaList = ['ウオッカ', 'エアグルーヴ', 'エルコンドルパサー', 'グラスワンダー', 'スーパークリーク', 'ダイワスカーレット', 'マヤノトップガン', 'アグネスタキオン', 'ウイニングチケット', 'キングヘイロー', 'ナイスネイチャ', 'ハルウララ', 'マチカネフクキタル', 'メジロライアン']
    listLength = umaList.length;
    console.log(listLength)
    umaId = getRandomListInt(listLength);
    $('#search-result').text("");
    $("#search-result").append(`君のウマ娘は～～～！<strong>${umaList[umaId]}</strong>！！`);
    console.log(umaList[umaId]);
}

// 全ウマ娘から選ぶ関数
const searchAll=() => {
    let umaList = ['オグリキャップ', 'サイレンススズカ', 'シンボリルドルフ', 'スペシャルウィーク', 'タイキシャトル', 'テイエムオペラオー', 'ビワハヤヒデ', 'マルゼンスキー', 'トウカイテイオー', 'ミホノブルボン','メジロマックイーン', 'ライスシャワー', 'ウオッカ', 'エアグルーヴ', 'エルコンドルパサー', 'グラスワンダー', 'ゴールドシップ', 'スーパークリーク', 'ダイワスカーレット', 'マヤノトップガン', 'アグネスタキオン', 'ウイニングチケット', 'キングヘイロー', 'サクラバクシンオー', 'ナイスネイチャ', 'ハルウララ', 'マチカネフクキタル', 'メジロライアン']
    listLength = umaList.length;
    console.log(listLength)
    umaId = getRandomListInt(listLength);
    $('#search-result').text("");
    $("#search-result").append(`君のウマ娘は～～～！<strong>${umaList[umaId]}</strong>！！`);
    console.log(umaList[umaId]);
}

//検索結果を消す関数
const searchClear=() => {
    $('#search-result').text("ぽれのウマ娘は・・・？");
}

//選んだウマ娘を灰色にしたりする関数
const picToggle = (self, umaName) =>{
    console.log(self)
    console.log(self)
    $(self).toggleClass('erase');
    if(self == 'grayscale-layer'){
        console.log('hi')
        $("#search-result").append(`<div class='umamusume'>${umaName}</div>`)
    }
}

const addName2List = () =>{

}

// リストの長さ分の乱数を出力する関数
const getRandomListInt=(listLength) => {
    return Math.floor(Math.random()* listLength);
}