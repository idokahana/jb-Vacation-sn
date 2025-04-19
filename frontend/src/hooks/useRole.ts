import { jwtDecode } from "jwt-decode";
import { useContext, useMemo } from "react";
import User from "../models/user/User";
import { AuthContext } from "../components/auth/auth/Auth";

export default function useRole() {
  const { jwt } = useContext(AuthContext)!;

  const role = useMemo(() => {
    const { role } = jwtDecode<User>(jwt);
    return role;
  }, [jwt]);

  return role;
}
