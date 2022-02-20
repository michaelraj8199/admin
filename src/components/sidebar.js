import React from 'react'
import {Link} from 'react-router-dom'


function Sidebar() {
  
  return <div>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </a>
      
      <hr className="sidebar-divider my-0" />
      
      <li className="nav-item active">
        <Link to='/dashboard'>
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span></a>


        </Link>
        
      </li>
      
      <hr className="sidebar-divider" />
      
      <div className="sidebar-heading"> Students Management</div>
      
      <li className="nav-item">
        <Link to='add-student'>
        <a className='nav-link' href='#'>

            <span>Addstudents</span>
        </a>
        </Link>
          
      </li>
      
      <li className="nav-item">
        <Link to='all-student'>
        <a className='nav-link' href='#'>
          
          <span>Allstudents</span>
        </a>
        </Link>

       
        
      </li>
      
      <hr className="sidebar-divider" />

      <div className="sidebar-heading"> Formik task</div>
      
      <li className="nav-item">
        <Link to='add-passanger'>
            <a className='nav-link' href='#'>
          
              <span>Addpasanger</span>
            </a>
        </Link>


         
      </li>
     
      
      
      <li className="nav-item">
      <Link to='all-passanger'>
            <a className='nav-link' href='#'>
          
              <span>Allpasanger</span>
            </a>
        </Link>
       
      </li>
        
      
    </ul>
  </div>


}
export default Sidebar;