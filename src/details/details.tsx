import axios from "axios"
import { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Comp2 from "../comp2";
import { useNavigate } from "react-router-dom";

interface User {
  userId:number,
  id:number,
  body:string,
  title:string
}


const column= [
  {
    field:'id',
    headerName:'ID',
    width:90
  },
  {
    field:'userId',
    headerName:'USER ID',
    width:120
  },
  {
    field:'title',
    headerName:'TITLE',
    width:200
  },
  {
    field:'body',
    headerName:'BODY',
    width:200
  },
]

const Details=()=>{

  const [users,setUsers]= useState<User[]>([])

  let navigate = useNavigate()

  useEffect(()=>{

    let user =localStorage.getItem('user')


    if(user==null){

      navigate('/')

      return

    }

      axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{

        setUsers(res.data)
        

      })


  },[])

  return(
    <>
      <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={users}
        columns={column}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    <Comp2/>
    </>
  )

}

export default Details