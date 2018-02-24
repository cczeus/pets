import { injectGlobal } from 'styled-components';

import ComfortaaBold from '../assets/fonts/Comfortaa-Bold.ttf';
import ComfortaaLight from '../assets/fonts/Comfortaa-Light.ttf';
import ComfortaaRegular from '../assets/fonts/Comfortaa-Regular.ttf';

import ProximaNovaLight from '../assets/fonts/ProximaNova-Light.ttf';
import ProximaNovaRegular from '../assets/fonts/ProximaNova-Regular.ttf';
import ProximaNovaSemibold from '../assets/fonts/ProximaNova-Semibold.ttf';

import RobotoLight from '../assets/fonts/Roboto-Light.ttf';
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';
import RobotoSemibold from '../assets/fonts/Roboto-Bold.ttf';

const injectFonts = () => (
  injectGlobal`
    @font-face {
      font-family: 'Comfortaa-Light';
      font-style: normal;
      font-weight: normal;
      src: url('${ComfortaaLight}') format('truetype');
    }
    @font-face {
      font-family: 'Comfortaa-Regular';
      font-style: normal;
      font-weight: normal;
      src: url('${ComfortaaRegular}') format('truetype');
    }
    @font-face {
      font-family: 'Comfortaa-Bold';
      font-style: normal;
      font-weight: normal;
      src: url('${ComfortaaBold}') format('truetype');
    }
    @font-face {
      font-family: 'ProximaNova-Light';
      font-style: normal;
      font-weight: normal;
      src: url('${ProximaNovaLight}') format('truetype');
    }
    @font-face {
      font-family: 'ProximaNova-Regular';
      font-style: normal;
      font-weight: normal;
      src: url('${ProximaNovaRegular}') format('truetype');
    }
    @font-face {
      font-family: 'ProximaNova-Semibold';
      font-style: normal;
      font-weight: normal;
      src: url('${ProximaNovaSemibold}') format('truetype');
    }
    @font-face {
      font-family: 'Roboto-Light';
      font-style: normal;
      font-weight: normal;
      src: url('${RobotoLight}') format('truetype');
    }
    @font-face {
      font-family: 'Roboto-Regular';
      font-style: normal;
      font-weight: normal;
      src: url('${RobotoRegular}') format('truetype');
    }
    @font-face {
      font-family: 'Roboto-Semibold';
      font-style: normal;
      font-weight: normal;
      src: url('${RobotoSemibold}') format('truetype');
    }
    @font-face {
      font-family: 'ProximaNova-Light';
      font-style: normal;
      font-weight: normal;
      src: url('${ProximaNovaLight}') format('truetype');
    }
    @font-face {
      font-family: 'ProximaNova-Regular';
      font-style: normal;
      font-weight: normal;
      src: url('${ProximaNovaRegular}') format('truetype');
    }
    @font-face {
      font-family: 'ProximaNova-Semibold';
      font-style: normal;
      font-weight: normal;
      src: url('${ProximaNovaSemibold}') format('truetype');
    }
  `
);

export default injectFonts;
