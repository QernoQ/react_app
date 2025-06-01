import { InputGroup, Form } from "react-bootstrap";

interface SearchProps  {
  value: string;
  onChange: (value: string) => void;
  barmsg: string;
};

export default function SearchInput({ value, onChange, barmsg, }: SearchProps) {
  return (
    <InputGroup>
      <Form.Control
        aria-label="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={barmsg}
      />
      <InputGroup.Text>🔎</InputGroup.Text>
    </InputGroup>
  );
}
