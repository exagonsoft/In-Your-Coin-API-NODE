import { systemWhiteList } from "../constants/constants"

export const corsOptions = {
    origin: (origin, callback) => {
        if(systemWhiteList.indexOf(origin) !== -1 || !origin){
            callback(null, true);
        }else{
            callback(new Error("Not allowed by Cors"));
        }
    },
    optionsSuccessStatus: 200,
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    credentials: true
}