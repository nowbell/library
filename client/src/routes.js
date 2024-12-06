import Admin from "./pages/Admin";
import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    BOOK_ROUTE,
    CATALOG_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/consts";
import Catalog from "./pages/Catalog";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Book from "./pages/Book";
import Home from "./pages/Home";

export  const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export  const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },{
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: BOOK_ROUTE + '/:id',
        Component: Book
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: "*",
        Component: Home
    },
]