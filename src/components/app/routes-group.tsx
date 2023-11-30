import { Navigate, Outlet } from "react-router-dom";

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
    const isauth = false;

    if(onlyUnauthorized) {
        return isauth ? <Navigate to="/" replace /> : <Outlet />;
    }

    if(privateRoutes) {
        return isauth ? <Outlet /> : <Navigate to="/auth" replace />;
    }

    return <Outlet />;
}