

const Navbar = ({handelForm}) => {
  return (
    <div className=' bg-gray-700 text-center px-12 py-3 flex items-center justify-between '>
      <h1 className='text-white font-bold text-2xl'>Crud app</h1>
  
      <button onClick={handelForm} className='bg-emerald-600 px-3 py-1 rounded-md text-white text-lg hover:opacity-75 '>  Add Contact</button>
    </div>
  )
}

export default Navbar
