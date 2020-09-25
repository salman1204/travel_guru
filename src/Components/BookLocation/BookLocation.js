import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import locations from "../../fakeData/locations";
import BookingForm from "../BookingForm/BookingForm";
import LocationDetails from "../LocationDetails/LocationDetails";

const BookLocation = () => {
	const { locationId } = useParams();
	const [location, setLocation] = useState({});
	const history = useHistory();
	const [
		loggedInUser, 
		setLoggedInUser, 
		bookingDetails, 
		setBookingDetails,
	] = useContext(UserContext);

	const onSubmit = (data) => {
		setBookingDetails(data);
		history.push(`/place/search/${data.destination}`);
	};

	useEffect(() => {
		const locationDetails = locations.find((location) => location.id === +locationId);
		if (locationDetails) {
			setLocation(locationDetails);
		} else {
			alert("No Place Found");
		}
	}, [locationId]);

	return (
		<Container>
			<Row>
				<Col md={4}>
					<LocationDetails location={location} handleBooking={false} />
				</Col>
				<Col md={6} className="ml-auto">
					<BookingForm onSubmit={onSubmit} location={location} />
				</Col>
			</Row>
		</Container>
	);
};

export default BookLocation;
