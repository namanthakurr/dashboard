import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from './firebasedatabaseconfig';
function Baseform() {


  const [phone, setPhone] = useState("")
   const [user , setUser] =useState(null)
   const [otp , setOtp] = useState("")

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})     //import RecaptchaVerifier ko firebase auth se and use them below as id
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)  //import new func from firebase
      setUser(confirmation)
      console.log(confirmation);
      
    } catch (err) {
        console.error(err)
    }
  }

let verifyOtp =  async()=>{
  try {
   let data = await user.confirm(otp)
   console.log(data)
   alert("Login Success!!")
  } catch (err) {
     console.error(err);
  }
 
}

  return (
    <div >
      <Card className='m-auto  p-5  shadow mt-5' style={{ backgroundColor: "coral", width: "30%" }}  >
        <h1>Database Form</h1>
        <div className="mb-3">
          <h4><b>Phonenumber</b></h4>
          <PhoneInput
            country={'us'}
            value={phone}
            onChange={(phone) => { setPhone("+" + phone) }}
          />
          <Button  onClick={sendOtp}  variant="primary" type="submit" style={{ margin: "10px" }}>
            SEND OTP
          </Button>
        </div>


        <div className="mb-3">
        <h4><b>OTP</b></h4>
          <Form.Control type="tel"  onChange={(e)=>{setOtp(e.target.value)}} />
        </div>

        <Button variant="primary" type="submit" onClick={verifyOtp} >
          VERIFY OTP
        </Button>
      </Card>

      <div id="recaptcha">

      </div>
    </div>
  )
}

export default Baseform

















// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { collection, addDoc } from 'firebase/firestore';
// import { db } from "./firebasedatabaseconfig";
// import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
// function Baseform() {

//   // const [name, setName] = useState("")
//   // const [email, setEmail] = useState("")
//   const [phonenumber, setPhonenumber] = useState("")

//   const products = collection(db, "productdetails")
//   // const products = collection(db , "products")
//   let setdata = async (e) => {
//     e.preventDefault()
//     //  alert(console.log(name + email + phonenumber))
//     await addDoc(products, { productname: name, email: email, phonenumber: phonenumber })
//   }


//   let number = () => {
//     const auth = getAuth();
//     const appVerifier = window.recaptchaVerifier;
//     window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recap', {});
//     signInWithPhoneNumber(auth, phonenumber, appVerifier)
//       .then((confirmationResult) => {
//         const code = prompt('Enter the verification code sent to your phone:');
//         return confirmationResult.confirm(code);
//         // SMS sent. Prompt user to type the code from the message, then sign the
//         // user in with confirmationResult.confirm(code).
//         window.confirmationResult = confirmationResult;
//         // ...
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//   }

//   return (
//     <div >
//       <Form className='m-auto  p-5 w-25 shadow mt-5' style={{ backgroundColor: "coral" }} onSubmit={setdata} >
//         <h1>Database Form</h1>
//         {/* <Form.Group className="mb-3" controlId="formBasicEmail" >
//           <Form.Label>Name</Form.Label>
//           <Form.Control type="text" placeholder="Enter your name..." value={name} onChange={(e) => { setName(e.target.value) }} />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
//         </Form.Group> */}

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Phonenumber</Form.Label>
//           <Form.Control type="tel" placeholder="Phonenumber" value={phonenumber} onChange={(e) => { setPhonenumber(e.target.value) }} />
//         </Form.Group>
//         {/* <Button variant="primary" type="submit">
//           Submit
//         </Button> */}
//         <Button variant="primary" type="submit" onClick={number}>
//           Phone number
//         </Button>
//       </Form>
//       <div id="recap">

//       </div>
//     </div>
//   )
// }

// export default Baseform