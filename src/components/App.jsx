import PandingList from './PandingList';
import data from '../data.json';
import Section from './Section';

export default function App() {
  return (
    <div>
      <Section title="Топ недели">
        <PandingList items={data} />
      </Section>
      <Section />
    </div>
  );
}
