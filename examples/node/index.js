const WarpExchange = require('../../dist/index')

const warpexchange = WarpExchange({
    token: 'YOUR_TOKEN',
})

warpexchange
    .getNewAddress({
        merchantSystemID: '1',
        network: 'TESTNET',
        valueInLocalCurrency: 500.0,
    })
    .then(result => console.log(result.data))

warpexchange.getTransactions().then(result => console.log(result.data))

warpexchange
    .getTransactionInformation({
        merchantSystemID: '1',
    })
    .then(result => console.log(result.data))
