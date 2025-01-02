import React from 'react'
import MainPage from './Components/MainPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PlayPage from './Components/PlayPage'
export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div><MainPage /></div>
    },
    {
      path: '/play-now',
      element: <div><PlayPage /></div>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}
