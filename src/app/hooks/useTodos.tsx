import { useEffect, useState } from 'react';
import { TodoModel, TodoModelProps } from '../models/todo-model';
import { FiltersTypes } from '../interfaces';
import { addNewTodo, completedTodo, deleteTodo, deleteTodosCompleted, getCurrentFilter, getTodos, initState, setCurrentFilter } from '../../store/todo-store';

export const useTodos = () => {
    const [todos, setTodos] = useState<TodoModel[]>([]);

    // Maneja la inicialización del estado
    useEffect(() => {
        initState(); // Inicializa el store desde el localStorage
        setTodos(getTodos(getCurrentFilter())); // Actualiza el estado con los todos desde el store
    }, []);


    const handleDelete = (todoID: TodoModel['getId'] extends () => infer R ? R : never) => {
        deleteTodo(todoID)
        setTodos(() => [...getTodos(getCurrentFilter())]);
    };

    const handleChecked = (todoID: string) => {
        completedTodo(todoID)
        setTodos(() => [...getTodos(getCurrentFilter())]);
    }

    const handleFilter = (filter: FiltersTypes) => {
        setCurrentFilter(filter)
        setTodos(() => [...getTodos(getCurrentFilter())])
    }

    const handleDeleteAllTodosCompleted = () => {
        deleteTodosCompleted()
        setTodos(() => [...getTodos(getCurrentFilter())]);
    }

    const handleNewTodo = (newTodo: TodoModelProps) => {
        addNewTodo(newTodo)
        setTodos(() => [...getTodos(getCurrentFilter())]);
    }

    return {
        todos,
        handleDelete,
        handleChecked,
        handleFilter,
        handleDeleteAllTodosCompleted,
        handleNewTodo
    }
}