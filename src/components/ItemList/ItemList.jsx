import { Link } from 'react-router-dom';
import { List } from './ItemList.styled';

function ItemList({ items, ...restProps }) {
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

export default ItemList;
