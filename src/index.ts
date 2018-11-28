import axios, { AxiosResponse } from 'axios'

import {
    IConfig,
    IGetTransactionInformationData,
    IGetNewAddressData,
    IGetNewAddressResponse,
    IGetTransactionsResponse,
    IGetTransactionsBody,
    ITransaction,
    IGetTransactionInformationResponse,
    ISplit,
} from './interfaces'
import { ENDPOINT } from './constants'

let authorizationToken: string = ''

const api = axios.create({
    baseURL: 'https://api.warpexchange.com',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.request.use(
    function(config) {
        config.headers['authorizationToken'] = authorizationToken

        return config
    },
    function(err) {
        return Promise.reject(err)
    },
)

const convertSatoshiToBTC = (value: number) => value / 100000000

const getTransaction = (t: IGetTransactionsBody): ITransaction => ({
    typeCurrency: t.TipoMoeda,
    merchantSystemId: t.MerchantSystemID,
    customerAddress: t.EnderecoDoCliente,
    dateReceive: t.DataRecebimento,
    valueRequiredInCurrencyLocal: t.ValorSolicitadoEmMoedaLocal,
    notified: t.Notificado,
    miningFeeSubmitted: t.TarifaMineracaoEnviada,
    hashTransaction: t.HashDaTransacao,
    ValueReceivedInDigital: t.ValorRecebidoEmDigital,
    ValueRequestInDigital: t.ValorSolicitadoEmDigital,
    statusId: t.StatusID,
    status: t.Status,
})

const getNewAddress = async ({
    splits,
    ...rest
}: IGetNewAddressData): Promise<AxiosResponse<IGetNewAddressResponse>> => {
    try {
        const data = {
            ...rest,
            split: splits
                ? splits.map((s: ISplit) => ({
                      MarketPlaceToken: s.marketPlaceToken,
                      PercentOf: s.marketPlaceToken,
                  }))
                : [],
        }

        return api.post(ENDPOINT.GETNEWADDRESS, data)
    } catch (err) {
        throw err
    }
}

const getTransactionInformation = async (
    data: IGetTransactionInformationData,
): Promise<AxiosResponse<IGetTransactionInformationResponse>> => {
    try {
        const response = await api.post(
            ENDPOINT.GETTRANSACTIONINFORMATION,
            data,
        )

        return {
            ...response,
            data: {
                ...response.data,
                body: getTransaction(response.data.body),
            },
        }
    } catch (err) {
        throw err
    }
}

const getTransactions = async (): Promise<
    AxiosResponse<IGetTransactionsResponse>
> => {
    try {
        const response = await api.post(ENDPOINT.GETTRANSACTIONS)

        return {
            ...response,
            data: {
                ...response.data,
                body: response.data.body.map((t: IGetTransactionsBody) =>
                    getTransaction(t),
                ),
            },
        }
    } catch (err) {
        throw err
    }
}

const WarpExchange = ({ token }: IConfig) => {
    authorizationToken = token

    return {
        convertSatoshiToBTC,
        getNewAddress,
        getTransactionInformation,
        getTransactions,
    }
}

module.exports = WarpExchange
export default WarpExchange
