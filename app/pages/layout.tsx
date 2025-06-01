

import { Outlet } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useMemo, useRef } from 'react';
import { Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { originalStreams } from "~/data/streamerData";
import SidebarItem from '~/components/SidebarItem';
import { gameData } from '~/data/gameData';
import SearchInput from "~/components/SearchInput";
import DarkModeSwitch from "~/components/DarkModeSwitch";
import LiveChannelsButton from "~/components/LiveChannelsButton";
import StreamerHeader from '~/components/StreamerHeader';
import LoginForm from '~/components/LoginForm';
import DescriptionForm from '~/components/DescriptionForm';

export default function Layout() {
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(true);
    const [dark, setDark] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const topRef = useRef<HTMLDivElement>(null);
    const shuffledStreams = useMemo(() => shuffleArray(originalStreams), [originalStreams]);
    const [visibleCountStream, setVisibleCount] = useState(13);
    const shuffledGames = useMemo(() => shuffleArray(gameData), [gameData]);
    const SidebarStreams = shuffledStreams.slice(0, visibleCountStream);
    const [logoScale, setLogoScale] = useState('scale(1)');
    const [browseScale, setBrowseScale] = useState('18px');
    const [openMenu, setOpenMenu] = useState(false);
    const [openinfo, setOpenInfo] = useState(false);
    const [login, setLogin] = useState('');
    const [info, setInfo] = useState('');

    function shuffleArray<T>(array: T[]): T[] {
        const result = [...array];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }

    const handleLogoClick = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
        navigate('/');
    };

    const filteredStreams = originalStreams.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.streamerName.toLowerCase().includes(search.toLowerCase())
    );
    useEffect(() => {
        const savedInfo = localStorage.getItem("info");
        const savedLogin = localStorage.getItem("login");
        const storedDarkMode = localStorage.getItem("darkMode");

        if (savedInfo) {
            setInfo(savedInfo);
        } 
        if (savedLogin) {
            setLogin(savedLogin);
        }

        if (storedDarkMode !== null) {
            setDark(storedDarkMode === "true");
        }
    }, []);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1200);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        document.body.setAttribute("data-bs-theme", dark ? "dark" : "light");
        localStorage.setItem("darkMode", dark.toString());
    }, [dark]);

    const sidebarWidth = isMobile ? 60 : (open ? 280 : 60);
    const handleMouseEnter = () => {
        setLogoScale('scale(1.2)');
    };

    const handleMouseLeave = () => {
        setLogoScale('scale(1)');
    };
    const handleMouseEnter2 = () => {
        setBrowseScale('20px');
    };

    const handleMouseLeave2 = () => {
        setBrowseScale('18px');
    };

    return (
        <>
            <header className={`p-3 ${dark ? "bg-dark" : "bg-light"} sticky-top shadow-sm`} style={{ zIndex: 1050 }}>
                <Container fluid>
                    <Nav className="align-items-center flex-wrap justify-content-center">
                        <Nav.Item className='' onClick={handleLogoClick}>
                            <img
                                src="https://i.imgur.com/QEjtBUF.png"
                                alt="LOGO"
                                style={{
                                    width: '53px',
                                    height: '33px',
                                    marginRight: '8px',
                                    transform: `${logoScale}`,
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        </Nav.Item>
                        <Nav.Item onClick={() => navigate('browse')}>
                            <span
                                style={{
                                    marginRight: '16px',
                                    transition: 'font 0.3s ease',
                                    fontSize: `${browseScale}`,
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={handleMouseEnter2}
                                onMouseLeave={handleMouseLeave2}>Browse</span>
                        </Nav.Item>
                        <Nav.Item style={{ flex: 1, position: 'relative' }}>
                            <SearchInput
                                value={search}
                                onChange={setSearch}
                                barmsg="Search streams..."
                            />

                            {search && (
                                <div
                                    className={`position-absolute start-0 top-100 mt-2 p-3 shadow rounded ${dark ? "bg-dark text-white" : "bg-light text-dark"}`}
                                    style={{
                                        width: '100%',
                                        maxHeight: '60vh',
                                        overflowY: 'auto',
                                        zIndex: 1040,
                                        border: !dark ? '1px solid #dee2e6' : 'none',
                                    }}
                                >
                                    {filteredStreams.length > 0 ? (
                                        filteredStreams.map((item, index) => (
                                            <div
                                                key={index}
                                                className="searchItem py-2 border-bottom"
                                                onClick={() => {
                                                    navigate(`/streamer/${encodeURIComponent(item.streamerName)}`);
                                                    setSearch('');
                                                }}
                                            >
                                                <StreamerHeader
                                                    avatar={item.avatar}
                                                    streamerName={item.streamerName}
                                                    title={item.title}
                                                    viewers={item.viewers}
                                                />
                                            </div>
                                        ))
                                    ) : (
                                        <div>No results found</div>
                                    )}
                                </div>
                            )}
                        </Nav.Item>
                        {login === '' && (
                            <Nav.Item
                                style={{
                                    marginLeft: '16px'
                                }}>
                                <Button
                                    variant={dark ? "dark" : "light"}
                                    onClick={() => {
                                        setOpenMenu(true);
                                        setOpen(false);
                                    }}>
                                    Log In
                                </Button>
                            </Nav.Item>
                        )}
                        <NavDropdown
                            title={
                                <img
                                    src={"https://i.imgur.com/gdkiJTZ.png"}
                                    alt="User"
                                    width="32"
                                    height="32"
                                />
                            }
                        >
                            <NavDropdown.Divider></NavDropdown.Divider>
                            {login !== '' && (
                                <>
                                    <NavDropdown.Item href="" onClick={() => navigate(`/profile/${encodeURIComponent(login)}`)}> 🕶 User: {login}</NavDropdown.Item>
                                    <NavDropdown.Item  onClick={() => {
                                        setOpenInfo(true);
                                        setOpen(false);
                                    }}>
                                        📋 Change Description</NavDropdown.Item>
                                    <NavDropdown.Item
                                        onClick={() => {
                                                setLogin('')
                                                setInfo('')
                                                localStorage.setItem("login", '')
                                                localStorage.setItem("info", '')
                                                navigate('/')
                                            }}
                                    >
                                        🔚 Log Out
                                    </NavDropdown.Item>

                                </>
                            )}
                            <NavDropdown.Item as="div" className="d-flex align-items-center">
                                <DarkModeSwitch dark={dark} toggleDark={() => setDark(prev => !prev)} />
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </header >
            <LoginForm dark={dark} openMenu={openMenu} loginValue={login} setLoginValue={setLogin} setOpenMenu={setOpenMenu} setOpen={setOpen} ></LoginForm>
            <DescriptionForm dark={dark} openInfo={openinfo} info={info} setInfo={setInfo} setOpenInfo={setOpenInfo} setOpen={setOpen}></DescriptionForm>
            <div
                className={`d-flex flex-column position-fixed vh-100 pt-3 ${dark ? "bg-dark text-white" : "bg-light text-dark"}`}
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
                        dark={dark}
                        isOpen={open}
                    />
                )}
                {SidebarStreams.map((stream, index) => (
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
                    gameData,
                    topRef,
                    info,
                }} />
            </div>
            <footer>
                <span className='d-flex justify-content-end'
                    style={{
                        fontSize: '14px',
                        fontWeight: 'bold',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                    }}>
                    Copyright © 2025 | Patryk Bocheński | All rights reserved
                </span>
            </footer>

        </>
    );

}
