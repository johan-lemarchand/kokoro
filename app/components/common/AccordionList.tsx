'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// CUSTOM DATA
const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'Favoriser la détente et l’apaisement',
    body: 'A travers la présence apaisante des animaux, qui favorisent un environnement relaxant, permettant aux participants de se détendre et de se recentrer, de réduire le stress et l’anxiété.',
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Encourager l’interaction Entre les membres du groupe',
    body: 'Améliorer la communication et l’écoute mutuelle, les bénéficiaires gagnent en assurance en interagissant avec les animaux et les autres bénéficiaires. Cela encourage également la complicité et les moments de partage en construisant des relations positives.',
  },
  {
    no: 'Three',
    expand: false,
    heading: 'Développer la confiance en soi',
    body: 'Renforcer l’estime de soi en prenant soin de l’animal et en se responsabilisant envers lui. Renforcer sa sécurité affective grâce au soutien émotionnel de l’animal.',
  },
  {
    no: 'Four',
    expand: false,
    heading: 'Sensibilisation au respect des animaux',
    body: 'Développement de l’empathie grâce à l’interaction directe avec les animaux et l’apprentissage des règles ainsi que la compréhension de l’animal (mode de vie, émotions ressenties, alimentation…). Les bénéficiaires apprennent à reconnaître et à respecter les besoins et émotions des autres, humains comme animaux.',
  },
  {
    no: 'Five',
    expand: false,
    heading: 'Développer la confiance en soi',
    body: 'renforcer l’estime de soi en prenant soin de l’animal et en se responsabilisant envers lui. Renforcer sa sécurité affective grâce au soutien émotionnel de l’animal.',
  },
  {
    no: 'Six',
    expand: false,
    heading: 'Sensibilisation au respect des animaux',
    body: 'Développement de l’empathie grâce à l’interaction directe avec les animaux et l’apprentissage des règles ainsi que la compréhension de l’animal (mode de vie, émotions ressenties, alimentation…). Les bénéficiaires apprennent à reconnaître et à respecter les besoins et émotions des autres, humains comme animaux.',
  },
  {
    no: 'Seven',
    expand: false,
    heading: 'Développement des apprentissages de tous types',
    body: 'Hygiène, alimentation, rythme, règles… Les animaux nous ressemblent sur beaucoup de points et nous pouvons faire le lien en séance avec ces notions afin de les travailler de manière ludique.',
  },
  {
    no: 'Eight',
    expand: false,
    heading: 'Travailler sa motricité',
    body: 'Avec le chien, il est possible de faire des parcours, des promenades, lancer des jouets, remplir des jeux et avec les cochons d’inde découper des légumes, afin de maintenir ou développer des acquis.',
  },
  {
    no: 'Nine',
    expand: false,
    heading: 'Joie et amusement',
    body: 'Les séances créent des souvenirs positifs, marqués par des moments de rire, de jeu, de souvenirs et de complicité entre les bénéficiaires et les animaux.',
  },
];

export default function AccordionList() {
  return (
    <div className="row">
      {accordions.map((item, index) => (
        <div
          className={`col-md-6 ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}`}
          key={item.no}
        >
          <div
            className="accordion accordion-wrapper"
            id={`accordionExample${item.no}`}
          >
            <Accordion type="single" collapsible>
              <AccordionItem value={item.no}>
                <AccordionTrigger>{item.heading}</AccordionTrigger>
                <AccordionContent>{item.body}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      ))}
    </div>
  );
}
