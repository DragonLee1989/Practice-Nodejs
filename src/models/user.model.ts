import { Schema, model } from "mongoose";
import { IUser } from "../types/models";

// interface IUser {
//   firstName: string;
//   lastName: string;
//   email: string;
//   mobile: string;
// }

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    mobile: {
      type: String,
    },
    //Các trường khác
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>("User", userSchema);
export default User;
