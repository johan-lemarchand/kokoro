'use client';

import Typewriter from 'typewriter-effect';
// CUSTOM UTILS
import { slideInDownAnimate } from '../../../utils/animation';
// GLOBAL CUSTOM HOOKS
import useLightBox from '../../../hooks/useLightBox';
import React from 'react';
import SocialLinks from '../../reuseable/SocialLinks';

export default function Hero3() {
  // used for lightbox
  useLightBox();

  return (
    <section id={'kokoro-renji'} className="position-relative overflow-hidden">
      <div className="container pt-7 pt-md-11 pb-8">
        <div className="row gx-0 gy-10 align-items-center">
          <div className="col-lg-12 d-flex justify-content-between">
            <div className="d-flex flex-column align-items-center w-100 text-center">
              <h1
                className="display-1 text-black mb-4 font-custom"
                style={slideInDownAnimate('600ms')}
              >
                Kokoro <br />
                <span className="text-primary text-nowrap font-custom">
                  <Typewriter
                    options={{
                      loop: true,
                      autoStart: true,
                      strings: ['Médiation animale'],
                    }}
                  />
                </span>
              </h1>
            </div>

            <div className="text-right d-flex flex-column align-items-center">
              <a href="#contact" className="btn btn-primary mb-3">
                Contact
              </a>
              <div className="d-flex justify-content-center">
                <SocialLinks className="nav social social-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
