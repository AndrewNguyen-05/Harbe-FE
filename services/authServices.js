"use server";

import axios from "axios";
import { serialize } from "cookie";
import { cookies } from "next/headers";

const register = async (username, name, email, password) => {
  try {
    const res = await axios.post("http://localhost:8080/api/v1/auth/signup", {
      username: username,
      name: name,
      email: email,
      password: password,
    });

    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    return error.response.data;
  }
};

const login = async (username, password) => {
  const data = {
    grant_type: "password",
    username: username,
    password: password,
    scope: "client-internal",
  };

  const config = {
    maxBodyLength: Infinity,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic Y2xpZW50OnNlY3JldA==",
    },
  };

  try {
    const res = await axios.post(
      "http://localhost:8080/api/oauth2/v1/token",
      data,
      config
    );

    if (res && res.data) {
      const cookieStore = cookies();
      const { access_token: accessToken, refresh_token: refreshToken } =
        res.data;

      cookieStore.set("accessToken", accessToken);
      cookieStore.set("refreshToken", refreshToken);

      return res.data;
    }
  } catch (error) {
    return error.message;
  }
};

const logout = async () => {};

const getSession = async () => {
  const cookieStore = cookies();
  const session = cookieStore.get("session")?.value;

  if (session) return session;
  else return null;
};

export { register, login, logout, getSession };
