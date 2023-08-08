import React from 'react';

import './displayStats.css';

const DisplayStats = ({ userData }) => {

    return (
      <div className="stats-overview-container">
        {userData &&
        <>
				  <h2 className="LocationsHeader">Location Stats</h2>
          <div className="side-by-side">
            <h4>Alabama:   {userData.al_unique}/4 </h4>
            <h4>({userData.al_trips} total trips, ${parseFloat(userData.al_total).toFixed(2)})</h4>
          </div>
          <div className="side-by-side">
            <h4>Florida:   {userData.fl_unique}/2</h4>
            <h4>   ({userData.fl_trips} total trips, ${parseFloat(userData.fl_total).toFixed(2)})</h4>
          </div>
          <div className="side-by-side">
            <h4>Georgia:   {userData.ga_unique}/2 </h4>
            <h4>   ({userData.ga_trips} total trips, ${parseFloat(userData.ga_total).toFixed(2)})</h4>
          </div>
          <div className="side-by-side">
            <h4>Kentucky:   {userData.ky_unique}/1 </h4>
            <h4>   ({userData.ky_trips} total trips, ${parseFloat(userData.ky_total).toFixed(2)})</h4>
          </div>
          <div className="side-by-side">
            <h4>South Carolina:   {userData.sc_unique}/1 </h4>
            <h4>   ({userData.sc_trips} total trips, ${parseFloat(userData.sc_total).toFixed(2)})</h4>
          </div>
          <div className="side-by-side">
            <h4>Tennessee:  {userData.tn_unique}/2</h4>
            <h4>   ({userData.tn_trips} total trips, ${parseFloat(userData.tn_total).toFixed(2)})</h4>
          </div>
          <div className="side-by-side">
            <h4>Texas:  {userData.tx_unique}/34</h4>
            <h4>   ({userData.tx_trips} total trips, ${parseFloat(userData.tx_total).toFixed(2)}) </h4>	
          </div>
          <h3 className="BigStat">Grand Total:   ${parseFloat(userData.total_spent).toFixed(2)} in {userData.total_trips} trips</h3>
        </> 	
        }
      </div>
    );

};

export default DisplayStats;

//<h1>Florida:   {user.userData.fl_unique}/2 </h1>
//<h1>Georgia:   {user.userData.ga_unique}/2 </h1>
//<h1>Kentucky:   {user.userData.ky_unique}/1 </h1>
//<h1>South Carolina:   {user.userData.sc_unique}/1 </h1>
//<h1>Tennessee:   {user.userData.sc_unique}/2 </h1>
//<h1>Texas:   {user.userData.sc_unique}/34 </h1>