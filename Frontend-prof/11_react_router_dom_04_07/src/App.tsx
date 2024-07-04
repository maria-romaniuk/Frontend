
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import TaskList from './components/TaskList'
import UserList from './components/UserList'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<TaskList />} />
        <Route path='/users' element={<UserList />} />
        {/* //index значит что мы открываем начальную страницу и такслист там будет отображаться.
        // path значит по какому пути от веб ссылки мы открываем страницу юхерс */}
      </Route>
    </Routes>
  )
}

export default App
