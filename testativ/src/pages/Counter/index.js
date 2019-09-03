import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import cafefeliz from '../../assets/cafefeliz.png'
import cafepistola from '../../assets/cafepistola.png'

import { Container, Content } from './styles';

export default function Counter() {
  const [coffees, addCoffees] = useState({})

  useEffect(() => {
    async function loadCoffee() {
      const response = await api.get('coffees');

      addCoffees(response.data[0])
    };

    loadCoffee();
  }, [coffees])

  async function handleAddCoffee() {
    const response = await api.put(`coffees/${coffees._id}`)

    addCoffees(response.data);
  }

  return (
    <Container>
      <Content>
        <strong>CAFÉS TOMADOS NA AG HOJE</strong>
        <h1>{coffees.quantity}</h1>
        <img src={coffees.quantity > 0 ? cafefeliz : cafepistola} alt="Café"/>
        <button tyoe="button"onClick={handleAddCoffee}>BEBER CAFÉ</button>
      </Content>
    </Container>
  );
}
