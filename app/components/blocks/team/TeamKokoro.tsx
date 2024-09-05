import { TeamCardKokoro } from '../../reuseable/team-cards';
// CUSTOM DATA
import teams from '../../../data/team-list';

export default function TeamKokoro() {
  return (
    <section className="wrapper bg-gradient-primary mt-4">
      <div className="container py-14 pt-md-16 pb-md-14">
        <div className="mt-6 mt-lg-n20 mt-xl-n22">
          <div className="row text-center mt-14">
            <div className="col-lg-8 col-xl-7 mb-5 position-relative -top-45px">
              <h2 className="fs-20 text-uppercase text-line text-primary mb-3">
                Pour qui ?
              </h2>
              <p className="mb-9">
                Tout public ! J'interviens chez des particuliers ou en
                établissements auprès d'enfants, adolescents, adultes, séniors,
                personnes en situation de handicap, en soins palliatifs…
              </p>
            </div>
            <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
              <h2 className="fs-24 text-uppercase text-primary mb-3">
                L’équipe de médiation
              </h2>
              <p className="fs-20 display-4 mb-10 px-md-13 px-lg-4 px-xl-0">
                Le choix de l’animal est effectué en fonction des objectifs
                recherchés pour la séance. Ce choix s’effectue avec le
                bénéficiaire et le référent.
              </p>
            </div>
          </div>

          <div className="position-relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
              {teams.map(item => (
                <div className="flex" key={item.id}>
                  <div className="h-full flex flex-col w-full">
                    <TeamCardKokoro {...item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
