import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate ,Link } from 'react-router-dom';
function Nav() {
    let Nav = useNavigate()
    const [username , setUsername] = useState()
    let name = localStorage.getItem("user")
    useEffect(()=>{
        let k = name && name.split("@")[0]
        setUsername(k)
    })
 
    let logout = () =>{
        localStorage.clear();
        Nav("/login")
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>

                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                               <NavLink class="nav-link active" aria-current="page" to="/products">Products</NavLink >
                            </li>
                            
                            {username && <li class="nav-item">
                                <button className='btn btn-info' onClick={logout} >Logout ({username})</button>
                            </li>}
                            
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul className='mt-3'>
                            <button  class="nav-item btn btn-outline-info ">
                                <NavLink to='/login' class="nav-link text-decoration-none"  href="#">Login</NavLink>
                            </button>
                            <button class="nav-item btn btn-outline-success ms-2 m-auto">
                                <NavLink to='/sign' class="nav-link text-decoration-none" href="#">Sign-Up</NavLink>
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav