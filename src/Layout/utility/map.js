import React from 'react';
import map from '../../assets/map.png';
//import { Map, GoogleApiWrapper, HeatMap,InfoWindow } from "google-maps-react";

class MapContainer extends React.Component {
	constructor(props) {
		  super(props);
	  }
  
	  render() {
	  const gradient = [
		"rgba(0, 255, 255, 0)",
		"rgba(0, 255, 255, 1)",
		"rgba(0, 191, 255, 1)",
		"rgba(0, 127, 255, 1)",
		"rgba(0, 63, 255, 1)",
		"rgba(0, 0, 255, 1)",
		"rgba(0, 0, 223, 1)",
		"rgba(0, 0, 191, 1)",
		"rgba(0, 0, 159, 1)",
		"rgba(0, 0, 127, 1)",
		"rgba(63, 0, 91, 1)",
		"rgba(127, 0, 63, 1)",
		"rgba(191, 0, 31, 1)",
		"rgba(255, 0, 0, 1)"
	  ];
	  return (
		<div 
		//style={{height:'calc(100vh - 370px)'}} 
		>
		  {/* <Map
			google={this.props.google}
			className={`map position-relative`}
			zoom={4}
			initialCenter={this.props.center}
			onReady={this.handleMapReady}
			style={{
			  position: 'relative',
			  width:'100%',
			  height:'100%'}}
		  >
			<InfoWindow
			  gradient={gradient}
			  positions={this.props.data}
			  opacity={1}
			  radius={20}
			/>
		  </Map> */}
		  <img src={map} className="w-100" />
		</div>
	  );
	}
  }
  
  export default MapContainer;