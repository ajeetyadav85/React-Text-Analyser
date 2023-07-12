
import "./navbar.css"
import { Link } from "react-router-dom";

function Navbar(props){
  
    return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" >Text Analyzer</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
      </ul>
    </div>
    <div className="mode_color">
      <div className="color_container">
        <div className="colors red" ></div>
        <div className="colors green" ></div>
        <div className="colors yellow"></div>
        <div className="colors aqua" ></div>
        <div className="colors blue" ></div>
      </div>
      <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
              <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==='dark'?'light':'dark'} Mode`}</label>
      </div>
    </div>
  </div>
</nav>


    )
}

export default Navbar;