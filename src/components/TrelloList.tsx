import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';

interface IProps {
  listID: number;
  title: string;
  cards: CProps[];
}

interface CProps {
  id: number;
  text: string;
}

const TrelloList: React.FC<IProps> = ({ title, cards, listID }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map((card) => (
        <TrelloCard key={card.id} text={card.text} />
      ))}
      <TrelloActionButton listID={listID} list />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: '100%',
    marginRight: 8,
  },
};

export default TrelloList;
