import { FiltersTypes } from "../app/interfaces";
import { TodoModel, TodoModelProps } from "../app/models/todo-model";


const state = {
    todos: [
        new TodoModel({ description: "Revisar y limpiar código" }),
        new TodoModel({ description: "Actualizar dependencias" }),
        new TodoModel({ description: "Resolver un bug" }),
    ],
    currentFilter: FiltersTypes.ALL
}

// Hacer state persistente
const saveStateInLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(state))
}

// Leer state del local storage
const getStateFromLocalStorage = () => {
    try {
        const stateStored = localStorage.getItem('todos')
        if (stateStored) {
            const { todos, currentFilter }: { todos: { id: string, description: string, done: boolean }[], currentFilter: FiltersTypes } = JSON.parse(stateStored)
            state.todos = todos.map(todo => new TodoModel({ id: todo.id, description: todo.description, done: todo.done }))
            state.currentFilter = currentFilter
        }
    } catch (error) {
        console.error("Error al cargar el estado desde localStorage:", error)
    }
}

// Inicializar el State
export const initState = () => {
    getStateFromLocalStorage()
}


export const getTodos = (filter: FiltersTypes) => {
    if (filter === FiltersTypes.COMPLETED) return state.todos.filter(todo => todo.isDone() === true)
    if (filter === FiltersTypes.PENDING) return state.todos.filter(todo => todo.isDone() === false)
    return [...state.todos]
}


export const deleteTodo = (todoID: TodoModel['getId'] extends () => infer R ? R : never) => {
    const todoIndex = state.todos.findIndex(todo => todo.getId() === todoID)
    state.todos.splice(todoIndex, 1)
    saveStateInLocalStorage()
}

export const completedTodo = (todoID: TodoModel['getId'] extends () => infer R ? R : never) => {
    const todo = state.todos.find(todo => todo.getId() === todoID)
    todo!.setDone()
    saveStateInLocalStorage()
}

export const getPendingTodos = (): number => {
    return state.todos.filter(todo => !todo.isDone()).length
}

export const deleteTodosCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.isDone())
    saveStateInLocalStorage()
}

export const addNewTodo = (newTodo: TodoModelProps) => {
    state.todos = [...state.todos, new TodoModel(newTodo)]
    saveStateInLocalStorage()
}

export const updateTodoDescription = (todoID: TodoModel['getId'] extends () => infer R ? R : never, newDescription: string) => {
    state.todos.map(todo => {
        if (todo.getId() === todoID) {
            todo.setDescription(newDescription)
        }
    })
    saveStateInLocalStorage()
}

// Necesario para llevar a cabo los Filtrados
export const setCurrentFilter = (newFilter: FiltersTypes) => {
    switch (newFilter) {
        case FiltersTypes.ALL:
            return state.currentFilter = FiltersTypes.ALL
        case FiltersTypes.PENDING:
            return state.currentFilter = FiltersTypes.PENDING
        case FiltersTypes.COMPLETED:
            return state.currentFilter = FiltersTypes.COMPLETED
        default:
            throw new Error('Filter not exist. Must be  "all" | "pending" | "completed" ')
    }
}


export const getCurrentFilter = (): FiltersTypes => {
    return state.currentFilter
}
