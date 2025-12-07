import React from 'react';
import Cards from './cards';
import './cardList.less';

interface CardItem {
  title: string;
  time: string;
  lastweek: string;
}

interface CardListProps {
  cards: CardItem[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((value, index) => {
        return <Cards value={value} key={index}></Cards>;
      })}
    </div>
  );
};

export default CardList;
