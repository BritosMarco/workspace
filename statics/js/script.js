/* const axios = require("axios"); */
const URL = "https://docs.awesomeapi.com.br/api-de-moedas";

async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`;
    const response = await axios.get(url);
    return response.data;
}

obterPessoas("r2")
    .them(function(resultado) {
        console.log("resultado", resultado);
    })
    .catch(function(error) {
        console.error("Deu Ruim", error);
    });

/* const service = require("./service"); */

async function main() {
    try {
        const result = await service.obterPessoas("a");
        const names = [];
        /* console.time("for"); */
        for (let i = 0; i <= result.results.length - 1; i++) {
            const pessoa = result.results[i];
            names.push(pessoa.name);
        }
        console.log("names", names);
    } catch (error) {
        console.error("Error Interno", error);
    }
}
main();
/* 
    {
        "USDBRL": {
            "code": "USD",
            "codein": "BRL",
            "name": "Dólar Americano/Real Brasileiro",
            "high": "5.734",
            "low": "5.7279",
            "varBid": "-0.0054",
            "pctChange": "-0.09",
            "bid": "5.7276",
            "ask": "5.7282",
            "timestamp": "1618315045",
            "create_date": "2021-04-13 08:57:27"
        },
        "EURBRL": {
            "code": "EUR",
            "codein": "BRL",
            "name": "Euro/Real Brasileiro",
            "high": "6.8327",
            "low": "6.8129",
            "varBid": "-0.0069",
            "pctChange": "-0.1",
            "bid": "6.8195",
            "ask": "6.822",
            "timestamp": "1618315093",
            "create_date": "2021-04-13 08:58:15"
        },
        "BTCBRL": {
            "code": "BTC",
            "codein": "BRL",
            "name": "Bitcoin/Real Brasileiro",
            "high": "360000",
            "low": "340500",
            "varBid": "17072.9",
            "pctChange": "4.98",
            "bid": "359973.9",
            "ask": "359974",
            "timestamp": "1618315092",
            "create_date": "2021-04-13 08:58:12"
        }
    }
    Moeda especificada não existe */