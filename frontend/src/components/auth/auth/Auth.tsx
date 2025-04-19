import { createContext, PropsWithChildren, useState } from "react";
import "./Auth";

import { jwtDecode } from "jwt-decode";
import { useMemo } from "react";
import User from "../../../models/user/User";

interface AuthContextInterface {
  jwt: string;
  role: string | undefined;
  userId: string | undefined;
  newLogin(jwt: string): void;
  logout(): void;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

export default function Auth(props: PropsWithChildren): JSX.Element {
  const JWT_KEY_NAME = "jwt";

  const [jwt, setJwt] = useState<string>(
    localStorage.getItem(JWT_KEY_NAME) || ""
  );

  const { children } = props;

  function newLogin(jwt: string) {
    setJwt(jwt);
    localStorage.setItem(JWT_KEY_NAME, jwt);
  }

  function logout() {
    localStorage.removeItem(JWT_KEY_NAME);
    setJwt("");
  }

  const role = useMemo(() => {
    if (!jwt) return undefined;
    try {
      return jwtDecode<User>(jwt).role;
    } catch (e) {
      console.error("JWT Decode Failed:", e);
      return undefined;
    }
  }, [jwt]);

  const userId = useMemo(() => {
    if (!jwt) return undefined;
    try {
      return jwtDecode<User>(jwt).userId;
    } catch (e) {
      console.error("JWT Decode Failed:", e);
      return undefined;
    }
  }, [jwt]);
  return (
    <AuthContext.Provider value={{ jwt, newLogin, logout, role, userId }}>
      {children}
    </AuthContext.Provider>
  );
}
