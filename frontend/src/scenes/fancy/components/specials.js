import React from 'react';
import Interactive from 'react-interactive';
import { HashLink as Link } from 'react-router-hash-link';
import {scrollWithOffset} from '../../../commons/utils';


export default function Featured(){
    return  (
      <section id="specials" className="services">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
              <h2>Specials</h2>
              <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga eum quidem</p>
          </div>

          <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="icon-box mt-5 mt-lg-0" data-aos="fade-up">
                            <i className="bx bx-receipt"></i>
                            <h4>Est labore ad</h4>
                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                        </div>
                        <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay="100">
                            <i className="bx bx-cube-alt"></i>
                            <h4>Harum esse qui</h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div>
                        <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay="200">
                            <i className="bx bx-images"></i>
                            <h4>Aut occaecati</h4>
                            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                        </div>
                        <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay="300">
                            <i className="bx bx-shield"></i>
                            <h4>Beatae veritatis</h4>
                            <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                        </div>
                    </div>
                    <div className="image col-lg-6 order-1 order-lg-2"
                        style={
                            {backgroundImage: "url(assets/img/services.jpg)"}
                        }
                        data-aos="fade-left"
                        data-aos-delay="100"></div>
                </div>
        </div>
      </section>

    )
}