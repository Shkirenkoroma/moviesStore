import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from 'routes'
import './App.css'

const App:FC = (): JSX.Element => {

  return (
    <div className="App">
      <RouterProvider router={createBrowserRouter(routes)} />
    </div>
  )
}

export default App
