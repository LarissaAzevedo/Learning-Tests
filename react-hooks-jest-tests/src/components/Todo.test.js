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

    // buscar o botão
    expect(fieldNode.value).toEqual(task);

    // clicar no botão
    const btnNode = await waitForElement(
      () => getByTestId('form-btn')
    );
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