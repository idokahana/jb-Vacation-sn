import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import auth from "../../../services/auth";
import { AuthContext } from "../auth/Auth";

import LoginModel from "../../../models/user/LoginModel";
import { Link } from "react-router-dom";

export default function Login(): JSX.Element {
  const { register, handleSubmit } = useForm<LoginModel>();

  const { newLogin } = useContext(AuthContext)!;
  const [errMessage, setErrMessage] = useState("");
  async function submit(login: LoginModel) {
    try {
      const jwt = await auth.login(login);
      newLogin(jwt);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setErrMessage("Incorrect email or password. Please try again.");
    }
  }
  return (
    <div className="Login">
      <form className="login-form" onSubmit={handleSubmit(submit)}>
        <input
          className="login-input"
          placeholder="email"
          {...register("email")}
        />
        <input
          className="login-input"
          placeholder="password"
          type="password"
          {...register("password")}
        />
        {errMessage && <p className="login-error">{errMessage}</p>}
        <button className="login-btn">Login</button>
      </form>
      <p className="login-p">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}
