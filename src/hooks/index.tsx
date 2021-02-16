import React from 'react';

import { LoadingProvider } from './loading';

const Hooks: React.FC = ({ children }) => {
  return <LoadingProvider>{children}</LoadingProvider>;
};

export default Hooks;
