import AccordionList from "../../common/AccordionList";

export default function About3() {
  return (
      <div className="row align-items-center">
          <div className="row gx-lg-3 align-items-center">
              {/* Bloc de gauche */}
              <div className="col-md-8 col-lg-6 offset-lg-1 order-lg-2 position-relative d-flex align-items-center justify-content-center">

                  <div className="d-flex flex-column align-items-center">
                      <p className="mb-9 text-center">
                          La médiation par l’animal s’articule autour d’une relation triadique entre le bénéficiaire de
                          la
                          séance, l’animal et le binôme Intervenant en Médiation Animale et Référent.
                      </p>
                      <div className="w-100 d-flex justify-content-center align-items-center mb-9">
                          <img src="/img/kokoro/icones/triangle_MA.webp"
                               srcSet="/img/kokoro/icones/triangle_MA.webp"
                               alt="about"
                               style={{width: "50%", height: "auto", objectFit: "contain"}}
                          />
                          <ul className="pl-5">
                              <li><span className="font-bold">- L’animal médiateur :</span> <br/>Animal formé spécifiquement à la médiation par l’animal</li>
                              <li><span className="font-bold">- Le bénéficiaire :</span> <br/>Personne pour qui la séance est proposée</li>
                              <li><span className="font-bold">- L’IMA :</span> <br/>Intervenant en médiation par l’animal formé</li>
                              <li><span className="font-bold">- Le référent :</span> <br/>Personne qui connait le bénéficiaire et ses difficultés</li>
                          </ul>
                      </div>
                  </div>
              </div>

              {/* Bloc de droite */}
              <div className="col-lg-5 d-flex flex-column justify-content-center text-center">
                  <h2 className="fs-20 text-uppercase text-line text-primary mb-3">
                      Qu’est-ce que la médiation par l’animal ?
                  </h2>
                  <p className="mb-9">
                      La médiation par l’animal est la mise en relation d’un bénéficiaire et d’un animal spécifiquement
                      éduqué dans le but de créer des interactions positives visant le bien-être, le maintien ou
                      l’acquisition de compétences physiques, psychiques et/ou sociales des personnes. L’animal, naturel
                      et non jugeant favorise la création d’un lien permettant d’initier le dialogue et les interactions
                      positives.
                  </p>
              </div>
          </div>
          <h2 className="fs-20 text-uppercase text-line text-primary mb-3">
              Quels sont les bienfaits ?
          </h2>
          <AccordionList/>
      </div>
  );
}
