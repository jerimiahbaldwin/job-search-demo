import React from 'react';
import Interactive from 'react-interactive';
import { HashLink as Link } from 'react-router-hash-link';
import {scrollWithOffset} from '../../../commons/utils';


export default function Featured(){
    return  (
        <section id="featured" className="featured">
        <div className="container">

          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <figure>
                    <img src="assets/img/featured-1.png" alt="" className="img-fluid"/>
                  </figure>
                </div>
                <div className="tab-pane" id="tab-2">
                  <figure>
                    <img src="assets/img/featured-2.png" alt="" className="img-fluid"/>
                  </figure>
                </div>
                <div className="tab-pane" id="tab-3">
                  <figure>
                    <img src="assets/img/featured-3.png" alt="" className="img-fluid"/>
                  </figure>
                </div>
                <div className="tab-pane" id="tab-4">
                  <figure>
                    <img src="assets/img/featured-4.png" alt="" className="img-fluid"/>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <Interactive as={Link} smooth scroll={scrollWithOffset}   className="nav-link active show" data-toggle="tab"  to="#tab-1">
                    <h4>Modi sit est</h4>
                    <p>Quis excepturi porro totam sint earum quo nulla perspiciatis eius.</p>
                  </Interactive>
                </li>
                <li className="nav-item mt-2">
                  <Interactive as={Link} smooth scroll={scrollWithOffset}   className="nav-link" data-toggle="tab"  to="#tab-2">
                    <h4>Unde praesentium sed</h4>
                    <p>Voluptas vel esse repudiandae quo excepturi.</p>
                  </Interactive>
                </li>
                <li className="nav-item mt-2">
                  <Interactive as={Link} smooth scroll={scrollWithOffset}   className="nav-link" data-toggle="tab"  to="#tab-3">
                    <h4>Pariatur explicabo vel</h4>
                    <p>Velit veniam ipsa sit nihil blanditiis mollitia natus.</p>
                  </Interactive>
                </li>
                <li className="nav-item mt-2">
                  <Interactive as={Link} smooth scroll={scrollWithOffset}   className="nav-link" data-toggle="tab"  to="#tab-4">
                    <h4>Nostrum qui quasi</h4>
                    <p>Ratione hic sapiente nostrum doloremque illum nulla praesentium id</p>
                  </Interactive>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

    )
}