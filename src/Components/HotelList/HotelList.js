import React, {useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import locations from "../../fakeData/locations";
import Hotel from "../Hotel/Hotel";


const HotelList = () => {
	const { destination } = useParams();
	const [hotels, setHotels] = useState([]);
	const history = useHistory();

	useEffect(() => {
		const locationDetails = locations.find((location) => location.name === destination);

		if (locationDetails) {
			setHotels(locationDetails.hotels);
		} else {
			alert("No Hotel found in this place");
			history.push("/");
		}
	}, [destination, history]);

	return (
		<Container>
			<Row>
				<Col>
					<h3>{destination} Hotel List</h3>
					{hotels.map((hotel) => (
						<Hotel key={hotel.id} hotel={hotel} />
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default HotelList;
