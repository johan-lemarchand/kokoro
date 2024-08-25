import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Hero3 } from "./components/blocks/hero";
import { About3 } from "./components/blocks/about";
import { Facts1 } from "./components/blocks/facts";
import { Footer5 } from "./components/blocks/footer";
import {Process3, ProcessKokoro} from "./components/blocks/process";
import { Contact1 } from "./components/blocks/contact";
import { Pricing3 } from "./components/blocks/pricing";
import { Testimonial12 }  from "./components/blocks/testimonial";
import TeamKokoro from "./components/blocks/team/TeamKokoro";
import {ServicesKokoro} from "./components/blocks/services";

export default function template() {
  return (
      <Fragment>
        {/* ========== header section ========== */}

        <main className="content-wrapper">
          {/* ========== hero section ========== */}
          <Hero3 />

          <section className="wrapper bg-light">
            <div className="container pt-5 pt-md-10 pb-10 pb-md-12">
              <About3 />
              <Process3 />
            </div>
          </section>

          <TeamKokoro />

          <section className="relative bg-light py-8">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url("img/kokoro/img/IMG_3695.webp")' }}>
            </div>
            <div className="relative container mx-auto">
              <ProcessKokoro />
            </div>
          </section>

          <ServicesKokoro />

          <section className="wrapper bg-light angled upper-end lower-start">
            <div className="container position-relative">
              {/* ========== contact section ========== */}
              <Contact1 />
            </div>
          </section>
        </main>

        {/* ========== footer section ========== */}
        <Footer5 />
      </Fragment>
  );
}
