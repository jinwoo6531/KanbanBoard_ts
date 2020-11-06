import React from 'react';
import TrelloList from './TrelloList';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

const App = () => {
  const lists = useSelector((state: RootState) => state.listsReducer);

  return (
    <div>
      <h2>Hello</h2>
      <div style = {{display:'flex',flexDirection:'row'}}>
        {lists.map(list =>(
          <TrelloList key={list.id} title={list.title} cards={list.cards} />  
        ))}
      </div>
      
    </div>
  );
}

export default App;
