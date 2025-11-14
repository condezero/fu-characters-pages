import React from 'react';
import './InteractiveMap.css';

function InteractiveMap() {


  return (
    <div className="map-container">
      <h1 className="page-title">Ascalon</h1>
      <div className="map-grid">
        {/* {gridItems.map((item) => (
          <div
            key={item.id}
            className="map-marker"
            style={{
              gridRow: item.position[0],
              gridColumn: item.position[1],
              backgroundColor: item.color,
            }}
            title={item.title}
          >
            {item.title}
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default InteractiveMap;