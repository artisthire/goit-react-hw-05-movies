import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Label, Input, SubmitBtn } from './SearchForm.styled';

function SearchForm({ onSubmit, defValue }) {
  const inputId = nanoid(5);

  return (
    <Form onSubmit={onSubmit}>
      <Label htmlFor={inputId}>Movie name:</Label>

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

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defValue: PropTypes.string.isRequired,
};

export default SearchForm;
