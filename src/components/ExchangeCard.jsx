import React from 'react';
import { Heading, Image, Text, VStack } from '@chakra-ui/react';

const ExchangeCard = ({ key, name, image, rank, url }) => (
  <a href={url} target="blank">
    <VStack
      w={'52'}
      shadow={'lg'}
      p={'8'}
      borderRadius={'lg'}
      transition={'all 0.3s'}
      m={'4'}
      css={{ '&:hover':{
        transform : 'scale(1.1)'
      } }}
    >
      <Image
        src={image}
        h={'10'}
        w={'10'}
        objectFit={'contain'}
        alt="Exchanges"
      />
      <Heading size={'md'} noOfLines={1}>
        {rank}
      </Heading>
      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

export default ExchangeCard;
