import SocialLinks from '../../reuseable/SocialLinks';
// CUSTOM DATA
import footerNav from '../../../data/footer';
import { ScrollArea } from '@/components/ui/scroll-area';
import NextLink from '../../../components/reuseable/links/NextLink';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const getCurrentYear = () => new Date().getFullYear();

export default function Footer5() {
  const currentYear = getCurrentYear();
  return (
    <footer className="bg-footer-bg bg-cover bg-center bg-no-repeat text-black">
      <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
        <div className="row gy-6 gy-lg-0">
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <p className="mb-4">
                © {currentYear} Anstett Solutions Pro{' '}
                <br className="d-none d-lg-block" />
                Tous droits réservés.
                <a href="https://www.anstett-solutions-pro.fr/" target="_blank">
                  <img
                    alt="Anstett Solutions pro"
                    src="/img/kokoro/logo/favicon.ico"
                    srcSet="/img/kokoro/logo/favicon.ico"
                  />
                </a>
              </p>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-black mb-3">Mes réseaux</h4>
              <p>Louise BURG</p>
              <SocialLinks className="nav social social-black" />
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-black mb-3">En savoir plus</h4>
              <ul className="list-unstyled  mb-0">
                {footerNav.map(({ title, description }) => (
                  <li key={title}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <NextLink title={title} href={'#'} />
                      </DialogTrigger>
                      <DialogContent className="Dialog sm:max-w-[425px]">
                        <DialogHeader className="DialogHeader">
                          <DialogTitle className="DialogTitle">
                            {title}
                          </DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="ScrollArea h-[300px] w-full rounded-md border p-4">
                          <DialogDescription
                            asChild
                            className="DialogDescription"
                          >
                            <div
                              dangerouslySetInnerHTML={{ __html: description }}
                            />
                          </DialogDescription>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
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
