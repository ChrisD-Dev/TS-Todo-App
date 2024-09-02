import { Footer, Header, Todos } from './components'
import { useTodos } from './hooks/useTodos'


function App() {

  const { todos, handleChecked, handleDelete, handleDeleteAllTodosCompleted, handleFilter, handleNewTodo } = useTodos()

  return (
    <div className='todoapp'>
      <Header handleNewTodo={handleNewTodo} />
      <Todos todos={todos} handleChecked={handleChecked} handleDelete={handleDelete} />
      <Footer handleFilter={handleFilter} handleDeleteAllTodosCompleted={handleDeleteAllTodosCompleted} />
    </div>
  )
}

export default App
