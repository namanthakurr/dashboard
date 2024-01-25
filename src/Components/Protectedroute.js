import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protectedroute({child}) {
    let Nav = useNavigate()
    useEffect(()=>{
        let d = localStorage.getItem("user");
        if(d == "login"){

        }else{
            Nav("/")
        }

    },[])
  return (
    <div>
        {child}
    </div>
  )
}

export default Protectedroute