export interface IConfig {
    token: string
}

export interface IGetNewAddress {}

export interface ISplit {
    marketPlaceToken: string
    percentOf: number
}

export interface IGetNewAddressParams {
    network: string
    valueInLocalCurrency: number
    merchantSystemID: string
    split?: ISplit
}
