import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = extendTheme({
  breakpoints: {
    xs: "6.25px",
    sm: '21.25em', // 340px
    md: '42.5em', // 680px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em' // 1536px
  },
})

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
