import express from "express";
import router from "./user.routes.js";
const app = express();


// dotenv.config();
app.use(router);
app.listen(4000, () => {
    console.log(`Express Server is Listing on Port ${4000}`);
});
