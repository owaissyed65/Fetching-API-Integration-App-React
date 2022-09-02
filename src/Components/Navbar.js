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
                    <Link className="navbar-brand" to="/"><button style={{ border: '0px' }} onClick={() => { newFetchData("us",'general') }}>NewsLink</button></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home"><button style={{ border: '0px' }} onClick={() => { newFetchData("us",'general') }}>Home</button></Link>
                            </li>
                            {/* These LINKS are for india */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    India
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to='/news/in/sports'><button style={{ border: '0px' }} onClick={() => { newFetchData("in",'sports') }}>Sports</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/in/business'><button style={{ border: '0px' }} onClick={() => { newFetchData("in",'business') }}>Business</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/in/entertainment'><button style={{ border: '0px' }} onClick={() => { newFetchData("in",'entertainment') }}>Entertainment</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/in/general'><button style={{ border: '0px' }} onClick={() => { newFetchData("in",'general') }}>General</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/in/health'><button style={{ border: '0px' }} onClick={() => { newFetchData("in",'health') }}>Health</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/in/science'><button style={{ border: '0px' }} onClick={() => { newFetchData("in",'science') }}>Science</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/in/technology'><button style={{ border: '0px' }} onClick={() => { newFetchData("in",'technology') }}>Technology</button></Link></li>
                                </ul>
                            </li>
                            {/* These LINKS are for us */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    USA
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to='/news/us/sports'><button style={{ border: '0px' }} onClick={() => { newFetchData("us",'sports') }}>Sports</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/us/business'><button style={{ border: '0px' }} onClick={() => { newFetchData("us",'business') }}>Business</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/us/entertainment'><button style={{ border: '0px' }} onClick={() => { newFetchData("us",'entertainment') }}>Entertainment</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/us/general'><button style={{ border: '0px' }} onClick={() => { newFetchData("us",'general') }}>General</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/us/health'><button style={{ border: '0px' }} onClick={() => { newFetchData("us",'health') }}>Health</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/us/science'><button style={{ border: '0px' }} onClick={() => { newFetchData("us",'science') }}>Science</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/us/technology'><button style={{ border: '0px' }} onClick={() => { newFetchData("us",'technology') }}>Technology</button></Link></li>
                                </ul>
                            </li>
                            {/* These LINKS are for sa */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    South Africa
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to='/news/sa/sports'><button style={{ border: '0px' }} onClick={() => { newFetchData("sa",'sports') }}>Sports</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/sa/business'><button style={{ border: '0px' }} onClick={() => { newFetchData("sa",'business') }}>Business</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/sa/entertainment'><button style={{ border: '0px' }} onClick={() => { newFetchData("sa",'entertainment') }}>Entertainment</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/sa/general'><button style={{ border: '0px' }} onClick={() => { newFetchData("sa",'general') }}>General</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/sa/health'><button style={{ border: '0px' }} onClick={() => { newFetchData("sa",'health') }}>Health</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/sa/science'><button style={{ border: '0px' }} onClick={() => { newFetchData("sa",'science') }}>Science</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/sa/technology'><button style={{ border: '0px' }} onClick={() => { newFetchData("sa",'technology') }}>Technology</button></Link></li>
                                </ul>
                            </li>
                            {/* These LINKS are for japan */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Japan
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to='/news/jp/sports'><button style={{ border: '0px' }} onClick={() => { newFetchData("jp",'sports') }}>Sports</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/jp/business'><button style={{ border: '0px' }} onClick={() => { newFetchData("jp",'business') }}>Business</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/jp/entertainment'><button style={{ border: '0px' }} onClick={() => { newFetchData("jp",'entertainment') }}>Entertainment</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/jp/general'><button style={{ border: '0px' }} onClick={() => { newFetchData("jp",'general') }}>General</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/jp/health'><button style={{ border: '0px' }} onClick={() => { newFetchData("jp",'health') }}>Health</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/jp/science'><button style={{ border: '0px' }} onClick={() => { newFetchData("jp",'science') }}>Science</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/jp/technology'><button style={{ border: '0px' }} onClick={() => { newFetchData("jp",'technology') }}>Technology</button></Link></li>
                                </ul>
                            </li>
                            {/* These LINKS are for nz */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    NewZealand
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to='/news/nz/sports'><button style={{ border: '0px' }} onClick={() => { newFetchData("nz",'sports') }}>Sports</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/nz/business'><button style={{ border: '0px' }} onClick={() => { newFetchData("nz",'business') }}>Business</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/nz/entertainment'><button style={{ border: '0px' }} onClick={() => { newFetchData("nz",'entertainment') }}>Entertainment</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/nz/general'><button style={{ border: '0px' }} onClick={() => { newFetchData("nz",'general') }}>General</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/nz/health'><button style={{ border: '0px' }} onClick={() => { newFetchData("nz",'health') }}>Health</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/nz/science'><button style={{ border: '0px' }} onClick={() => { newFetchData("nz",'science') }}>Science</button></Link></li>
                                    <li><Link className="dropdown-item" to='/news/nz/technology'><button style={{ border: '0px' }} onClick={() => { newFetchData("nz",'technology') }}>Technology</button></Link></li>
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
