import { getPendingTodos } from "../../store/todo-store"
import { FiltersTypes } from "../interfaces"
import { Filters } from "./Filters"

interface Props {
  handleFilter: (filter: FiltersTypes) => void
  handleDeleteAllTodosCompleted: () => void
}


export const Footer = ({ handleFilter, handleDeleteAllTodosCompleted }: Props) => {
  return (
    <footer className="footer">
      <span className="todo-count">{`Tareas Pendientes: ${getPendingTodos()}`}</span>
      <Filters handleFilter={handleFilter} />
      <span
        onClick={() => handleDeleteAllTodosCompleted()}
        className="clear-completed">Borrar completados</span>
    </footer>
  )
}
