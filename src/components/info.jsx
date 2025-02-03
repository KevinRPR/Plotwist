import React from 'react';
import "../css/info.css";

const Info = () => {
  return (
    <div id="info" className="info-container text-center my-5">
      <h2 className="info-title mb-5">What you can do with Plot Twist?</h2>
      <div className="info-row">
        {/* Primera fila */}
        <div className="info-item">
          <h4 className="info-item-title">Lorem ipsum<br />dolor sit amet</h4>
          <p className="info-item-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ultrices lectus. Integer vel justo at arcu scelerisque tincidunt.
          </p>
        </div>
        <div className="info-item">
          <h4 className="info-item-title">Lorem ipsum<br />dolor sit amet</h4>
          <p className="info-item-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada nulla vel nulla vestibulum, ut congue lacus posuere.
          </p>
        </div>
        {/* Segunda fila */}
        <div className="info-item">
          <h4 className="info-item-title">Lorem ipsum</h4>
          <p className="info-item-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Cras scelerisque orci sit amet turpis gravida porttitor.
          </p>
        </div>
        <div className="info-item">
          <h4 className="info-item-title">Lorem ipsum</h4>
          <p className="info-item-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor purus id elit pellentesque, ac fermentum neque hendrerit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
