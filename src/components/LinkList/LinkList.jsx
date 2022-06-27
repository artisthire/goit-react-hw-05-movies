import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List } from './LinkList.styled';

function LinkList({ items, ...restProps }) {
  return (
    <List>
      {items.map(item => (
        <li key={item.key}>
          <Link to={item.toLink} {...restProps}>
            {item.label}
          </Link>
        </li>
      ))}
    </List>
  );
}

LinkList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      key: PropTypes.number.isRequired,
      toLink: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default LinkList;
