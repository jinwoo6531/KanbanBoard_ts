import React from 'react'
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';


interface IProps {
    title:string,
    cards:CProps[]
}

interface CProps {
    id:number,
    text:string
}

const TrelloList:React.FC<IProps> = ({title,cards}) => {    
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            {cards.map(card => (
                <TrelloCard key={card.id} text={card.text}/>
            ))}
            <TrelloActionButton list/>
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius:3,
        width:300,
        height: "100%",
        margin: '0 8px 0 0'
    }
}


export default TrelloList
