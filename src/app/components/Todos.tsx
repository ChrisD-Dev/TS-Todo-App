import { useState } from "react"
import { TodoModel } from "../models/todo-model"
import { updateTodoDescription } from "../../store/todo-store"
import { useAutoAnimate } from "@formkit/auto-animate/react"



interface Props {
    todos: TodoModel[]
    handleDelete: (todoID: TodoModel["getId"] extends () => infer R ? R : never) => void
    handleChecked: (todoID: string) => void
}

export const Todos = ({ todos, handleChecked, handleDelete }: Props) => {

    const [editingTodoId, setEditingTodoId] = useState<string | null>(null)
    const [newInputValue, setNewInputValue] = useState("")
    const [parent,] = useAutoAnimate() // Para animaciones


    const onHandleClick = (todoID: TodoModel['getId'] extends () => infer R ? R : never, todoDescription: string) => {
        setEditingTodoId(todoID)
        setNewInputValue(todoDescription)

    }

    const onHandleKey = (e: React.KeyboardEvent<HTMLInputElement>, todoID: TodoModel['getId'] extends () => infer R ? R : never) => {
        if (e.key !== 'Enter' || newInputValue.length < 1) return
        updateTodoDescription(todoID, newInputValue)
        setEditingTodoId(null)
    }


    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewInputValue(e.target.value)
    }

    return (
        <>
            <ul
                className="todo-list"
                ref={parent}
            >
                {
                    todos.map(todo => {
                        // Necesario para cambiar de label a input solamente en aquel en el que hacemos doble click
                        const isEditing = editingTodoId === todo.getId()

                        return (
                            <li
                                key={todo.getId()}
                                className={`view ${todo.isDone() ? 'completed' : ''}`}>
                                <input
                                    onChange={() => {
                                        handleChecked(todo.getId())
                                    }}
                                    className="toggle"
                                    type="checkbox"
                                    checked={
                                        todo.isDone() ? true : false
                                    }
                                />

                                {/* Cambia entre label o input al hacer doble click sobre este*/}
                                {
                                    isEditing
                                        ? <input
                                            className="new-todo"
                                            type="text"
                                            onKeyDown={(e) => onHandleKey(e, todo.getId())}
                                            onChange={e => onHandleChange(e)}
                                            value={newInputValue}
                                            onBlur={() => setEditingTodoId(null)} // Vuelve a mostrar el label cuando se pierde el foco
                                            autoFocus
                                        />
                                        : <label onDoubleClick={() => onHandleClick(todo.getId(), todo.getDescription())}>
                                            {todo.getDescription()}
                                        </label>
                                }


                                {/*  */}
                                <button
                                    onClick={() => handleDelete(todo.getId())}
                                    className="destroy" />
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
