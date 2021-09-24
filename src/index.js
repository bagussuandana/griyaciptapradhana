import React from 'react';
import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import theme from './Theme'
import { ThemeProvider } from '@mui/material/styles';
const App = React.lazy(() => import('./App'))

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading ...</div>}>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
