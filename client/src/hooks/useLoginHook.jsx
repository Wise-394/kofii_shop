import { useState } from "react";
const api = import.meta.env.VITE_BACKEND_API;
export const useLoginHook = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

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
      //save jwt
      //TODO later
      //TODO CORS
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
