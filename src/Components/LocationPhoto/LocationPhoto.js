import React from 'react';
import { Col, Image } from "react-bootstrap";

const LocationPhoto = ({location, selectedLocation}) => {
    const { id, image, name } = location;
	return (
		<Col>
			<a href="/" onClick={(e) => selectedLocation(e, id)}>
				<Image src={image} thumbnail style={{ border: "none" }} />
				<span style={{ textAlign: "center", display: "block" }}>{name}</span>
			</a>
		</Col>
	);
};

export default LocationPhoto;