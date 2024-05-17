// const mongoose = require("mongoose");
import mongoose from "mongoose";

export const connectDB = async (db_status: string) => {
    let db_name = process.env.MONGO_DB_NAME || "phisDB";
    let connection_url = `mongodb://localhost:27017/${db_name}`;
    if (db_status != "local") {
        const username = process.env.MONGO_USER as string;
        const pass = process.env.MONGO_PASS as string;
        connection_url = `mongodb+srv://${username}:${pass}@newcluster.zcb8pse.mongodb.net/${db_name}?retryWrites=true&w=majority`;
    }
    try {
        const connection = await mongoose.connect(connection_url);
        console.log(
            "Successfully connected to ",
            connection.connection.name,
            connection.connection.host,
            connection.connection.port
        );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
