import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import logger from 'redux-logger';

export default function storeCreation() {
  const store = configureStore({ reducer }, applyMiddleware(thunk, logger));
  return store;
}
