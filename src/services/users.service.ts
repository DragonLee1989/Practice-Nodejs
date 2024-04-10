import User from "../models/user.model";
import { IUser } from "../types/models";
import createError from "http-errors";

const getAll = async () => {
  const result = await User.find();
  return result;
};

const createUser = async (data: IUser) => {
  const result = await User.create(data);
  return result;
};

const getUserById = async (id: string) => {
  //SELECT * FROM users WHERE _id = id
  const result = await User.findById(id);

  if (!result) {
    throw createError(404, "Category not found");
  }
  return result;
};

const updateUser = async (id: string, data: IUser) => {
  /* Tận dùng hàm có sẳn để tìm xem danh mục có tồn tại chưa */
  const user = await getUserById(id);

  /**
   * Dùng assign để merge giữa cũ và mới lại với nhau
   * Sau đó save lại
   * Muốn update trường nào thì chỉ cần update trường đó
   */
  Object.assign(user, data);
  await user.save();

  return user;
};

const deleteUser = async (id: string) => {
  /* Tận dùng hàm có sẳn để tìm xem danh mục có tồn tại chưa */
  const user = await getUserById(id);
  await User.deleteOne({ _id: user._id });
  return user;
};

export default {
  getAll,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
