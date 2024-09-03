import { ServiceCard1 } from '../../reuseable/service-cards';
// CUSTOM DATA
import { serviceList1 } from '../../../data/service';

export default function ServicesKokoro() {
  return (
    <section className="wrapper bg-light">
      <div className="container pt-14 pt-md-16 pb-16">
        <div className="row text-center">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className="fs-24 text-uppercase text-primary mb-3">
              Mes prestations
            </h2>
            <h3 className="fs-20 display-4 mb-10 px-xl-10">
              Le service que j'offre est spécialement conçu pour répondre à vos
              besoins.
            </h3>
          </div>
        </div>

        <div className="position-relative">
          <div
            className="shape bg-dot primary rellax w-16 h-17"
            style={{ zIndex: 0, top: '-0.5rem', left: '-2.2rem' }}
          />

          <div className="row gx-md-5 gy-5 text-center">
            {serviceList1.map(item => (
              <ServiceCard1
                key={item.id}
                Icon={item.icon}
                title={item.title}
                learnMore={item.learnMore}
                linkType={item.linkType}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
