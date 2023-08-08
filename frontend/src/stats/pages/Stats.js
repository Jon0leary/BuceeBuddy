import React, { useEffect, useState } from 'react';

import { useAuthContext } from '../../shared/hooks/useAuthContext';
import MapOverview from '../../map/pages/MapOverview';
import Card from '../../shared/components/UIElements/Card';
import DisplayStats from '../components/displayStats';

import './Stats.css';

const Stats = () => {
    const [userData, setUserData] = useState(null);
    const [Trips, setTrips] = useState(null);
    const { user } = useAuthContext();
    
    useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/user/${user.userData.email}`)

      const json = await response.json();

      if (response.status===200) {
        setUserData(json.userData);
      }
    };
    const fetchTrips = async () => {
      const response = await fetch(`/api/trips/${user.userData.email}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const json = await response.json();

      if (response.ok) {
        setTrips(json.data);
      }
    };


    fetchUser();
    fetchTrips();
  }, []);



    return (
      <React.Fragment>
        <div className="stat-page">
          <div className="welcome-user">
            <span><h1 className='WelcomeHeader'>Hi {user.userData.firstName}, welcome to Buc-ee Buddy!</h1></span>
          </div>
          <div className = 'grid-container'>
            <div className = 'grid-child left'>
              <Card className="map-container">
                <MapOverview userData={userData} Trips={Trips} className="im-the-map"/>
              </Card>
            </div>
            <div className='grid-child right'>
              <Card>
                <div>
                  {userData && 
                    <>
                      <DisplayStats userData={userData}/>
                    </>
                  }
                </div>
              </Card>
            </div>
          </div>
          <div className="product-stats-content">
            <Card className="product-stats-content__card">
              <div className = "Products-container" >
              {userData && 
                <React.Fragment>
                  <div >
                    <h2 className="ProductsHeader">Product Totals</h2>
                  </div>
                  <div className="product-by-side">
                    <h4>Total Gas:   {userData.total_gas}</h4>
                    <h4>Total Brisket:   {userData.total_brisket}</h4>
                  </div >
                  <div className="product-by-side">
                    <h4>Total Dessert:   {userData.total_dessert}</h4>
                    <h4>Total Jerky:   {userData.total_jerky}</h4>
                  </div>
                  <div className="product-by-side">
                    <h4>Total Outdoor:   {userData.total_outdoor}</h4>
                    <h4>Total 3rd Party Items:   {userData.total_3rdparty}</h4>
                  </div>
                  <div className="product-by-side">
                    <h4>Total Hot Grab n' Go:   {userData.total_hotgrab}</h4>
                    <h4>Total Cold Grab n' Go:   {userData.total_coldgrab}</h4>
                  </div>
                </React.Fragment>
              }
              </div>
            </Card>
          </div> 
        </div>
      </React.Fragment>
    );
};

export default Stats;


/*                   </div>
<h4>Most Popular Location:   {userData.most_visited_location} ({userData.most_visited_location_trips} trips) (${userData.most_visited_location_spent}) </h4>
<h4>Highest-Spent Location:   {userData.most_spent_location} (${userData.most_spent_location_spent}) ({userData.most_spent_location_trips} trips) </h4>
<h4>Most Popular Item:   {userData.most_item_category} ({userData.most_item_category_count} trips) </h4> */