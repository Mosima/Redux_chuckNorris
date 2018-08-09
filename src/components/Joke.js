import React from 'react';
import { Card, CardTitle, CardImgOverlay, CardImg } from 'reactstrap';

 class Joke extends React.Component {
  render() {
    const { joke } = this.props;
    return (
      <div style={{paddingTop: '20px'}}>
        <div >
          {
          
            <Card  inverse className="cat2" >
            <CardImg className="pic" width="100%" src="https://images.unsplash.com/photo-1533576371524-37aa0dffe3f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f74ee007e4fde1ebf41d798193538b5&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle  className="text">{joke.value}</CardTitle>
              </CardImgOverlay>  
            </Card>
        
          }
        </div>
      </div>
    );
  }
}

export default (Joke);