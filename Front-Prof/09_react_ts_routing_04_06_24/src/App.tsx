import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PhotoList from './components/PhotoList'
import TaskList from './components/TaskList'
import Layout from './layout/Layout'
import UserList from './components/UserList'


function App() {


  return (

    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<Layout/>} />
        <Route path='/tasks' element={<TaskList/>} />
        <Route path='/users' element={<UserList/>} />
        <Route path='/photos' element={<PhotoList/>} />
      </Route>
      
    </Routes>
      {/* <TaskList />
      <UserList /> */}
      <PhotoList />
    </BrowserRouter>
  )
}

export default App
