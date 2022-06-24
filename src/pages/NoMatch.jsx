import { Link } from 'react-router-dom';
import Section from 'components/Section';

function NoMatch() {
  return (
    <Section title="Page not found">
      <Link to="/">Back to homepage</Link>
    </Section>
  );
}

export default NoMatch;
