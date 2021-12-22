import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeIndex: 0,
      activeInterval: true,
      intervalId: null
    };
    this.clickRight = this.clickRight.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
    this.dotClick = this.dotClick.bind(this);

  }

  dotClick(event) {
    this.setState({ intervalId: null });
    const idNum = Number(event.target.id);
    this.setState({
      pokeIndex: idNum,
      intervalId: null
    });

  }

  clickRight() {
    this.setState({ intervalId: null });
    this.setState({
      pokeIndex: this.state.pokeIndex + 1
    });
    if (this.state.pokeIndex > 3) {
      this.setState({
        pokeIndex: 0
      });
    }
  }

  clickLeft() {
    this.setState({ intervalId: null });
    this.setState({
      pokeIndex: this.state.pokeIndex - 1
    });
    if (this.state.pokeIndex < 1) {
      this.setState({
        pokeIndex: 4

      });
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      let num = this.state.pokeIndex + 1;
      if (num === 5) {
        num = 0;
      }
      this.setState({
        pokeIndex: num,
        intervalId: this.state.intervalId
      });
    }, 3000);
  }

  render() {
    return (
      <div className="container">
      <div>
        <div className="row align-center" id={this.state.pokeIndex}>
          <div className="col-fourth">
            <i className="fas fa-chevron-left fa-3x ml" onClick={this.clickLeft}></i>
          </div>
          <div className="col-half" >
            <img src={this.props.images[this.state.pokeIndex].img} />
            <div className="text-align-center">
            </div>
          </div>
          <div className="col-fourth">
            <i className="fas fa-chevron-right fa-3x right-arrow mr" onClick={this.clickRight}></i>
          </div>
        </div>

            <div className='dots'>
              {
              this.props.images.map((dots, index) => {

                return (
                  <i onClick={this.dotClick} onChange={this.startTimer} key={dots.number} id={index} className={this.state.pokeIndex === index
                    ? 'fas fa-circle pd-5'
                    : 'far fa-circle pd-5' }></i>
                );
              })
              }
            </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
