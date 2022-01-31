import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';


const Map = () => {


  const isMobile = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  const coordinates={lang:0,lat:0}

  return (
    <div className={classes.mapContainer}>
    <GoogleMapReact
      bootstrapURLKeys={{ key:''}}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      options={""}
      onChange={""}
      onChildClick={""}
    >
     
    </GoogleMapReact>
  </div>
  );
};

export default Map;
