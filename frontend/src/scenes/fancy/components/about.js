import React from 'react';


export default function AboutUs(){
    return  (
        <section id="about" className="about">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>About Us</h2>
            <p>Magnam dolores commodi suscipit eius consequatur</p>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="image">
                <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="content pt-4 pt-lg-0 pl-0 pl-lg-3 ">
                <h3>Voluptatem dignissimos provident quasi corporis</h3>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    )
}