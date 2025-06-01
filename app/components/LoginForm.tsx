import {Button, Form} from 'react-bootstrap';
import { FocusTrap } from 'focus-trap-react';
import { useState } from 'react';

interface LoginProp {
    dark: boolean;
    openMenu: boolean;
    loginValue: string;
    setLoginValue: (value: string) => void;
    setOpenMenu: (value: boolean) => void;
    setOpen: (value: boolean) => void;
}

function LoginForm({ dark, openMenu, loginValue, setLoginValue, setOpen, setOpenMenu }: LoginProp) {
    if (!openMenu) return null;
    const [error,setError] = useState('');

    return (
        <FocusTrap>
            <Form
                className={` d-flex flex-column items-aling-center justify-content-center position-fixed shadow-lg rounded ${dark ? "bg-dark text-white" : "bg-light text-dark"}`}
                style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    opacity: 1,
                    transition: 'opacity 0.3s ease',
                    zIndex: 1050,
                    border: !dark ? '1px solid #dee2e6' : 'none',
                    padding: '24px',
                    minWidth: '300px',
                    minHeight: '300px'
                }}
            >
                <h4 className="mb-3">Log In to ObviouslyNotTwitch</h4>

                <Form.Group className="mb-3" controlId="formBasicLogin">
                    <Form.Label>Login</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter login"
                        autoFocus
                        value={loginValue}
                        onChange={(e) => setLoginValue(e.target.value)}
                    />
                    {error && <Form.Text className="text-danger">{error}</Form.Text>}
                </Form.Group>
                <Button variant={dark ? "dark" : "light"} type="submit" onClick={(e) => {
                    e.preventDefault();
                    if(loginValue.trim() === '')
                    {
                        setError('Login cannot be empty!')
                        return;
                    }
                    setError('');
                    setOpenMenu(false);
                    setOpen(true);
                    localStorage.setItem("login", loginValue);
                }}>
                    Log in
                </Button>
                <Button variant={dark ? "dark" : "light"} onClick={() => {
                    setOpenMenu(false);
                    setOpen(true);
                }}>
                    Close
                </Button>
            </Form>
        </FocusTrap>
    );
}

export default LoginForm;
