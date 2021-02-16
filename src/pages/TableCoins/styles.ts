import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const FlatListStyled = (styled.FlatList`
  flex: 1;
  width: 100%;
` as React.ComponentType) as new <T>() => FlatList<T>;
