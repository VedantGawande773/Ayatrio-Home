"use client";

import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; 
import Main from './Components/Main';

export default function Home({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Main/>
    </Provider>
  );
}




