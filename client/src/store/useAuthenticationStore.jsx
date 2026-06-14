import { create } from "zustand";
import { getJWT, removeJWT, setJWT } from "../localStorage/jwtStorage.jsx";

export const useAuthenticationStore = create((set) => ({
  isLoggedIn: !!getJWT(),
  token: getJWT() || null,

  loginUser: (token) => {
    setJWT(token);
    set(() => ({ isLoggedIn: true, token }));
  },
  logoutUser: () => {
    removeJWT();
    set(() => ({ isLoggedIn: false, token: null }));
  },
}));
