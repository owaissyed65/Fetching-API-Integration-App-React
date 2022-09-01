import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../Context/Context';


const Navbar = () => {
    const context = useContext(Context);
    const { text, handleOnChange, newFetchData } = context
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light fixed-top">
                <div className="container-fluid sticky-lg-top">
                    <Link className="navbar-brand" to="/">NewsLink</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news/in"><button style={{ border: '0px' }} onClick={() => {
                                    newFetchData("in")
                                }}>India</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news/us"><button style={{ border: '0px' }} onClick={() => { newFetchData("us") }}>USA</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news/sa"><button style={{ border: '0px' }} onClick={() => { newFetchData("sa") }}>South Africa</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news/jp"><button style={{ border: '0px' }} onClick={() => { newFetchData("jp") }}>Japan</button></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    NewZealand
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to='/news/nz/sports'><button style={{ border: '0px' }} onClick={() => { newFetchData("nz",'sports') }}>Sports</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/nz/business'><button style={{ border: '0px' }} onClick={() => { newFetchData("nz",'business') }}>Business</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/nz/entertainment'><button style={{ border: '0px' }} onClick={() => { newFetchData("nz",'entertainment') }}>Entertainment</button></Link></li>
                                </ul>
                            </li>

                        </ul>
                        <div className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" value={text} onChange={handleOnChange} id={'search'} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
