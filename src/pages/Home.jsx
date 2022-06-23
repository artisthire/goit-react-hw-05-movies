import Section from 'components/Section';
import ItemList from 'components/ItemList';

const items = Array(4)
  .fill(null)
  .map((_, index) => ({
    key: index,
    toLink: `movies/${index}`,
    label: `Movie ${index}`,
  }));

function Home() {
  return (
    <Section title="Tranding today">
      <ItemList items={items} />
    </Section>
  );
}

export default Home;
