import { TextField } from "@mui/material"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){

  const initialState={
    name:'',
    no:'',
    email:''
  }

  const initialErrorMessage={
    nameErr:"",
    noErr:'',
    emailErr:''
  }

  const navigate = useNavigate()

  const [user,setUser] = useState(initialState)

  const [errorMessage,setErrorMessage] = useState(initialErrorMessage)

  const handleChange=(key:string,e:any)=>{

    setUser(prev=>({
      ...prev,
      [key]:e
    }))

  }

  const handleError=(key:string,err:string)=>{

       setErrorMessage(prev=>({
        ...prev,
        [key]:err
       }))

  }


  const handleLogin=()=>{

    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let valid = true

    const {name,email,no}=user

    console.log(user);
    

    if(!email.match(validEmail)){


      handleError('emailErr','Please Enter Valid Name')

      valid=false

    }else{

      handleError('emailErr','')

    }

      if(name.length<1){

           handleError('nameErr','Please Enter Valid Name')

           valid=false

      }else{

        handleError('nameErr','')

      }

      if(no.length!=10){

        handleError('noErr','please enter valid no')

        valid=false

      }else{

        handleError('noErr','')

      }

  
      

      if(valid){

        localStorage.setItem('user',JSON.stringify(user))

        navigate('/')

      }


  }


  return(
    <>
      <Box sx={{display:'flex',gap:'10px',width:'100%',justifyContent:'center',alignItems:'center'}}>
        <Box sx={{display:'flex',flexDirection:"column",gap:'10px',width:'400px'}}>
          <Box>
        <Typography>Login</Typography>
        <TextField
        value={user.name}
        onChange={(e)=>handleChange('name',e.target.value)}
        fullWidth
        size="small"
        label='enter Name'
        />
        <Typography textAlign={'left'} color={'red'}>{errorMessage.nameErr}</Typography>
        </Box>
        <Box>
        <TextField
        fullWidth
        value={user.no}
        type="number"
        onChange={(e)=>handleChange('no',e.target.value)}
        size="small"
        label='enter No'/>
        <Typography textAlign={'left'}color={'red'}>{errorMessage.noErr}</Typography>
        </Box>
        <Box>
        <TextField
        fullWidth
        value={user.email}
        onChange={(e)=>handleChange('email',e.target.value)}
        size="small"
        label='enter Email'/>
        <Typography textAlign={'left'}color={'red'}>{errorMessage.emailErr}</Typography>
        </Box>
        <Button 
        onClick={handleLogin}
        >Login</Button>
        </Box>
      </Box>
    </>
  )

}

export default Login