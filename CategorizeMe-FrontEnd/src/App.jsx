import './App.css'
import HelloWorld from './HelloWorld'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListTaskComponent from './components/ListTaskComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import TaskComponent from './components/TaskComponent'

function App() {

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      {/* // http://localhost:3000 */}
      <Route path='/' element = {
      <ListTaskComponent/>
      }></Route>
      <Route path='/tasks' element = {
      <HelloWorld/>
      }></Route>
      <Route path='/add-task' element = {
      <TaskComponent/>
      }></Route>
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
