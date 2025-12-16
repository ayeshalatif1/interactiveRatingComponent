import { useState } from 'react'
import './App.css'
import InputRating from './Components/RatingInput/Input.jsx'
import ThankYou from './Components/Thankyou/Display.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Router } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} >
        <Route path='/' element={<InputRating />} />
        <Route path='/thankyou' element={<ThankYou />} />
      </Route>
    )

  );

  return (


    <>
      <main>
        <RouterProvider router={router} />

      </main>

    </>
  )
}

export default App
