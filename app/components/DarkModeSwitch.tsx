import { Form } from "react-bootstrap";

interface DarkModeSwitchProps {
  dark: boolean;
  toggleDark: () => void;
};

export default function DarkModeSwitch({ dark, toggleDark }: DarkModeSwitchProps) {
  return (
    <Form className="d-flex align-items-center">
      <label htmlFor="darkmode-switch" className="me-3 mb-0">🌙 Dark Theme</label>
      <Form.Check
        type="switch"
        id="darkmode-switch"
        checked={dark}
        onChange={toggleDark}
        label=""
        className="m-0"
      />
    </Form>
  );
}
