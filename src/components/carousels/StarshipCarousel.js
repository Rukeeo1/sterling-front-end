import React from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import axios from 'axios'
import planetOne from '../../assests/planet-1.jpg'
import planetTwo from '../../assests/planet-2.jpg'
import planetThree from '../../assests/planet-3.jpg'
class MyCarousel extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0,
      slides: [
        (<div class="card img-fluid" style={{ marginRight: "2rem", marginLeft: "2rem", width: "100%", color:"white" }} >
          <img class="card-img-top" src={planetOne} style={{ width: "100%" }} />
          <div class="card-img-overlay d-flex justify-content-center  align-content-end">
            <h4 class="card-title align-self-end">Alderaan</h4>
          </div>
        </div>),
        (<div class="card img-fluid" style={{ marginRight: "2rem", marginLeft: "2rem", width: "100%" }} >
          <img class="card-img-top" src={planetOne} style={{ width: "100%" }} />
          <div class="card-img-overlay d-flex justify-content-center  align-content-end">
            <h4 class="card-title align-self-end">Yavin IV</h4>
          </div>
        </div>),
        (<div class="card img-fluid" style={{ marginRight: "2rem", marginLeft: "2rem", width: "100%" }} >
          <img class="card-img-top" src={planetOne} style={{ width: "100%" }} />
          <div class="card-img-overlay d-flex justify-content-center  align-content-end">
            <h4 class="card-title align-self-end">Hoth</h4>
          </div>
        </div>),
        (<div class="card img-fluid" style={{ marginRight: "2rem", marginLeft: "2rem", width: "100%" }} >
          <img class="card-img-top" src={planetOne} style={{ width: "100%" }} />
          <div class="card-img-overlay d-flex justify-content-center  align-content-end">
            <h4 class="card-title align-self-end">Dagobah</h4>
          </div>
        </div>),
      ],
    }
    this.onchange = this.onchange.bind(this);
  }

  componentDidMount(){
    axios.get("https://swapi.co/api/planets").then((response)=>{
        console.log(response.data,'these are the results');
    })
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
        <Dots value={this.state.value} onChange={this.onchange} number={3} />
      </div>
    );
  }
}

export default MyCarousel