import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ListGroup from './components/ListGroup'
import Form from "./components/Form"
import { CrudProvider } from './context/CrudContext'


const App = () => {

  const [showForm , setShowForm] = useState(false)

  const handelForm = () => {
    setShowForm(!showForm)
  }

  return (
    <CrudProvider>
           <div className='bg-gray-800'>
      <Navbar handelForm = {handelForm}/>
      <ListGroup/>
      {
        showForm && (      <Form/> )
      }
    </div>

    </CrudProvider>
  )
}

export default App
