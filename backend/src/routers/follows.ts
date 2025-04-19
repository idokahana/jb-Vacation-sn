import { Router } from "express";

import {
  followVacation,
  getAllFollows,
  unfollowVacation,
} from "../controllers/follows/controller";
import enforceAuth from "../middlewares/enforce-auth";
import paramsValidation from "../middlewares/params-validation";
import { vacationIdValidator } from "../controllers/vacation/validator";

const followsRouter = Router();

followsRouter.use(enforceAuth);

followsRouter.get("/follow", getAllFollows);

followsRouter.post(
  "/follow/:vacationId",
  paramsValidation(vacationIdValidator),
  followVacation
);

followsRouter.delete(
  "/unfollow/:vacationId",
  paramsValidation(vacationIdValidator),
  unfollowVacation
);

export default followsRouter;
