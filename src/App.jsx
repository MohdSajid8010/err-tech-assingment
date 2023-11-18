import { useState } from 'react'
import './styles/App.css'
import Nav from './component/Nav'
import Home from './page/Home'
import { Route, Routes } from 'react-router-dom'
import Blog from "./page/Blog"
import Contact from "./page/Contact"
import Login from "./page/Login"
import SignUp from "./page/SignUp"
import MyAccount from "./page/MyAccount"
import ErrorPage from "./page/ErrorPage"
import Cart from './page/Cart'
import Shop from './page/Shop'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useThemeContext } from './context/ThemeContext'
import FixBottom from './component/FixBottom'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "./styles/GlobalStyle";
import SearchComp from './page/SearchComp'
import PrivateRoutes from './component/PrivateRoutes'
import Test from './component/Test'

function App() {

  const { theme } = useThemeContext();
  console.log("inside app", theme)

  return (
    <div>
      <ThemeProvider theme={theme}>

        <ToastContainer />
        <GlobalStyle />

        <Nav />
        {/* <Test /> */}
        <FixBottom />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop/:id' element={<Shop />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route element={<PrivateRoutes />}>

            <Route path='/myaccount' element={<MyAccount />} />
            <Route path='/cart' element={<Cart />} />

          </Route>

          <Route path='/search/:keyword' element={<SearchComp />} />
          <Route path='/search/' element={<Home />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>

      </ThemeProvider>
    </div>
  )
}

export default App
