const WarpExchange = require('../../dist/index')

const warpexchange = WarpExchange({
    token: 'YOUR_TOKEN',
})
;(async () => {
    const newAddressResponse = await warpexchange.getNewAddress({
        merchantSystemID: '1',
        network: 'TESTNET',
        valueInLocalCurrency: 500.0,
    })

    console.log('HUDSAHUDAHSUD', newAddressResponse.data)
})()
