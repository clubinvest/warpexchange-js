import WarpExchange from '../index'

const warpExchange = WarpExchange({ token: '' })

describe('convert satoshi to BTC', () => {
    test('should convert 500.0 satoshi in 0.005 BTC', () => {
        const btc = warpExchange.convertSatoshiToBTC(500)
        expect(btc).toBe(0.005)
    })
    test('should convert 500000.0 satoshi in 5.0 BTC', () => {
        const btc = warpExchange.convertSatoshiToBTC(500000)
        expect(btc).toBe(5.0)
    })
})
