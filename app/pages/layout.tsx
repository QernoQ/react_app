import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/appstyle.css";

import { Outlet } from 'react-router';
import { useState, useEffect } from 'react';
import { Nav, InputGroup, Form, NavDropdown, Button, Container } from 'react-bootstrap';
import { gameData } from "~/data/GameData";

export default function Layout() {
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(true);
    const [dark, setDark] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    //zapiuje na dysku
    useEffect(() => {
        const stored = localStorage.getItem("darkMode");
        if (stored !== null) {
            setDark(stored === "true");
        }
    }, []);
    //zmienia wielkosc jak jest wielkosci telefonu
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    //switch dark on/of (aktualizuje)
    useEffect(() => {
        document.body.setAttribute("data-bs-theme", dark ? "dark" : "light");
        localStorage.setItem("darkMode", dark.toString());
    }, [dark]);

    const sidebarWidth = isMobile ? 60 : (open ? 280 : 60);

    return (
        <>
            <header className={`p-3 ${dark ? "bg-dark" : "bg-light"} sticky-top shadow-sm`} style={{ zIndex: 1050 }}>
                <Container fluid>
                    <Nav className="align-items-center flex-wrap">
                        <Nav.Item>
                            <Nav.Link onClick={() => !isMobile && setOpen(!open)}>☰</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="flex-grow-1 my-2 mx-2">
                            <InputGroup>
                                <Form.Control
                                    aria-label="Search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search games..."
                                />
                                <InputGroup.Text>🔎</InputGroup.Text>
                            </InputGroup>
                        </Nav.Item>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">🌙 Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">🌙 Another action</NavDropdown.Item>
                            <NavDropdown.Item as="div" className="d-flex align-items-center">
                                <Form className="d-flex align-items-center ">
                                    <label htmlFor="darkmode-switch" className="me-3 mb-0">🌙 Dark Theme</label>
                                    <Form.Check
                                        type="switch"
                                        id="darkmode-switch"
                                        checked={dark}
                                        onChange={() => setDark(prev => !prev)}
                                        label=""
                                        className="m-0"
                                    />
                                </Form>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </header>

            {/* Sidebar */}
            <div
                className={`d-flex flex-column position-fixed vh-100 pt-5 ${dark ? "bg-dark text-white" : "bg-light text-dark sidebar-light"}`}
                style={{
                    top: '64px',
                    left: 0,
                    width: `${sidebarWidth}px`,
                    transition: 'width 0.3s ease',
                    zIndex: 1040,
                    borderRight: !dark ? '1px solid #dee2e6' : 'none',
                }}
            >
                {!isMobile && (
                    <Button
                        onClick={() => setOpen(!open)}
                        className="align-self-end m-2"
                        size="sm"
                        variant={dark ? "outline-light" : "outline-dark"}
                    >
                        {open ? '◀' : '▶'}
                    </Button>
                )}

                <div className="flex-grow-1 overflow-auto">
                    {gameData.map((category, index) => (
                        <div
                            key={index}
                            className="d-flex align-items-center p-2 sidebar-item"
                        >
                            <div
                                className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    backgroundColor: category.gameImage,
                                    fontSize: '18px',
                                }}
                            />
                            {open && !isMobile && (
                                <span className="ms-3 text-truncate" style={{ fontSize: '14px' }}>
                                    {category.gameName}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div style={{
                marginLeft: `${sidebarWidth}px`,
                transition: 'margin-left 0.3s ease',
                padding: '1rem',
            }}>
                <Outlet context={{ dark }} />
            </div>
        </>
    );
}
