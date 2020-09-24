import React, { useState } from 'react';
import locations from "../../fakeData/locations"

const Location = () => {
    const [location, setLocation] = useState(locations);
    console.log(location);
    return (
        <div>
            
        </div>
    );
};

export default Location;