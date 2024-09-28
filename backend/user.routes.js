import { Router } from "express";
import { oauthHandler } from "./user.controller.js";

const UserRouter = Router();

UserRouter.get("/google", oauthHandler);

export { UserRouter };
