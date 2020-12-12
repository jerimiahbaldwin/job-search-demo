import React from 'react';
import Interactive from 'react-interactive';
import { HashLink as Link } from 'react-router-hash-link';
import {scrollWithOffset} from '../../../commons/utils';


export default function Faq(){
    return  (
        <section id="faq" className="faq">
        <div className="container">

          <div className="section-title" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
          </div>

          <ul className="faq-list">

            <li data-aos="fade-up">
              <Interactive as={Link} smooth scroll={scrollWithOffset}   data-toggle="collapse" className="collapsed"  to="#faq1">Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></Interactive>
              <div id="faq1" className="collapse" data-parent=".faq-list">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="100">
              <Interactive as={Link} smooth scroll={scrollWithOffset}   data-toggle="collapse"  to="#faq2" className="collapsed">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></Interactive>
              <div id="faq2" className="collapse" data-parent=".faq-list">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <Interactive as={Link} smooth scroll={scrollWithOffset}   data-toggle="collapse"  to="#faq3" className="collapsed">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></Interactive>
              <div id="faq3" className="collapse" data-parent=".faq-list">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <Interactive as={Link} smooth scroll={scrollWithOffset}   data-toggle="collapse"  to="#faq4" className="collapsed">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></Interactive>
              <div id="faq4" className="collapse" data-parent=".faq-list">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <Interactive as={Link} smooth scroll={scrollWithOffset}   data-toggle="collapse"  to="#faq5" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></Interactive>
              <div id="faq5" className="collapse" data-parent=".faq-list">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="500">
              <Interactive as={Link} smooth scroll={scrollWithOffset}   data-toggle="collapse"  to="#faq6" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></Interactive>
              <div id="faq6" className="collapse" data-parent=".faq-list">
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                </p>
              </div>
            </li>

          </ul>

        </div>
      </section>



    )
}