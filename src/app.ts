import cors from "cors";
import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: 'sessions'
  });



/** 1-ENTRANCE  **/
const app = express();
app.use(express.static(path.join(__dirname, "public"))); //jamiyki userlar beradigon requestlarga "public" access beruvchi vosita (code)
app.use("/uploads", express.static("./uploads")); //upload folderga "ACCESS" beryapmiz
app.use(express.urlencoded({extended: true})); //html dan <form> data requestni qabul qilishga ruxsat beryapmizq  
app.use(express.json()); //kirib keylayotgan datani object ga aylantirayapti
app.use(
  cors({                 // DOMAIN (browser) dan lyuboy requestda access (ruhsat) beradi
  credentials: true, 
  origin: true,})
);
app.use(cookieParser());  // yasalgan token larimizni Browserni Session qismiga Access tokenlarni beryapti
app.use(morgan(MORGAN_FORMAT));  // qancha vaqt ichida req res bo'layotganini ko'rsatar ekan


/** 2- SESSIONS  **/
app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
  cookie: {
    maxAge: 1000 * 3600 * 6     // 6h  ichida kirilmasa avtomat ravishda LogOut boladi
  },
  store: store,
  resave: true,
  saveUninitialized: true,
    })
);

app.use(function(req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;  // local variable hosil qilyapmiz browserimizda va buni biz home.ejs da ishlatdik
  next();
})

/** 3-VIEWS  **/
app.set('views', path.join(__dirname, 'views'));  //this line sets the directory where your application's views (or templates) are located
app.set("view engine", "ejs"); // embedded javascript should be rendering in view enginve file 


/** 4-ROUTERS  **/
app.use("/admin", routerAdmin); //BSSR: EJS
app.use("/", router);// SPA single page application: REACT
export default app;