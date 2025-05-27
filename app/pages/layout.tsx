import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/appstyle.css";

import { Outlet } from 'react-router';
import Nav from 'react-bootstrap/Nav';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function Layout() {
    const [search, setSearch] = useState('');
    const [visibleCount, setVisibleCount] = useState(4);

    return (
        <>
            <header className="p-3 bg-light">
                <Nav defaultActiveKey="/home" as="ul" className="align-items-center">
                    <Nav.Item as="li">
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>

                    {/* Search as Nav.Item */}
                    <Nav.Item as="li" className="ms-auto">
                        <InputGroup>
                            <InputGroup.Text>
                                <h6 className="mb-0">Search</h6>
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Search"
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setVisibleCount(4);
                                }}
                            />
                        </InputGroup>
                    </Nav.Item>
                </Nav>
            </header>

            <main className="p-3">
                <Outlet />
            </main>

            <footer className="p-3 bg-light text-center">Footer</footer>
        </>
    );
}
