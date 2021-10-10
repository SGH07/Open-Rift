const API = "RGAPI-8e501739-f3d0-46c1-8ceb-bdece24d82cd"
const username = getParameterByName("name")
const apiUrl = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${API}`


function summonerName() {
    const userName = document.getElementById("userName")
    userName.innerText = `소환사 이름:${username}`
    return getParameterByName("name")
    

}
//url 에서 소환사 이름 불러오기


function otherInFo() {
    fetch(apiUrl)
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