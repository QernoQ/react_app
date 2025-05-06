import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router';

export default function Layout() {
    return (
        <>
            <h1 className="text-center">Header</h1>
            <Outlet></Outlet>
            <footer id="Footer">
                <h1 className="text-center">Footer</h1>
            </footer>
        </>
    );
}