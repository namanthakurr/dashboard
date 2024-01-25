// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// export default function Axios() {
//     const [name, setName] = useState("");
//     const [users, setUsers] = useState([]);
//     // post request
//     const postData = () => {
//         axios.post("", { name: name, age: 26, hobbies: ["poetry", "cooking", "playing cricket"], 
//         })
//         .then((res) => {
//              console.log(res.data);
//          })
//         .catch((err) => {
//              console.err(err); 
//         });
//     };
//     // put request
//     const UpdateData = (id) => {
//         axios.put(https://653bb79dd5d6790f5ec750f0.mockapi.io/users/${id}, { name: name, age: 26, hobbies: ["poetry", "cooking", "playing cricket"], }).then((res) => { console.log(res.data); }).catch((err) => { console.err(err); });
//     };
//     // put request
//     const deleteData = (id) => {
//         axios.delete(https://653bb79dd5d6790f5ec750f0.mockapi.io/users/${id}).then((res) => { console.log(res.data); }).catch((err) => { console.err(err); });
//     };
//     const getData = () => {
//         axios.get("https://653bb79dd5d6790f5ec750f0.mockapi.io/users").then((res) => { setUsers(res.data); }).catch((err) => { console.err(err) });
//     };
//     useEffect(() => {
//         getData();
//     }, []);

//     return (
//         <div className='d-flex justify-content-center '>
//             <div className='m-5 p-4 border shadow'>
//                 <div className='mb-5 '>
//                     <input type="text" placeholder='Name' onChange={(i) => { setName(i.target.value) }} />
//                     <button className='btn btn-outline-primary ms-5' onClick={postData}>Post Data</button>

//                 </div>
//                 {users.map((user) => {
//                     return (
//                         <div className='d-flex justify-content-between'>
//                             <h2>{${user.id}.${user.name}}</h2>
//                             <div className='mt-2'>
//                                 <button className='btn btn-outline-info' onClick={() => UpdateData(user.id)}>Update</button>
//                                 <button className='btn btn-outline-danger' onClick={() => deleteData(user.id)}>delete</button>

//                             </div>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }



// // first mockapi me ja kar link bana lena