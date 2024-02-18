import dotenv from "dotenv"

export const DBConnection = () => {
    dotenv.config();
    return {
        DB_URL: process.env.DATABASE_URL
    }
}