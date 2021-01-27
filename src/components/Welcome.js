import React from 'react';

const Welcome = () => {
  return (
      <div className="text-center">
        <h1>Kokoro</h1>
        <p>Your Personal Meditation App</p>
        <div className="card-body">
                <div className="text-center">
                    <img  className="profile-img"src="https://i.imgur.com/LPN96ZLl.jpg" alt=""/>
                </div>
            </div>
        {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img class="wpage" src="/pictures/meditations.png" className="d-block w-90" alt="cannot show"/>
            </div> */}
            {/* <div className="carousel-item">
              <img class="wpage" src="/pictures/hill.png" className="d-block w-90" alt="cannot show"/>
            </div> */}
            {/* <div className="carousel-item">
              <img class="wpage" src="/pictures/sun" className="d-block w-90" alt="cannot show"/>
            </div> */}
          {/* </div>
        </div> */}
      </div>
  )
}

export default Welcome;