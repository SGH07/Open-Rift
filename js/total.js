const API = "RGAPI-c6705b89-3e8c-4bd8-a5a3-5f08d843762b"
const username = getParameterByName("name")
const NameApiUrl = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${API}`


 
function summonerName() {
    const userName = document.getElementById("userName")
    userName.innerText = `소환사 이름:${username}`
    return getParameterByName("name")
    

}
//url 에서 소환사 이름 불러오기


function otherInFo() {
    fetch(NameApiUrl)
    .then(response => response.json())
    .then(data => {
        //소환사 레벨 ----------------------------------------------

        const LV = data.summonerLevel;
        const userLV = document.getElementById("userLV")
        userLV.innerText = `소환사 레벨:${LV}LV`

        //소환사 레벨 ----------------------------------------------


        

        //소환사 아이콘 ----------------------------------------------

        const iconInt = data.profileIconId
        const iconUrl = `https://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/${iconInt}.png`
        const userIcon = document.getElementById("userIcon")
        userIcon.src = iconUrl

        //소환사 아이콘 ----------------------------------------------

        //소환사 id 보내기 ----------------------------------------------
        const userid = data.id
        otherInFoByid(userid)

        //소환사 id 보내기 ----------------------------------------------

    });
}


function otherInFoByid(id) {
    const IdApiUrl = `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${API}`
    fetch(IdApiUrl)
    .then(response => response.json())
    .then(data => {
        //소환사 티어 ----------------------------------------------
        const Tier = data[0].tier
        const userTier = document.getElementById("userTier")

        userTier.innerText = Tier

        //소환사 티어 ----------------------------------------------



        //소환사 랭크 ----------------------------------------------

        const Rank = data[0].rank
        const userRank = document.getElementById("userRank")

        userRank.innerText = Rank
        
        //소환사 랭크 ----------------------------------------------



        //소환사 리그포인트 ----------------------------------------------
        const LeaguePoints = data[0].leaguePoints 
        const userLp = document.getElementById("userLp")

        userLp.innerText = `${LeaguePoints}LP`
        



        //소환사 리그포인트 ----------------------------------------------



        //소환사 승패 ----------------------------------------------
        const Wins = data[0].wins
        const Losses = data[0].losses
        const userWin = document.getElementById("userWin")
        const userLoss = document.getElementById("userLoss")

        userWin.innerText = `승:${Wins}`
        userLoss.innerText = `패:${Losses}`
        //소환사 승패 ----------------------------------------------


        //소환사 승률 ----------------------------------------------
        const WinRate = Math.floor(Wins / (Wins + Losses) * 100)
        const userWinRate = document.getElementById("userWinRate")

        userWinRate.innerText = `승률: ${WinRate}%`
        



        //소환사 승률 ----------------------------------------------
    });
    
}






function getParameterByName(name) {

    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");

    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),

            results = regex.exec(location.search);

    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

}
//url 피라미터값?인가 거기서 값만 가지고 오는 것



summonerName()
otherInFo()
//함수 실행칸