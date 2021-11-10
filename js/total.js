const API = "RGAPI-0127f286-7200-4d9d-a575-1102d7879d4f"
const username = getParameterByName("name")
const NameApiUrl = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${API}`


 


alert("2021년 11월 10일 오후 10시 17분 기준 베타 DEV1이 종료되었으며 DEV2전까지는 서비스 이용이 불가능 할 수 있습니다")

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
        //게임모드 ----------------------------------------------
        const mode = data[0].queueType
        const userMode = document.getElementById("userMode")

        userMode.innerText = mode
        




        //게임모드 ----------------------------------------------


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





        //게임모드2----------------------------------------------
        const mode2 = data[1].queueType
        const userMode2 = document.getElementById("userMode2")

        userMode2.innerText = mode2
        




        //게임모드2 ----------------------------------------------


        //소환사 티어2 ----------------------------------------------
        const Tier2 = data[1].tier
        const userTier2 = document.getElementById("userTier2")

        userTier2.innerText = Tier2

        //소환사 티어2 ----------------------------------------------



        //소환사 랭크2 ----------------------------------------------

        const Rank2 = data[1].rank
        const userRank2 = document.getElementById("userRank2")

        userRank2.innerText = Rank2
        

        

        //소환사 랭크2 ----------------------------------------------



        //소환사 리그포인트2 ----------------------------------------------
        const LeaguePoints2 = data[1].leaguePoints 
        const userLp2 = document.getElementById("userLp2")

        userLp2.innerText = `${LeaguePoints2}LP`
        



        //소환사 리그포인트2 ----------------------------------------------



        //소환사 승패2 ----------------------------------------------
        const Wins2 = data[1].wins
        const Losses2 = data[1].losses
        const userWin2 = document.getElementById("userWin2")
        const userLoss2 = document.getElementById("userLoss2")

        userWin2.innerText = `승:${Wins2}`
        userLoss2.innerText = `패:${Losses2}`
        //소환사 승패2 ----------------------------------------------


        //소환사 승률2 ----------------------------------------------
        const WinRate2 = Math.floor(Wins2 / (Wins2 + Losses2) * 100)
        const userWinRate2 = document.getElementById("userWinRate2")

        userWinRate2.innerText = `승률: ${WinRate2}%`
        



        //소환사 승률2 ----------------------------------------------

        
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
