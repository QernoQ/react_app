import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/appstyle.css";

import { Outlet } from 'react-router';
import { useState, useEffect,useMemo } from 'react';
import { Nav, InputGroup, Form, NavDropdown, Button, Container } from 'react-bootstrap';
import { originalStreams } from "~/data/streamerData";
import SidebarItem from '~/components/SidebarItem';
import { type GamesPanels, type StreamerPanels } from "~/data/livePanel";
import { gameData } from '~/data/gameData';
import SearchInput from "~/components/SearchInput";
import DarkModeSwitch from "~/components/DarkModeSwitch";
import LiveChannelsButton from "~/components/LiveChannelsButton";

export default function Layout() {
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(true);
    const [dark, setDark] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    function shuffleArray<T>(array: T[]): T[] {
        const result = [...array];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }

    const shuffledStreams = useMemo(() => shuffleArray(originalStreams), [originalStreams]);
    const shuffledGames = useMemo(() => shuffleArray(gameData), [gameData]);

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
            setIsMobile(window.innerWidth < 1200);
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
                            <SearchInput value={search} onChange={setSearch} />
                        </Nav.Item>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">🌙 Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">🌙 Another action</NavDropdown.Item>
                            <NavDropdown.Item as="div" className="d-flex align-items-center">
                                <DarkModeSwitch dark={dark} toggleDark={() => setDark(prev => !prev)} />
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
                    <LiveChannelsButton
                        toggleSidebar={() => setOpen(prev => !prev)}
                    />
                )}

                {shuffledStreams.map((stream, index) => (
                    <SidebarItem
                        key={index}
                        avatar={stream.avatar}
                        streamerName={stream.streamerName}
                        viewers={stream.viewers}
                        category={stream.category}
                        isOpen={open}
                        isMobile={isMobile}
                    />
                ))}
            </div >

            <div style={{
                marginLeft: `${sidebarWidth}px`,
                transition: 'margin-left 0.3s ease',
                padding: '1rem',
            }}>
                <Outlet context={{
                    dark,
                    shuffledStreams,
                    shuffledGames,
                }} />
            </div>
        </>
    );

}
