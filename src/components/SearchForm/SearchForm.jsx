import { nanoid } from 'nanoid';
import { Form, Label, Input, SubmitBtn } from './SearchForm.styled';

function SearchForm({ onSubmit, defValue }) {
  const inputId = nanoid(5);

  return (
    <Form onSubmit={onSubmit}>
      <Label htmlFor={inputId}>Find:</Label>

      <Input
        id={inputId}
        type="text"
        name="query"
        placeholder="Search query"
        defaultValue={defValue}
        required
      />
      <SubmitBtn type="submit">Search</SubmitBtn>
    </Form>
  );
}

export default SearchForm;
