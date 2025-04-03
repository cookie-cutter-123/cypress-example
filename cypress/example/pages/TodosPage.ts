class TodosPage {
  private todoItems = () => cy.get('.todo-list li');
  private newTodoItem = () => cy.get('[data-test=new-todo]');

  /**
   * Visits todos page.
   */
  public visit(): void {
    cy.visit('/todo');
  }

  /**
   * Asserts the number of items in the todos list.
   * @param count - number of items.
   */
  public assertTodoItemCount(count: number) {
    this.todoItems().hasLength(count);
    return this;
  }

  /**
   * Asserts the text of the first todos item.
   * @param text - Expected text of the first todos item.
   */
  public assertFirstTodoItem(text: string) {
    this.todoItems().first().hasText(text);
    return this;
  }

  /**
   * Asserts the text of the last todos item.
   * @param text - Expected text of the last todos item.
   */
  public assertLastTodoItem(text: string) {
    this.todoItems().last().hasText(text);
    return this;
  }

  public addNewTodoItem(text: string) {
    this.newTodoItem().typeAndConfirm(text);
    return this;
  }
}

export default TodosPage;
