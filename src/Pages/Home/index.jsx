import React from 'react'

import './style.css';


import HamburguerMenu from './Modules/Header';
import Section from './Modules/Seaction';
import Footer from './Modules/Footer';

import './mobile.css'; // Padrão de leitura
export function Home() {

  return (
    <div >
      <HamburguerMenu/>
      <Section />
      <Footer/>
    </div>
  )
}

