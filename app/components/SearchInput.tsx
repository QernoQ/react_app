import { InputGroup, Form } from "react-bootstrap";

interface SearchProps  {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchInput({ value, onChange }: SearchProps) {
  return (
    <InputGroup>
      <Form.Control
        aria-label="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search streams.."
      />
      <InputGroup.Text>🔎</InputGroup.Text>
    </InputGroup>
  );
}
