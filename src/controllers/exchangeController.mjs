import { forceScrap, scrappFormalSourcess, scrappInformalSourcess } from "../services/scrapValues.mjs";
import { getFormalValuesFromStorage, getInFormalValuesFromStorage } from "../services/storageService.mjs";

export const getFormalCurrencyExchange = async (_req , _res) => {
    const _values = await getFormalValuesFromStorage();
    return _res.status(200).json(_values);
}

export const getInFormalCurrencyExchange = async (_req , _res) => {
    const _values = await getInFormalValuesFromStorage();
    return _res.status(200).json(_values);
}

export const forceRefreshExchangeData = async (_req, _res) => {
    const _values = await forceScrap();
    return _res.status(200).json(_values);
}