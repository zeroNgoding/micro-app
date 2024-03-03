import { Navigate, Outlet } from "react-router-dom";
import { IProps, IUserSignIn } from "../interface/Interface";
const dataString: any = localStorage.getItem("UserSignIn");
const userLogin = JSON.parse(dataString);

export function PrivatRouteAdmin({ userSignIn }: IProps) {
  return userSignIn?.listas === "admin" || userLogin?.listas === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
}

// export function PrivatRouteUser() {
//   return userLogin?.listas !== "admin" ? <Outlet /> : <Navigate to="/admin" />;
// }
