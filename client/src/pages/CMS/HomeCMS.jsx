import { useAuthenticationStore } from "../../store/useAuthenticationStore.jsx";
export function HomeCMS() {
  const logoutUser = useAuthenticationStore((state) => state.logoutUser);
  return <button onClick={logoutUser}> Logout</button>;
}
