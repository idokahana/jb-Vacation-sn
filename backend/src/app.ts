import config from "config";
import cors from "cors";
import express, { json } from "express";
import sequelize from "./db/sequelize";
import errorLogger from "./middlewares/error/error-logger";
import errorResponder from "./middlewares/error/error-responder";
import notFound from "./middlewares/not-found";
import vacationRouter from "./routers/vacation";
import authRouter from "./routers/auth";
import followsRouter from "./routers/follows";
import fileUpload from "express-fileupload";
import { createAppBucketIfNotExist } from "./aws/aws";

const port = config.get<string>("app.port");
const name = config.get<string>("app.name");
const force = config.get<boolean>("sequelize.sync.force");

const app = express();

(async () => {
  await sequelize.sync({ force });
  await createAppBucketIfNotExist();
  // middlewares
  app.use(cors()); // allow any client to use this server

  app.use(json()); // a middleware to extract the post/put/patch data and save it to the request object in case the content type of the request is application/json
  app.use(fileUpload());

  app.use("/auth", authRouter);
  app.use("/vacation", vacationRouter);
  app.use("/follows", followsRouter);

  // special notFound middleware
  app.use(notFound);

  // error middleware
  app.use(errorLogger);
  app.use(errorResponder);

  app.listen(port, () => console.log(`${name} started on port ${port}...`));
})();
