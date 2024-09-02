import { useState } from "react"
import { TodoModelProps } from "../models/todo-model"


interface Props {
    handleNewTodo: (newTodo: TodoModelProps) => void
}


export const Header = ({ handleNewTodo }: Props) => {

    const [inputValue, setInputValue] = useState("")


    const onHandleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter' || inputValue.length < 1) return
        handleNewTodo({ description: inputValue })
        setInputValue("")
    }

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    return (
        <header className="header">
            <h1>
                Todo App
            </h1>
            <input
                onChange={e => onHandleChange(e)}
                onKeyDown={(e) => onHandleKey(e)}
                value={inputValue}
                type="text" className="new-todo" placeholder="Qué hay que hacer?" />
        </header>
    )
}
