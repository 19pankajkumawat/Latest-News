import React from 'react'

function Navbar({setCatogray}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand  "><span className='bg-light badge text-dark fs-4 p-1 m-0.1'>NewsHub</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCatogray("technol")}>Technology</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCatogray("Sport")}>Sport</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCatogray("Polotics")}>Politics</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCatogray("Entertenment")}>Entertenment</div>
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
