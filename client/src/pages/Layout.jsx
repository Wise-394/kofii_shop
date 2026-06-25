import { Outlet } from "react-router";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { ScrollRestoration } from "react-router";
export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}
