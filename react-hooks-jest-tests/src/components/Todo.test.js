import React from 'react';
import Todo from './Todo';
import { render, waitForElement, fireEvent } from '@testing-library/react'

describe('Tests for Todo component', () => {
  it('Should add new task when form has been submitted', async () => {
    const task = 'testing';

    // renderizar o componente
    const { getByTestId , getByText} = render(<Todo />);

    // buscar o input
    const fieldNode = await waitForElement(() => getByTestId('form-field'));

    // digitar no input
    fireEvent.change(fieldNode,
      { target: { value: task } }
    );

    // espera que haja na lista a task que foi adicionada
    expect(fieldNode.value).toEqual(task);

    // buscar o botão
    const btnNode = await waitForElement(
      () => getByTestId('form-btn')
    );
    
    // clicar no botão
    fireEvent.click(btnNode);

    // buscar a tabela
    const tableNode = await waitForElement(
      () => getByTestId('table')
    );

    // verificar se a tarefa foi adicionada na tabela, no caso, buscamos pelo texto
    const tdNode = await waitForElement(
      () => getByText(task)
    );
    expect(tdNode).toBeDefined();

  })
})
