import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

const Map = (props) => {
	mapboxgl.accessToken =
		'pk.eyJ1IjoicmljaG5vdiIsImEiOiJja2picjJuejAzMGZvMndwZGJoczFtZnV2In0.sUbJ1vd90ZcTXaV1CAasPw';
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-70.9);
	const [lat, setLat] = useState(42.35);
	const [zoom, setZoom] = useState(2);
	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/richnov/clg8c3pyn00dy01pp8l0kym76',
			center: [lng, lat],
			zoom: zoom
		});
	});

	return (
		<div>
			<div
				ref={mapContainer}
				className='map-container w-[909px] h-[692px] rounded-[16px] overflow-hidden'
			/>
		</div>
	);
};

Map.propTypes = {};

export default Map;
