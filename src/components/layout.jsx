import React from 'react';
import "../css/layout.css";

const Layout = () => {
  return (
    <div className="container py-5" >
      <div className="row g-3">
        <div className="col-md-4 d-flex flex-column align-items-center">
          <div className="bg-dark text-light text-center img1">
          </div>
          <div className="text-center">
            <button className="btn btn-success" style={{ marginTop: '30px' }}>Our latest comics &gt;</button>
          </div>
        </div>

        <div className="col-md-8 d-flex flex-column gap-1 no-padding-left">
          <div className="bg-primary text-light text-center over3000">
            
          </div>
          <div className="row g-3 align-items-center margin-top-negative">
            <div className="col-md-6">
              <div className="bg-dark text-light text-center img3">
              <div id='container-text-mid'>
              <h3>OVER</h3>
              <h1>3000+</h1>
              <p>Books, Comics <br></br>and Manga</p>
              <small>Just for you <br></br>Bla bla bla</small>
            </div>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-between img4-container">
              <button className="btn btn-success btn2 align-self-start" style={{ marginBottom: '30px' }}>View more images &gt;</button>
              <div className="bg-dark text-light text-center img4" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
