import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@styles/index.css'
import Layout from '@pages/Layout.jsx'
import Home from '@pages/Home.jsx'
import Login from '@pages/Login.jsx'
import Activities from '@pages/Activities.jsx'
import App from '@pages/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="activities" element={<Activities />} />
          <Route path="app" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)