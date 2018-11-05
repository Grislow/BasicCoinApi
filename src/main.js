const CoinMarketCap = require('coinmarketcap-api');

const apiCMC = '59eeaa25-52b9-4490-8869-c485482bb827',
    apiCoin = '27800EE4-0D5F-4BC9-8E62-4F0531BB3EC3';

const cmcUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=0&limit=5000&convert=USD',
    coinUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map',
    cryptoUrl = '';

const client = new CoinMarketCap(apiCMC);

client.getTickers().then(console.log).catch(console.error)
client.getGlobal().then(console.log).catch(console.error)
client.getMetadata({id: '1'}).then(console.log).catch(console.error);

if(document.body.getAttribute('data-page') == 'cmc') { 
    console.log('yes');

}

// fetch(coinUrl, {
//     method: 'GET',
//     mode: 'no-cors',
//     headers: {
//         'X-CMC_PRO_API_KEY': apiCMC
//     }
// })
// .then(res => console.log(res));
