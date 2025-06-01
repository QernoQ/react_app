import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
interface LoginProp {
    dark: boolean,
    openMenu: boolean,
}

function LoginForm({dark,openMenu} : LoginProp) {
    return (
        <Form className={`position-fixed ${dark ? "bg-dark text-white" : "bg-light text-dark"}`}
            style={{
                top: '50%',
                left: '50%',
                opacity: openMenu ? 1 : 0,
                transition: 'opacity 0.3s ease',
                zIndex: 1050,
                borderRight: !dark ? '1px solid #dee2e6' : 'none',
                padding: '16px',
            }}>
            <span>Log In to ObviouslyNotTwitch</span>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default LoginForm;