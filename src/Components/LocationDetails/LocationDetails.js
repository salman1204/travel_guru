import React from 'react';
import { Button } from "react-bootstrap";

const LocationDetails = ({location, handleBooking}) => {
    const { id, name, description } = location;

	return (
		<div>
			<h1>{name}</h1>
			<p style={{ textAlign: "justify" }}>{description}</p>
			{handleBooking && (
				<Button variant="warning" onClick={() => handleBooking(id)}>
					Booking
				</Button>
			)}
		</div>
	);
};

export default LocationDetails;