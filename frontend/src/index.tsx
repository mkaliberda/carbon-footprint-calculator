import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import en_US from 'antd/es/locale/en_US';
import { ApolloProvider } from '@apollo/client';
import { client } from './ApolloClient'

import App from './App';
import i18n from './i18n';
import { BrowserRouter } from 'react-router-dom';

import { ConfigProvider } from 'antd';
import { I18nextProvider } from 'react-i18next';

ReactDOM.render(
  <ApolloProvider client={client}>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <ConfigProvider locale={en_US}>
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </I18nextProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
