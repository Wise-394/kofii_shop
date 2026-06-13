import { create } from "zustand";
import { getJWT, removeJWT, setJWT } from "../localStorage/jwtStorage.jsx";

export const useAuthenticationStore = create((set) => ({
  isLoggedIn: !!getJWT(),
  token: getJWT() || null,

  login: (token) => {
    setJWT(token);
    set(() => ({ isLoggedIn: true }));
  },
  logout: () => {
    removeJWT();
    set(() => ({ isLoggedIn: false, token: null }));
  },
}));
