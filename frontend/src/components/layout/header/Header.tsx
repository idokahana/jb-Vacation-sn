import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useRole from "../../../hooks/useRole";
import useUsername from "../../../hooks/useUsername";
import { AuthContext } from "../../auth/auth/Auth";
import "./Header.css";

export default function Header() {
  const name = useUsername();
  const role = useRole();
  const { logout } = useContext(AuthContext)!;
  const navigate = useNavigate();

  function logMeOut() {
    logout();
  }

  function newVacation() {
    navigate("/vacation/newVacation");
  }

  function vacationReport() {
    navigate("/vacationReport");
  }
  function vacation() {
    navigate("/vacation");
  }

  return (
    <header className="header">
      <a onClick={vacation}>
        {" "}
        <div className="logo">🌴 VacationApp</div>
      </a>

      <div className="user-info">
        <span className="greeting">
          {role === "admin" ? (
            <span>Admin Controls</span>
          ) : (
            <span> Hello {name}!</span>
          )}
        </span>

        {role === "admin" && (
          <button className="new-vacation-btn" onClick={newVacation}>
            + New Vacation
          </button>
        )}
        {role === "admin" && (
          <button className="new-vacation-btn" onClick={vacationReport}>
            Vacation Report
          </button>
        )}
        <button className="logout-btn" onClick={logMeOut}>
          Logout
        </button>
      </div>
    </header>
  );
}
