import { Fragment } from "react";
import { ServiceCard2 } from "../../../components/reuseable/service-cards";
import Icon from '../../reuseable/Icons';
// CUSTOM DATA
import { serviceList3 } from "../../../data/service";

export default function Services4() {
  return (
    <Fragment>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                <h2 className="text-sm uppercase tracking-wider text-primary mb-3">Qu’est-ce que la médiation par
                    l’animal ?</h2>
                <p className="mb-9">
                    La médiation par l’animal est la mise en relation d’un bénéficiaire et d’un animal spécifiquement
                    éduqué dans le but de créer des interactions positives visant le bien-être, le maintien ou
                    l’acquisition de compétences physiques, psychiques et/ou sociales des personnes. L’animal, naturel
                    et non jugeant favorise la création d’un lien permettant d’initier le dialogue et les interactions
                    positives.
                </p>
                <h2 className="text-sm uppercase tracking-wider text-primary mb-3">Quels sont les bienfait ?</h2>
                <p className="mb-9">
                    <ul>
                        <li className="flex items-start">
                            <Icon name="right" className="w-6 h-6"/>
                            <p className="ml-2"> Encourager l’interaction entre les membres du groupe et améliorer la
                                communication et l’écoute mutuelle; les bénéficiaires gagnent en assurance en
                                interagissant avec les animaux et les autres bénéficiaires. Cela encourage également la
                                complicité et les moments de partage en construisant des relations positives.</p>
                        </li>
                        <li className="flex items-start">
                            <Icon name="right" className="w-6 h-6"/>
                            <p className="ml-2"> Développer la confiance en soi et renforcer l’estime de soi en prenant
                                soin de l’animal et en se responsabilisant envers lui. Renforcer sa sécurité affective
                                grâce au soutien émotionnel de l’animal.</p>
                        </li>
                        <li className="flex items-start">
                            <Icon name="right" className="w-6 h-6"/>
                            <p className="ml-2"> Sensibilisation au respect des animaux et développement de l’empathie
                                grâce à l’interaction directe avec les animaux et l’apprentissage des règles ainsi que
                                la compréhension de l’animal (mode de vie, émotions ressenties, alimentation…). Les
                                bénéficiaires apprennent à reconnaître et à respecter les besoins et émotions des
                                autres, humains comme animaux.</p>
                        </li>
                        <li className="flex items-start">
                            <Icon name="right" className="w-6 h-6"/>
                            <p className="ml-2"> Développement des apprentissages de tous types; hygiène, alimentation,
                                rythme, règles… Les animaux nous ressemblent sur beaucoup de points et nous pouvons
                                faire le lien en séance avec ces notions afin de les travailler de manière ludique.</p>
                        </li>
                        <li className="flex items-start">
                            <Icon name="right" className="w-6 h-6"/>
                            <p className="ml-2"> Travailler sa motricité avec le chien, il est possible de faire des
                                parcours, des promenades, lancer des jouets, remplir des jeux et avec les cochons d’inde
                                découper des légumes, afin de maintenir ou développer des acquis.</p>
                        </li>
                        <li className="flex items-start">
                            <Icon name="right" className="w-6 h-6"/>
                            <p className="ml-2"> oie et amusement : Les séances créent des souvenirs positifs, marqués
                                par des moments de rire, de jeu, de souvenirs et de complicité entre les bénéficiaires
                                et les animaux.</p>
                        </li>
                        <li className="flex items-start">
                            <Icon name="right" className="w-6 h-6"/>
                            <p className="ml-2"> Et bien d’autres.</p>
                        </li>
                    </ul>
                </p>
            </div>
            <div className="flex flex-col items-center">
                <img src="/img/kokoro/icones/Beneficiaire.png" alt="Description de la médiation par l'animal"
                     className="mb-4 rounded-lg shadow-lg w-[200px] h-[300px]"/>
                <p className="text-center">
                    <span className="font-bold">L’animal médiateur :</span> l’animal et le binôme Intervenant en
                    Médiation Animale et Référent.<br/>
                    <span className="font-bold">Le bénéficiaire :</span> personne pour qui la séance est proposée<br/>
                    <span className="font-bold">L’IMA :</span> intervenant en médiation par l’animal formé<br/>
                    <span className="font-bold">Le référent :</span> personne qui connait le bénéficiaire et ses
                    difficultés
                </p>
            </div>
        </div>

        <div className="row gx-md-8 gy-8 mb-14 mb-md-18">
            {serviceList3.map((item) => (
                <ServiceCard2
                    {...item}
            key={item.id}
            iconBoxClassNames="icon btn btn-block btn-lg btn-soft-primary pe-none mb-6"
          />
        ))}
      </div>
    </Fragment>
  );
}
