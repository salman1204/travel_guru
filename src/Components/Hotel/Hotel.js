import React from "react";
import { Col, Image, Row } from "react-bootstrap";
const Hotel = ({ hotel }) => {
	const { name, description, image } = hotel;
	return (
		<div>
			<Row>
				<Col md={6}>
					<Image src={image} thumbnail className="w-100" />
					<h4 style={{ textAlign: "center" }}>{name}</h4>
				</Col>
				<Col md={6}>
					<p>
						<small>{description}</small>
					</p>
				</Col>
			</Row>
		</div>
	);
};

export default Hotel;
