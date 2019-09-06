import React from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import planetOne from '../../assests/planet-1.jpg'
import planetTwo from '../../assests/planet-2.jpg'
import planetThree from '../../assests/planet-3.jpg'
class MyCarousel extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0,
      // slides: [
      //   (<div style={{ width: "400px", height: "300px" }}><img style={{ maxWidth: "100%", maxHeight: "100%" }} src={planetOne} /></div>),
      //   (<div style={{ width: "300px", height: "300px" }}><img style={{ maxWidth: "100%", maxHeight: "100%" }} src={planetTwo} /></div>),
      //   (<div style={{ width: "300px", height: "300px" }}><img style={{ maxWidth: "100%", maxHeight: "100%" }} src={planetThree} /></div>),
      // ],
      slides: [
        (<img style={{ paddingLeft:"2rem",  paddingRight: "2rem", width:"100%"}} src={planetOne} />),
        (<img style={{  paddingLeft:"2rem",  paddingRight: "2rem" ,width:"100%"}} src={planetTwo} />),
        (<img style={{ paddingLeft:"2rem",  paddingRight: "2rem", width:"100%"}} src={planetThree} />),
      ],
    }
    this.onchange = this.onchange.bind(this);
  }


  onchange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <Carousel
        infinite
          value={this.state.value}
          slides={this.state.slides}
          centered
          slidesPerPage={3}
        />
        <Dots value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
      </div>
    );
  }
}

export default MyCarousel