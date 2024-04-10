import userService from "../services/users.service";
import { Request, Response, NextFunction } from "express";
import { sendJsonSuccess } from "../helpers/responseHandler";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.getAll();
    console.log("result", result);
    sendJsonSuccess(res)(result);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    console.log(data);

    const user = await userService.createUser(data);
    sendJsonSuccess(res, "Create Category successfully", 201)(user);
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params; //return id = string

    const user = await userService.getUserById(id);
    sendJsonSuccess(res)(user);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const user = await userService.updateUser(id, data);
    sendJsonSuccess(res)(user);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await userService.deleteUser(id);
    sendJsonSuccess(res)(user);
  } catch (err) {
    next(err);
  }
};

export default {
  getAll,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
