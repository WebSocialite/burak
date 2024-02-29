import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

/** 1-ENTRANCE  **/
const app = express();
console.log("__dirname", __dirname);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT))


/** 2- SESSIONS  **/


/** 3-VIEWS  **/
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");


/** 4-ROUTERS  **/
app.use("/admin", routerAdmin); //BSSR: EJS
app.use("/", router);// SPA single page a: REACT
export default app;