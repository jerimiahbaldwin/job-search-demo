import React from 'react'
import Interactive from 'react-interactive';
import { HashLink as Link } from 'react-router-hash-link';
import {scrollWithOffset} from '../../../commons/utils';


export default function Banner(){
    return (
        <section id="hero">
          <div className="hero-container">
            <a href="index.html" className="hero-logo" data-aos="zoom-in"><img src="assets/img/hero-logo.png" alt="" /></a>
            <h1 data-aos="zoom-in">Welcome To Dream Job Finder</h1>
            <h2 data-aos="fade-up">We are team of talanted recruiters matching candidates with best fit jobs.</h2>
            <Interactive as={Link} smooth scroll={scrollWithOffset} to="#about" className="btn-get-started">Get Started</Interactive>
          </div>
        </section>
    )
}