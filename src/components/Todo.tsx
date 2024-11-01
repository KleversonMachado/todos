import { Trash } from 'phosphor-react';
import { TodoProps } from '../App';
import styles from './Todo.module.css';
import { useState } from 'react';

interface TodoType {
    todo: TodoProps;
    onDeleteTodo: (id: number) => void;
    toggleFinished: (id: number) => void;
}

export const Todo = ({ todo, toggleFinished, onDeleteTodo } : TodoType) => {

    const [checked, setChecked] = useState(todo.finished);

    function handleCheckedTodo() {
        toggleFinished(todo.id);

        setChecked(!checked);
    }

    function handleDeleteTodo() {
        onDeleteTodo(todo.id);
    }

    return (
        <div className={`${styles.todo} ${!checked ? styles.borderFill : styles.borderNone}`}>
            <div>
                <input 
                    type="checkbox" 
                    name="finishedOrNot" 
                    id={`finishedOrNot-${todo.id}`}
                    checked={checked}
                    onChange={handleCheckedTodo}
                />
                <label 
                    htmlFor={`finishedOrNot-${todo.id}`} 
                    title={!checked ? "Marcar como concluído" : "Desmarcar como concluído"}>
                </label>
            </div>
            <div className={styles.text}>
                <p className={checked ? styles.checkedInput : styles.notCheckedInput}>{todo.text}</p>
            </div>
            <div>
                <button title='Apagar tarefa' onClick={handleDeleteTodo}>
                    <Trash />
                </button>
            </div>
        </div>
    )
}