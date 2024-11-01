import { FormAdd } from "./components/FormAdd";
import { Header } from "./components/Header";
import { Todo } from "./components/Todo";

import styles from './App.module.css';
import ClipboardImg from './assets/Clipboard.png';
import { useState } from "react";

export interface TodoProps {
  id: number;
  text: string;
  finished: boolean;
}

const todos : TodoProps[] = [
  // {
  //   id: 1,
  //   text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  //   finished: false
  // },
  // {
  //   id: 2,
  //   text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  //   finished: true
  // }
]

export function App() {

  const finishedTodos = todos.filter(todo => todo.finished).length;

  const [countTotalTodos, setCountTotalTodos] = useState(todos.length);
  const [countFinishedTodos, setCountFinishedTodos] = useState(finishedTodos);

  function toggleFinished(id: number) {
    todos.forEach(eltodo => {
      if (eltodo.id === id) {
        eltodo.finished = !eltodo.finished;
      }
    });
    setCountFinishedTodos(todos.filter(todo => todo.finished).length);
  }

  function addTodo(text: string) {
    todos.push({id: todos.length + 1,text: text, finished: false});

    setCountTotalTodos(todos.length);
  }

  function onDeleteTodo(id: number) {
    const todosWithoutDeletedOne = todos.filter(itodo => itodo.id !== id);
    
    todos.length = 0;
    todos.push(...todosWithoutDeletedOne);

    setCountTotalTodos(todosWithoutDeletedOne.length);
    setCountFinishedTodos(todos.filter(todo => todo.finished).length);
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <FormAdd addTodo={addTodo} />
        <div className={styles.countTodo}>
          <div className={styles.totalTodos}>
            <p>Tarefas criadas</p>
            <div>{countTotalTodos}</div>
          </div>
          <div className={styles.finishedTodos}>
            <p>Concluídas</p>
            <div>{countTotalTodos > 0 ? `${countFinishedTodos} de ${countTotalTodos}` : countFinishedTodos}</div>
          </div>
        </div>
        {
        todos.length > 0 ? (
          todos.map(todo => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                toggleFinished={toggleFinished}
                onDeleteTodo={onDeleteTodo}
              />
            )
          })
        ) : (
          <div className={styles.noTodos}>
            <img
              src={ClipboardImg}
              alt="Vetor de prancheta" 
            />
            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
            
          </div>
        )}
      </div>


    </>
  )
}
