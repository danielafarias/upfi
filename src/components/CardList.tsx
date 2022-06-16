import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE
  const openModalViewImage = () => {
    console.log('modal');
  };

  return (
    <SimpleGrid columns={3} spacing="40px">
      {cards &&
        cards.map(card => (
          <Card key={card.id} data={card} viewImage={openModalViewImage} />
        ))}
      {/* TODO MODALVIEWIMAGE */}
    </SimpleGrid>
  );
}
