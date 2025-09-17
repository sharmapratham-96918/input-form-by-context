import React, { useContext } from 'react'
import ListItems from './ListItems'
import CrudContext from '../context/crudContext'

const ListGroup = () => {
  const {datas} = useContext(CrudContext)



  return (
    <div className='p-12 w-full'>
      <ul>
        {
          datas.map((data , index) => {
            return (
                     <ListItems key={data.id} data = {data} index = {index}/>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ListGroup
