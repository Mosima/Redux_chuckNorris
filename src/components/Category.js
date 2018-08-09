import React from 'react';
import { Card, CardTitle, Button, Col} from 'reactstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import * as actions from '../actions';
import { connect } from 'react-redux';


 class Category extends React.Component {
    next() {
        this.slider.slickNext()
    }
    previous() {
        this.slider.slickPrev()
    }

    selectedCategory(e){
        this.props.fetchCategory(e);
    }

    render() {
        const { categories } = this.props;
        var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1,
                  infinite: true,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                }
              }
              ,
              {
                breakpoint: 348,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                }
              }
            ]
          };
        

        return (
        <div className="category">
            <Slider ref={c => this.slider = c } {...settings}>
                    {
                         categories.map((cat, index)=>{
                            return(
                                <div key= {index}>
                                    <div  key= {index}> 
                                         <Col sm="12">
                                            <Card className="cat" body key= {index}>
                                                <CardTitle>{cat.charAt(0).toUpperCase() + cat.slice(1)}</CardTitle>
                                                <Button outline  value={cat} onClick={(e)=>{this.selectedCategory(cat, e)}} color="info">View Joke</Button>
                                            </Card>
                                        </Col>
                                     </div>
                                </div>
                            )
                        })
                         
                    }
            </Slider>
            <div className="slider">
                <Button outline color="warning" style={{width: 130}} basic="true" onClick={this.previous.bind(this)}>Previous</Button>
                <Button outline color="success" style={{width: 130, marginLeft : '10px'}} basic="true" onClick={this.next.bind(this)}>Next</Button>
            </div>
        </div>
        );
    }
}

function mapStateToProps({ categories }){
   
    return{
        categories,  
    }
}
export default connect(mapStateToProps, actions)(Category);