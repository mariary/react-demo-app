import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../store/reducers'
import thunk from 'redux-thunk'
import ListScreen from './ListScreen'
import Initialization from './Initialization'
import PostScreen from './PostScreen'

export const store = createStore(rootReducer, applyMiddleware(thunk))

export const BASE_URL = 'https://jsonplaceholder.typicode.com/'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ListScreen/>
  }, {
    path: '/post',
    element: <PostScreen/>
  }
], {
  basename: process.env.PUBLIC_URL
})

function App () {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Initialization/>
      </Provider>
    </div>
  )
}

export default App
