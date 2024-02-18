import express from "express";
import { forceRefreshExchangeData, getFormalCurrencyExchange, getInFormalCurrencyExchange } from "../controllers/exchangeController.mjs";

const exchangeRouter = express.Router();

exchangeRouter.route('/formal_data').get(getFormalCurrencyExchange);

exchangeRouter.route('/informal_data').get(getInFormalCurrencyExchange);

exchangeRouter.route('/force_refresh_data').get(forceRefreshExchangeData);

export default exchangeRouter;