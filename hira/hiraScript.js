/**
 * 히라스크립트의 목표
 * 히라가나 외우기
 * 1. 랜덤으로 한회에 1개의 히라가나 나타남
 * 2. 보기는 5개
 * 2.1 보기는 추후 옵션으로 선택가능(n개 호출)
 * 3. 보기선택을 안했을 경우 직접입력으로 (To-do)
 * 4. 맞췄던 문자는 빈도수 낮게
 */

$(document).ready(function () {
    /////////hira Class Definition/////////////
    function Hira(jpn,eng,kor) {
        this.jpn = jpn;
        this.eng = eng;
        this.kor = kor;
        this.score = 0;
    }
    Hira.prototype.toString = function(){
        return this.jpn +" "+this.eng+" "+this.kor+" "+this.score;
    };
    Hira.prototype.getJpn = function(){
        return this.jpn;
    };
    Hira.prototype.getKor = function(){
        return this.kor;
    };
    Hira.prototype.getEng = function(){
        return this.eng;
    };
    Hira.prototype.getScore = function(){
        return this.score;
    };
    Hira.prototype.setScore = function(score){
        this.score = score;
    };
    //////////////////////////////////////////

    var hiraArray = [["あ","a","아"],["い","i","이"],['う','u','우'],['え','e','에'],['お','o','오'],
        ['-ゃ','ya','야'],['-ゅ','yu','유'],['-ょ','yo','요'],
        ['か','ka','카'],['き','ki','키'],['く','ku','쿠'],['け','ke','케'],['こ','ko','코'],
        ['きゃ','kya','캬'],['きゅ','kyu','큐'],['きょ','kyo','쿄'],
        ['さ','sa','사'],['し','shi','시'],['す','su','스'],['せ','se','세'],['そ','so','소'],['しゃ','sha','샤'],['しゅ','shu','슈'],['しょ','sho','쇼'],
        ['た','ta','타'],['ち','chi','치'],['つ','tsu','쓰(쯔)'],['て','te','테'],['と','to','토'],['ちゃ','cha','차'],['ちゅ','chu','추'],['ちょ','cho','초'],
        ['な','na','나'],['に','ni','니'],['ぬ','nu','누'],	['ね','ne','네'],['の','no','노'],['にゃ','nya','냐'],['にゅ','nyu','뉴'],['にょ','nyo','뇨'],
        ['は','ha','하'],['ひ','hi','히'],['ふ','fu','후'],	['へ','he','헤'],['ほ','ho','호'],['ひゃ','hya','햐'],['ひゅ','hyu','휴'],['ひょ','hyo','효'],
        ['ま','ma','마'],['み','mi','미'],['む','mu','무'],	['め','me','메'],['も','mo','모'],['みゃ','mya','먀'],['みゅ','myu','뮤'],['みょ','myo','묘'],
        ['や','ya','야'],['ゆ','yu','유'],['よ','yo','요'],
        ['ら','ra','라'],['り','ri','리'],['る','ru','루'],	['れ','re','레'],['ろ','ro','로'],['りゃ','rya','랴'],['りゅ','ryu','류'],['りょ','ryo','료'],
        ['わ','wa','와'],['ゐ','wi','이'],['ゑ','we','에'],	['を','wo(o)','오'],                    	//(わ행의 を는 조사에만 쓰이며 단어 구성은 불가능하다.)
        ['ん','n/nn','-ㄴ']];

    //Hira Map Setting
    let hiraMap = new Map();

    for(e in hiraArray){
        hiraMap.set(e[1],new Hira(e[0],e[1],e[2]));
    }





});
