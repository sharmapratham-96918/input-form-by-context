import { useContext } from 'react'
import CrudContext from '../context/crudContext'

const ListItems = ({data , index}) => {

const {removeData , editData } = useContext(CrudContext)


  return (
    <div>
      <li className='bg-sky-800 py-5  text-white text-lg font-semibold flex  items-center justify-center space-x-5'>
        <span>{index +1}</span>
        <h1>Name :{data.name} </h1>
        <p>Mobile:{data.phone} </p>
        <p>Email:{data.email} </p>
        <p>Address:{data.address}</p>
        <button
        onClick={() => editData(data)}
         className='bg-yellow-500 text-white px-3 py-1 rounded-md hover:opacity-75'>edit</button>
        <button 
        onClick={() => removeData(data.id)}
        className='bg-red-600 text-white px-3 py-1 rounded-md hover:opacity-75'>delete</button>
      </li>
    </div>
  )
}

export default ListItems
