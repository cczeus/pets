import React, { Component } from 'react';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';


import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
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


import PetTile from '../../components/PetTile';
import Tag from '../../components/Tag';

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
      value1: 1,
      value2: 2,
      dropDownItems1: ["Category", "Family Friendly", "Low maintenance", "Obedient"],
      dropDownItems2: ["Category", "Family Friendly", "Low maintenance", "Obedient"],
      inputValue: "",
      tags: [],
    };
    this.handleDrawerChange = this.handleDrawerChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleRequestDelete = this.handleRequestDelete.bind(this);

  }


  handleRequestDelete(key) {
    var tags = this.state.tags;
    const tagToDelete = tags.map((tag) => tag).indexOf(key);
    tags.splice(tagToDelete, 1);
    this.setState({tags});
  }

  setTag(tag) {
    var tags = this.state.tags;

    if(tag.length > 2) {
       tags.push(tag);
    }
    this.setState({ tags })

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
 handleChange1(event, index, value1) {
  if(value1 !== 0)
    this.setTag(this.state.dropDownItems1[value1])

    this.setState({value1})
  }


  handleChange2(event, index, value2) {
     this.setTag(value2)
    
  }

  handleTextChange(event) {
    this.setState({inputValue: event.target.value});
  }

   handleSubmit(event) {
    var tags = this.state.tags;
    this.setTag(this.state.inputValue)
   
    this.setState({inputValue: ""})
    event.preventDefault();
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


  
  render() {
    const dropDownOptions = {
      options: {
        horizontal: "right"
      }
    }
    const dropDownItems1 = this.state.dropDownItems1;
    const instance = this;
 
    return (  
       <MuiThemeProvider muiTheme={muiTheme}> 
        <div id={styles.wrapper}>
         
          <header id={styles.header}>
            <div className={styles.inner}>

                <a href="index.html" className={styles.logo}>
                  <span className={styles.symbol}><img src="img/logo.svg" alt="" /></span><span className={styles.title}>Pets</span>
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
                <h1>Beer me a pet<br /></h1>
                <FlexWrapper column flex="1" style={{position: 'relative', right: 10}}>
                  <FlexWrapper row flex="1">
                    {this.state.tags.map(function(tag){
                      return <Tag key={tag} name={tag} handleRequestDelete={instance.handleRequestDelete}/>;
                    })}
                  </FlexWrapper>
                </FlexWrapper>
              </header>
              
              <section style={{ marginTop: 25}}>
              <form onSubmit={this.handleSubmit}>
                <label>
                    Keywords
                    <input type="text" value={this.state.inputValue} onChange={this.handleTextChange}/>
                </label>
                 <div>
                  <DropDownMenu
                    value={this.state.value1}
                    onChange={this.handleChange1}
                    style={{right: 23}}
                  >
                    <MenuItem value={0} primaryText={dropDownItems1[0]} />
                    <MenuItem value={1} primaryText={dropDownItems1[1]} />
                    <MenuItem value={2} primaryText={dropDownItems1[2]} />
                    <MenuItem value={3} primaryText={dropDownItems1[3]} />
                </DropDownMenu>
                
                 <DropDownMenu
                    value={this.state.value2}
                    onChange={this.handleChange2}
                  >
                    <MenuItem value={0} primaryText={dropDownItems1[0]} />
                    <MenuItem value={1} primaryText={dropDownItems1[1]} />
                    <MenuItem value={2} primaryText={dropDownItems1[2]} />
                    <MenuItem value={3} primaryText={dropDownItems1[3]} />
                </DropDownMenu>

              </div>

                <input type="submit" value="Add" />

                <input type="submit" value="Submit" style={{marginLeft: 15}}/>
               
             </form>
              
            </section>
              <section className={styles.tiles}>
                <PetTile name="Dogs" type={1} />
                <PetTile name="Cats" type={2} />
                <PetTile name="Rabbits" type={3} />
                <PetTile name="..." type={4} />
                <PetTile name="..." type={5} />
              </section>
            </div>
          </div>

        </div>
      </MuiThemeProvider>
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
