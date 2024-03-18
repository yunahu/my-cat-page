import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App.jsx';
import theme from "src/theme/theme";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<ThemeProvider theme={theme}>
	    <App />
		</ThemeProvider>
  </React.StrictMode>,
);
