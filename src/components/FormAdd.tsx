import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import styles from './FormAdd.module.css';

interface FormAddTypes {
    addTodo: (text: string) => void;
}

export const FormAdd = ({ addTodo } : FormAddTypes) => {
    const [todo, setTodo] = useState('');

    const handleNewTodoInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }

    function handleAddTodo() {
        if (todo !== "") {
            addTodo(todo);
        }
    }

    return (
        <div className={styles.wrapper}>
            <input 
                type="text" 
                name="addTodoInput" 
                placeholder='Adicione uma nova tarefa' 
                value={todo}
                onChange={e => handleNewTodoInputChange(e)}
                required
            />
            <button type="submit" onClick={handleAddTodo}>
                Criar <PlusCircle />
            </button>
        </div>
    );
}