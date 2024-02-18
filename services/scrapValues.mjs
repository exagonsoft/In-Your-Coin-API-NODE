import axios from "axios";
import { AppVariables } from "../settings/app_settings.mjs";
import cheeiro from "cheerio";
import { saveForceInformalData, saveForceformalData, saveInformalData, saveformalData } from "./storageService.mjs";

export const scrappInformalSourcess = async () => {
  try {
    console.log("📡Strting the Web Scrap📡");
    const _informalResponse = await axios.get(AppVariables.informalSourceUrl);
    const $ = cheeiro.load(_informalResponse.data);

    const extractedData = [];

    // Iterate over each <tr> element
    $("tbody tr").each((index, element) => {
      // Find the <td> element containing the desired text
      const priceCell = $(element).find(".price-cell");

      // Find the <span> element after the specified <div> element
      const priceText = priceCell
        .find('.name-type:contains("COMPRA")')
        .nextAll(".price-text")
        .first()
        .text()
        .trim();

      // Push the extracted text to the array
      let _roundedText = priceText.split(" ")[0];
      extractedData.push(_roundedText);
    });

    console.log("📡Scrap Result: ", extractedData);
    const informalValues = {
      euroinFormalValue: extractedData[0],
      dolarinFormalValue: extractedData[1],
      mlcinFormalValue: extractedData[2],
      rateDate: new Date().toLocaleString(),
    };

    return informalValues;
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const scrappFormalSourcess = async () => {
  try {
    console.log("📡Strting the Web Scrap📡");
    const _informalResponse = await axios.get(AppVariables.formalSourceUrl);
    const $ = cheeiro.load(_informalResponse.data);

    const extractedData = [];

    // Extract EURO value
    const euroValue = $('tbody tr:contains("EURO") td:nth-child(4)')
      .text()
      .trim();
    extractedData.euroValue = euroValue;

    // Extract USD value
    const usdValue = $('tbody tr:contains("DOLAR AMERICANO") td:nth-child(4)')
      .text()
      .trim();
    extractedData.usdValue = usdValue;

    console.log("📡Scrap Result: ", extractedData);
    const formalValues = {
      euroFormalValue: extractedData.euroValue,
      dolarFormalValue: extractedData.usdValue,
      mlcFormalValue: extractedData.usdValue,
      rateDate: new Date().toLocaleString(),
    };

    return formalValues;
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const scheduledScrap = async () => {
  try {
    const formalValues = await scrappFormalSourcess();
    const informalValues = await scrappInformalSourcess();

    let _formalStorage = await saveformalData(formalValues);
    let _informalStorage = await saveInformalData(informalValues);

    if(_formalStorage && _informalStorage){
      return true;
    }else{
      return false;
    }
    
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const forceScrap = async () => {
  try {
    const formalValues = await scrappFormalSourcess();
    const informalValues = await scrappInformalSourcess();

    let _formalStorage = await saveForceformalData(formalValues);
    let _informalStorage = await saveForceInformalData(informalValues);

    if(_formalStorage && _informalStorage){
      console.log("💾Exchange Values updated successfully💾");
      return {formalData: _formalStorage, informalData: _informalStorage};
    }else{
      return false;
    }
    
  } catch (error) {
    console.log(error);
    return false;
  }
};
