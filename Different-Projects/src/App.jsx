import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './ProjectComponnet/Home'
import StopWatch from './ProjectComponnet/StopWatch/StopWatch'
import SetMatch from './ProjectComponnet/SetMatch/SetMatch'
import ToDoList from './ProjectComponnet/To-Do-List/To-Do-List'
import CountryCity from './ProjectComponnet/CountryCity/CountryCity'
import DeleteOnChecked from './ProjectComponnet/DeleteOnChecked/DeleteOnChecked'
import TicTacToe from './ProjectComponnet/Tic-Tac-Toe/TicTacToe'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/stopwatch' element={<StopWatch/>}/>
        <Route path='/setmatch' element={<SetMatch/>}/>
        <Route path='/todolist' element={<ToDoList/>}/>
        <Route path='/setcountry' element={<CountryCity/>}/>
        <Route path='/deleteonchecked' element={<DeleteOnChecked/>}/>
        <Route path='/tictactoe' element={<TicTacToe/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
