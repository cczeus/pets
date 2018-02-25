import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { TOPBAR_HEIGHT, C_BLUE_300, blue600, grey400, cyan500, grey300, white, fullBlack, C_BLUE_400, darkBlack, pinkA200, arkBlack, grey500, grey100, C_BLUE_700, C_WHITE, C_PRIMARY_TEXT, C_PRIMARY_BACKGROUND, C_SECONDARY} from '../../library/constants.js';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue600,
    primary2Color: blue600,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack,
  },
  appBar: {
    height: TOPBAR_HEIGHT,
  },
});

export default class TabBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
    <MuiThemeProvider muiTheme = {muiTheme}>
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Description" value="a">
          <div>
            <h2 style={styles.headline}>Description</h2>
            <p>
              Scottish Folds are hardy cats, much like their barnyard ancestors. Their disposition matches their sweet expression. They have tiny voices and are not extremely vocal. They adore human companionship and display this in their own quiet way.
            </p>
          </div>
        </Tab>
        <Tab label="User Review" value="b">
          <div>
            <h2 style={styles.headline}>User Reviews</h2>
            <p>
              Solid cat
            </p>
          </div>
        </Tab>
      </Tabs>
        </MuiThemeProvider>
    );
  }
}