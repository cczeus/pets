import React, { Component } from 'react';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import {
  cyan500, cyan600, cyan700,
  pinkA200, pink500,
  grey100, grey300, grey400, grey500, grey600, grey700,
  white, darkBlack, fullBlack, indigoA400, deepPurpleA400,
  blue300, blue400, blue500, blue600, blue700, blue800, blue900,

} from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import Timeline from 'material-ui/svg-icons/action/timeline';
import LightBulb from 'material-ui/svg-icons/action/lightbulb-outline';
import School from 'material-ui/svg-icons/social/school';

import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

import { getSummonerData } from '../../actions/summonerSearch';


import cookies from '../../utils/initializeCookies';
import { muiThemeDay, muiThemeNight } from '../../utils/MuiThemes.js';

import { TOPBAR_HEIGHT } from '../../library/constants.js';


import FlexWrapper from '../../library/FlexWrapper';
import Spacer from '../../library/Spacer';
import Text from '../../library/Text';

import styles from './styles.css';
import textStyle from '../../main.css';
const Header = styled(FlexWrapper) `
 
  width: 100%;
`;

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

const appBarButtonStyle = {
  color: grey400
}

const urlPropsQueryConfig = {
  summonerName: { type: UrlQueryParamTypes.string },
}

class SearchPage extends Component {
  constructor(props) {
    super();
    let cookie = '';
    cookies.set("searchHistory", ["chowdog"])
    if(cookies.get('nightMode') == false || cookies.get('nightMode') === null) {
      cookies.set('nightMode', false, { path: '/' });
    } 
    cookie = cookies.get('nightMode');
    
    this.state = {
      display: 'Home',
      drawerOpen: false,
      nightToggled: !(cookie === 'false'),
      summonerSearch: false,
      summonerName: '',
      fetching: props.store.get('fetching'),
      searchHistory: cookies.get("searchHistory"),
    };
    this.handleDrawerChange = this.handleDrawerChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSummonerSearch = this.handleSummonerSearch.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);

  }

  handleDrawerChange() {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
  }

  handleToggle() {
    this.setState({
      nightToggled: !this.state.nightToggled,
    }, function() {
      cookies.set('nightMode', this.state.nightToggled, { path: '/' });
    });
    
  }
  handleTabChange(tab) {
    if(tab === 'Home') {
      this.setState({ display: 'Home', })
    } else {
      this.setState({ display: 'About', })
    }
    
  }
  addSummonerToCookie(summoner) {
    const searchHistory = cookies.get("searchHistory");
    if(searchHistory.indexOf(summoner) === -1) { 
      if(searchHistory.length === 10) {
        searchHistory.shift();
      }
      searchHistory.push(summoner);
      cookies.set("searchHistory", searchHistory);
      this.setState({
        searchHistory,
      });
    }
  }

  handleSummonerSearch = (summoner) => (event) => {
    this.setState({ 
      summonerSearch: true, summonerName: summoner, fetching: this.props.store.get('fetching') 
    }, function() {
      const fetchInProgress = String(this.props.store.get('fetching'));
      this.props.dispatch(
        getSummonerData({summonerName: summoner, region: 'NA1'})
      );
    });
      
  }

  

  render() {
 
    return (   
        <div id={styles.wrapper}>
         
          <header id={styles.header}>
            <div className={styles.inner}>

                <a href="index.html" className={styles.logo}>
                  <span class="symbol"><img src="images/logo.svg" alt="" /></span><span className={styles.title}>Phantom</span>
                </a>

                <nav>
                  <ul>
                    <li><a href="#menu">Menu</a></li>
                  </ul>
                </nav>

            </div>
          </header>
          <div id={styles.main}>
            <div className={styles.inner}>
              <header>
                <h1>This is Phantom, a free, fully responsive site<br />
                template designed by <a href="http://html5up.net">HTML5 UP</a>.</h1>
                <p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.</p>
              </header>
              <section className={styles.tiles}>
              <article className={styles.style1}>
                  <span className={styles.image}>
                    <img src="images/pic01.jpg" alt="" height={300}/>
                  </span>
                  <a href="generic.html">
                    <h2>Pretium</h2>
                    <div className={styles.content}>
                      <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                    </div>
                  </a>
                </article>
                <article className={styles.style2}>
                  <span className={styles.image}>
                    <img src="images/pic02.jpg" alt="" height={300}/>
                  </span>
                  <a href="generic.html">
                    <h2>Pretium</h2>
                    <div className={styles.content}>
                      <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                    </div>
                  </a>
                </article>
                <article className={styles.style3}>
                  <span className={styles.image}>
                    <img src="images/pic03.jpg" alt="" height={300}/>
                  </span>
                  <a href="generic.html">
                    <h2>Pretium</h2>
                    <div className={styles.content}>
                      <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                    </div>
                  </a>
                </article>
                <article className={styles.style4}>
                  <span className={styles.image}>
                    <img src="images/pic12.jpg" alt="" height={300}/>
                  </span>
                  <a href="generic.html">
                    <h2>Pretium</h2>
                    <div className={styles.content}>
                      <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                    </div>
                  </a>
                </article>
              </section>
            </div>
          </div>



        </div>
      
    );
  }
}
const mapStateToProps = (state) => {
  return {
    store: state
  }
};

export const SearchPageContainer = addUrlProps({ urlPropsQueryConfig })(connect(
 mapStateToProps
)(SearchPage));
export default SearchPageContainer
