import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  cyan500, cyan100,
  pinkA200,
  indigo500,
  purple500, purple700,
  grey100, grey200, grey300, grey400, grey500, grey700, grey800, grey900,
  white, darkBlack, fullBlack, black,
  blue100, blue200, blue300, blue400, blue500, blue600, blue700,
  blueGrey500, blueGrey600, blueGrey700, blueGrey800, blueGrey900,

} from 'material-ui/styles/colors';

import { C_PRIMARY_TEXT_DARK, C_SECONDARY_TEXT_DARK } from '../library/constants.js';

export const muiThemeDay = getMuiTheme({
  palette: {
    primary1Color: blue600,
    primary2Color: blue700,
    primary3Color: grey300,
    accent1Color: '#00B0FF',
    accent2Color: cyan500,
    accent3Color: black,
    textColor: black,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack,
    hintStyleColor: grey200,
    menuColor: white,
    searchMenuColor: blue500,
    backgroundColor: '#F8F7FA',
    backgroundColorFront: '#F8F7FA',
    lowBarFront: blue600,
  },
});
// #E2E2E2
export const muiThemeNight = getMuiTheme({
  palette: {
    primary1Color: '#223044',
    primary2Color: '#1C2737',
    primary3Color: grey400,
    secondary1Color: indigo500,
    secondary2Color: indigo500,
    secondary3Color: indigo500,
    accent1Color: indigo500,
    accent2Color: '#818f98',
    accent3Color: '#818f98',
    primaryTextColor: C_PRIMARY_TEXT_DARK,
    textColor: C_SECONDARY_TEXT_DARK,
    alternateTextColor: '#818f98',
    canvasColor: '#182431',
    lowBarFront: '#1C2737',
    borderColor: '#818f98',
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack,
    backgroundColor: '#151E29',
    backgroundColorFront: '#223044',
  },
});
