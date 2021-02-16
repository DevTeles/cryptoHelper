import React from 'react';
import { Text } from 'react-native';

import { ICoinInfoForTable } from '../../@types/generic';
import CoinTableItem from '../../components/CoinTableItem';
import api from '../../services/api';
import { ContainerSafe } from '../../styles/global';
import { Container, FlatListStyled } from './styles';

const TableCoins: React.FC = () => {
  const [dataForRender, setDataForRender] = React.useState<ICoinInfoForTable[]>(
    [],
  );

  const getCoins = React.useCallback(async () => {
    const { data } = await api.get('/');

    setDataForRender(data);
  }, []);

  React.useEffect(() => {
    getCoins();
  }, [getCoins]);

  return (
    <ContainerSafe>
      <Container>
        <FlatListStyled
          data={dataForRender}
          keyExtractor={({ id }) => `${id}`}
          renderItem={({ item }) => <CoinTableItem coinItem={item} />}
        />
      </Container>
    </ContainerSafe>
  );
};

export default TableCoins;
