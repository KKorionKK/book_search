import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


const defaultState = {
  books: [],
  prev_query: [],
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOAD_BOOKS":
      return {...state, books: [...state.books, ...action.payload]}
    case "GET_BOOKS":
      return{...state, books: action.payload}
    case "SET_PREV_QUERY":
      return {...state, prev_query: action.payload}

    default:
      return state;
  }
}
const store = configureStore({reducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
