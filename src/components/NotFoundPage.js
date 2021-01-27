import React from 'react';
import { Link } from 'react-router-dom';
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <h3 className="not-desc">Page Not Found</h3>
            <img className="error-image" src="https://i.imgur.com/Boa66b7.jpg" alt="404image"/>
            <p style={{textAlign:"center"}}>
              <Link to="/">Go home you're wasted</Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;