import React, { Component } from 'react';
import './index.css';
import Grid from "../Grid/index";


export default class PathfinderVisualizer extends Component{
    constructor(props) {
        super(props);
        this.state ={};
    }

   render() {
       return (
           <>
           <Grid></Grid>
           </>
       );
   }
}


