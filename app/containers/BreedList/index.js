import React, { Component } from 'react';
import { Link, IndexRoute, browserHistory, BrowserRouter, Route, Switch, hashHistory, Router, HashRouter } from 'react-router';
import { createHistory } from 'history';
import BreedBar from '../../components/BreedBar';


import styles from '../../containers/SearchPage/styles.css'

class BreedList extends Component {
	render() {
		var dogsList = [
			{breed: "Golden Retriever", maintenance: "4", obedience: "5", loudness: "3", energy: "5"},
			{breed: "Labrador Retriever", maintenance: "3", obedience: "5", loudness: "4", energy: "5"},
			{breed: "Pug", maintenance: "3", obedience: "3", loudness: "3", energy: "3"},
			{breed: "Chihuahua", maintenance: "3", obedience: "3", loudness: "3", energy: "5"},
			{breed: "Rottweiler", maintenance: "4", obedience: "4", loudness: "4", energy: "4"},
			{breed: "Border Collie", maintenance: "4", obedience: "5", loudness: "2", energy: "5"}
		];

		var catsList = [
			{breed: "Scottish Fold", maintenance: "", obedience: "", loudness: "", energy: ""},
			{breed: "Maine Coon", maintenance: "", obedience: "", loudness: "", energy: ""},
			{breed: "Russian Blue", maintenance: "", obedience: "", loudness: "", energy: ""},
			{breed: "Calico", maintenance: "", obedience: "", loudness: "", energy: ""},
			{breed: "Tiger", maintenance: "", obedience: "", loudness: "", energy: ""},
			{breed: "Munchkin", maintenance: "", obedience: "", loudness: "", energy: ""}
		];

		var rabbitsList = [
			{breed: "", maintenance: "", obedience: "", loudness: "", energy: ""},
			{breed: "", maintenance: "", obedience: "", loudness: "", energy: ""},
			{breed: "", maintenance: "", obedience: "", loudness: "", energy: ""},
			{breed: "", maintenance: "", obedience: "", loudness: "", energy: ""},
			{breed: "", maintenance: "", obedience: "", loudness: "", energy: ""},
			{breed: "", maintenance: "", obedience: "", loudness: "", energy: ""}
		];

		var list;
		switch("Dog") {
    		case "Dog":
        		list = dogsList;
        		break;
    		case "Cat":
        		list = catsList;
        		break;
        	case "Rabbit":
        		list = rabbitsList;
        		break;
    		default:		
		}
		var str = list.map(function(element){
			return (<BreedBar breed={element.breed} maintenance={element.maintenance} obedience={element.obedience} loudness={element.loudness} energy={element.energy}/>)
		});

    	return (    
        	<div id={styles.wrapper}>
        		<header id={styles.header}>
        			<h1>Beer Me Some Dogs</h1>
        		</header>
        		<section id={styles.list}>
        			{str}
        		</section>
        	</div>
   		 );
	}
}

export default BreedList