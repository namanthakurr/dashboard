import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseconfig';

function Login() {
    const Nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            Nav('/');
        }
    }, [Nav]);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            localStorage.setItem('user', user.email);
            Nav('/home');
        } catch (error) {
            alert(error.message);
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

export default Login;









// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
// import { auth } from './firebaseconfig';

// function Login() {
//     let Nav = useNavigate();
//     const [user, setuser] = useState(localStorage.getItem('user'));
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);

//     useEffect(() => {
//         if (user) {
//             Nav('/');
//         }
//     }, [user, Nav]);

//     useEffect(() => {
//         const verifier = new RecaptchaVerifier('recaptcha-container', {
//             size: 'invisible',
//             callback: (response) => {
//                 console.log('reCAPTCHA solved:', response);
//             },
//         });
//         setRecaptchaVerifier(verifier);
//         verifier.render().then((widgetId) => {
//             window.recaptchaWidgetId = widgetId;
//         });
//         return () => {
//             verifier.clear();
//         };
//     }, []);


//     let LoginSubmitHandler = (e) => {
//         e.preventDefault();
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 localStorage.setItem('user', user.email);
//                 Nav('/home');
//             })
//             .catch((error) => {
//                 const errorMessage = error.message;
//                 alert(errorMessage);
//             });
//     };

//     let googlelogin = async () => {
//         const provider = new GoogleAuthProvider();
//         await signInWithPopup(auth, provider)
//             .then((result) => {
//                 const credential = GoogleAuthProvider.credentialFromResult(result);
//                 const token = credential.accessToken;
//                 const user = result.user;
//                 localStorage.setItem('user', user.email);
//                 Nav('/home');
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };

//     let phonelogin = async () => {
//         try {
//             await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
//                 .then((confirmationResult) => {      
//                     const code = window.prompt('Enter the verification code sent to your phone:');                  
//                     return confirmationResult.confirm(code);
//                 })
//                 .then((result) => {             
//                     const user = result.user;
//                     console.log('User signed in:', user);
//                     localStorage.setItem('user', user.phoneNumber);
//                     Nav('/home');
//                 })
//                 .catch((error) => {
//                     console.error('Error confirming verification code:', error);
//                 });
//         } catch (error) {
//             console.error('Error sending SMS:', error);
//         }
//     };

//     return (
//         <div>
//             <form className='m-auto p-5 w-25 shadow' style={{ backgroundColor: 'gold' }} onSubmit={LoginSubmitHandler}>
//                 <h1>Login Form</h1>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label">
//                         Email address
//                     </label>
//                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputPassword1" className="form-label">
//                         Password
//                     </label>
//                     <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputPhoneNumber" className="form-label">
//                         Phone Number
//                     </label>
//                     <input type="tel" className="form-control" id="exampleInputPhoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                     Submit
//                 </button>
//                 <button type="button" className="btn btn-primary" onClick={googlelogin}>
//                     Google
//                 </button>
//                 <button type="button" className="btn btn-primary" onClick={phonelogin}>
//                     Phone Number Login
//                 </button>
//             </form>
//             <div id="recaptcha-container"></div>
//         </div>
//     );
// }

// export default Login;
