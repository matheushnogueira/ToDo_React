import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'

// CSS
import styles from "./TaskForm.module.css"


// interface
import { ITask } from "../interfaces/Task"

type Props = {
  btnText: string;
  taskList: ITask[];
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id:number, title:string, difficult:number): void;
}

const TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}: Props) => {

const [id, setId] = useState<number>(0);
const [title, setTittle] = useState<string>("");
const [difficult, setDifficult] = useState<number>(0);

useEffect(() => {

if(task){
  setId(task.id);
  setTittle(task.title);
  setDifficult(task.difficult);
}

}, [task])

const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  if(handleUpdate){
    handleUpdate(id, title,difficult)
  }else{
    const id = Math.floor(Math.random()*1000)

    const newTask: ITask = {id, title, difficult}

    setTaskList!([...taskList, newTask])

    setTittle("")
    setDifficult(0);
  };
};

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  if(e.target.name === "title"){
    setTittle(e.target.value)
  }else{
    setDifficult(parseInt(e.target.value))
  }
};

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input 
          type="text" 
          name='title' 
          placeholder='Título da tarefa' 
          onChange={handleChange} 
          value={title}/>
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficult">Dificuldade:</label>
        <input 
          type="text" 
          name='difficult' 
          placeholder='Qual a dificuldade da tarefa?'
          onChange={handleChange} 
          value={difficult}/>
      </div>
      <input type="submit" value={btnText}/>
    
    </form>
  )
}

export default TaskForm