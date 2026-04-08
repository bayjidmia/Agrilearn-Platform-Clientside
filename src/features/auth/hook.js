import { useContext } from "react";
import { AuthContext } from "../../context/Authcontext";
import toast from "react-hot-toast";

export const useAuth = () => {
  const { createUser, GooglesignIn, setloading, setuser } =
    useContext(AuthContext);

  const Register = async (email, password) => {
    try {
      setloading(true);
      const res = await createUser(email, password);
      setuser(res.user);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  //  Google Sign-In handler
  const googleLogin = async () => {
    try {
      setloading(true);
      const res = await GooglesignIn();
      setuser(res.user);
      console.log("Google Sign-In successful:", res.user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
      let message = "Something went wrong.";

      if (error.code === "auth/popup-closed-by-user") {
        message = "Login popup closed";
      } else if (error.code === "auth/cancelled-popup-request") {
        message = "A login popup is already open.";
      } else if (error.code === "auth/network-request-failed") {
        message = "“A network error occurred. Please try again.”";
      }

      toast.error(message, {
        duration: 5000,
        position: "top-center",
        style: {
          background: "#f87171",
          color: "#fff",
        },
      });
    } finally {
      setloading(false);
    }
  };

  return { googleLogin, Register };
};
