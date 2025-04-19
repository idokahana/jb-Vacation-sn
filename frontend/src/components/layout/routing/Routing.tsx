import { Navigate, Route, Routes } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../auth/auth/Auth";
import Login from "../../auth/login/Login";

import NotFound from "../not-found/NotFound";
import Signup from "../../auth/signup/Signup";
import Vacations from "../../vacations/vacations/Vacations";
import EditVacation from "../../editeVacation/EditVacation";
import NewVacation from "../../newVacation/NewVacation";
import VacationReport from "../../vacationReport/VacationReport";

export default function Routing(): JSX.Element {
  const { jwt, role } = useContext(AuthContext)!;
  const isLoggedIn = !!jwt;

  return (
    <Routes>
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/vacation" /> : <Login />}
      />
      <Route
        path="/signup"
        element={isLoggedIn ? <Navigate to="/vacation" /> : <Signup />}
      />

      <Route
        path="/"
        element={
          isLoggedIn ? <Navigate to="/vacation" /> : <Navigate to="/login" />
        }
      />

      <Route
        path="/vacation"
        element={isLoggedIn ? <Vacations /> : <Navigate to="/login" />}
      />

      <Route
        path="/vacation/:vacationId"
        element={
          isLoggedIn && role === "admin" ? (
            <EditVacation />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/vacation/newVacation"
        element={
          isLoggedIn && role === "admin" ? (
            <NewVacation />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/VacationReport"
        element={
          isLoggedIn && role === "admin" ? (
            <VacationReport />
          ) : (
            <Navigate to="/vacation" />
          )
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
