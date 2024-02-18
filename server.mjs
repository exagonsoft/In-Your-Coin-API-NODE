import express from "express";
import exchangeRouter from "./routes/exchangeRouter.mjs";
import { AppVariables } from "./settings/app_settings.mjs";
import cron from "node-cron";
import { UpdateExchangeValues } from "./jobs/updateRatesJob.mjs";


const server = express();

cron.schedule('*/60 * * * *', UpdateExchangeValues)

server.use('/', exchangeRouter);

server.listen(AppVariables.AppPort, () => console.log(`💻Server started and accesible at: http://${AppVariables.AppDomain}:${AppVariables.AppPort}💻`));