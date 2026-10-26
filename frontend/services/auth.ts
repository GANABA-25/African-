import { api } from "@/util/app";
import { SigninTypes } from "@/types/authTypes";

export const createAccount = async (credentials: SigninTypes) => {
  const response = await api.post("/auth/create_account", credentials);
  return response.data;
};

export const signIn = async (credentials: SigninTypes) => {
  //   console.log("checking credentials ----------", credentials);
  const response = await api.post("/auth/signin", credentials);
  return response.data;
};
