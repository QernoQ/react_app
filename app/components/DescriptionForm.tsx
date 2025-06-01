import { Button, Form } from 'react-bootstrap';
import { FocusTrap } from 'focus-trap-react';
import { useRef, useEffect } from 'react';

interface DescriptionProp {
    dark: boolean;
    openInfo: boolean;
    info: string;
    setInfo: (value: string) => void;
    setOpenInfo: (value: boolean) => void;
    setOpen: (value: boolean) => void;
}

export default function DescriptionForm({ dark, openInfo, info, setInfo, setOpen, setOpenInfo }: DescriptionProp) {
    if (!openInfo) return null;

    return (
        <FocusTrap>
        <Form
            className={`d-flex flex-column align-items-center justify-content-center position-fixed shadow-lg rounded ${dark ? 'bg-dark text-white' : 'bg-light text-dark'}`}
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
            <h4 className="mb-3 text-center">Set your Description!</h4>

            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={5}
                    style={{ minWidth: '500px', minHeight: '300px', resize: 'none' }}
                    placeholder="Enter Description"
                    autoFocus
                    value={info}
                    onChange={(e) => setInfo(e.target.value)}
                />
            </Form.Group>

            <div className="d-flex gap-2 justify-content-center">
                <Button
                    variant={dark ? 'dark' : 'light'}
                    onClick={() => {
                        setOpenInfo(false);
                        setOpen(true);
                        localStorage.setItem('info', info);
                    }}
                >
                    Set!
                </Button>
                <Button
                    variant={dark ? 'dark' : 'light'}
                    onClick={() => {
                        setOpenInfo(false);
                        setOpen(true);
                    }}
                >
                    Close
                </Button>
            </div>
        </Form>
        </FocusTrap>
    );
}
