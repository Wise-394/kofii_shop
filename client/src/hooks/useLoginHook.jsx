import { useState } from "react";
import { useAuthenticationStore } from "../store/useAuthenticationStore.jsx";

export const useLoginHook = () => {
  const api = import.meta.env.VITE_BACKEND_API;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const loginUser = useAuthenticationStore((state) => state.loginUser);

  const login = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await fetch(`${api}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message ?? data.errors[0]?.msg ?? "Login failed");
      }

      loginUser(data.token);
      setIsSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    username,
    setUsername,
    password,
    setPassword,
    isLoading,
    error,
    login,
    isSuccess,
  };
};
