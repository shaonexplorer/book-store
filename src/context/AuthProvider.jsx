import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

export const authContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState();

  const Toast = Swal.mixin({
    toast: true,
    position: "center",
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  async function signUp(email, password) {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem("user", JSON.stringify(response.user));
      setUser({ ...user, email: response.user.email });
      return response.user.email;
    } catch (error) {
      console.log(error.message);
      Toast.fire({
        icon: "error",
        title: `${error.message}`,
        position: "top-right",
      });
    }
  }

  async function signIn(email, password) {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      setUser({ ...user, email: response.user.email });

      localStorage.setItem("user", JSON.stringify(response.user));
      return response.user.email;
    } catch (error) {
      console.log(error.message);
      Toast.fire({
        icon: "error",
        title: `${error.message}`,
        position: "top-right",
      });
    }
  }

  async function logOut() {
    try {
      await signOut(auth);

      setUser();
      localStorage.removeItem("user");
      console.log("logged out");
    } catch (error) {
      console.log(error.message);
    }
  }

  async function signWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(auth, provider);
      if (response) {
        setUser({ ...user, email: response.user.email });
      }
      localStorage.setItem("user", JSON.stringify(response.user));
      return response.user.email;
    } catch (error) {
      console.log(error.message);
    }
  }

  const value = { user, setUser, signUp, signIn, signWithGoogle, logOut };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthProvider;
