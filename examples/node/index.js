const WarpExchange = require('warpexchange')

const warpexchange = WarpExchange({ token })

// Using convertSatoshiToBTC
console.log(warpexchange.convertSatoshiToBTC(0.00123123123))
