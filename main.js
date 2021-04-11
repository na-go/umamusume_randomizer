
let inputList = []

const initDraw=() =>{
    // 出力するウマ娘のリスト
    let umaListStar3 = {
        'toukaiteio':'トウカイテイオー',
        'specialweek': 'スペシャルウィーク'
    }    // grayscaleのウマ娘を並べる
    Object.keys(umaListStar3).forEach((umaName) => {
        $("#umamusume-picture").append(
            `<div class="grayscale-layer" onclick="picToggle(this, '${umaListStar3[umaName]}')">
            <img src="../../picture/${umaName}.png" class="statePicture">
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
    $('#search-result').text("");
    inputList = [];
    allGray();
}

//選んだウマ娘を灰色にしたりする関数
const picToggle = (self, umaName) =>{
    $(self).toggleClass('erase');
    changeNameList(umaName);
}

//すべてのウマ娘を灰色にしたりする関数
const allGray = () => {
    element = document.querySelectorAll('.grayscale-layer.erase')
    console.log(element)
    console.log(element.classList)
    element.classList.replace('grayscale-layer.erase','grayscale-layer')
}

// inputListに対する処理
const changeNameList = (umaName) =>{
    let inFlag = 1
    if(inputList.length != 0){
        inputList.forEach((alreadyName) => {
            if(umaName == alreadyName){
                inFlag = 0
            }
    })       
    }
    if(inFlag){
        //$("#search-result").append(`<div class='umamusume'>${umaName}</div>`)
        inputList.push(umaName)
    }
    else{
        inputList = inputList.filter((alreadyName) =>{
            return alreadyName !== umaName
        })
    }
    console.log(inputList)
}

// リストから抽選
const lotteryUmamusume=() => {
    listLength = inputList.length;
    console.log(listLength)
    umaId = getRandomListInt(listLength);
    $('#search-result').text("");
    if(listLength>0){
        $("#search-result").append(`君のウマ娘は～～～！<strong>${inputList[umaId]}</strong>！！`);
    }
    else{
        $('#search-result').append('ウマ娘を選んでね')
    }
    console.log(inputList[umaId]);
}

// リストの長さ分の乱数を出力する関数
const getRandomListInt=(listLength) => {
    return Math.floor(Math.random()* listLength);
}