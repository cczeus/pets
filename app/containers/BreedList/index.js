import React, { Component } from 'react';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import { Link, IndexRoute, browserHistory, BrowserRouter, Route, Switch, hashHistory, Router, HashRouter } from 'react-router';
import { createHistory } from 'history';
import { connect } from 'react-redux';
import BreedBar from '../../components/BreedBar';


import styles from '../../containers/SearchPage/styles.css'


const urlPropsQueryConfig = {
  query: { type: UrlQueryParamTypes.string },
}
class BreedList extends Component {
	render() {
		console.log(this.props)
		var dogsList = [
			{breed: "Golden Retriever", maintenance: "4", obedience: "5", loudness: "3", energy: "5", img: "../img/golden.jpg"},
			{breed: "Labrador Retriever", maintenance: "3", obedience: "5", loudness: "4", energy: "5", img: "../img/lab.jpg"},
			{breed: "Pug", maintenance: "3", obedience: "5", loudness: "3", energy: "3", img: "../img/pug.jpg"},
			{breed: "Chihuahua", maintenance: "3", obedience: "3", loudness: "3", energy: "5", img: "../img/chihuahua.jpg"},
			{breed: "Rottweiler", maintenance: "4", obedience: "4", loudness: "4", energy: "4", img: "../img/rottweiler.jpg"},
			{breed: "Border Collie", maintenance: "4", obedience: "5", loudness: "2", energy: "5", img: "../img/border.jpg"}
		];

		var catsList = [
			{breed: "Scottish Fold", maintenance: "3", obedience: "4", loudness: "2", energy: "3", img: "../img/scottish.jpg"},
			{breed: "Maine Coon", maintenance: "4", obedience: "4", loudness: "4", energy: "4", img: "../img/maine.jpg"},
			{breed: "Russian Blue", maintenance: "5", obedience: "2", loudness: "4", energy: "2", img: "../img/russian.jpg"},
			{breed: "Calico", maintenance: "4", obedience: "3", loudness: "4", energy: "2", img: "../img/calico.jpg"},
			{breed: "Tiger", maintenance: "4", obedience: "4", loudness: "2", energy: "3", img: "../img/tiger.jpg"},
			{breed: "Munchkin", maintenance: "2", obedience: "3", loudness: "4", energy: "2", img: "../img/munchkin.jpg"}
		];

		var rabbitsList = [
			{breed: "Holland Lop", maintenance: "2", obedience: "3", loudness: "1", energy: "4"},
			{breed: "Dward Hotot", maintenance: "2", obedience: "4", loudness: "1", energy: "4"},
			{breed: "Angora", maintenance: "4", obedience: "5", loudness: "1", energy: "2"},
			{breed: "Belgian", maintenance: "3", obedience: "3", loudness: "2", energy: "3"},
		];

		var multiList = [
			{breed: "Golden Retriever", maintenance: "4", obedience: "5", loudness: "3", energy: "5", img: "../img/golden.jpg"},
			{breed: "Labrador Retriever", maintenance: "3", obedience: "5", loudness: "4", energy: "5", img: "../img/lab.jpg"},
			{breed: "Pug", maintenance: "3", obedience: "4", loudness: "3", energy: "3", img: "../img/pug.jpg"},
			{breed: "Chihuahua", maintenance: "3", obedience: "5", loudness: "3", energy: "5", img: "../img/chihuahua.jpg"},
		];
		var list = multiList;
		
		var query = this.props.params.query.toLowerCase();
		
		switch(query) {
    		case "dogs":
        		list = dogsList;
        		break;
    		case "cats":``
        		list = catsList;
        		break;
        	case "rabbits":
        		list = rabbitsList;
        		break;
    		default:	
		}
		query = query === "query" ? "dogs" : query;
		var str = list.map(function(element){
			return <BreedBar animal={query} img={element.img} style={{ background: 'red', width: 500 }} breed={element.breed} maintenance={element.maintenance} obedience={element.obedience} loudness={element.loudness} energy={element.energy}/>
		});

    	return (    
        	<div id={styles.wrapper}>
        		<header id={styles.header} style={{ marginLeft: 25 }}>
        			<h1>{query}</h1>
        		</header>
        		<section id={styles.list}>
        			{str}
        		</section>
        	</div>
   		 );
	}
}

const mapStateToProps = (state) => {
  return {
    store: state
  }
};
export const BreedListContainer = addUrlProps({ urlPropsQueryConfig })(connect(
 mapStateToProps
)(BreedList));
export default BreedListContainer