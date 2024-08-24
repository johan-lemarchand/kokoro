"use client";

import Typewriter from "typewriter-effect";
// CUSTOM UTILS
import { slideInDownAnimate } from "../../../utils/animation";
// GLOBAL CUSTOM HOOKS
import useLightBox from "../../../hooks/useLightBox";

export default function Hero3() {
  // used for lightbox
  useLightBox();

  return (
      <section id={"kokoro-renji"} className="position-relative overflow-hidden">
        <div className="container pt-7 pt-md-11 pb-8">
          <div className="row gx-0 gy-10 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-1 text-white mb-4" style={slideInDownAnimate("600ms")}>
              </h1>
              <p
                  className="lead fs-24 lh-sm text-white mb-7 pe-md-18 pe-lg-0 pe-xxl-15"
                  style={slideInDownAnimate("900ms")}>
              </p>

              <div style={slideInDownAnimate("1200ms")}>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1 mb-n18" data-cues="slideInDown">
              <div className="position-relative" style={slideInDownAnimate("0ms")}>
                <h1 className="display-1 text-black mb-4" style={slideInDownAnimate("600ms")}>
                  Kokoro <br/>
                  <span className="text-primary text-nowrap">
                    <Typewriter
                        options={{
                          loop: true,
                          autoStart: true,
                          strings: ["Médiation animale"]
                        }}
                    />
                </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
