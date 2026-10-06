import React from 'react'
import Card from "./components/Card"
import { useState } from 'react'

const App = () => {
  const [title, settitle] = useState("")
  const [details, setdetails] = useState("")
  const [task, settask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
    const copyTask = [...task];
    copyTask.push({title,details})
    settask(copyTask)
    settitle('')
    setdetails('')
    console.log(copyTask)
  }
  let scale = ()=>{
    scale = 0.96
  }
  const deletenote = (idx)=>{
    const copyTask = [...task];
    console.log(copyTask[idx])
    copyTask.splice(idx,1)
    settask(copyTask)
  }

  return (
    <div className='flex h-screen w-screen'>
      <div className="bg-black w-1/2 h-full lg:flex py-2.5 gap-4 flex-col justify-between">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <input 
            className="bg-amber-100 mx-1.5 my-4 w-4/5 min-h-[50px] rounded text-black" 
            id='title' 
            placeholder="Enter Task Heading"
            value={title}
            type='text'
            onChange={(e)=>{
              settitle(e.target.value)
              }}
            />
          <textarea
            className="bg-amber-100 mx-1.5 my-1.5 w-4/5 min-h-[250px] text-black" 
            id="details" 
            placeholder="Details"
            value={details}
            onChange={(e)=>{
              setdetails(e.target.value)
            }}
            ></textarea>
          <button 
            className='bg-cyan-400 active:bg-blue-500 active:{scale} rounded-2xl text-black mx-1.5 py-2 font-bold justify-between object-cover w-4/5'
            onClick={scale}
            type='submit'>
              Add Note
          </button>
        </form>
      </div>
      <div className="bg-black overflow-y-auto p-4 w-full">
        <h1 className='text-blue-300 font-bold'>Your Notes</h1> <br />
        <div className="flex flex-wrap w-full h-100% gap-4 justify-start">
          {task.map((elem,idx)=>{
            return <Card key={idx} title={elem.title} details={elem.details} index={idx} deleteTask={deletenote}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App