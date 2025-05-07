import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/appstyle.css";

import { Outlet } from 'react-router';

export default function Layout() {
    return (
        <>
            <header>Header</header>
            <Outlet></Outlet>
            <footer>Footer</footer>
        </>
    );
}