import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  //sessionStorage a gömülmüş user varsa getir, varsa içerde hangi sayfa denildiyse oraya git, yoksa login
  return user ? <Outlet /> : <Navigate to="/" />;
};
//  <Outlet />; = Route nin içindeki döndürülecek component, child
export default PrivateRouter;