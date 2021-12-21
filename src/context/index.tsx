import React from 'react';

import { UserProvider } from './user';

const AppProviders: React.FC = ({ children }) => (
  <UserProvider>{children}</UserProvider>
);

export default AppProviders;
