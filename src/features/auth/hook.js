import { useContext } from "react";
import { AuthContext } from "../../context/Authcontext";

export const useAuth = () => {
  const { setUser } = useContext(AuthContext);
};
