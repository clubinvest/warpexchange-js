export interface IConfig {
    token: string
}

export interface IGetNewAddress {}

export interface ISplit {
    marketPlaceToken: string
    percentOf: number
}

export interface IGetNewAddressData {
    network: string
    valueInLocalCurrency: number
    merchantSystemID: string
    split?: ISplit
}

export interface IGetTransactionInformationData {
    merchantSystemID: string
}
