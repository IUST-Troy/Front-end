import axios from "axios";
import React from "react";
import { Trips, TourLeaders, Organizations } from "../TripPage/Trips";
function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}
const ListofTrips = () => {
    const initialOrigins = [{ country: "", cities: [""] }];
    const [origins, setOrigins] = React.useState(initialOrigins);
    const initialDestinations = [{ country: "", cities: [""] }];
    const [destinations, setDestinations] = React.useState(initialDestinations);
    React.useEffect(() => {
        const originCountries = Trips.map((t) => t.Origin.country).filter(
            onlyUnique
        );
        initialOrigins.pop();
        originCountries.forEach((c) => {
            const cities = [""];
            cities.pop();
            const cCountries = Trips.filter((t) => t.Origin.country === c);
            cCountries.forEach((cc) => {
                if (!cities.includes(cc.Origin.city)) {
                    cities.push(cc.Origin.city);
                }
            });
            initialOrigins.push({ country: c, cities: cities });
        });
        setOrigins(initialOrigins);
        initialDestinations.pop();
        const destinationsRaw = Trips.map((t) => t.Destinations).flat();
        
        const DestinationCountries = destinationsRaw
            .map((d) => d.country)
            .filter(onlyUnique);
        DestinationCountries.forEach((dc) => {
            const cities = [""];
            cities.pop();
            const dcCountries = destinationsRaw.filter((t) => t.country === dc);
            dcCountries.forEach((dcc) => {
                if (!cities.includes(dcc.city)) {
                    cities.push(dcc.city);
                }
            });
            initialDestinations.push({country:dc , cities:cities})
        });
        setDestinations(initialDestinations)
        console.log(origins);
        console.log(destinations);
    }, []);
    return <></>;
};

export default ListofTrips;
