import { PageTitle } from 'components/PageTitle';
import { EventBoard } from 'components/EventBoard';
import eventsData from '../data.json';

export const App = () => {
  return (
    <div>
      <PageTitle text="Заголовок таблички" />
      <EventBoard events={eventsData} />
    </div>
  );
};
