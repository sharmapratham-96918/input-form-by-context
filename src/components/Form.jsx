import{ useContext, useEffect, useState } from 'react'
import CrudContext from '../context/crudContext'

const Form = () => {

const {addData , edit, updateData } = useContext(CrudContext)




const [formData , setFormData] = useState({
  id : "" ,
  name : "" ,
  phone : "",
  email : "" ,
  address :"",
})


const handelChange = (e) => {
  setFormData({...formData,
    [e.target.name] : e.target.value
  })
}

const handelSubmit = (e) => {
  e.preventDefault()

if (edit.isEdit) {
      updateData({  id: edit.data.id , ...formData });
    } else {
      addData({ ...formData, id: crypto.randomUUID() });
    }

  setFormData({id:"", name:"" , phone:"", email:"" , address:"" })


}

useEffect(() => {
  if(edit.isEdit){
    setFormData(edit.data)
  }
}, [edit])



    

  return (
    <div>
        
      <form 
      onSubmit={handelSubmit}
      className='bg-cyan-800 px-12 py-3 flex items-center space-y-5  flex-col' >
{
          !edit.isEdit ?        <h1 className='text-2xl font-semibold text-white'>Add Contact</h1>
        :        <h1 className='text-2xl font-semibold text-white'>Edit Contact</h1>

}
 
        <label>
            Name 
            <input
            value={formData.name}
            onChange={handelChange}
            className='bg-white outline-0 pl-3 rounded-md ' placeholder='Enter Your Name' type="text" name="name" required />
        </label>
             <label>
            phone 
            <input
            value={formData.phone}
            onChange={handelChange}
             className='bg-white outline-0 pl-3 rounded-md ' placeholder='Enter Your Name' type="text" name="phone" required/>
        </label>
             <label>
            Email 
            <input
            value={formData.email}
            onChange={handelChange} 
            className='bg-white outline-0 pl-3 rounded-md ' placeholder='Enter Your Name' type="email" name="email"  required />
        </label>
             <label>
            Address 
            <input
            value={formData.address}
            onChange={handelChange}
             className='bg-white outline-0 pl-3 rounded-md ' placeholder='Enter Your Name' type="text" name="address"  required />
        </label>
        <button className='bg-blue-700 hover:opacity-75 text-white text-xl rounded-md px-4 py-2'>Submit</button>
      </form>
    </div>
  )
}

export default Form
