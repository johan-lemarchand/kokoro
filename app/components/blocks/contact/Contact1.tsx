export default function Contact1() {
  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center">
      <div className="col-md-8 col-lg-6 position-relative">
        <div
          className="shape bg-dot primary rellax w-17 h-21"
          style={{ top: "-2rem", left: "-1.9rem" }}
        />
        <div
          className="shape rounded bg-soft-primary rellax d-md-block"
          style={{ width: "85%", height: "90%", right: "-1.5rem", bottom: "-1.8rem" }}
        />

        <figure className="rounded">
          <img src="/img/kokoro/img/carte-bas-rhin-departement-618x601.webp" srcSet="/img/kokoro/img/carte-bas-rhin-departement-618x601.webp" alt="carte bas-rhin" />
        </figure>
      </div>

      <div className="col-lg-5 col-xl-4 offset-lg-1">
        <h2 className="fs-16 text-uppercase text-line text-primary mb-3">Lieu d’intervention</h2>
        <h2 className="display-4 fs-24 mb-8">J’interviens en itinérance dans le Bas-Rhin.</h2>

        <h2 className="fs-16 text-uppercase text-line text-primary mb-3">Contact</h2>
        <h2 className="display-4 fs-16 mb-8">Pour plus de renseignements ou un devis, n’hésitez pas à me contacter par
          téléphone ou par mail. <br/><br/> Louise BURG</h2>
        <div className="d-flex flex-row">
          <div>
            <div className="icon text-primary fs-28 me-6 mt-n1">
              <i className="uil uil-location-pin-alt"/>
            </div>
          </div>
          <div>
            <h5 className="mb-1">Addresse</h5>
            <address>
              26 E rue de Kaltenhouse, <br className="d-none d-md-block"/>
              67240 OBERHOFFEN-SUR-MODER
            </address>
          </div>
        </div>

        <div className="d-flex flex-row">
          <div>
            <div className="icon text-primary fs-28 me-6 mt-n1">
              <i className="uil uil-phone-volume"/>
            </div>
          </div>
          <div>
            <h5 className="mb-1">Téléphone</h5>
            <a href="tel:0646453966">06.46.45.39.66</a>
          </div>
        </div>

        <div className="d-flex flex-row">
          <div>
            <div className="icon text-primary fs-28 me-6 mt-n1">
              <i className="uil uil-envelope"/>
            </div>
          </div>

          <div>
            <h5 className="mb-1">E-mail</h5>
            <p className="mb-0">
              <a href="mailto:sandbox@email.com" className="link-body" target="_blank">
                kokoro.mediation.animale@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
