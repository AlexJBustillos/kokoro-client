import React from 'react';

const Welcome = () => {
    return (
        <div>
          <div className="welcome-text">
            <h1 className="title1">Kokoro</h1>
            <h4 className="front-desc">your personal meditation tracker</h4>
          </div>
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./public/pictures/hill.jpg" className="d-block w-100" alt="cannot show"/>
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="cannot show"/>
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="cannot show"/>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Welcome;