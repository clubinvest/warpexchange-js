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

export interface IGetNewAddressBody {
    walletAddress: string
    valueInSatoshi: number
}

export interface IGetNewAddressResponse {
    statusCode: number
    body: IGetNewAddressBody
}

export interface IGetTransactionsBody {
    TipoMoeda: string
    MerchantSystemID: string
    EnderecoDoCliente: null
    DataRecebimento: null
    ValorSolicitadoEmMoedaLocal: string
    Notificado: boolean
    TarifaMineracaoEnviada: null
    HashDaTransacao: null
    ValorRecebidoEmDigital: null
    ValorSolicitadoEmDigital: string
    StatusID: number
    Status: string
}

export interface ITransaction {
    typeCurrency: string
    merchantSystemId: string
    customerAddress: null
    dateReceive: null
    valueRequiredInCurrencyLocal: string
    notified: Boolean
    miningFeeSubmitted: null
    hashTransaction: null
    ValueReceivedInDigital: null
    ValueRequestInDigital: string
    statusId: number
    status: string
}

export interface IGetTransactionsResponse {
    statusCode: number
    body: ITransaction[]
}

export interface IGetTransactionInformationData {
    merchantSystemID: string
}

export interface IGetTransactionInformationResponse {
    statusCode: number
    body: ITransaction
}
