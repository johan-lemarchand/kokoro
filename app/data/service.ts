import Edit from '../icons/solid-mono/Edit';
import Lamp from '../icons/solid-mono/Lamp';
import Team from '../icons/lineal/Team';
import Check from '../icons/lineal/Check';
import Medal from '../icons/lineal/Medal';
import Earth from '../icons/lineal/Earth';
import Shield from '../icons/lineal/Shield';
import Target from '../icons/lineal/Target';
import Search from '../icons/lineal/Search';
import ChatTwo from '../icons/lineal/ChatTwo';
import Script from '../icons/solid-duo/Script';
import Verify from '../icons/solid-mono/Verify';
import Server from '../icons/solid-duo/Server';
import Setting from '../icons/solid-duo/Setting';
import TeamTwo from '../icons/solid-mono/TeamTwo';
import ShopTwo from '../icons/lineal/ShopTwo';
import Browser from '../icons/lineal/Browser';
import Director from '../icons/solid-duo/Director';
import Settings from '../icons/lineal/Settings';
import Telephone from '../icons/lineal/Telephone';
import SearchTwo from '../icons/lineal/SearchTwo';
import Analytics from '../icons/lineal/Analytics';
import Megaphone from '../icons/lineal/Megaphone';
import ClockThree from '../icons/lineal/ClockThree';
import DeliveryBox from '../icons/solid-mono/DeliveryBox';
import CloudNetwork from '../icons/solid-duo/CloudNetwork';
import SmartphoneTwo from '../icons/lineal/SmartphoneTwo';
import SettingsThree from '../icons/lineal/SettingsThree';
import CloudComputing from '../icons/lineal/CloudComputing';
import { LinkType } from '../types/demo-1';
import color from '../utils/color';
import Icon1 from "../icons/lineal/Icon1Kokoro";
import Icon2 from "../icons/lineal/Icon2Kokoro";
import Icon3 from "../icons/lineal/Icon3Kokoro";
import Icon4 from "../icons/lineal/Icon4Kokoro";
import browser from "../icons/lineal/Browser";

// used in the services-1 block
export const serviceList1 = [
  {
    id: 1,
    link: '#',
    icon: Icon1,
    title: 'Séance Découverte',
    linkText: 'Learn More',
    linkType: LinkType.yellow,
    learnMore: `1 à 6 participants - 45min/1h<br/>
              Vous êtes curieux de découvrir ce qu'est la médiation par l'animal et les merveilleux bienfaits qu'elle peut offrir ? 
              Je vous invite à participer à une séance découverte, où vous pourrez plonger dans cet univers apaisant et bienveillant,
              au contact de mes animaux.<br/>
              Lors de cette séance, vous aurez l'occasion d'explorer les principes fondamentaux de la médiation par l'animal et 
              d'expérimenter, en douceur, les effets bénéfiques qu'une connexion avec les animaux peut avoir sur le bien-être émotionnel,
              social et physique.`,
    description: `1 à 6 participants - 45min/1h
      Une séance pour la découverte de la médiation par l’animal.`
  },
  {
    id: 2,
    link: '#',
    icon: Icon2,
    title: 'Séance Programme',
    linkText: 'Learn More',
    linkType: LinkType.red,
    learnMore: `1 à 4 participants - 45min/1h<br/>
              Vous souhaitez aller au-delà d'une simple découverte et travailler sur des objectifs précis grâce à la médiation par l’animal ? 
              Je vous propose un programme de séances personnalisées, conçu pour répondre à vos besoins spécifiques et définis ensemble.<br/>
              Ce programme s'adresse à tout public, en individuel ou en groupe, qui souhaite bénéficier d'un accompagnement sur mesure, 
              où chaque séance contribue à atteindre des objectifs précis, qu'ils soient d'ordre éducatif, thérapeutique, ou social.<br/><br/>
              <strong>Comment fonctionne le programme ?</strong><br/>
              Nous définissions ensemble des objectifs lors d'un premier rendez-vous en présentiel ou par téléphone.<br/>
              Les séances sont structurées et progressives. Le programme se compose de plusieurs séances régulières, adaptées à votre rythme et à vos capacités. 
              Chaque séance est conçue pour atteindre des étapes concrètes en fonction des objectifs définis.<br/>
              Les activités proposées sont sélectionnées et ajustées en fonction des besoins à travailler et les animaux sont choisis selon ces mêmes critères et selon vos préférences.<br/>
              À chaque étape, nous évaluons ensemble les progrès réalisés. Si nécessaire, le programme peut être ajusté pour s'adapter à l'évolution des besoins et des ressentis.<br/>
              Tout au long du programme, l’accompagnement s’effectuera par des animaux choisis pour leur sensibilité et leur capacité à favoriser les échanges et le bien-être.<br/><br/>
              <strong>Un programme qui s'adapte à vous</strong><br/>
              Que vous soyez particulier, professionnel d’un établissement, parent, éducateur, ou référent d'un groupe, les séances programme sont conçues pour répondre 
              à des besoins variés. Je travaille avec vous pour créer un parcours évolutif, où chaque séance est une étape 
              vers un bien-être amélioré et un épanouissement personnel.`,
    description: `1 à 4 participants - 45min/1h
      Programme de séances centrées sur des objectifs précis définis ensemble.`
  },
  {
    id: 3,
    link: '#',
    icon: Icon3,
    linkType: LinkType.green,
    title: 'Séance Animation',
    linkText: 'Learn More',
    learnMore: `1 à 6 participants – 45min/1h<br/>
      Ces séances sont adaptées à tous les âges et peuvent être personnalisées en fonction des besoins et des objectifs du groupe.<br/>
      Que ce soit pour des ateliers éducatifs ou des journées spéciales, ces animations sont l'occasion de découvrir, apprendre et passer un moment apaisant auprès des animaux.<br/>
      Ces séances n’incluent pas d’objectifs précis, seulement de passer un agréable moment en compagnie de mes animaux et de profiter de leurs bénéfices.`,
    description: `1 à 6 participants - 45min/1h
      Séance de divertissement sans objectifs précis, sauf le bien-être.`
  },
  {
    id: 4,
    link: '#',
    icon: Icon4,
    linkType: LinkType.blue,
    title: 'Séance Parents-Enfants',
    linkText: 'Learn More',
    learnMore: `1 à 4 duo parents-enfants - 45 min/1h<br/>
      À travers la médiation animale et mon expérience d’éducatrice de jeunes enfants, je vous propose une approche unique pour renforcer la relation avec votre enfant.<br/>
      Grâce à la présence bienveillante des animaux, je crée un espace de connexion où parents et enfants peuvent s'exprimer, collaborer et tisser des liens encore plus forts.<br/>
      Ces séances permettent de développer la confiance mutuelle, d'améliorer la communication, tout en apportant une touche de douceur et de plaisir.`,
    description: `1 à 4 duo parents-enfants - 45 min/1h
      Séance spécialement dédiée au lien parent-enfant.`
  }
];

// used in the services-3, services-8, services-13 block
export const serviceList2 = [
  {
    id: 1,
    linkUrl: '#',
    title: '24/7 Support',
    icon: 'uil-phone-volume',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  },
  {
    id: 2,
    linkUrl: '#',
    title: 'Secure Payments',
    icon: 'uil-shield-exclamation',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  },
  {
    id: 3,
    linkUrl: '#',
    title: 'Daily Updates',
    icon: 'uil-laptop-cloud',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  },
  {
    id: 4,
    linkUrl: '#',
    title: 'Market Research',
    icon: 'uil-chart-line',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  }
];

// used in the services-4 block
export const serviceList3 = [
  {
    id: 1,
    linkUrl: '#',
    title: '24/7 Support',
    icon: 'uil-phone-volume',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 2,
    linkUrl: '#',
    title: 'Secure Payments',
    icon: 'uil-shield-exclamation',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 3,
    linkUrl: '#',
    title: 'Daily Updates',
    icon: 'uil-laptop-cloud',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 4,
    linkUrl: '#',
    title: 'Market Research',
    icon: 'uil-chart-line',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  }
];

// used in the services-5 block
export const serviceList4 = [
  {
    id: 1,
    Icon: Telephone,
    title: '24/7 Support',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 2,
    Icon: Shield,
    title: 'Secure Payments',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 3,
    Icon: CloudComputing,
    title: 'Daily Updates',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 4,
    Icon: Analytics,
    title: 'Market Research',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 5,
    Icon: Settings,
    title: 'System Integration',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 6,
    Icon: Earth,
    title: 'SEO Services',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  }
];

// used in the services-6 block
export const serviceList5 = [
  ['Aenean quam ornare curabitur blandit consectetur.', 'Nullam quis risus eget urna mollis ornare aenean leo.'],
  ['Etiam porta euismod malesuada mollis nisl ornare.', 'Vivamus sagittis lacus augue rutrum maecenas odio.']
];

// used in the services-7 block
export const serviceList6 = [
  {
    id: 1,
    Icon: Target,
    color: color.aqua,
    title: 'Fitness Goal',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 2,
    Icon: Medal,
    color: color.yellow,
    title: 'Activity Tracking',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 3,
    Icon: ClockThree,
    color: color.red,
    title: 'Sleep Analysis',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 4,
    Icon: Check,
    color: color.pink,
    title: 'Workout Report',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 5,
    Icon: ShopTwo,
    color: color.green,
    title: 'Nutritional Analysis',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 6,
    Icon: Team,
    color: color.purple,
    title: 'Activity Sharing',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  }
];

// used in the services-9 block
export const serviceList7 = [
  {
    id: 1,
    Icon: Telephone,
    color: color.yellow,
    title: '24/7 Support',
    cardColor: 'bg-pale-yellow',
    columnClass: 'col-md-5 offset-md-1 align-self-end',
    description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.'
  },
  {
    id: 2,
    Icon: Shield,
    color: color.red,
    title: 'Secure Payments',
    cardColor: 'bg-pale-red',
    columnClass: 'col-md-6 align-self-end',
    description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.'
  },
  {
    id: 3,
    color: color.leaf,
    Icon: CloudComputing,
    title: 'Daily Updates',
    cardColor: 'bg-pale-leaf',
    columnClass: 'col-md-5',
    description: 'Nulla vitae elit libero, a pharetra augue.'
  },
  {
    id: 4,
    Icon: Analytics,
    color: color.primary,
    title: 'Market Research',
    cardColor: 'bg-pale-primary',
    columnClass: 'col-md-6 align-self-start',
    description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget.'
  }
];

// used in the services-18 block
export const serviceList8 = [
  {
    id: 1,
    Icon: Browser,
    title: 'Web Design',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  },
  {
    id: 2,
    Icon: SmartphoneTwo,
    title: 'Mobile Design',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  },
  {
    id: 3,
    Icon: SettingsThree,
    title: 'Development',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  },
  {
    id: 4,
    title: 'SEO',
    Icon: SearchTwo,
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  }
];

// used in the services-19 block
export const serviceList9 = [
  {
    id: 1,
    linkUrl: '#',
    color: color.purple,
    title: '24/7 Support',
    icon: 'uil-phone-volume',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 2,
    linkUrl: '#',
    color: color.green,
    title: 'Secure Payments',
    icon: 'uil-shield-exclamation',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 3,
    linkUrl: '#',
    color: color.orange,
    title: 'Daily Updates',
    icon: 'uil-laptop-cloud',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  }
];

// used in the services-20 block
export const serviceList10 = [
  {
    id: 1,
    linkUrl: '#',
    Icon: Script,
    title: 'Software & Integration',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 2,
    linkUrl: '#',
    Icon: Verify,
    title: 'Network Security',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 3,
    linkUrl: '#',
    Icon: CloudNetwork,
    title: 'Cloud Services',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 4,
    linkUrl: '#',
    Icon: Director,
    title: 'Wireless Networking',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 5,
    linkUrl: '#',
    Icon: Setting,
    title: 'IT Solutions',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 6,
    linkUrl: '#',
    Icon: Server,
    title: 'Server Configuration',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  }
];

// used in the services-21 block
export const serviceList11 = [
  {
    id: 1,
    link: '#',
    Icon: Edit,
    title: 'Content Marketing',
    linkType: LinkType.fuchsia,
    iconClassName: 'icon-svg-sm solid-mono text-fuchsia mb-3',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 2,
    link: '#',
    Icon: TeamTwo,
    title: 'Social Engagement',
    linkType: LinkType.violet,
    iconClassName: 'icon-svg-sm solid-mono text-violet mb-3',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 3,
    link: '#',
    Icon: Lamp,
    linkType: LinkType.orange,
    title: 'Identity & Branding',
    iconClassName: 'icon-svg-sm solid-mono text-orange mb-3',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 4,
    link: '#',
    Icon: DeliveryBox,
    title: 'Product Design',
    linkType: LinkType.green,
    iconClassName: 'icon-svg-sm solid-mono text-green mb-3',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  }
];

// used in the services-24 block
export const serviceList12 = [
  {
    id: 1,
    title: 'Web Design',
    image: { '1x': '/img/illustrations/i24.png', '2x': '/img/illustrations/i24@2x.png 2x' },
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus
    tellus.`
  },
  {
    id: 2,
    title: 'Graphic Design',
    image: { '1x': '/img/illustrations/i19.png', '2x': '/img/illustrations/i19@2x.png 2x' },
    description: `Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.`
  },
  {
    id: 3,
    title: '3D Animation',
    image: { '1x': '/img/illustrations/i18.png', '2x': '/img/illustrations/i18@2x.png 2x' },
    description: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.`
  }
];

// used in the services-25 block
export const serviceList13 = [
  {
    id: 1,
    linkUrl: '#',
    color: color.purple,
    title: 'Web Design',
    icon: 'uil-monitor',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus tellus.`
  },
  {
    id: 2,
    linkUrl: '#',
    color: color.green,
    title: 'Graphic Design',
    icon: 'uil-swatchbook',
    description: `Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.`
  },
  {
    id: 3,
    linkUrl: '#',
    color: color.pink,
    title: '3D Animation',
    icon: 'uil-presentation-play',
    description: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.`
  }
];

// used in the services-26 block
export const serviceList14 = [
  {
    id: 1,
    url: '#',
    title: 'Wedding',
    image: { '1x': '/img/photos/fs1.jpg', '2x': '/img/photos/fs1@2x.jpg 2x' }
  },
  {
    id: 2,
    url: '#',
    title: 'Couples',
    image: { '1x': '/img/photos/fs2.jpg', '2x': '/img/photos/fs2@2x.jpg 2x' }
  },
  {
    id: 3,
    url: '#',
    title: 'Engagement',
    image: { '1x': '/img/photos/fs3.jpg', '2x': '/img/photos/fs3@2x.jpg 2x' }
  }
];
