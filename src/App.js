import React from 'react';
import './App.css';

import Techlist from './components/TechList';

/*
há várias formas de escrever um component em React, no formato de função como está aqui, ou com class em TechList.js
no reactJS em vez usar const variável = []; usa estados, quando uma variável for manipulada é chamada de estado
há pouco tempo atrás não podia ter estado dentro de função, por isso usava class, inicialmente vamos usar class
e depois passar para função
*/

function App() {
  return <Techlist />
}

export default App;