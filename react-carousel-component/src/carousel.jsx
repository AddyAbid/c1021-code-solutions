import React from 'react';
// const timerId = null;
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
    // this.nextImage = this.nextImage.bind(this);
    // this.startTimer = this.startTimer.bind(this);

  }

  // startTimer(number) {
  //   console.log(event.id);
  //   let num = this.state.pokeIndex;
  //   timerId = setInterval(() => {
  //     console.log(timerId);
  //     this.setState({
  //       pokeIndex: num

  //     });
  //     num++;
  //     if (num === 5) {
  //       num = 0;

  //     }
  //   }, 2000);

  // }

  // dotClick(event) {
  //   const idNum = Number(event.target.id);

  //   clearInterval(timerId);

  //   this.setState({
  //     pokeIndex: idNum,
  //     intervalId: null
  //   });
  //   this.startTimer(idNum);
  //   console.log(this.state);
  // }

  clickRight() {
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
    window.addEventListener('load', this.startTimer);
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
            <img src={pokemon[this.state.pokeIndex].img} />
            <div className="text-align-center">
            </div>
          </div>
          <div className="col-fourth">
            <i className="fas fa-chevron-right fa-3x right-arrow mr" onClick={this.clickRight}></i>
          </div>
        </div>

            <div className='dots'>
              {
              pokemon.map((dots, index) => {

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

const pokemon = [
  { number: '001', name: 'Bulbasaur', img: 'images/001.png' },
  { number: '004', name: 'Charmander', img: 'images/004.png' },
  { number: '007', name: 'Squirtle', img: 'images/007.png' },
  { number: '025', name: 'Pikachu', img: 'images/025.png' },
  { number: '039', name: 'Jigglypuff', img: 'images/039.png' }
];
