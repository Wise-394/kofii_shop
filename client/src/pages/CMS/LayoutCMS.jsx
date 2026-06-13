import { Outlet } from "react-router";
import { Navigate } from "react-router";
import { useAuthenticationStore } from "../../store/useAuthenticationStore.jsx";
export function LayoutCMS() {
  const isLoggedIn = useAuthenticationStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Outlet />;
    </>
  );
}
