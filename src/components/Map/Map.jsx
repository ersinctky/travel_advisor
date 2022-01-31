import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';


const Map = ({coords, places, setCoords, setBounds}) => {


  const isMobile = useMediaQuery('(min-width:600px)');
  const classes = useStyles();


  return (
    <div className={classes.mapContainer}>
    <GoogleMapReact
      bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
      defaultCenter={coords}
      center={coords}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      options={""}
      onChange={(e) => {
        setCoords({ lat: e.center.lat, lng: e.center.lng });
        setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
      }}    
        onChildClick={""}
    >
     
    </GoogleMapReact>
  </div>
  );
};

export default Map;
