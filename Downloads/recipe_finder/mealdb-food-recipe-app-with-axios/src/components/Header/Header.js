import React from 'react';
import "./Header.scss";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <div className='header-content flex align-center justify-center flex-column text-center'>
        <SearchForm />
        <h1 className='text-orange header-title ls-2'>Select your favorite cuisines?</h1>
        <h4 className='text-uppercase text-orange my-3 ls-1'>Relish your tastebuds with our recipes</h4>
      </div>
    </header>
  )
}

export default Header