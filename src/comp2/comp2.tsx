import FormControlLabel from "@mui/material/FormControlLabel"
import { Checkbox } from "@mui/material"
import { useState } from "react"

const initial =[
  {
    department:'customer services',
    isChecked:false,
    subdept:[
      {
        title:'support',
        isChecked:false
      },
      {
        title:'custmer success',
        isChecked:false
      },
    ]
  },
  {
    department:'design',
    isChecked:false,
    subdept:[
      {
        title:'graphic design',
        isChecked:false
      },
      {
        title:'product design',
        isChecked:false
      },
      {
        title:'web design',
        isChecked:false
      },
    ]
  }
]

function Comp2(){

  const [fields,setFields] = useState(initial)

  const [openIndex,setOpenIndex] = useState<number[]>([])

  const [update,setUpdate] = useState(0)

  const collapse=(indx:number)=>{
    

     if(openIndex.includes(indx)){

     let filt= openIndex.filter((i,index)=>{

        return i!=indx

      })

      setOpenIndex(filt)

      return 

     }

     setOpenIndex([...openIndex,indx])

  }

  const handleChange=(e:boolean,index:number)=>{

     
    initial[index].isChecked=e;

    initial[index].subdept.forEach((i)=>{

      i.isChecked=e;

    })

    setFields(initial)

    setUpdate(update+1)

    
      

  }

  const subChange=(mainIndx:number,subIndx:number,value:boolean)=>{
    
  

   setUpdate(update+1)

       fields[mainIndx].subdept[subIndx].isChecked=value

       setFields(fields)


  }


  return(
    <div style={{width:'100%',backgroundColor:'whitesmoke'}}>
    
    {
      

      fields.map((i,index)=>{

        return<div key={index}style={{textAlign:"left"}}>
          <button onClick={()=>collapse(index)}>{openIndex.includes(index)?'-':'+'}</button>
          <input type="checkbox"
          checked={fields[index].subdept.every((i)=>{

            return i.isChecked===true

          })}
          onChange={(e)=>handleChange(e.target.checked,index)}
          
          />
          <label htmlFor={i.department}>{i.department}</label>
          
            {
              openIndex.includes(index)?
              <>
                {
                  fields[index].subdept.map((ele,ind)=>{

                    return <div style={{paddingLeft:"50px",textAlign:"left"}} key={ind}>
                       <input type="checkbox" checked={ele.isChecked}
                       onChange={(e)=>subChange(index,ind,Boolean(e.target.checked))}
                       />
                       <label htmlFor={ele.title}>{ele.title}</label>
                    </div>

                  })
                }
              </>
              :null
            }
          
        </div>

      })
    }
    
    </div>
  )

}

export default Comp2