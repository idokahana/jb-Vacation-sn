import { Router } from "express";
import {
  createNewVacation,
  getAllVacation,
  removeVacation,
  updateVacation,
} from "../controllers/vacation/controller";
import validation from "../middlewares/validation";
import {
  vacationIdValidator,
  vacationValidator,
} from "../controllers/vacation/validator";
import paramsValidation from "../middlewares/params-validation";
import enforceAuth from "../middlewares/enforce-auth";

const vacationRouter = Router();

vacationRouter.use(enforceAuth);
vacationRouter.get("/", getAllVacation);
vacationRouter.post("/", validation(vacationValidator), createNewVacation);
vacationRouter.delete(
  "/:vacationId",
  paramsValidation(vacationIdValidator),
  removeVacation
);
vacationRouter.patch(
  "/:vacationId",
  paramsValidation(vacationIdValidator),
  validation(vacationValidator),
  updateVacation
);
export default vacationRouter;
