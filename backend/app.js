import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";
const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    httpOnly: true,
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

import { UserRouter } from "./user.routes.js";
app.use("/auth", UserRouter);

export { app };
