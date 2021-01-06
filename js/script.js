//Requisição de API's feita com o método Fetch

//API Key
var apikey = {
    key: '377355fe-1da4-4cc5-8ec4-2e696a34f286'
}

function dataAnoMesDia(data){
    let indiceT = data.indexOf("T");
    return data.slice(0, indiceT);
}

//Requisição GET
fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=" + apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error ("Erro ao executar a requisição, status" + response.status);
        return response.json();
    })
    .then((api) => {
        //console.log(api);

        var texto = '';
        //Obtem as 10 primeiras moedas
        for(let i = 0; i < 10; i++){

            texto = texto + `
            <div class ="media">
                <img src="../img/coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="70">
                <div class="media-body">
                <h5>${api.data[i].name}</h5>
                <p>Symbol: ${api.data[i].symbol}</p>
                <p>First historical data: ${dataAnoMesDia(api.data[i].first_historical_data)}</p>
                </div>
            </div>
            `;

            document.getElementById("coins").innerHTML = texto;
        
        }
        //console.log(api.data);
    })
    .catch((error) => {
        console.error(error.message);
    });
