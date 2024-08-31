import { ProcessList1 } from '../../reuseable/process-list';
// CUSTOM DATA
import { processList1 } from '../../../data/process';

export default function Process1() {
  return (
    <div className="row gx-md-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center">
      <div className="col-lg-6 order-lg-2">
        <h2 className="fs-20 text-uppercase text-white mb-3">Mes diplômes</h2>
        {processList1.map(item => {
          return <ProcessList1 shadow {...item} key={item.no} />;
        })}
      </div>

      <div className="col-lg-6">
        <h2 className="fs-20 text-uppercase text-white mb-3">Qui suis-je ?</h2>

        <p className="text-white me-32">
          Louise, éducatrice de jeunes enfants et médiatrice animale passionnée
          ! 🌟 Depuis toujours, les animaux occupent une place spéciale dans ma
          vie, et j'ai grandi entourée de leur bienveillance. C'est cette
          connexion unique entre l'homme et l'animal, et les incroyables
          bienfaits qu'elle apporte, qui m'ont inspiré à exercer en tant
          qu’intervenante en médiation par l’animal. Après plusieurs années
          d'expérience dans la relation d’aide, inclure l’animal a été pour moi
          une évidence!
        </p>
      </div>
    </div>
  );
}
