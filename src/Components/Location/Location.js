import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import allLocations from "../../fakeData/locations.js"
import LocationDetails from "../LocationDetails/LocationDetails";
import LocationPhoto from "../LocationPhoto/LocationPhoto";

const Location = () => {
  
  const [locations] = useState(allLocations);
	const [location, setLocation] = useState({});
	let locationId = useRef (0);
	const history = useHistory ();

	useEffect (() => {
		selectedLocationDetails(++locationId.current);
	}, []);

	const selectedLocation = (event, id) => {
		event.preventDefault();
		locationId.current = id;
		selectedLocationDetails(locationId.current);
	};

	const selectedLocationDetails = (id) => {
		const locationDetails = locations.find((location) => location.id === id);
		setLocation(locationDetails);
	};

	const handleBooking = (id) => {
		history.push(`/location/${id}`);
	};

 
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <LocationDetails location={location} handleBooking={handleBooking} />
          </Col>
          <Col>
            <Row>
              {locations.map((location) => (
                <LocationPhoto key={location.id} location={location} selectedLocation={selectedLocation}/>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Location;
