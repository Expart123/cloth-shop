

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ShopContextProvider from './context/ShopContext';

const root = createRoot(document.getElementById('root'));
root.render(
<ShopContextProvider>
<App />
</ShopContextProvider>
);