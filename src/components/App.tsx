import React from 'react';
import TrelloList from './TrelloList';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import TrelloActionButton from './TrelloActionButton';

interface IProps {
  list: boolean;
}
const App: React.FC<IProps> = () => {
  const lists = useSelector((state: RootState) => state.listsReducer);

  return (
    <div>
      <h2>Hello</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {lists.map((listt) => (
          <TrelloList
            listID={listt.id}
            key={listt.id}
            title={listt.title}
            cards={listt.cards}
          />
        ))}
        <TrelloActionButton list/>
      </div>
    </div>
  );
};

export default App;
