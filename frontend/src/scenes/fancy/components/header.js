import React from 'react'

import Interactive from 'react-interactive';
import { HashLink as Link } from 'react-router-hash-link';
import {scrollWithOffset} from '../../../commons/utils';


function Header(){
    return (
        <header id="header" className="d-flex align-items-center">
          <div className="container">

            
            <div className="logo d-block d-lg-none">
              <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
            </div>

            <nav className="nav-menu d-none d-lg-block">
              <ul className="nav-inner">
                <li className="active"><a href="index.html">Home</a></li>
                <li className="drop-down"><a href="#">About</a>
                  <ul>
                    <li>
                      <Interactive as={Link} smooth scroll={scrollWithOffset} to="#about">About Us</Interactive>
                    </li>
                    <li>
                      <Interactive as={Link} smooth scroll={scrollWithOffset} to="#team">Team</Interactive>
                    </li>

                    <li className="drop-down"><a href="#">Deep Drop</a>
                      <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><Interactive as={Link} smooth scroll={scrollWithOffset}    to="#jobs">Jobs</Interactive></li>

                <li className="nav-logo"><a href="/"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a></li>

                <li><Interactive as={Link} smooth scroll={scrollWithOffset}    to="#profile">My Profile</Interactive></li>
                <li><Interactive as={Link} smooth scroll={scrollWithOffset}    to="#pricing">Pricing</Interactive></li>
                <li><Interactive as={Link} smooth scroll={scrollWithOffset}    to="#contact">Contact</Interactive></li>

              </ul>
            </nav>

          </div>
        </header>        
    )
}

export default Header;
