import { ProcessList2 } from "../../../components/reuseable/process-list";
// CUSTOM DATA
import { objectifList } from "../../../data/process";

export default function Process3() {
  return (
      <div className="row mt-10 gy-10 gy-sm-13 gx-lg-3 mb-16 mb-md-18 align-items-center">
          {/* Bloc d'images à gauche */}
          <div className="col-md-5 col-lg-4 position-relative order-lg-1">
              <div
                  className="shape bg-dot primary rellax w-17 h-21"
                  style={{ top: "-8rem", left: "-2.5rem" }}
              />
              <div
                  className="shape rounded bg-soft-primary d-flex justify-content-center align-items-center"
                  style={{ width: "350px", height: "350px", margin: "auto" }}
              >
                  <figure className="m-0" style={{ width: "80%", height: "80%" }}>
                      <img className="w-100 h-100" src="/img/kokoro/icones/icone_tout_public.webp" srcSet="/img/kokoro/icones/icone_tout_public.webp" alt="process" style={{ objectFit: "contain" }} />
                  </figure>
              </div>
          </div>

          {/* Bloc d'objectifs à droite */}
          <div className="col-lg-7 col-xl-7 offset-xl-1 order-lg-2">
              <div className="position-relative">
                  <div
                      className="shape rounded-circle bg-line primary rellax w-18 h-18"
                      style={{top: "-6rem", right: "12rem"}}
                  />
              </div>
              <h2 className="fs-20 text-uppercase text-line text-primary mb-3">Les objectifs</h2>
              <p className="mb-9">
                  Les objectifs sont adaptés à chaque personne en fonction de ses besoins et de ses capacités. Les
                  différentes activités proposées permettront de travailler tout autant le physique que le psychique
                  comme par exemple la motricité, la coordination, mais en même temps l’attention, l’apaisement.
              </p>
              {objectifList.map((item) => (
                  <ProcessList2
                      {...item}
                      key={item.no}
                      className="icon btn btn-block btn-soft-primary pe-none me-5"
                  />
              ))}
          </div>
      </div>
  );
}
