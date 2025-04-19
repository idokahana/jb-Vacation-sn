import Signup from "./Signup";

export default interface User extends Signup {
  userId: string;
  role: string;
}
