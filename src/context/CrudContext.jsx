import { createContext, useEffect, useState } from "react";

const CrudContext = createContext()

export const CrudProvider = ({children}) => {

    const [datas ,setDatas] = useState([
        {
        id : 1,
        name: "pankaj",
        phone : "1234567890",
        email :"pankaj@gmail.com",
        address : "123,indore"
    },
            {
        id : 2 ,
        name: "shivam",
        phone : "1234567890",
        email :"pankaj@gmail.com",
        address : "123,indore"
    },


    ])




    const addData = (data) => {
        setDatas([...datas , data])
    }

    const removeData = (id) => {
        setDatas(datas.filter((item) => item.id !== id))
    }


    const [edit , setEdit] = useState({
    data :{},
    isEdit : false
     })

    const editData = (data) =>{
        setEdit({
            data : data,
            isEdit : true
        })
    }

    const updateData = (updatedData) => {
        setDatas(datas.map((item) => item.id === updatedData.id ? updatedData : item))
        setEdit({data : {} , isEdit :false})

    }

return(
        <CrudContext.Provider value={{ datas , edit ,setEdit, addData , removeData , editData , updateData }}>
        {children}
    </CrudContext.Provider>
)
}

export default CrudContext