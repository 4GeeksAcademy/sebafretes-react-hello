import React from "react";

const NavBar = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: "#212F3C"}}>
            <div className="container">
                <a className="navbar-brand" href="#" style= {{color: "#FDFEFE"}}>Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active text-light" aria-current="page" href="#" style= {{color: "#FDFEFE"}}>Home</a>
                        <a className="nav-link text-light" href="#">About</a>
                        <a className="nav-link text-light" href="#">Services</a>
                        <a className="nav-link text-light" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
            )
}

export default NavBar;