import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import locations from "../../fakeData/locations";
import Hotel from "../Hotel/Hotel";


const BookingSearchResult = () => {
	const { destination } = useParams();
	const [hotels, setHotels] = useState([]);
	const history = useHistory();

	const [
		loggedInUSer, // eslint-disable-line
		setLoggedInUser, // eslint-disable-line
		bookingDetails,
		setBookingDetails, // eslint-disable-line
	] = useContext(UserContext);
	const { from, to } = bookingDetails;

	useEffect(() => {
		const locationDetails = locations.find((location) => location.name === destination);

		// Shows the details of the hotel if found. Otherwise, redirects to homepage
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
				<Col md={6}>
					<p>
						{from} - {to}
					</p>
					<h3>Stay in : {destination}</h3>
					{hotels.map((hotel) => (
						<Hotel key={hotel.id} hotel={hotel} />
					))}
				</Col>
				{/* <Col md={6} className="ml-auto">
					<Map destination={destination} />
				</Col> */}
			</Row>
		</Container>
	);
};

export default BookingSearchResult;
