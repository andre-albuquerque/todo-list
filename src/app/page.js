"use client";

import { useState } from "react";
import { Check, X, Circle } from 'lucide-react';
import Button from "./components/Button"
import Input from "./components/Input";

export default function Home() {

  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')
  const [done, setDone] = useState([])

  const addTask = (e) => {
    e.preventDefault();
    if (input.length > 0) {    
      setTasks([...tasks, input])
      setInput('')
    }

  }

  const concludeTask = (e, value) => {
    e.preventDefault();

    setDone([ ...done, value ])

    setTasks(tasks.filter(item => item !== value))
  }

  const excludeTask = (e, value) => {
    e.preventDefault();

    setTasks(tasks.filter(item => item !== value))
  }

  return (
    <div className='flex flex-col justify-center items-center '>
      <h1 className='text-3xl font-bold m-10'>Lista de tarefas</h1>
      <div className='flex flex-col w-3/4 h-3/4 p-5 justify-center border-2 rounded-xl divide-y-2 divide-slate-400 '>
        <div className=" w-3/4 flex-row self-center m-10  text-center">
          <Input texto="Nova tarefa" value={input} function={(e)=>setInput(e)} />
          <Button function={(e) => addTask(e)} texto="Adicionar" />
        </div>
        <div className="flex flex-col self-center w-4/5 ">
          <h2 className="text-xl font-bold mt-2">Tarefas</h2>
          <li className="grid grid-cols-2 self-center justify-center justify-items-center w-2/4 ">
            {tasks.length > 0 && tasks.map((value, key) => <>
              <h2 className="justify-self-end mr-2 " key={key}>{value}</h2>
              <div key={key} className="flex flex-row gap-6 ">
                <Check className="cursor-pointer" key={key} size={20} color="white" onClick={e => concludeTask(e, value)}/>
                <X  className="cursor-pointer" key={key} size={20} color="white" onClick={e => excludeTask(e, value)}/>
              </div>
              </>
            )}
          </li>
        </div>
        <div className="flex flex-col self-center w-4/5 mt-10 ">
          <h2 className="text-xl font-bold mt-2">Concluídas</h2>
          {done.length > 0 && done.map((value, key) => {
            return <div key={key} className="flex flex-row gap-2 self-center">
            <Circle className="self-center" key={key} size={10} fill="white"/>
            <span className="self-center" key={key}>{value}</span>
            </div>
          })}
        </div>        
      </div>

    </div>
  )
}
