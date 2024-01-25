import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebasedatabaseconfig'
import { useNavigate } from 'react-router-dom';
const Products = () => {
    let Nav = useNavigate()
    const [data, setdata] = useState([]);
    let getdata = async () => {
        const f = await getDocs(collection(db, "productdetails"));
        setdata(f.docs)
        console.log(f.docs) 
        Nav("/products")
         } 
     useEffect(()=>{
          getdata()
         
     },[])
    
    return (
        <div> 
            <h1>Products</h1>
            {data ? data.map((v, i) => {
                  return (
                    <>
                        <h1> product name :- {v.data().productname}</h1>
                        <h1> productemail :- {v.data().email}</h1>
                        <h1> product number :- {v.data().phonenumber}</h1>
                        
                    </>
                )
            }) : ""}
        </div>
    );
}

export default Products;