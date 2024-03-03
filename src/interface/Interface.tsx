import { Dispatch, SetStateAction } from "react";

export interface IUserSignIn {
  username: string;
  password: string;
  isLogin: boolean;
  listas: string;
}

export interface IProps {
  userSignIn: IUserSignIn | undefined;
  setUserSignIn: Dispatch<SetStateAction<IUserSignIn | undefined>>;
}
