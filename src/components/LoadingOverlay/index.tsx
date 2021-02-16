import React from 'react';
import { ActivityIndicator } from 'react-native';

import { useLoading } from '../../hooks/loading';
import { Container } from './styles';

export const LoadingOverlay: React.FC = () => {
  const { loading } = useLoading();

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size={56} color="#fff" />
      </Container>
    );
  }

  return <></>;
};
