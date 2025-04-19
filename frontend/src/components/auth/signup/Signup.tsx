import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import auth from "../../../services/auth";
import { AuthContext } from "../auth/Auth";
import "./Signup.css";
import { Link } from "react-router-dom";
import SignupModel from "../../../models/user/Signup";

export default function Signup(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupModel>();
  const { newLogin } = useContext(AuthContext)!;
  const [serverError, setServerError] = useState("");

  async function submit(signup: SignupModel) {
    try {
      const jwt = await auth.signup(signup);
      newLogin(jwt);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response.status === 409) {
        setServerError("Email already exists.");
      } else {
        setServerError("Email is Already in use.");
      }
    }
  }

  return (
    <div className="Signup">
      <form className="signup-form" onSubmit={handleSubmit(submit)}>
        <input
          className="signup-input"
          placeholder="First Name"
          type="text"
          {...register("firstName", { required: "First name is required" })}
        />
        {errors.firstName && (
          <p className="signup-error">{errors.firstName.message}</p>
        )}

        <input
          className="signup-input"
          placeholder="Last Name"
          type="text"
          {...register("lastName", { required: "Last name is required" })}
        />
        {errors.lastName && (
          <p className="signup-error">{errors.lastName.message}</p>
        )}

        <input
          className="signup-input"
          placeholder="Email"
          type="text"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p className="signup-error">{errors.email.message}</p>}

        <input
          className="signup-input"
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 4,
              message: "Password must be at least 4 characters",
            },
          })}
        />
        {errors.password && (
          <p className="signup-error">{errors.password.message}</p>
        )}

        {serverError && <p className="signup-error">{serverError}</p>}

        <button className="signup-btn">Sign Up</button>
      </form>

      <p className="signup-p">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
