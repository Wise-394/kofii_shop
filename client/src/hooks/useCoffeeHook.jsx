import { useCallback, useState } from "react";
export const useCoffeeHook = () => {
  const api = import.meta.env.VITE_BACKEND_API;
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCoffee = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch(`${api}/coffee`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message ?? "error fetching coffees");
      }
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [api]);

  return { posts, setPosts, isLoading, error, fetchCoffee };
};
