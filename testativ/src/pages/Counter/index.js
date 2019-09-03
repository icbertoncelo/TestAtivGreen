import React, { useState, useEffect } from 'react';
import api from '../../services/api';

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
        <strong>{coffees.quantity}</strong>
        <button tyoe="button"onClick={handleAddCoffee}>Adicionar</button>
      </Content>
    </Container>
  );
}
