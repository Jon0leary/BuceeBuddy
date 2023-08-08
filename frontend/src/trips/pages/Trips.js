import React, { useEffect, useState } from 'react';
import TripItem from '../components/TripItem';

import { useAuthContext } from '../../shared/hooks/useAuthContext';
import Card from '../../shared/components/UIElements/Card';
import TripStats from '../components/TripStats';

import './Trips.css';

const Trips = () => {
  const [userData, setUserData] = useState(null);
  const [Trips, setTrips] = useState(null);
  const { user } = useAuthContext();
  
  useEffect(() => {
  const fetchTrips = async () => {
    const response = await fetch(`/api/trips/${user.userData.email}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const json = await response.json();

    if (response.status===200) {
      setTrips(json.data);
    }
  };
  fetchTrips();
}, []);

  
     return (
      <React.Fragment>
        <div>
          <div className="trips-list-container">
            <ul className="trips-list">
              <div className="list-item">
                {Trips && Trips.map(trip => (
                  <TripItem
                    class = "trip"
                    key={trip._id}
                    id={trip._id}
                    date={trip.date}
                    latitude={trip.latitude}
                    longitude={trip.longitude}
                    location={trip.location}
                    total={trip.total}
                    didGas={trip.didGas}
                    didBrisket={trip.didBrisket}
                    didDessert={trip.didDessert}
                    didHomeGood={trip.didHomeGood}
                    didOutdoor={trip.didOutdoor}
                    didJerky={trip.didJerky}
                    didColdGrab={trip.didColdGrab}
                    didHotGrab={trip.didHotGrab}
                    did3rdParty={trip.did3rdParty}
                  />
                ))}
              </div>
            </ul>
            <TripStats />
          </div>
        </div>
      </React.Fragment>
    )
}

export default Trips;

/*
<h4>Most Popular Location:   {userData.most_visited_location} ({userData.most_visited_location_trips} trips) (${userData.most_visited_location_spent}) </h4>
<h4>Highest-Spent Location:   {userData.most_spent_location} (${userData.most_spent_location_spent}) ({userData.most_spent_location_trips} trips) </h4>
<h4>Most Popular Item:   {userData.most_item_category} ({userData.most_item_category_count} trips) </h4> */

