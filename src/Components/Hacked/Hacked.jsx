import React from 'react';
import './HackedPage.css';

function Hacked() {
  return (
    <div className="hacked-container">
      <h1 className="hacked-title">⚠ Server Hacked ⚠</h1>
      <p className="hacked-message">
        This server has been compromised. Please contact the system administrator immediately.
      </p>
      {/* <div className="glitch" data-text="HACKED">HACKED</div> */}
    </div>
  );
}

export default Hacked;
