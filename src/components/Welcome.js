import React from 'react';

const Welcome = () => {
  return (
      <div>
          <h1>Welcome to Kokoro your personal meditation tracker</h1>
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
  <div className="carousel-item active">
    <img class="wpage" src="/pictures/meditations.png" className="d-block w-100" alt="cannot show"/>
  </div>
  <div className="carousel-item">
    <img class="wpage" src="/pictures/hill.png" className="d-block w-100" alt="cannot show"/>
  </div>
  <div className="carousel-item">
    <img class="wpage" src="/pictures/sun" className="d-block w-100" alt="cannot show"/>
  </div>
</div>
</div>
      </div>
  )
}

export default Welcome;