import React from 'react';
import { Heading, Image, Link, Text, VStack } from '@chakra-ui/react';

const CoinCard = ({
  id,
  name,
  image,
  symbol,
  price,
  currencySymbol = '₹',
}) => (
  <Link href={`/coin/${id}`}>
    <VStack
      w={'52'}
      shadow={'lg'}
      p={'8'}
      borderRadius={'lg'}
      transition={'all 0.3s'}
      m={'4'}
      css={{
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <Image
        src={image}
        h={'10'}
        w={'10'}
        objectFit={'contain'}
        alt="Exchanges"
      />
      <Heading size={'md'} noOfLines={1}>
        {symbol}
      </Heading>
      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>
        {price ? `${currencySymbol}${price}` : 'NA'}
      </Text>
    </VStack>
  </Link>
);

export default CoinCard;
