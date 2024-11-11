import React, { useState, useEffect } from 'react';
import './App.css';

export const App=()=> {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://itmp.sulla.hu/users')
      .then((res) => (res.ok ? res.json() : []))
      .then((tartalom) => setItems(tartalom));
  }, []);

  return (
    <div className="container">
      <div className="row m-5 p-5 border">
         <ListaKomponens elemek ={items} />
      </div>
    </div>
  );
}

const ListaKomponens = ({ elemek }) => (
  <ol>
    {elemek.map((elem, index) => (
      <li key={index}>{elem.name} - {elem.email}</li>))}
  </ol>
);