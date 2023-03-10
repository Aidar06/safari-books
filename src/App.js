import './App.scss';
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import {Routes, Route} from "react-router";
import Home from "./components/Home/home";
import About from "./pages/About/about";
import Contacts from "./pages/Contacts/contacts";
import Category from "./pages/Category/category";
import Info from "./pages/Info/info";
import Payment from "./pages/Payment/payment";
import Menu from "./components/BurgerMenu/menu";
import Signs from "./components/Signs/signs";
import React, {useState} from "react";
import InfoBook from "./pages/Info/InfoBook/infoBook";
import Search from "./pages/Search/search";
import Account from "./pages/Account/account";

function App() {
    const [signUp,setSignUp] = useState(false)
    const [signIn,setSignIn] = useState(false)
    const [menu,setMenu] = useState(false)

  return (
    <>
      <Header menu={menu} setMenu={setMenu} signIn={signIn} setSignIn={setSignIn} signUp={signUp} setSignUp={setSignUp}/>
        <Menu menu={menu} setMenu={setMenu} signIn={signIn} setSignIn={setSignIn} signUp={signUp} setSignUp={setSignUp}/>
        <Signs signIn={signIn} setSignIn={setSignIn} signUp={signUp} setSignUp={setSignUp}/>
      <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/about'} element={<About/>}/>
          <Route path={'/contacts'} element={<Contacts/>}/>
          <Route path={'/category/:name'} element={<Category/>}/>
          <Route path={'/info'} element={<Info/>}/>
          <Route path={'/payment'} element={<Payment/>}/>
          <Route path={'/account'} element={<Account/>}/>
          <Route path={'/search/:book'} element={<Search/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
