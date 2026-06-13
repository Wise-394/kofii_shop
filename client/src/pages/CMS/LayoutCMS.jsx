import { Outlet } from "react-router";
import { Navigate } from "react-router";
import { useAuthenticationStore } from "../../store/useAuthenticationStore.jsx";
import { HeaderCMS } from "../../components/CMS/HeaderCMS.jsx";
export function LayoutCMS() {
  const isLoggedIn = useAuthenticationStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <HeaderCMS />
      <Outlet />
    </>
  );
}
