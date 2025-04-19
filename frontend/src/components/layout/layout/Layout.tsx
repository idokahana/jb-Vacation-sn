import { useContext } from "react";

import { AuthContext } from "../../auth/auth/Auth";
import Routing from "../routing/Routing";
import "./Layout.css";
import Header from "../header/Header";

export default function Layout() {
  const { jwt } = useContext(AuthContext)!;
  const isLoggedIn: boolean = !!jwt;

  return (
    <div className="Layout">
      {isLoggedIn && (
        <>
          <header>
            <Header />
          </header>
          <main>
            <Routing />
          </main>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Routing />
        </>
      )}
    </div>
  );
}
