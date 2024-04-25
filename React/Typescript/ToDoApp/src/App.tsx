import React, {ChangeEvent, FC, useState} from 'react'
import './App.css'
import { todoType } from './AppTypes';



// functional componet olarak tipledik
const App:FC = () => {
  const [task, setTask] = useState<string>('');
  const [workDay, setWorkDay] = useState<number>(0)
  const [todoList, setTodoList] = useState<todoType[]>([])

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === 'task'){
      setTask(event.target.value)
    } else {
      setWorkDay(Number(event.target.value));
    }
  }

  const addNewTask = () => {
    const newTask = {taskName:task, workDay:workDay};
    setTodoList([...todoList, newTask])
  }


  return (
    <div className='App'>
      <input type='text' name='task' value={task} onChange={handleChange} placeholder='görev giriniz'  />
      <input type='number' name='workDay' value={workDay} onChange={handleChange} placeholder='süresi nedri'  />
      <button onClick={addNewTask}>Ekle</button>
    </div>
  )
}

export default App
