import React from 'react'
import { Link } from "react-router-dom"
const Adminnav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/dashboard" className="flex items-center p-2 space-x-3 rounded-md">
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/addproduct" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>Manage Product</span>
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/addproduct">Add product</Link>
                                <Link className="dropdown-item" to="/deleteproduct">Delete Product</Link>
                                <Link className="dropdown-item" to="/updateproduct">Update product</Link>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <Link to="/dashboard" className="flex items-center p-2 space-x-3 rounded-md">
                                <span>Status</span>
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>

    );
}

export default Adminnav;