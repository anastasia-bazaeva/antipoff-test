import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../services/store";

interface PrivateRoutesProps {
    privateRoutes: true,
    onlyUnauthorized?: never,
}
interface UnauthorizedRoutesProps {
    onlyUnauthorized: true,
    privateRoutes?: never,
}

type RouteGroupProps = PrivateRoutesProps | UnauthorizedRoutesProps;

export const RoutesGroup = ({ privateRoutes, onlyUnauthorized }: RouteGroupProps) => {
    const isAuth = useAppSelector((store) => store.auth.isAuth);

    if(onlyUnauthorized) {
        return isAuth ? <Navigate to="/" replace /> : <Outlet />;
    }

    if(privateRoutes) {
        return isAuth ? <Outlet /> : <Navigate to="/auth" replace />;
    }

    return <Outlet />;
}