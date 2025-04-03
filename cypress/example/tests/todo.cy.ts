/// <reference types="cypress" />

import TodosPage from '../pages/TodosPage';
import { BaseTest } from '../BaseTest';

describe('example to-do app', () => {
  const todosPage = new TodosPage();
  let config: typeof BaseTest.configLoader.config;

  before(() => {
    BaseTest.before();
    config = BaseTest.configLoader.config;
  });

  beforeEach(() => {
    todosPage.visit();
  });

  it('displays two todo items by default', () => {
    // Assert that the list contains two to-do items and their content
    todosPage
      .assertTodoItemCount(config.TODO_ITEMS.COUNT_2)
      .assertFirstTodoItem(config.TODO_ITEMS.FIRST)
      .assertLastTodoItem(config.TODO_ITEMS.SECOND);
  });

  it('can add new todo items', () => {
    // Add a new to-do item
    todosPage.addNewTodoItem(config.TODO_ITEMS.NEW);

    // Assert that the list contains 3 to-do items now and the content of the last one (newly added)
    todosPage.assertTodoItemCount(3).assertLastTodoItem(config.TODO_ITEMS.NEW);
  });
});
