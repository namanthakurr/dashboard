import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword , createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebasecon';

function Mydemo() {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     localStorage.getItem('user');
    // }, []);
    

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            createUserWithEmailAndPassword(auth, email, password)
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            localStorage.setItem('user', user.email);
            alert("Login Successful");
        } catch (error) {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.error("Error message:", error.message);

            // alert(errorMessage);
        }
    };

    return (
        <div>
            <form className='m-auto p-5 w-25 shadow' style={{ backgroundColor: 'gold' }} onSubmit={handleLoginSubmit}>
                <h1>Login Form</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Mydemo;








