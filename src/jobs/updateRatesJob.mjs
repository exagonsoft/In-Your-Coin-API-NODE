import { scheduledScrap } from "../services/scrapValues.mjs";

export const UpdateExchangeValues = async () => {
    try {
        console.log("⏳Strating Scheduled Exchange Values Update⏳");

        let _res = await scheduledScrap();
        
        if(_res){
            console.log("💾Exchange Values updated successfully💾");
        }
        
    } catch (error) {
        console.log("Error on Scheduled Exchange Values Update", error);
    }
}