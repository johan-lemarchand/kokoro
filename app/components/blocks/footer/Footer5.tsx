import NextLink from '../../reuseable/links/NextLink';
import SocialLinks from '../../reuseable/SocialLinks';
// CUSTOM DATA
import footerNav from '../../../data/footer';

export default function Footer5() {
  return (
    <footer className="bg-dark text-inverse">
      <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
        <div className="row gy-6 gy-lg-0">
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <img
                alt="Anstett Solutions pro"
                className="mb-4"
                src="/img/logo-light.png"
                srcSet="/img/logo-light@2x.png 2x"
              />

              <p className="mb-4">
                © 2024 Anstett Solutions Pro{' '}
                <br className="d-none d-lg-block" />
                Tous droits réservés.
              </p>

              <SocialLinks className="nav social social-white" />
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Get in Touch</h4>
              <address className="pe-xl-15 pe-xxl-17">
                Moonshine St. 14/05 Light City, London, United Kingdom
              </address>
              <NextLink title="info@email.com" href="mailto:#" />
              <br /> 00 (123) 456 78 90
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Learn More</h4>
              <ul className="list-unstyled  mb-0">
                {footerNav.map(({ title, url }) => (
                  <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
