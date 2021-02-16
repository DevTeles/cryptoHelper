import React from 'react';
import { ViewProps } from 'react-native';

import { ICoinInfoForTable } from '../../@types/generic';
import { CoinIcon, Container, Text } from './styles';

interface ICounTableItemProps extends ViewProps {
  coinItem: ICoinInfoForTable;
}

const CoinTableItem: React.FC<ICounTableItemProps> = ({
  coinItem,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <CoinIcon
        source={{
          uri: `https://s2.coinmarketcap.com/static/img/coins/32x32/${coinItem.id}.png`,
        }}
      />
      <Text>{`${coinItem.id} - ${coinItem.name}`}</Text>
    </Container>
  );
};

export default CoinTableItem;
