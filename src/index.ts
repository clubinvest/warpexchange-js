import axios from 'axios'

import { IGetNewAddressParams } from './interfaces'

let token: string = ''

const api = (token: string) =>
    axios.create({
        baseURL: 'https://api.warpexchange.com',
        timeout: 15000,
        headers: {
            'Content-Type': 'application/json',
            authorizationToken: token,
        },
    })

const convertSatoshiToBTC = (value: number) => value / 100000000

const getNewAddress = async (data: IGetNewAddressParams) => {
    try {
        return api(token).post(END, data)
    } catch (error) {}
}

const warpExchange = (token: string) => {
    token = token

    return {
        convertSatoshiToBTC,
        getNewAddress,
    }
}

export default warpExchange
