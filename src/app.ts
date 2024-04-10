import express, { Express, Request, Response, NextFunction } from "express";
import createError from "http-errors";
import cors from "cors";
import { sendJsonErrors } from "./helpers/responseHandler";
const app: Express = express();

//Import cac Routes
import routeUsers from "./routes/v1/users.route";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({ origin: "*" })); //Cho phép gọi bất kỳ đâu
// app.use(logs)
// app.use(second)

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Express + TypeScript Server" });
});

//Cau hinh route cho App
//http://localhost:9000/api/v1/users
app.use("/api/v1/users", routeUsers);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  const statusCode = err.status || 500;
  // res.status(statusCode).json({
  //   statusCode: statusCode,
  //   message: err.message
  // });
  sendJsonErrors(req, res, err);
});

export default app;
